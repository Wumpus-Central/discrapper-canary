a.d(e, { s: () => N });
var r = a(394798),
    _ = a(101284),
    n = a(370336),
    o = a(622916),
    i = a(263449),
    c = a(255768),
    E = a(380132),
    s = a(899195),
    l = a(988097),
    I = a(696486),
    u = a(305625),
    R = a(966497),
    A = a(241225),
    T = a(881243);
class N {
    constructor(t = {}) {
        (this._traceId = t.traceId || (0, r.DM)()),
            (this._spanId = t.spanId || (0, r.DM)().substring(16)),
            (this._startTime = t.startTimestamp || (0, _.ph)()),
            (this._attributes = {}),
            this.setAttributes({
                [l.S3]: 'manual',
                [l.$J]: t.op,
                ...t.attributes
            }),
            (this._name = t.name),
            t.parentSpanId && (this._parentSpanId = t.parentSpanId),
            'sampled' in t && (this._sampled = t.sampled),
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
        let { _spanId: t, _traceId: e, _sampled: a } = this;
        return {
            spanId: t,
            traceId: e,
            traceFlags: a ? I.i0 : I.ve
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
        this._endTime || ((this._endTime = (0, I.$k)(t)), (0, R.w)(this), this._onSpanEnded());
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
            segment_id: this._isStandaloneSpan ? (0, I.Gx)(this).spanContext().spanId : void 0
        });
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(t, e, a) {
        c.X && o.kg.log('[Tracing] Adding an event to span:', t);
        let r = d(e) ? e : a || (0, _.ph)(),
            n = d(e) ? {} : e || {},
            i = {
                name: t,
                time: (0, I.$k)(r),
                attributes: n
            };
        return this._events.push(i), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        let t = (0, i.s3)();
        if ((t && t.emit('spanEnd', this), !(this._isStandaloneSpan || this === (0, I.Gx)(this)))) return;
        if (this._isStandaloneSpan)
            return void (this._sampled
                ? (function (t) {
                      let e = (0, i.s3)();
                      if (!e) return;
                      let a = t[1];
                      if (!a || 0 === a.length) return e.recordDroppedEvent('before_send', 'span');
                      let r = e.getTransport();
                      r &&
                          r.send(t).then(null, (t) => {
                              c.X && o.kg.error('Error while sending span:', t);
                          });
                  })((0, E.uE)([this], t))
                : (c.X && o.kg.log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'), t && t.recordDroppedEvent('sample_rate', 'span')));
        let e = this._convertSpanToTransaction();
        e && ((0, T.I1)(this).scope || (0, i.nZ)()).captureEvent(e);
    }
    _convertSpanToTransaction() {
        if (!L((0, I.XU)(this))) return;
        this._name || (c.X && o.kg.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'), (this._name = '<unlabeled transaction>'));
        let { scope: t, isolationScope: e } = (0, T.I1)(this),
            a = (t || (0, i.nZ)()).getClient() || (0, i.s3)();
        if (!0 !== this._sampled) {
            c.X && o.kg.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'), a && a.recordDroppedEvent('sample_rate', 'transaction');
            return;
        }
        let r = (0, I.Dp)(this)
                .filter((t) => {
                    var e;
                    return t !== this && !((e = t) instanceof N && e.isStandaloneSpan());
                })
                .map((t) => (0, I.XU)(t))
                .filter(L),
            _ = this._attributes[l.Zj],
            E = {
                contexts: { trace: (0, I.HR)(this) },
                spans: r.length > 1000 ? r.sort((t, e) => t.start_timestamp - e.start_timestamp).slice(0, 1000) : r,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: 'transaction',
                sdkProcessingMetadata: {
                    capturedSpanScope: t,
                    capturedSpanIsolationScope: e,
                    ...(0, n.Jr)({ dynamicSamplingContext: (0, u.jC)(this) })
                },
                _metrics_summary: (0, s.y)(this),
                ...(_ && { transaction_info: { source: _ } })
            },
            R = (0, A.l)(this._events);
        return R && Object.keys(R).length && (c.X && o.kg.log('[Measurements] Adding measurements to transaction event', JSON.stringify(R, void 0, 2)), (E.measurements = R)), E;
    }
}
function d(t) {
    return (t && 'number' == typeof t) || t instanceof Date || Array.isArray(t);
}
function L(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
}
