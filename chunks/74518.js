n.d(t, { s: () => T });
var r = n(431660),
    i = n(343573),
    a = n(886649),
    o = n(98076),
    _ = n(509440),
    s = n(4757),
    c = n(235450),
    E = n(608692),
    l = n(8062),
    u = n(82255),
    d = n(464338),
    p = n(149821),
    f = n(21410),
    I = n(39137);
class T {
    constructor(e = {}) {
        (this._traceId = e.traceId || (0, r.DM)()),
            (this._spanId = e.spanId || (0, r.DM)().substring(16)),
            (this._startTime = e.startTimestamp || (0, i.ph)()),
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
        let { _spanId: e, _traceId: t, _sampled: n } = this;
        return {
            spanId: e,
            traceId: t,
            traceFlags: n ? u.i0 : u.ve,
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
        this._endTime || ((this._endTime = (0, u.$k)(e)), (0, p.w)(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return (0, a.Jr)({
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
            measurements: (0, f.l)(this._events),
            is_segment: (this._isStandaloneSpan && (0, u.Gx)(this) === this) || void 0,
            segment_id: this._isStandaloneSpan ? (0, u.Gx)(this).spanContext().spanId : void 0,
        });
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
        s.X && o.kg.log("[Tracing] Adding an event to span:", e);
        let r = R(t) ? t : n || (0, i.ph)(),
            a = R(t) ? {} : t || {},
            _ = {
                name: e,
                time: (0, u.$k)(r),
                attributes: a,
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
                      let n = e[1];
                      if (!n || 0 === n.length) return t.recordDroppedEvent("before_send", "span");
                      let r = t.getTransport();
                      r &&
                          r.send(e).then(null, (e) => {
                              s.X && o.kg.error("Error while sending span:", e);
                          });
                  })((0, c.uE)([this], e))
                : (s.X &&
                      o.kg.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
                  e && e.recordDroppedEvent("sample_rate", "span")));
        let t = this._convertSpanToTransaction();
        t && ((0, I.I1)(this).scope || (0, _.nZ)()).captureEvent(t);
    }
    _convertSpanToTransaction() {
        if (!A((0, u.XU)(this))) return;
        this._name ||
            (s.X && o.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
            (this._name = "<unlabeled transaction>"));
        let { scope: e, isolationScope: t } = (0, I.I1)(this),
            n = (e || (0, _.nZ)()).getClient() || (0, _.s3)();
        if (!0 !== this._sampled) {
            s.X && o.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                n && n.recordDroppedEvent("sample_rate", "transaction");
            return;
        }
        let r = (0, u.Dp)(this)
                .filter((e) => {
                    var t;
                    return e !== this && !((t = e) instanceof T && t.isStandaloneSpan());
                })
                .map((e) => (0, u.XU)(e))
                .filter(A),
            i = this._attributes[l.Zj],
            c = {
                contexts: { trace: (0, u.HR)(this) },
                spans: r.length > 1000 ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1000) : r,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                    capturedSpanScope: e,
                    capturedSpanIsolationScope: t,
                    ...(0, a.Jr)({ dynamicSamplingContext: (0, d.jC)(this) }),
                },
                _metrics_summary: (0, E.y)(this),
                ...(i && { transaction_info: { source: i } }),
            },
            p = (0, f.l)(this._events);
        return (
            p &&
                Object.keys(p).length &&
                (s.X &&
                    o.kg.log("[Measurements] Adding measurements to transaction event", JSON.stringify(p, void 0, 2)),
                (c.measurements = p)),
            c
        );
    }
}
function R(e) {
    return (e && "number" == typeof e) || e instanceof Date || Array.isArray(e);
}
function A(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
