a.d(e, {
    GK: () => O,
    Iw: () => C,
    V0: () => D,
    _d: () => y,
    qp: () => g,
    yn: () => P
});
var r = a(370541),
    n = a(731889),
    _ = a(622916),
    o = a(356442),
    i = a(263449),
    c = a(833873),
    s = a(255768),
    E = a(988097),
    l = a(366569),
    u = a(73453),
    I = a(99342),
    R = a(696486),
    d = a(305625),
    A = a(966497),
    f = a(787659),
    N = a(789112),
    p = a(275689),
    T = a(793373),
    L = a(881243);
let h = '__SENTRY_SUPPRESS_TRACING__';
function O(t, e) {
    let a = S();
    if (a.startSpan) return a.startSpan(t, e);
    let r = v(t),
        { forceTransaction: n, parentSpan: _ } = t;
    return (0, i.$e)(t.scope, () =>
        b(_)(() => {
            let a = (0, i.nZ)(),
                _ = G(a),
                o =
                    t.onlyIfParent && !_
                        ? new N.b()
                        : m({
                              parentSpan: _,
                              spanArguments: r,
                              forceTransaction: n,
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
                                code: T.jt,
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
        { forceTransaction: n, parentSpan: _ } = t;
    return (0, i.$e)(t.scope, () =>
        b(_)(() => {
            let a = (0, i.nZ)(),
                _ = G(a),
                o =
                    t.onlyIfParent && !_
                        ? new N.b()
                        : m({
                              parentSpan: _,
                              spanArguments: r,
                              forceTransaction: n,
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
                                code: T.jt,
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
        { forceTransaction: r, parentSpan: n } = t;
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== n ? (t) => y(n, t) : (t) => t())(() => {
        let e = (0, i.nZ)(),
            n = G(e);
        return t.onlyIfParent && !n
            ? new N.b()
            : m({
                  parentSpan: n,
                  spanArguments: a,
                  forceTransaction: r,
                  scope: e
              });
    });
}
let P = ({ sentryTrace: t, baggage: e }, a) =>
    (0, i.$e)((n) => {
        let _ = (0, r.pT)(t, e);
        return n.setPropagationContext(_), a();
    });
function y(t, e) {
    let a = S();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, I.D)(a, t || void 0), e(a)));
}
function C(t) {
    return (0, i.$e)((e) => (e.setPropagationContext((0, n.Q)()), s.X && _.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`), y(null, t)));
}
function m({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let n;
    if (!(0, u.z)()) return new N.b();
    let _ = (0, i.aF)();
    if (t && !a)
        (n = (function (t, e, a) {
            let { spanId: r, traceId: n } = t.spanContext(),
                _ = !e.getScopeData().sdkProcessingMetadata[h] && (0, R.Tt)(t),
                o = _
                    ? new p.s({
                          ...a,
                          parentSpanId: r,
                          traceId: n,
                          sampled: _
                      })
                    : new N.b({ traceId: n });
            (0, R.j5)(t, o);
            let c = (0, i.s3)();
            return c && (c.emit('spanStart', o), a.endTimestamp && c.emit('spanEnd', o)), o;
        })(t, r, e)),
            (0, R.j5)(t, n);
    else if (t) {
        let a = (0, d.jC)(t),
            { traceId: _, spanId: o } = t.spanContext(),
            i = (0, R.Tt)(t);
        (n = U(
            {
                traceId: _,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            (0, d.Lh)(n, a);
    } else {
        let {
            traceId: t,
            dsc: a,
            parentSpanId: o,
            sampled: i
        } = {
            ..._.getPropagationContext(),
            ...r.getPropagationContext()
        };
        (n = U(
            {
                traceId: t,
                parentSpanId: o,
                ...e
            },
            r,
            i
        )),
            a && (0, d.Lh)(n, a);
    }
    return (0, A.Z)(n), (0, L.YJ)(n, r, _), n;
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
        n = (r && r.getOptions()) || {},
        { name: _ = '', attributes: o } = t,
        [c, s] = e.getScopeData().sdkProcessingMetadata[h]
            ? [!1]
            : (0, f.R)(n, {
                  name: _,
                  parentSampled: a,
                  attributes: o,
                  transactionContext: {
                      name: _,
                      parentSampled: a
                  }
              }),
        l = new p.s({
            ...t,
            attributes: {
                [E.Zj]: 'custom',
                ...t.attributes
            },
            sampled: c
        });
    return void 0 !== s && l.setAttribute(E.TE, s), r && r.emit('spanStart', l), l;
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
