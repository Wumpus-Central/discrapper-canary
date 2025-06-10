a.d(e, {
    GK: () => O,
    Iw: () => C,
    V0: () => D,
    _d: () => y,
    qp: () => g,
    yn: () => P
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
    u = a(73453),
    I = a(99342),
    R = a(696486),
    d = a(305625),
    N = a(966497),
    A = a(787659),
    f = a(789112),
    T = a(275689),
    p = a(793373),
    L = a(881243);
let h = '__SENTRY_SUPPRESS_TRACING__';
function O(t, e) {
    let a = S();
    if (a.startSpan) return a.startSpan(t, e);
    let r = v(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        b(n)(() => {
            let a = (0, i.nZ)(),
                n = G(a),
                o =
                    t.onlyIfParent && !n
                        ? new f.b()
                        : m({
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
    let a = S();
    if (a.startSpanManual) return a.startSpanManual(t, e);
    let r = v(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        b(n)(() => {
            let a = (0, i.nZ)(),
                n = G(a),
                o =
                    t.onlyIfParent && !n
                        ? new f.b()
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
                (0, I.D)(a, o),
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
function g(t) {
    let e = S();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    let a = v(t),
        { forceTransaction: r, parentSpan: _ } = t;
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== _ ? (t) => y(_, t) : (t) => t())(() => {
        let e = (0, i.nZ)(),
            _ = G(e);
        return t.onlyIfParent && !_
            ? new f.b()
            : m({
                  parentSpan: _,
                  spanArguments: a,
                  forceTransaction: r,
                  scope: e
              });
    });
}
let P = ({ sentryTrace: t, baggage: e }, a) =>
    (0, i.$e)((_) => {
        let n = (0, r.pT)(t, e);
        return _.setPropagationContext(n), a();
    });
function y(t, e) {
    let a = S();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, I.D)(a, t || void 0), e(a)));
}
function C(t) {
    return (0, i.$e)((e) => (e.setPropagationContext((0, _.Q)()), E.X && n.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`), y(null, t)));
}
function m({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let _;
    if (!(0, u.z)()) return new f.b();
    let n = (0, i.aF)();
    if (t && !a)
        (_ = (function (t, e, a) {
            let { spanId: r, traceId: _ } = t.spanContext(),
                n = !e.getScopeData().sdkProcessingMetadata[h] && (0, R.Tt)(t),
                o = n
                    ? new T.s({
                          ...a,
                          parentSpanId: r,
                          traceId: _,
                          sampled: n
                      })
                    : new f.b({ traceId: _ });
            (0, R.j5)(t, o);
            let c = (0, i.s3)();
            return c && (c.emit('spanStart', o), a.endTimestamp && c.emit('spanEnd', o)), o;
        })(t, r, e)),
            (0, R.j5)(t, _);
    else if (t) {
        let a = (0, d.jC)(t),
            { traceId: n, spanId: o } = t.spanContext(),
            i = (0, R.Tt)(t);
        (_ = U(
            {
                traceId: n,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            (0, d.Lh)(_, a);
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
        (_ = U(
            {
                traceId: t,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            a && (0, d.Lh)(_, a);
    }
    return (0, N.Z)(_), (0, L.YJ)(_, r, n), _;
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
function S() {
    let t = (0, o.c)();
    return (0, c.G)(t);
}
function U(t, e, a) {
    let r = (0, i.s3)(),
        _ = (r && r.getOptions()) || {},
        { name: n = '', attributes: o } = t,
        [c, E] = e.getScopeData().sdkProcessingMetadata[h]
            ? [!1]
            : (0, A.R)(_, {
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
                [s.Zj]: 'custom',
                ...t.attributes
            },
            sampled: c
        });
    return void 0 !== E && l.setAttribute(s.TE, E), r && r.emit('spanStart', l), l;
}
function G(t) {
    let e = (0, I.Y)(t);
    if (!e) return;
    let a = (0, i.s3)();
    return (a ? a.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(e) : e;
}
function b(t) {
    return void 0 !== t ? (e) => y(t, e) : (t) => t();
}
