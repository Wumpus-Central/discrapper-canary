a.d(e, { W: () => h });
var r = a(967752),
    n = a(622916),
    _ = a(394798),
    o = a(573736),
    i = a(928541),
    c = a(617726),
    s = a(370336),
    E = a(116698),
    l = a(538022),
    u = a(510529),
    I = a(263449),
    R = a(255768),
    d = a(380132),
    A = a(151122),
    f = a(112797),
    p = a(305625),
    N = a(820754),
    T = a(822578);
let L = "Not capturing exception because it's already been captured.";
class h {
    constructor(t) {
        if (((this._options = t), (this._integrations = {}), (this._numProcessing = 0), (this._outcomes = {}), (this._hooks = {}), (this._eventProcessors = []), t.dsn ? (this._dsn = (0, r.vK)(t.dsn)) : R.X && n.kg.warn('No DSN provided, client will not send events.'), this._dsn)) {
            let e = (0, u.U)(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
            this._transport = t.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: e
            });
        }
    }
    captureException(t, e, a) {
        let r = (0, _.DM)();
        if ((0, _.YO)(t)) return R.X && n.kg.log(L), r;
        let o = {
            event_id: r,
            ...e
        };
        return this._process(this.eventFromException(t, o).then((t) => this._captureEvent(t, o, a))), o.event_id;
    }
    captureMessage(t, e, a, r) {
        let n = {
                event_id: (0, _.DM)(),
                ...a
            },
            i = (0, o.Le)(t) ? t : String(t),
            c = (0, o.pt)(t) ? this.eventFromMessage(i, e, n) : this.eventFromException(t, n);
        return this._process(c.then((t) => this._captureEvent(t, n, r))), n.event_id;
    }
    captureEvent(t, e, a) {
        let r = (0, _.DM)();
        if (e && e.originalException && (0, _.YO)(e.originalException)) return R.X && n.kg.log(L), r;
        let o = {
                event_id: r,
                ...e
            },
            i = (t.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(t, o, i || a)), o.event_id;
    }
    captureSession(t) {
        'string' != typeof t.release ? R.X && n.kg.warn('Discarded session because of missing or non-string release') : (this.sendSession(t), (0, f.CT)(t, { init: !1 }));
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
        return e ? (this.emit('flush'), this._isClientDoneProcessing(t).then((a) => e.flush(t).then((t) => a && t))) : (0, i.WD)(!0);
    }
    close(t) {
        return this.flush(t).then((t) => ((this.getOptions().enabled = !1), this.emit('close'), t));
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
        (0, A.m7)(this, t, this._integrations), e || (0, A.uf)(this, [t]);
    }
    sendEvent(t, e = {}) {
        this.emit('beforeSendEvent', t, e);
        let a = (0, d.Mq)(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (let t of e.attachments || []) a = (0, c.BO)(a, (0, c.zQ)(t));
        let r = this.sendEnvelope(a);
        r && r.then((e) => this.emit('afterSendEvent', t, e), null);
    }
    sendSession(t) {
        let e = (0, d.Q3)(t, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(e);
    }
    recordDroppedEvent(t, e, a) {
        if (this._options.sendClientReports) {
            let r = 'number' == typeof a ? a : 1,
                _ = `${t}:${e}`;
            R.X && n.kg.log(`Recording outcome: "${_}"${r > 1 ? ` (${r} times)` : ''}`), (this._outcomes[_] = (this._outcomes[_] || 0) + r);
        }
    }
    on(t, e) {
        let a = (this._hooks[t] = this._hooks[t] || []);
        return (
            a.push(e),
            () => {
                let t = a.indexOf(e);
                t > -1 && a.splice(t, 1);
            }
        );
    }
    emit(t, ...e) {
        let a = this._hooks[t];
        a && a.forEach((t) => t(...e));
    }
    sendEnvelope(t) {
        return (this.emit('beforeEnvelope', t), this._isEnabled() && this._transport) ? this._transport.send(t).then(null, (t) => (R.X && n.kg.error('Error while sending event:', t), t)) : (R.X && n.kg.error('Transport disabled'), (0, i.WD)({}));
    }
    _setupIntegrations() {
        let { integrations: t } = this._options;
        (this._integrations = (0, A.q4)(this, t)), (0, A.uf)(this, t);
    }
    _updateSessionFromEvent(t, e) {
        let a = !1,
            r = !1,
            n = e.exception && e.exception.values;
        if (n)
            for (let t of ((r = !0), n)) {
                let e = t.mechanism;
                if (e && !1 === e.handled) {
                    a = !0;
                    break;
                }
            }
        let _ = 'ok' === t.status;
        ((_ && 0 === t.errors) || (_ && a)) &&
            ((0, f.CT)(t, {
                ...(a && { status: 'crashed' }),
                errors: t.errors || Number(r || a)
            }),
            this.captureSession(t));
    }
    _isClientDoneProcessing(t) {
        return new i.cW((e) => {
            let a = 0,
                r = setInterval(() => {
                    0 == this._numProcessing ? (clearInterval(r), e(!0)) : ((a += 1), t && a >= t && (clearInterval(r), e(!1)));
                }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(t, e, a, r = (0, I.aF)()) {
        let n = this.getOptions(),
            _ = Object.keys(this._integrations);
        return (
            !e.integrations && _.length > 0 && (e.integrations = _),
            this.emit('preprocessEvent', t, e),
            t.type || r.setLastEventId(t.event_id || e.event_id),
            (0, T.R)(n, t, e, a, this, r).then((t) => {
                if (null === t) return t;
                let e = {
                    ...r.getPropagationContext(),
                    ...(a ? a.getPropagationContext() : void 0)
                };
                if (!(t.contexts && t.contexts.trace) && e) {
                    let { traceId: a, spanId: r, parentSpanId: n, dsc: _ } = e;
                    (t.contexts = {
                        trace: (0, s.Jr)({
                            trace_id: a,
                            span_id: r,
                            parent_span_id: n
                        }),
                        ...t.contexts
                    }),
                        (t.sdkProcessingMetadata = {
                            dynamicSamplingContext: _ || (0, p._l)(a, this),
                            ...t.sdkProcessingMetadata
                        });
                }
                return t;
            })
        );
    }
    _captureEvent(t, e = {}, a) {
        return this._processEvent(t, e, a).then(
            (t) => t.event_id,
            (t) => {
                R.X && ('log' === t.logLevel ? n.kg.log(t.message) : n.kg.warn(t));
            }
        );
    }
    _processEvent(t, e, a) {
        let r = this.getOptions(),
            { sampleRate: n } = r,
            _ = D(t),
            c = O(t),
            s = t.type || 'error',
            l = `before send for type \`${s}\``,
            u = void 0 === n ? void 0 : (0, N.o)(n);
        if (c && 'number' == typeof u && Math.random() > u) return this.recordDroppedEvent('sample_rate', 'error', t), (0, i.$2)(new E.b(`Discarding event because it's not included in the random sample (sampling rate = ${n})`, 'log'));
        let I = 'replay_event' === s ? 'replay' : s,
            R = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(t, e, a, R)
            .then((a) => {
                if (null === a) throw (this.recordDroppedEvent('event_processor', I, t), new E.b('An event processor returned `null`, will not send event.', 'log'));
                return e.data && !0 === e.data.__sentry__
                    ? a
                    : (function (t, e) {
                          let a = `${e} must return \`null\` or a valid event.`;
                          if ((0, o.J8)(t))
                              return t.then(
                                  (t) => {
                                      if (!(0, o.PO)(t) && null !== t) throw new E.b(a);
                                      return t;
                                  },
                                  (t) => {
                                      throw new E.b(`${e} rejected with ${t}`);
                                  }
                              );
                          if (!(0, o.PO)(t) && null !== t) throw new E.b(a);
                          return t;
                      })(
                          (function (t, e, a, r) {
                              let { beforeSend: n, beforeSendTransaction: _, beforeSendSpan: o } = e;
                              if (O(a) && n) return n(a, r);
                              if (D(a)) {
                                  if (a.spans && o) {
                                      let e = [];
                                      for (let r of a.spans) {
                                          let a = o(r);
                                          a ? e.push(a) : t.recordDroppedEvent('before_send', 'span');
                                      }
                                      a.spans = e;
                                  }
                                  if (_) {
                                      if (a.spans) {
                                          let t = a.spans.length;
                                          a.sdkProcessingMetadata = {
                                              ...a.sdkProcessingMetadata,
                                              spanCountBeforeProcessing: t
                                          };
                                      }
                                      return _(a, r);
                                  }
                              }
                              return a;
                          })(this, r, a, e),
                          l
                      );
            })
            .then((r) => {
                if (null === r) {
                    if ((this.recordDroppedEvent('before_send', I, t), _)) {
                        let e = 1 + (t.spans || []).length;
                        this.recordDroppedEvent('before_send', 'span', e);
                    }
                    throw new E.b(`${l} returned \`null\`, will not send event.`, 'log');
                }
                let n = a && a.getSession();
                if ((!_ && n && this._updateSessionFromEvent(n, r), _)) {
                    let t = ((r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing) || 0) - (r.spans ? r.spans.length : 0);
                    t > 0 && this.recordDroppedEvent('before_send', 'span', t);
                }
                let o = r.transaction_info;
                return (
                    _ &&
                        o &&
                        r.transaction !== t.transaction &&
                        (r.transaction_info = {
                            ...o,
                            source: 'custom'
                        }),
                    this.sendEvent(r, e),
                    r
                );
            })
            .then(null, (t) => {
                if (t instanceof E.b) throw t;
                throw (
                    (this.captureException(t, {
                        data: { __sentry__: !0 },
                        originalException: t
                    }),
                    new E.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`))
                );
            });
    }
    _process(t) {
        this._numProcessing++,
            t.then(
                (t) => (this._numProcessing--, t),
                (t) => (this._numProcessing--, t)
            );
    }
    _clearOutcomes() {
        let t = this._outcomes;
        return (
            (this._outcomes = {}),
            Object.entries(t).map(([t, e]) => {
                let [a, r] = t.split(':');
                return {
                    reason: a,
                    category: r,
                    quantity: e
                };
            })
        );
    }
    _flushOutcomes() {
        R.X && n.kg.log('Flushing outcomes...');
        let t = this._clearOutcomes();
        if (0 === t.length) {
            R.X && n.kg.log('No outcomes to send');
            return;
        }
        if (!this._dsn) {
            R.X && n.kg.log('No dsn provided, will not send outcomes');
            return;
        }
        R.X && n.kg.log('Sending outcomes:', t);
        let e = (0, l.y)(t, this._options.tunnel && (0, r.RA)(this._dsn));
        this.sendEnvelope(e);
    }
}
function O(t) {
    return void 0 === t.type;
}
function D(t) {
    return 'transaction' === t.type;
}
