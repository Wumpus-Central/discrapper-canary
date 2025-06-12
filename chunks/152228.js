a.d(e, {
    GK: () => h,
    Iw: () => y,
    V0: () => D,
    _d: () => C,
    qp: () => P,
    yn: () => g
});
var r = a(370541),
    _ = a(731889),
    n = a(622916),
    o = a(356442),
    i = a(263449),
    c = a(833873),
    E = a(255768),
    s = a(988097),
    l = a(366569),
    I = a(73453),
    u = a(99342),
    R = a(696486),
    A = a(305625),
    T = a(966497),
    N = a(787659),
    d = a(789112),
    L = a(275689),
    p = a(793373),
    f = a(881243);
let O = '__SENTRY_SUPPRESS_TRACING__';
function h(t, e) {
    let a = U();
    if (a.startSpan) return a.startSpan(t, e);
    let r = v(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        w(n)(() => {
            let a = (0, i.nZ)(),
                n = G(a),
                o =
                    t.onlyIfParent && !n
                        ? new d.b()
                        : m({
                              parentSpan: n,
                              spanArguments: r,
                              forceTransaction: _,
                              scope: a
                          });
            return (
                (0, u.D)(a, o),
                (0, l.i)(
                    () => e(o),
                    () => {
                        let { status: t } = (0, R.XU)(o);
                        o.isRecording() &&
                            (!t || 'ok' === t) &&
                            o.setStatus({
                                code: p.jt,
                                message: 'internal_error'
                            });
                    },
                    () => o.end()
                )
            );
        })
    );
}
function D(t, e) {
    let a = U();
    if (a.startSpanManual) return a.startSpanManual(t, e);
    let r = v(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        w(n)(() => {
            let a = (0, i.nZ)(),
                n = G(a),
                o =
                    t.onlyIfParent && !n
                        ? new d.b()
                        : m({
                              parentSpan: n,
                              spanArguments: r,
                              forceTransaction: _,
                              scope: a
                          });
            function c() {
                o.end();
            }
            return (
                (0, u.D)(a, o),
                (0, l.i)(
                    () => e(o, c),
                    () => {
                        let { status: t } = (0, R.XU)(o);
                        o.isRecording() &&
                            (!t || 'ok' === t) &&
                            o.setStatus({
                                code: p.jt,
                                message: 'internal_error'
                            });
                    }
                )
            );
        })
    );
}
function P(t) {
    let e = U();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    let a = v(t),
        { forceTransaction: r, parentSpan: _ } = t;
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== _ ? (t) => C(_, t) : (t) => t())(() => {
        let e = (0, i.nZ)(),
            _ = G(e);
        return t.onlyIfParent && !_
            ? new d.b()
            : m({
                  parentSpan: _,
                  spanArguments: a,
                  forceTransaction: r,
                  scope: e
              });
    });
}
let g = ({ sentryTrace: t, baggage: e }, a) =>
    (0, i.$e)((_) => {
        let n = (0, r.pT)(t, e);
        return _.setPropagationContext(n), a();
    });
function C(t, e) {
    let a = U();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, u.D)(a, t || void 0), e(a)));
}
function y(t) {
    return (0, i.$e)((e) => (e.setPropagationContext((0, _.Q)()), E.X && n.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`), C(null, t)));
}
function m({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let _;
    if (!(0, I.z)()) return new d.b();
    let n = (0, i.aF)();
    if (t && !a)
        (_ = (function (t, e, a) {
            let { spanId: r, traceId: _ } = t.spanContext(),
                n = !e.getScopeData().sdkProcessingMetadata[O] && (0, R.Tt)(t),
                o = n
                    ? new L.s({
                          ...a,
                          parentSpanId: r,
                          traceId: _,
                          sampled: n
                      })
                    : new d.b({ traceId: _ });
            (0, R.j5)(t, o);
            let c = (0, i.s3)();
            return c && (c.emit('spanStart', o), a.endTimestamp && c.emit('spanEnd', o)), o;
        })(t, r, e)),
            (0, R.j5)(t, _);
    else if (t) {
        let a = (0, A.jC)(t),
            { traceId: n, spanId: o } = t.spanContext(),
            i = (0, R.Tt)(t);
        (_ = S(
            {
                traceId: n,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            (0, A.Lh)(_, a);
    } else {
        let {
            traceId: t,
            dsc: a,
            parentSpanId: o,
            sampled: i
        } = {
            ...n.getPropagationContext(),
            ...r.getPropagationContext()
        };
        (_ = S(
            {
                traceId: t,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            a && (0, A.Lh)(_, a);
    }
    return (0, T.Z)(_), (0, f.YJ)(_, r, n), _;
}
function v(t) {
    let e = {
        isStandalone: (t.experimental || {}).standalone,
        ...t
    };
    if (t.startTime) {
        let a = { ...e };
        return (a.startTimestamp = (0, R.$k)(t.startTime)), delete a.startTime, a;
    }
    return e;
}
function U() {
    let t = (0, o.c)();
    return (0, c.G)(t);
}
function S(t, e, a) {
    let r = (0, i.s3)(),
        _ = (r && r.getOptions()) || {},
        { name: n = '', attributes: o } = t,
        [c, E] = e.getScopeData().sdkProcessingMetadata[O]
            ? [!1]
            : (0, N.R)(_, {
                  name: n,
                  parentSampled: a,
                  attributes: o,
                  transactionContext: {
                      name: n,
                      parentSampled: a
                  }
              }),
        l = new L.s({
            ...t,
            attributes: {
                [s.Zj]: 'custom',
                ...t.attributes
            },
            sampled: c
        });
    return void 0 !== E && l.setAttribute(s.TE, E), r && r.emit('spanStart', l), l;
}
function G(t) {
    let e = (0, u.Y)(t);
    if (!e) return;
    let a = (0, i.s3)();
    return (a ? a.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(e) : e;
}
function w(t) {
    return void 0 !== t ? (e) => C(t, e) : (t) => t();
}
