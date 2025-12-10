r.d(t, { s: () => T });
var n = r(431660),
    a = r(343573),
    i = r(886649),
    o = r(98076),
    _ = r(509440),
    s = r(4757),
    c = r(235450),
    E = r(608692),
    l = r(8062),
    u = r(82255),
    d = r(464338),
    I = r(149821),
    p = r(21410),
    R = r(39137);
class T {
    constructor(e = {}) {
        (this._traceId = e.traceId || (0, n.DM)()),
            (this._spanId = e.spanId || (0, n.DM)().substring(16)),
            (this._startTime = e.startTimestamp || (0, a.ph)()),
            (this._attributes = {}),
            this.setAttributes({
                [l.S3]: "manual",
                [l.$J]: e.op,
                ...e.attributes,
            }),
            (this._name = e.name),
            e.parentSpanId && (this._parentSpanId = e.parentSpanId),
            "sampled" in e && (this._sampled = e.sampled),
            e.endTimestamp && (this._endTime = e.endTimestamp),
            (this._events = []),
            (this._isStandaloneSpan = e.isStandalone),
            this._endTime && this._onSpanEnded();
    }
    addLink(e) {
        return this;
    }
    addLinks(e) {
        return this;
    }
    recordException(e, t) {}
    spanContext() {
        let { _spanId: e, _traceId: t, _sampled: r } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: r ? u.i0 : u.ve,
        };
    }
    setAttribute(e, t) {
        return void 0 === t ? delete this._attributes[e] : (this._attributes[e] = t), this;
    }
    setAttributes(e) {
        return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
    }
    updateStartTime(e) {
        this._startTime = (0, u.$k)(e);
    }
    setStatus(e) {
        return (this._status = e), this;
    }
    updateName(e) {
        return (this._name = e), this;
    }
    end(e) {
        this._endTime || ((this._endTime = (0, u.$k)(e)), (0, I.w)(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return (0, i.Jr)({
            data: this._attributes,
            description: this._name,
            op: this._attributes[l.$J],
            parent_span_id: this._parentSpanId,
            span_id: this._spanId,
            start_timestamp: this._startTime,
            status: (0, u._4)(this._status),
            timestamp: this._endTime,
            trace_id: this._traceId,
            origin: this._attributes[l.S3],
            _metrics_summary: (0, E.y)(this),
            profile_id: this._attributes[l.p6],
            exclusive_time: this._attributes[l.JQ],
            measurements: (0, p.l)(this._events),
            is_segment: (this._isStandaloneSpan && (0, u.Gx)(this) === this) || void 0,
            segment_id: this._isStandaloneSpan ? (0, u.Gx)(this).spanContext().spanId : void 0,
        });
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, r) {
        s.X && o.kg.log("[Tracing] Adding an event to span:", e);
        let n = A(t) ? t : r || (0, a.ph)(),
            i = A(t) ? {} : t || {},
            _ = {
                name: e,
                time: (0, u.$k)(n),
                attributes: i,
            };
        return this._events.push(_), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        let e = (0, _.s3)();
        if ((e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === (0, u.Gx)(this)))) return;
        if (this._isStandaloneSpan)
            return void (this._sampled
                ? (function (e) {
                      let t = (0, _.s3)();
                      if (!t) return;
                      let r = e[1];
                      if (!r || 0 === r.length) return t.recordDroppedEvent("before_send", "span");
                      let n = t.getTransport();
                      n &&
                          n.send(e).then(null, (e) => {
                              s.X && o.kg.error("Error while sending span:", e);
                          });
                  })((0, c.uE)([this], e))
                : (s.X &&
                      o.kg.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
                  e && e.recordDroppedEvent("sample_rate", "span")));
        let t = this._convertSpanToTransaction();
        t && ((0, R.I1)(this).scope || (0, _.nZ)()).captureEvent(t);
    }
    _convertSpanToTransaction() {
        if (!f((0, u.XU)(this))) return;
        this._name ||
            (s.X && o.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
            (this._name = "<unlabeled transaction>"));
        let { scope: e, isolationScope: t } = (0, R.I1)(this),
            r = (e || (0, _.nZ)()).getClient() || (0, _.s3)();
        if (!0 !== this._sampled) {
            s.X && o.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                r && r.recordDroppedEvent("sample_rate", "transaction");
            return;
        }
        let n = (0, u.Dp)(this)
                .filter((e) => {
                    var t;
                    return e !== this && !((t = e) instanceof T && t.isStandaloneSpan());
                })
                .map((e) => (0, u.XU)(e))
                .filter(f),
            a = this._attributes[l.Zj],
            c = {
                contexts: { trace: (0, u.HR)(this) },
                spans: n.length > 1000 ? n.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1000) : n,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: e,
                    capturedSpanIsolationScope: t,
                    ...(0, i.Jr)({ dynamicSamplingContext: (0, d.jC)(this) }),
                },
                _metrics_summary: (0, E.y)(this),
                ...(a && { transaction_info: { source: a } }),
            },
            I = (0, p.l)(this._events);
        return (
            I &&
                Object.keys(I).length &&
                (s.X &&
                    o.kg.log("[Measurements] Adding measurements to transaction event", JSON.stringify(I, void 0, 2)),
                (c.measurements = I)),
            c
        );
    }
}
function A(e) {
    return (e && "number" == typeof e) || e instanceof Date || Array.isArray(e);
}
function f(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
