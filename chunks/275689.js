a.d(e, { s: () => f });
var r = a(394798),
    n = a(101284),
    _ = a(370336),
    o = a(622916),
    i = a(263449),
    c = a(255768),
    s = a(380132),
    E = a(899195),
    l = a(988097),
    u = a(696486),
    I = a(305625),
    R = a(966497),
    d = a(241225),
    A = a(881243);
class f {
    constructor(t = {}) {
        (this._traceId = t.traceId || (0, r.DM)()),
            (this._spanId = t.spanId || (0, r.DM)().substring(16)),
            (this._startTime = t.startTimestamp || (0, n.ph)()),
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
            traceFlags: a ? u.i0 : u.ve
        };
    }
    setAttribute(t, e) {
        return void 0 === e ? delete this._attributes[t] : (this._attributes[t] = e), this;
    }
    setAttributes(t) {
        return Object.keys(t).forEach((e) => this.setAttribute(e, t[e])), this;
    }
    updateStartTime(t) {
        this._startTime = (0, u.$k)(t);
    }
    setStatus(t) {
        return (this._status = t), this;
    }
    updateName(t) {
        return (this._name = t), this;
    }
    end(t) {
        this._endTime || ((this._endTime = (0, u.$k)(t)), (0, R.w)(this), this._onSpanEnded());
    }
    getSpanJSON() {
        return (0, _.Jr)({
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
            measurements: (0, d.l)(this._events),
            is_segment: (this._isStandaloneSpan && (0, u.Gx)(this) === this) || void 0,
            segment_id: this._isStandaloneSpan ? (0, u.Gx)(this).spanContext().spanId : void 0
        });
    }
    isRecording() {
        return !this._endTime && !!this._sampled;
    }
    addEvent(t, e, a) {
        c.X && o.kg.log('[Tracing] Adding an event to span:', t);
        let r = p(e) ? e : a || (0, n.ph)(),
            _ = p(e) ? {} : e || {},
            i = {
                name: t,
                time: (0, u.$k)(r),
                attributes: _
            };
        return this._events.push(i), this;
    }
    isStandaloneSpan() {
        return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
        let t = (0, i.s3)();
        if ((t && t.emit('spanEnd', this), !(this._isStandaloneSpan || this === (0, u.Gx)(this)))) return;
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
                  })((0, s.uE)([this], t))
                : (c.X && o.kg.log('[Tracing] Discarding standalone span because its trace was not chosen to be sampled.'), t && t.recordDroppedEvent('sample_rate', 'span')));
        let e = this._convertSpanToTransaction();
        e && ((0, A.I1)(this).scope || (0, i.nZ)()).captureEvent(e);
    }
    _convertSpanToTransaction() {
        if (!N((0, u.XU)(this))) return;
        this._name || (c.X && o.kg.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'), (this._name = '<unlabeled transaction>'));
        let { scope: t, isolationScope: e } = (0, A.I1)(this),
            a = (t || (0, i.nZ)()).getClient() || (0, i.s3)();
        if (!0 !== this._sampled) {
            c.X && o.kg.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'), a && a.recordDroppedEvent('sample_rate', 'transaction');
            return;
        }
        let r = (0, u.Dp)(this)
                .filter((t) => {
                    var e;
                    return t !== this && !((e = t) instanceof f && e.isStandaloneSpan());
                })
                .map((t) => (0, u.XU)(t))
                .filter(N),
            n = this._attributes[l.Zj],
            s = {
                contexts: { trace: (0, u.HR)(this) },
                spans: r.length > 1000 ? r.sort((t, e) => t.start_timestamp - e.start_timestamp).slice(0, 1000) : r,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: 'transaction',
                sdkProcessingMetadata: {
                    capturedSpanScope: t,
                    capturedSpanIsolationScope: e,
                    ...(0, _.Jr)({ dynamicSamplingContext: (0, I.jC)(this) })
                },
                _metrics_summary: (0, E.y)(this),
                ...(n && { transaction_info: { source: n } })
            },
            R = (0, d.l)(this._events);
        return R && Object.keys(R).length && (c.X && o.kg.log('[Measurements] Adding measurements to transaction event', JSON.stringify(R, void 0, 2)), (s.measurements = R)), s;
    }
}
function p(t) {
    return (t && 'number' == typeof t) || t instanceof Date || Array.isArray(t);
}
function N(t) {
    return !!t.start_timestamp && !!t.timestamp && !!t.span_id && !!t.trace_id;
}
