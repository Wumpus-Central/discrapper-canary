n.d(t, { W: () => O });
var r = n(390873),
    i = n(98076),
    a = n(431660),
    o = n(661822),
    _ = n(959036),
    s = n(690889),
    c = n(886649),
    E = n(43696),
    l = n(852891),
    u = n(250962),
    d = n(509440),
    p = n(4757),
    f = n(235450),
    I = n(688560),
    T = n(180710),
    R = n(464338),
    A = n(380206),
    N = n(392841);
let h = "Not capturing exception because it's already been captured.";
class O {
    constructor(e) {
        if (
            ((this._options = e),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            e.dsn ? (this._dsn = (0, r.vK)(e.dsn)) : p.X && i.kg.warn("No DSN provided, client will not send events."),
            this._dsn)
        ) {
            let t = (0, u.U)(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t,
            });
        }
    }
    captureException(e, t, n) {
        let r = (0, a.DM)();
        if ((0, a.YO)(e)) return p.X && i.kg.log(h), r;
        let o = {
            event_id: r,
            ...t,
        };
        return this._process(this.eventFromException(e, o).then((e) => this._captureEvent(e, o, n))), o.event_id;
    }
    captureMessage(e, t, n, r) {
        let i = {
                event_id: (0, a.DM)(),
                ...n,
            },
            _ = (0, o.Le)(e) ? e : String(e),
            s = (0, o.pt)(e) ? this.eventFromMessage(_, t, i) : this.eventFromException(e, i);
        return this._process(s.then((e) => this._captureEvent(e, i, r))), i.event_id;
    }
    captureEvent(e, t, n) {
        let r = (0, a.DM)();
        if (t && t.originalException && (0, a.YO)(t.originalException)) return p.X && i.kg.log(h), r;
        let o = {
                event_id: r,
                ...t,
            },
            _ = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, o, _ || n)), o.event_id;
    }
    captureSession(e) {
        "string" != typeof e.release
            ? p.X && i.kg.warn("Discarded session because of missing or non-string release")
            : (this.sendSession(e), (0, T.CT)(e, { init: !1 }));
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
    flush(e) {
        let t = this._transport;
        return t
            ? (this.emit("flush"), this._isClientDoneProcessing(e).then((n) => t.flush(e).then((e) => n && e)))
            : (0, _.WD)(!0);
    }
    close(e) {
        return this.flush(e).then((e) => ((this.getOptions().enabled = !1), this.emit("close"), e));
    }
    getEventProcessors() {
        return this._eventProcessors;
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e);
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({ name: e }) => e.startsWith("Spotlight"))) &&
            this._setupIntegrations();
    }
    getIntegrationByName(e) {
        return this._integrations[e];
    }
    addIntegration(e) {
        let t = this._integrations[e.name];
        (0, I.m7)(this, e, this._integrations), t || (0, I.uf)(this, [e]);
    }
    sendEvent(e, t = {}) {
        this.emit("beforeSendEvent", e, t);
        let n = (0, f.Mq)(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (let e of t.attachments || []) n = (0, s.BO)(n, (0, s.zQ)(e));
        let r = this.sendEnvelope(n);
        r && r.then((t) => this.emit("afterSendEvent", e, t), null);
    }
    sendSession(e) {
        let t = (0, f.Q3)(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(t);
    }
    recordDroppedEvent(e, t, n) {
        if (this._options.sendClientReports) {
            let r = "number" == typeof n ? n : 1,
                a = `${e}:${t}`;
            p.X && i.kg.log(`Recording outcome: "${a}"${r > 1 ? ` (${r} times)` : ""}`),
                (this._outcomes[a] = (this._outcomes[a] || 0) + r);
        }
    }
    on(e, t) {
        let n = (this._hooks[e] = this._hooks[e] || []);
        return (
            n.push(t),
            () => {
                let e = n.indexOf(t);
                e > -1 && n.splice(e, 1);
            }
        );
    }
    emit(e, ...t) {
        let n = this._hooks[e];
        n && n.forEach((e) => e(...t));
    }
    sendEnvelope(e) {
        return (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport)
            ? this._transport.send(e).then(null, (e) => (p.X && i.kg.error("Error while sending event:", e), e))
            : (p.X && i.kg.error("Transport disabled"), (0, _.WD)({}));
    }
    _setupIntegrations() {
        let { integrations: e } = this._options;
        (this._integrations = (0, I.q4)(this, e)), (0, I.uf)(this, e);
    }
    _updateSessionFromEvent(e, t) {
        let n = !1,
            r = !1,
            i = t.exception && t.exception.values;
        if (i)
            for (let e of ((r = !0), i)) {
                let t = e.mechanism;
                if (t && !1 === t.handled) {
                    n = !0;
                    break;
                }
            }
        let a = "ok" === e.status;
        ((a && 0 === e.errors) || (a && n)) &&
            ((0, T.CT)(e, {
                ...(n && { status: "crashed" }),
                errors: e.errors || Number(r || n),
            }),
            this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
        return new _.cW((t) => {
            let n = 0,
                r = setInterval(() => {
                    0 == this._numProcessing
                        ? (clearInterval(r), t(!0))
                        : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
                }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(e, t, n, r = (0, d.aF)()) {
        let i = this.getOptions(),
            a = Object.keys(this._integrations);
        return (
            !t.integrations && a.length > 0 && (t.integrations = a),
            this.emit("preprocessEvent", e, t),
            e.type || r.setLastEventId(e.event_id || t.event_id),
            (0, N.R)(i, e, t, n, this, r).then((e) => {
                if (null === e) return e;
                let t = {
                    ...r.getPropagationContext(),
                    ...(n ? n.getPropagationContext() : void 0),
                };
                if (!(e.contexts && e.contexts.trace) && t) {
                    let { traceId: n, spanId: r, parentSpanId: i, dsc: a } = t;
                    (e.contexts = {
                        trace: (0, c.Jr)({
                            trace_id: n,
                            span_id: r,
                            parent_span_id: i,
                        }),
                        ...e.contexts,
                    }),
                        (e.sdkProcessingMetadata = {
                            dynamicSamplingContext: a || (0, R._l)(n, this),
                            ...e.sdkProcessingMetadata,
                        });
                }
                return e;
            })
        );
    }
    _captureEvent(e, t = {}, n) {
        return this._processEvent(e, t, n).then(
            (e) => e.event_id,
            (e) => {
                p.X && ("log" === e.logLevel ? i.kg.log(e.message) : i.kg.warn(e));
            },
        );
    }
    _processEvent(e, t, n) {
        let r = this.getOptions(),
            { sampleRate: i } = r,
            a = L(e),
            s = S(e),
            c = e.type || "error",
            l = `before send for type \`${c}\``,
            u = void 0 === i ? void 0 : (0, A.o)(i);
        if (s && "number" == typeof u && Math.random() > u)
            return (
                this.recordDroppedEvent("sample_rate", "error", e),
                (0, _.$2)(
                    new E.b(
                        `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                        "log",
                    ),
                )
            );
        let d = "replay_event" === c ? "replay" : c,
            p = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, t, n, p)
            .then((n) => {
                if (null === n)
                    throw (
                        (this.recordDroppedEvent("event_processor", d, e),
                        new E.b("An event processor returned `null`, will not send event.", "log"))
                    );
                return t.data && !0 === t.data.__sentry__
                    ? n
                    : (function (e, t) {
                          let n = `${t} must return \`null\` or a valid event.`;
                          if ((0, o.J8)(e))
                              return e.then(
                                  (e) => {
                                      if (!(0, o.PO)(e) && null !== e) throw new E.b(n);
                                      return e;
                                  },
                                  (e) => {
                                      throw new E.b(`${t} rejected with ${e}`);
                                  },
                              );
                          if (!(0, o.PO)(e) && null !== e) throw new E.b(n);
                          return e;
                      })(
                          (function (e, t, n, r) {
                              let { beforeSend: i, beforeSendTransaction: a, beforeSendSpan: o } = t;
                              if (S(n) && i) return i(n, r);
                              if (L(n)) {
                                  if (n.spans && o) {
                                      let t = [];
                                      for (let r of n.spans) {
                                          let n = o(r);
                                          n ? t.push(n) : e.recordDroppedEvent("before_send", "span");
                                      }
                                      n.spans = t;
                                  }
                                  if (a) {
                                      if (n.spans) {
                                          let e = n.spans.length;
                                          n.sdkProcessingMetadata = {
                                              ...n.sdkProcessingMetadata,
                                              spanCountBeforeProcessing: e,
                                          };
                                      }
                                      return a(n, r);
                                  }
                              }
                              return n;
                          })(this, r, n, t),
                          l,
                      );
            })
            .then((r) => {
                if (null === r) {
                    if ((this.recordDroppedEvent("before_send", d, e), a)) {
                        let t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", t);
                    }
                    throw new E.b(`${l} returned \`null\`, will not send event.`, "log");
                }
                let i = n && n.getSession();
                if ((!a && i && this._updateSessionFromEvent(i, r), a)) {
                    let e =
                        ((r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing) || 0) -
                        (r.spans ? r.spans.length : 0);
                    e > 0 && this.recordDroppedEvent("before_send", "span", e);
                }
                let o = r.transaction_info;
                return (
                    a &&
                        o &&
                        r.transaction !== e.transaction &&
                        (r.transaction_info = {
                            ...o,
                            source: "custom",
                        }),
                    this.sendEvent(r, t),
                    r
                );
            })
            .then(null, (e) => {
                if (e instanceof E.b) throw e;
                throw (
                    (this.captureException(e, {
                        data: { __sentry__: !0 },
                        originalException: e,
                    }),
                    new E.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`))
                );
            });
    }
    _process(e) {
        this._numProcessing++,
            e.then(
                (e) => (this._numProcessing--, e),
                (e) => (this._numProcessing--, e),
            );
    }
    _clearOutcomes() {
        let e = this._outcomes;
        return (
            (this._outcomes = {}),
            Object.entries(e).map(([e, t]) => {
                let [n, r] = e.split(":");
                return {
                    reason: n,
                    category: r,
                    quantity: t,
                };
            })
        );
    }
    _flushOutcomes() {
        p.X && i.kg.log("Flushing outcomes...");
        let e = this._clearOutcomes();
        if (0 === e.length) {
            p.X && i.kg.log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            p.X && i.kg.log("No dsn provided, will not send outcomes");
            return;
        }
        p.X && i.kg.log("Sending outcomes:", e);
        let t = (0, l.y)(e, this._options.tunnel && (0, r.RA)(this._dsn));
        this.sendEnvelope(t);
    }
}
function S(e) {
    return void 0 === e.type;
}
function L(e) {
    return "transaction" === e.type;
}
