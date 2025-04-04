a.d(e, {
    GK: () => O,
    Iw: () => y,
    V0: () => D,
    _d: () => m,
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
    p = a(789112),
    N = a(275689),
    T = a(793373),
    L = a(881243);
let h = '__SENTRY_SUPPRESS_TRACING__';
function O(t, e) {
    let a = S();
    if (a.startSpan) return a.startSpan(t, e);
    let r = C(t),
        { forceTransaction: n, parentSpan: _ } = t;
    return (0, i.$e)(t.scope, () =>
        M(_)(() => {
            let a = (0, i.nZ)(),
                _ = b(a),
                o =
                    t.onlyIfParent && !_
                        ? new p.b()
                        : v({
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
    let r = C(t),
        { forceTransaction: n, parentSpan: _ } = t;
    return (0, i.$e)(t.scope, () =>
        M(_)(() => {
            let a = (0, i.nZ)(),
                _ = b(a),
                o =
                    t.onlyIfParent && !_
                        ? new p.b()
                        : v({
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
    let a = C(t),
        { forceTransaction: r, parentSpan: n } = t;
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== n ? (t) => m(n, t) : (t) => t())(() => {
        let e = (0, i.nZ)(),
            n = b(e);
        return t.onlyIfParent && !n
            ? new p.b()
            : v({
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
function m(t, e) {
    let a = S();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, I.D)(a, t || void 0), e(a)));
}
function y(t) {
    return (0, i.$e)((e) => (e.setPropagationContext((0, n.Q)()), s.X && _.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`), m(null, t)));
}
function v({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let n;
    if (!(0, u.z)()) return new p.b();
    let _ = (0, i.aF)();
    if (t && !a)
        (n = (function (t, e, a) {
            let { spanId: r, traceId: n } = t.spanContext(),
                _ = !e.getScopeData().sdkProcessingMetadata[h] && (0, R.Tt)(t),
                o = _
                    ? new N.s({
                          ...a,
                          parentSpanId: r,
                          traceId: n,
                          sampled: _
                      })
                    : new p.b({ traceId: n });
            (0, R.j5)(t, o);
            let c = (0, i.s3)();
            return c && (c.emit('spanStart', o), a.endTimestamp && c.emit('spanEnd', o)), o;
        })(t, r, e)),
            (0, R.j5)(t, n);
    else if (t) {
        let a = (0, d.jC)(t),
            { traceId: _, spanId: o } = t.spanContext(),
            i = (0, R.Tt)(t);
        (n = G(
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
        (n = G(
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
function C(t) {
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
function G(t, e, a) {
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
        l = new N.s({
            ...t,
            attributes: {
                [E.Zj]: 'custom',
                ...t.attributes
            },
            sampled: c
        });
    return void 0 !== s && l.setAttribute(E.TE, s), r && r.emit('spanStart', l), l;
}
function b(t) {
    let e = (0, I.Y)(t);
    if (!e) return;
    let a = (0, i.s3)();
    return (a ? a.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(e) : e;
}
function M(t) {
    return void 0 !== t ? (e) => m(t, e) : (t) => t();
}
