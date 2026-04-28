n.d(t, { y: () => O });
var r = n(555625),
    i = n(630449),
    o = n(326447),
    a = n(397805),
    s = n(688331),
    l = n(680753),
    c = n(411361),
    u = n(847745),
    d = n(83220),
    p = n(608768),
    h = n(33735),
    f = n(875565),
    m = n(272469),
    g = n(231577),
    _ = n(835869),
    y = n(838596),
    v = n(689456),
    b = n(582102);
let S = "Not capturing exception because it's already been captured.";
class w {
    constructor(e) {
        if (
            ((this._options = e),
            (this._integrations = {}),
            (this._numProcessing = 0),
            (this._outcomes = {}),
            (this._hooks = {}),
            (this._eventProcessors = []),
            e.dsn ? (this._dsn = (0, p.AD)(e.dsn)) : o.T && m.vF.warn("No DSN provided, client will not send events."),
            this._dsn)
        ) {
            const t = (0, r.Z)(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t,
            });
        }
        const t = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((t) => t in e && void 0 == e[t]);
        t &&
            (0, m.pq)(() => {
                console.warn(
                    `[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`,
                );
            });
    }
    captureException(e, t, n) {
        let r = (0, g.eJ)();
        if ((0, g.GR)(e)) return o.T && m.vF.log(S), r;
        let i = { event_id: r, ...t };
        return this._process(this.eventFromException(e, i).then((e) => this._captureEvent(e, i, n))), i.event_id;
    }
    captureMessage(e, t, n, r) {
        let i = { event_id: (0, g.eJ)(), ...n },
            o = (0, f.NF)(e) ? e : String(e),
            a = (0, f.sO)(e) ? this.eventFromMessage(o, t, i) : this.eventFromException(e, i);
        return this._process(a.then((e) => this._captureEvent(e, i, r))), i.event_id;
    }
    captureEvent(e, t, n) {
        let r = (0, g.eJ)();
        if (t && t.originalException && (0, g.GR)(t.originalException)) return o.T && m.vF.log(S), r;
        let i = { event_id: r, ...t },
            a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(e, i, a || n)), i.event_id;
    }
    captureSession(e) {
        "string" != typeof e.release
            ? o.T && m.vF.warn("Discarded session because of missing or non-string release")
            : (this.sendSession(e), (0, l.qO)(e, { init: !1 }));
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
            : (0, _.XW)(!0);
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
        (0, s.qm)(this, e, this._integrations), t || (0, s.lc)(this, [e]);
    }
    sendEvent(e, t = {}) {
        this.emit("beforeSendEvent", e, t);
        let n = (0, a.V7)(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (let e of t.attachments || []) n = (0, u.W3)(n, (0, u.bm)(e));
        let r = this.sendEnvelope(n);
        r && r.then((t) => this.emit("afterSendEvent", e, t), null);
    }
    sendSession(e) {
        let t = (0, a.LE)(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(t);
    }
    recordDroppedEvent(e, t, n) {
        if (this._options.sendClientReports) {
            let r = "number" == typeof n ? n : 1,
                i = `${e}:${t}`;
            o.T && m.vF.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ""}`),
                (this._outcomes[i] = (this._outcomes[i] || 0) + r);
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
            ? this._transport.send(e).then(null, (e) => (o.T && m.vF.error("Error while sending envelope:", e), e))
            : (o.T && m.vF.error("Transport disabled"), (0, _.XW)({}));
    }
    _setupIntegrations() {
        let { integrations: e } = this._options;
        (this._integrations = (0, s.P$)(this, e)), (0, s.lc)(this, e);
    }
    _updateSessionFromEvent(e, t) {
        let n = "fatal" === t.level,
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
        let o = "ok" === e.status;
        ((o && 0 === e.errors) || (o && n)) &&
            ((0, l.qO)(e, { ...(n && { status: "crashed" }), errors: e.errors || Number(r || n) }),
            this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
        return new _.T2((t) => {
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
    _prepareEvent(e, t, n = (0, i.o5)(), r = (0, i.rm)()) {
        let o = this.getOptions(),
            a = Object.keys(this._integrations);
        return (
            !t.integrations && a.length > 0 && (t.integrations = a),
            this.emit("preprocessEvent", e, t),
            e.type || r.setLastEventId(e.event_id || t.event_id),
            (0, v.mG)(o, e, t, n, this, r).then(
                (e) => (
                    null === e ||
                        ((e.contexts = { trace: (0, i.vn)(n), ...e.contexts }),
                        (e.sdkProcessingMetadata = {
                            dynamicSamplingContext: (0, c.ao)(this, n),
                            ...e.sdkProcessingMetadata,
                        })),
                    e
                ),
            )
        );
    }
    _captureEvent(e, t = {}, n) {
        return this._processEvent(e, t, n).then(
            (e) => e.event_id,
            (e) => {
                o.T && (e instanceof h.U && "log" === e.logLevel ? m.vF.log(e.message) : m.vF.warn(e));
            },
        );
    }
    _processEvent(e, t, n) {
        let r = this.getOptions(),
            { sampleRate: i } = r,
            o = k(e),
            a = E(e),
            s = e.type || "error",
            l = `before send for type \`${s}\``,
            c = void 0 === i ? void 0 : (0, y.i)(i);
        if (a && "number" == typeof c && Math.random() > c)
            return (
                this.recordDroppedEvent("sample_rate", "error", e),
                (0, _.xg)(
                    new h.U(
                        `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                        "log",
                    ),
                )
            );
        let u = "replay_event" === s ? "replay" : s,
            d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(e, t, n, d)
            .then((n) => {
                if (null === n)
                    throw (
                        (this.recordDroppedEvent("event_processor", u, e),
                        new h.U("An event processor returned `null`, will not send event.", "log"))
                    );
                return t.data && !0 === t.data.__sentry__
                    ? n
                    : (function (e, t) {
                          let n = `${t} must return \`null\` or a valid event.`;
                          if ((0, f.Qg)(e))
                              return e.then(
                                  (e) => {
                                      if (!(0, f.Qd)(e) && null !== e) throw new h.U(n);
                                      return e;
                                  },
                                  (e) => {
                                      throw new h.U(`${t} rejected with ${e}`);
                                  },
                              );
                          if (!(0, f.Qd)(e) && null !== e) throw new h.U(n);
                          return e;
                      })(
                          (function (e, t, n, r) {
                              let { beforeSend: i, beforeSendTransaction: o, beforeSendSpan: a } = t;
                              if (E(n) && i) return i(n, r);
                              if (k(n)) {
                                  if (n.spans && a) {
                                      let t = [];
                                      for (let r of n.spans) {
                                          let n = a(r);
                                          n ? t.push(n) : ((0, b.xl)(), e.recordDroppedEvent("before_send", "span"));
                                      }
                                      n.spans = t;
                                  }
                                  if (o) {
                                      if (n.spans) {
                                          let e = n.spans.length;
                                          n.sdkProcessingMetadata = {
                                              ...n.sdkProcessingMetadata,
                                              spanCountBeforeProcessing: e,
                                          };
                                      }
                                      return o(n, r);
                                  }
                              }
                              return n;
                          })(this, r, n, t),
                          l,
                      );
            })
            .then((r) => {
                if (null === r) {
                    if ((this.recordDroppedEvent("before_send", u, e), o)) {
                        let t = 1 + (e.spans || []).length;
                        this.recordDroppedEvent("before_send", "span", t);
                    }
                    throw new h.U(`${l} returned \`null\`, will not send event.`, "log");
                }
                let i = n && n.getSession();
                if ((!o && i && this._updateSessionFromEvent(i, r), o)) {
                    let e =
                        ((r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing) || 0) -
                        (r.spans ? r.spans.length : 0);
                    e > 0 && this.recordDroppedEvent("before_send", "span", e);
                }
                let a = r.transaction_info;
                return (
                    o && a && r.transaction !== e.transaction && (r.transaction_info = { ...a, source: "custom" }),
                    this.sendEvent(r, t),
                    r
                );
            })
            .then(null, (e) => {
                if (e instanceof h.U) throw e;
                throw (
                    (this.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
                    new h.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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
                return { reason: n, category: r, quantity: t };
            })
        );
    }
    _flushOutcomes() {
        var e;
        let t;
        o.T && m.vF.log("Flushing outcomes...");
        let n = this._clearOutcomes();
        if (0 === n.length) {
            o.T && m.vF.log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            o.T && m.vF.log("No dsn provided, will not send outcomes");
            return;
        }
        o.T && m.vF.log("Sending outcomes:", n);
        let r =
            ((e = this._options.tunnel && (0, p.SB)(this._dsn)),
            (t = [{ type: "client_report" }, { timestamp: (0, d.lu)(), discarded_events: n }]),
            (0, u.h4)(e ? { dsn: e } : {}, [t]));
        this.sendEnvelope(r);
    }
}
function E(e) {
    return void 0 === e.type;
}
function k(e) {
    return "transaction" === e.type;
}
var x = n(588130),
    C = n(607423),
    T = n(297458),
    I = n(804524),
    M = n(405589);
class O extends w {
    constructor(e) {
        const t = { parentSpanIsAlwaysRootSpan: !0, ...e };
        !(function (e, t, n = [t], r = "npm") {
            let i = e._metadata || {};
            i.sdk ||
                (i.sdk = {
                    name: `sentry.javascript.${t}`,
                    packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: "8.55.0" })),
                    version: "8.55.0",
                }),
                (e._metadata = i);
        })(t, "browser", ["browser"], I.jf.SENTRY_SDK_SOURCE || (0, x.e)()),
            super(t),
            t.sendClientReports &&
                I.jf.document &&
                I.jf.document.addEventListener("visibilitychange", () => {
                    "hidden" === I.jf.document.visibilityState && this._flushOutcomes();
                });
    }
    eventFromException(e, t) {
        return (0, T.u)(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = "info", n) {
        return (0, T.qv)(this._options.stackParser, e, t, n, this._options.attachStacktrace);
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            C.T && m.vF.warn("SDK not enabled, will not capture user feedback.");
            return;
        }
        let t = (0, M.L)(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
        this.sendEnvelope(t);
    }
    _prepareEvent(e, t, n) {
        return (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, n);
    }
}
