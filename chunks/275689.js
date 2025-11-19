_.d(e, { s: () => T });
var a = _(394798),
    r = _(101284),
    n = _(370336),
    o = _(622916),
    E = _(263449),
    i = _(255768),
    c = _(380132),
    s = _(899195),
    l = _(988097),
    I = _(696486),
    R = _(305625),
    N = _(966497),
    A = _(241225),
    u = _(881243);
class T {
    constructor(t = {}) {
        (this._traceId = t.traceId || (0, a.DM)()),
            (this._spanId = t.spanId || (0, a.DM)().substring(16)),
            (this._startTime = t.startTimestamp || (0, r.ph)()),
            (this._attributes = {}),
            this.setAttributes({
                [l.S3]: "manual",
                [l.$J]: t.op,
                ...t.attributes,
            }),
            (this._name = t.name),
            t.parentSpanId && (this._parentSpanId = t.parentSpanId),
            "sampled" in t && (this._sampled = t.sampled),
            t.endTimestamp && (this._endTime = t.endTimestamp),
            (this._events = []),
            (this._isStandaloneSpan = t.isStandalone),
            this._endTime && this._onSpanEnded();
    }
    addLink(t) {
        return this;
    }
    addLinks(t) {
        return this;
    }
    recordException(t, e) {}
    spanContext() {
        let { _spanId: t, _traceId: e, _sampled: _ } = this;
        return {
            spanId: t,
            traceId: e,
            traceFlags: _ ? I.i0 : I.ve,
        };
    }
    setAttribute(t, e) {
        return void 0 === e ? delete this._attributes[t] : (this._attributes[t] = e), this;
    }
    setAttributes(t) {
        return Object.keys(t).forEach((e) => this.setAttribute(e, t[e])), this;
    }
    updateStartTime(t) {
        this._startTime = (0, I.$k)(t);
    }
    setStatus(t) {
        return (this._status = t), this;
    }
    updateName(t) {
        return (this._name = t), this;
    }
    end(t) {
        this._endTime || ((this._endTime = (0, I.$k)(t)), (0, N.w)(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return (0, n.Jr)({
            data: this._attributes,
            description: this._name,
            op: this._attributes[l.$J],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, I._4)(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[l.S3],
            _metrics_summary: (0, s.y)(this),
            profile_id: this._attributes[l.p6],
            exclusive_time: this._attributes[l.JQ],
            measurements: (0, A.l)(this._events),
            is_segment: (this._isStandaloneSpan && (0, I.Gx)(this) === this) || void 0,
            segment_id: this._isStandaloneSpan ? (0, I.Gx)(this).spanContext().spanId : void 0,
        });
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(t, e, _) {
        i.X && o.kg.log("[Tracing] Adding an event to span:", t);
        let a = d(e) ? e : _ || (0, r.ph)(),
            n = d(e) ? {} : e || {},
            E = {
                name: t,
                time: (0, I.$k)(a),
                attributes: n,
            };
        return this._events.push(E), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        let t = (0, E.s3)();
        if ((t && t.emit("spanEnd", this), !(this._isStandaloneSpan || this === (0, I.Gx)(this)))) return;
        if (this._isStandaloneSpan)
            return void (this._sampled
                ? (function (t) {
                      let e = (0, E.s3)();
                      if (!e) return;
                      let _ = t[1];
                      if (!_ || 0 === _.length) return e.recordDroppedEvent("before_send", "span");
                      let a = e.getTransport();
                      a &&
                          a.send(t).then(null, (t) => {
                              i.X && o.kg.error("Error while sending span:", t);
                          });
                  })((0, c.uE)([this], t))
                : (i.X &&
                      o.kg.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
                  t && t.recordDroppedEvent("sample_rate", "span")));
        let e = this._convertSpanToTransaction();
        e && ((0, u.I1)(this).scope || (0, E.nZ)()).captureEvent(e);
    }
    _convertSpanToTransaction() {
        if (!f((0, I.XU)(this))) return;
        this._name ||
            (i.X && o.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
            (this._name = "<unlabeled transaction>"));
        let { scope: t, isolationScope: e } = (0, u.I1)(this),
            _ = (t || (0, E.nZ)()).getClient() || (0, E.s3)();
        if (!0 !== this._sampled) {
            i.X && o.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                _ && _.recordDroppedEvent("sample_rate", "transaction");
            return;
        }
        let a = (0, I.Dp)(this)
                .filter((t) => {
                    var e;
                    return t !== this && !((e = t) instanceof T && e.isStandaloneSpan());
                })
                .map((t) => (0, I.XU)(t))
                .filter(f),
            r = this._attributes[l.Zj],
            c = {
                contexts: { trace: (0, I.HR)(this) },
                spans: a.length > 1000 ? a.sort((t, e) => t.start_timestamp - e.start_timestamp).slice(0, 1000) : a,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: t,
                    capturedSpanIsolationScope: e,
                    ...(0, n.Jr)({ dynamicSamplingContext: (0, R.jC)(this) }),
                },
                _metrics_summary: (0, s.y)(this),
                ...(r && { transaction_info: { source: r } }),
            },
            N = (0, A.l)(this._events);
        return (
            N &&
                Object.keys(N).length &&
                (i.X &&
                    o.kg.log("[Measurements] Adding measurements to transaction event", JSON.stringify(N, void 0, 2)),
                (c.measurements = N)),
            c
        );
    }
}
function d(t) {
    return (t && "number" == typeof t) || t instanceof Date || Array.isArray(t);
}
function f(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
}
