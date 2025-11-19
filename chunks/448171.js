_.d(e, { W: () => p });
var a = _(967752),
    r = _(622916),
    n = _(394798),
    o = _(573736),
    E = _(928541),
    i = _(617726),
    c = _(370336),
    s = _(116698),
    l = _(538022),
    I = _(510529),
    R = _(263449),
    N = _(255768),
    A = _(380132),
    u = _(151122),
    T = _(112797),
    d = _(305625),
    f = _(820754),
    O = _(822578);
let L = "Not capturing exception because it's already been captured.";
class p {
    constructor(t) {
        if (
            ((this._options = t),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            t.dsn ? (this._dsn = (0, a.vK)(t.dsn)) : N.X && r.kg.warn("No DSN provided, client will not send events."),
            this._dsn)
        ) {
            let e = (0, I.U)(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
            this._transport = t.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: e,
            });
        }
    }
    captureException(t, e, _) {
        let a = (0, n.DM)();
        if ((0, n.YO)(t)) return N.X && r.kg.log(L), a;
        let o = {
            event_id: a,
            ...e,
        };
        return this._process(this.eventFromException(t, o).then((t) => this._captureEvent(t, o, _))), o.event_id;
    }
    captureMessage(t, e, _, a) {
        let r = {
                event_id: (0, n.DM)(),
                ..._,
            },
            E = (0, o.Le)(t) ? t : String(t),
            i = (0, o.pt)(t) ? this.eventFromMessage(E, e, r) : this.eventFromException(t, r);
        return this._process(i.then((t) => this._captureEvent(t, r, a))), r.event_id;
    }
    captureEvent(t, e, _) {
        let a = (0, n.DM)();
        if (e && e.originalException && (0, n.YO)(e.originalException)) return N.X && r.kg.log(L), a;
        let o = {
                event_id: a,
                ...e,
            },
            E = (t.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(t, o, E || _)), o.event_id;
    }
    captureSession(t) {
        "string" != typeof t.release
            ? N.X && r.kg.warn("Discarded session because of missing or non-string release")
            : (this.sendSession(t), (0, T.CT)(t, { init: !1 }));
    }
    getDsn() {
        return this._dsn;
    }
    getOptions() {
        return this._options;
    }
    getSdkMetadata() {
        return this._options._metadata;
    }
    getTransport() {
        return this._transport;
    }
    flush(t) {
        let e = this._transport;
        return e
            ? (this.emit("flush"), this._isClientDoneProcessing(t).then((_) => e.flush(t).then((t) => _ && t)))
            : (0, E.WD)(!0);
    }
    close(t) {
        return this.flush(t).then((t) => ((this.getOptions().enabled = !1), this.emit("close"), t));
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(t) {
        this._eventProcessors.push(t);
    }
    init() {
        this._isEnabled() && this._setupIntegrations();
    }
    getIntegrationByName(t) {
        return this._integrations[t];
    }
    addIntegration(t) {
        let e = this._integrations[t.name];
        (0, u.m7)(this, t, this._integrations), e || (0, u.uf)(this, [t]);
    }
    sendEvent(t, e = {}) {
        this.emit("beforeSendEvent", t, e);
        let _ = (0, A.Mq)(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (let t of e.attachments || []) _ = (0, i.BO)(_, (0, i.zQ)(t));
        let a = this.sendEnvelope(_);
        a && a.then((e) => this.emit("afterSendEvent", t, e), null);
    }
    sendSession(t) {
        let e = (0, A.Q3)(t, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(e);
    }
    recordDroppedEvent(t, e, _) {
        if (this._options.sendClientReports) {
            let a = "number" == typeof _ ? _ : 1,
                n = `${t}:${e}`;
            N.X && r.kg.log(`Recording outcome: "${n}"${a > 1 ? ` (${a} times)` : ""}`),
                (this._outcomes[n] = (this._outcomes[n] || 0) + a);
        }
    }
    on(t, e) {
        let _ = (this._hooks[t] = this._hooks[t] || []);
        return (
            _.push(e),
            () => {
                let t = _.indexOf(e);
                t > -1 && _.splice(t, 1);
            }
        );
    }
    emit(t, ...e) {
        let _ = this._hooks[t];
        _ && _.forEach((t) => t(...e));
    }
    sendEnvelope(t) {
        return (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport)
            ? this._transport.send(t).then(null, (t) => (N.X && r.kg.error("Error while sending event:", t), t))
            : (N.X && r.kg.error("Transport disabled"), (0, E.WD)({}));
    }
    _setupIntegrations() {
        let { integrations: t } = this._options;
        (this._integrations = (0, u.q4)(this, t)), (0, u.uf)(this, t);
    }
    _updateSessionFromEvent(t, e) {
        let _ = !1,
            a = !1,
            r = e.exception && e.exception.values;
        if (r)
            for (let t of ((a = !0), r)) {
                let e = t.mechanism;
                if (e && !1 === e.handled) {
                    _ = !0;
                    break;
                }
            }
        let n = "ok" === t.status;
        ((n && 0 === t.errors) || (n && _)) &&
            ((0, T.CT)(t, {
                ...(_ && { status: "crashed" }),
                errors: t.errors || Number(a || _),
            }),
            this.captureSession(t));
    }
    _isClientDoneProcessing(t) {
        return new E.cW((e) => {
            let _ = 0,
                a = setInterval(() => {
                    0 == this._numProcessing
                        ? (clearInterval(a), e(!0))
                        : ((_ += 1), t && _ >= t && (clearInterval(a), e(!1)));
                }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(t, e, _, a = (0, R.aF)()) {
        let r = this.getOptions(),
            n = Object.keys(this._integrations);
        return (
            !e.integrations && n.length > 0 && (e.integrations = n),
            this.emit("preprocessEvent", t, e),
            t.type || a.setLastEventId(t.event_id || e.event_id),
            (0, O.R)(r, t, e, _, this, a).then((t) => {
                if (null === t) return t;
                let e = {
                    ...a.getPropagationContext(),
                    ...(_ ? _.getPropagationContext() : void 0),
                };
                if (!(t.contexts && t.contexts.trace) && e) {
                    let { traceId: _, spanId: a, parentSpanId: r, dsc: n } = e;
                    (t.contexts = {
                        trace: (0, c.Jr)({
                            trace_id: _,
                            span_id: a,
                            parent_span_id: r,
                        }),
                        ...t.contexts,
                    }),
                        (t.sdkProcessingMetadata = {
                            dynamicSamplingContext: n || (0, d._l)(_, this),
                            ...t.sdkProcessingMetadata,
                        });
                }
                return t;
            })
        );
    }
    _captureEvent(t, e = {}, _) {
        return this._processEvent(t, e, _).then(
            (t) => t.event_id,
            (t) => {
                N.X && ("log" === t.logLevel ? r.kg.log(t.message) : r.kg.warn(t));
            },
        );
    }
    _processEvent(t, e, _) {
        let a = this.getOptions(),
            { sampleRate: r } = a,
            n = P(t),
            i = C(t),
            c = t.type || "error",
            l = `before send for type \`${c}\``,
            I = void 0 === r ? void 0 : (0, f.o)(r);
        if (i && "number" == typeof I && Math.random() > I)
            return (
                this.recordDroppedEvent("sample_rate", "error", t),
                (0, E.$2)(
                    new s.b(
                        `Discarding event because it's not included in the random sample (sampling rate = ${r})`,
                        "log",
                    ),
                )
            );
        let R = "replay_event" === c ? "replay" : c,
            N = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(t, e, _, N)
            .then((_) => {
                if (null === _)
                    throw (
                        (this.recordDroppedEvent("event_processor", R, t),
                        new s.b("An event processor returned `null`, will not send event.", "log"))
                    );
                return e.data && !0 === e.data.__sentry__
                    ? _
                    : (function (t, e) {
                          let _ = `${e} must return \`null\` or a valid event.`;
                          if ((0, o.J8)(t))
                              return t.then(
                                  (t) => {
                                      if (!(0, o.PO)(t) && null !== t) throw new s.b(_);
                                      return t;
                                  },
                                  (t) => {
                                      throw new s.b(`${e} rejected with ${t}`);
                                  },
                              );
                          if (!(0, o.PO)(t) && null !== t) throw new s.b(_);
                          return t;
                      })(
                          (function (t, e, _, a) {
                              let { beforeSend: r, beforeSendTransaction: n, beforeSendSpan: o } = e;
                              if (C(_) && r) return r(_, a);
                              if (P(_)) {
                                  if (_.spans && o) {
                                      let e = [];
                                      for (let a of _.spans) {
                                          let _ = o(a);
                                          _ ? e.push(_) : t.recordDroppedEvent("before_send", "span");
                                      }
                                      _.spans = e;
                                  }
                                  if (n) {
                                      if (_.spans) {
                                          let t = _.spans.length;
                                          _.sdkProcessingMetadata = {
                                              ..._.sdkProcessingMetadata,
                                              spanCountBeforeProcessing: t,
                                          };
                                      }
                                      return n(_, a);
                                  }
                              }
                              return _;
                          })(this, a, _, e),
                          l,
                      );
            })
            .then((a) => {
                if (null === a) {
                    if ((this.recordDroppedEvent("before_send", R, t), n)) {
                        let e = 1 + (t.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", e);
                    }
                    throw new s.b(`${l} returned \`null\`, will not send event.`, "log");
                }
                let r = _ && _.getSession();
                if ((!n && r && this._updateSessionFromEvent(r, a), n)) {
                    let t =
                        ((a.sdkProcessingMetadata && a.sdkProcessingMetadata.spanCountBeforeProcessing) || 0) -
                        (a.spans ? a.spans.length : 0);
                    t > 0 && this.recordDroppedEvent("before_send", "span", t);
                }
                let o = a.transaction_info;
                return (
                    n &&
                        o &&
                        a.transaction !== t.transaction &&
                        (a.transaction_info = {
                            ...o,
                            source: "custom",
                        }),
                    this.sendEvent(a, e),
                    a
                );
            })
            .then(null, (t) => {
                if (t instanceof s.b) throw t;
                throw (
                    (this.captureException(t, {
                        data: { __sentry__: !0 },
                        originalException: t,
                    }),
                    new s.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`))
                );
            });
    }
    _process(t) {
        this._numProcessing++,
            t.then(
                (t) => (this._numProcessing--, t),
                (t) => (this._numProcessing--, t),
            );
    }
    _clearOutcomes() {
        let t = this._outcomes;
        return (
            (this._outcomes = {}),
            Object.entries(t).map(([t, e]) => {
                let [_, a] = t.split(":");
                return {
                    reason: _,
                    category: a,
                    quantity: e,
                };
            })
        );
    }
    _flushOutcomes() {
        N.X && r.kg.log("Flushing outcomes...");
        let t = this._clearOutcomes();
        if (0 === t.length) {
            N.X && r.kg.log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            N.X && r.kg.log("No dsn provided, will not send outcomes");
            return;
        }
        N.X && r.kg.log("Sending outcomes:", t);
        let e = (0, l.y)(t, this._options.tunnel && (0, a.RA)(this._dsn));
        this.sendEnvelope(e);
    }
}
function C(t) {
    return void 0 === t.type;
}
function P(t) {
    return "transaction" === t.type;
}
