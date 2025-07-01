a.d(e, {
    GK: () => O,
    Iw: () => m,
    V0: () => P,
    _d: () => C,
    qp: () => g,
    yn: () => D
});
var r = a(370541),
    _ = a(731889),
    n = a(622916),
    o = a(356442),
    i = a(263449),
    c = a(833873),
    s = a(255768),
    E = a(988097),
    l = a(366569),
    u = a(73453),
    I = a(99342),
    d = a(696486),
    R = a(305625),
    N = a(966497),
    f = a(787659),
    A = a(789112),
    T = a(275689),
    p = a(793373),
    L = a(881243);
let h = '__SENTRY_SUPPRESS_TRACING__';
function O(t, e) {
    let a = S();
    if (a.startSpan) return a.startSpan(t, e);
    let r = y(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        G(n)(() => {
            let a = (0, i.nZ)(),
                n = b(a),
                o =
                    t.onlyIfParent && !n
                        ? new A.b()
                        : v({
                              parentSpan: n,
                              spanArguments: r,
                              forceTransaction: _,
                              scope: a
                          });
            return (
                (0, I.D)(a, o),
                (0, l.i)(
                    () => e(o),
                    () => {
                        let { status: t } = (0, d.XU)(o);
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
function P(t, e) {
    let a = S();
    if (a.startSpanManual) return a.startSpanManual(t, e);
    let r = y(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        G(n)(() => {
            let a = (0, i.nZ)(),
                n = b(a),
                o =
                    t.onlyIfParent && !n
                        ? new A.b()
                        : v({
                              parentSpan: n,
                              spanArguments: r,
                              forceTransaction: _,
                              scope: a
                          });
            function c() {
                o.end();
            }
            return (
                (0, I.D)(a, o),
                (0, l.i)(
                    () => e(o, c),
                    () => {
                        let { status: t } = (0, d.XU)(o);
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
function g(t) {
    let e = S();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    let a = y(t),
        { forceTransaction: r, parentSpan: _ } = t;
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== _ ? (t) => C(_, t) : (t) => t())(() => {
        let e = (0, i.nZ)(),
            _ = b(e);
        return t.onlyIfParent && !_
            ? new A.b()
            : v({
                  parentSpan: _,
                  spanArguments: a,
                  forceTransaction: r,
                  scope: e
              });
    });
}
let D = ({ sentryTrace: t, baggage: e }, a) =>
    (0, i.$e)((_) => {
        let n = (0, r.pT)(t, e);
        return (_.setPropagationContext(n), a());
    });
function C(t, e) {
    let a = S();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, I.D)(a, t || void 0), e(a)));
}
function m(t) {
    return (0, i.$e)((e) => (e.setPropagationContext((0, _.Q)()), s.X && n.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`), C(null, t)));
}
function v({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let _;
    if (!(0, u.z)()) return new A.b();
    let n = (0, i.aF)();
    if (t && !a)
        ((_ = (function (t, e, a) {
            let { spanId: r, traceId: _ } = t.spanContext(),
                n = !e.getScopeData().sdkProcessingMetadata[h] && (0, d.Tt)(t),
                o = n
                    ? new T.s({
                          ...a,
                          parentSpanId: r,
                          traceId: _,
                          sampled: n
                      })
                    : new A.b({ traceId: _ });
            (0, d.j5)(t, o);
            let c = (0, i.s3)();
            return (c && (c.emit('spanStart', o), a.endTimestamp && c.emit('spanEnd', o)), o);
        })(t, r, e)),
            (0, d.j5)(t, _));
    else if (t) {
        let a = (0, R.jC)(t),
            { traceId: n, spanId: o } = t.spanContext(),
            i = (0, d.Tt)(t);
        ((_ = U(
            {
                traceId: n,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            (0, R.Lh)(_, a));
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
        ((_ = U(
            {
                traceId: t,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            a && (0, R.Lh)(_, a));
    }
    return ((0, N.Z)(_), (0, L.YJ)(_, r, n), _);
}
function y(t) {
    let e = {
        isStandalone: (t.experimental || {}).standalone,
        ...t
    };
    if (t.startTime) {
        let a = { ...e };
        return ((a.startTimestamp = (0, d.$k)(t.startTime)), delete a.startTime, a);
    }
    return e;
}
function S() {
    let t = (0, o.c)();
    return (0, c.G)(t);
}
function U(t, e, a) {
    let r = (0, i.s3)(),
        _ = (r && r.getOptions()) || {},
        { name: n = '', attributes: o } = t,
        [c, s] = e.getScopeData().sdkProcessingMetadata[h]
            ? [!1]
            : (0, f.R)(_, {
                  name: n,
                  parentSampled: a,
                  attributes: o,
                  transactionContext: {
                      name: n,
                      parentSampled: a
                  }
              }),
        l = new T.s({
            ...t,
            attributes: {
                [E.Zj]: 'custom',
                ...t.attributes
            },
            sampled: c
        });
    return (void 0 !== s && l.setAttribute(E.TE, s), r && r.emit('spanStart', l), l);
}
function b(t) {
    let e = (0, I.Y)(t);
    if (!e) return;
    let a = (0, i.s3)();
    return (a ? a.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, d.Gx)(e) : e;
}
function G(t) {
    return void 0 !== t ? (e) => C(t, e) : (t) => t();
}
