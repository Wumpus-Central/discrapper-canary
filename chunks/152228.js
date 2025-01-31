a.d(e, {
    GK: () => O,
    Iw: () => P,
    V0: () => D,
    _d: () => y,
    qp: () => g,
    yn: () => m
});
var r = a(370541),
    n = a(731889),
    o = a(622916),
    _ = a(356442),
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
    T = a(275689),
    N = a(793373),
    L = a(881243);
let h = '__SENTRY_SUPPRESS_TRACING__';
function O(t, e) {
    let a = S();
    if (a.startSpan) return a.startSpan(t, e);
    let r = C(t),
        { forceTransaction: n, parentSpan: o } = t;
    return (0, i.$e)(t.scope, () =>
        M(o)(() => {
            let a = (0, i.nZ)(),
                o = b(a),
                _ =
                    t.onlyIfParent && !o
                        ? new p.b()
                        : v({
                              parentSpan: o,
                              spanArguments: r,
                              forceTransaction: n,
                              scope: a
                          });
            return (
                (0, I.D)(a, _),
                (0, l.i)(
                    () => e(_),
                    () => {
                        let { status: t } = (0, R.XU)(_);
                        _.isRecording() &&
                            (!t || 'ok' === t) &&
                            _.setStatus({
                                code: N.jt,
                                message: 'internal_error'
                            });
                    },
                    () => _.end()
                )
            );
        })
    );
}
function D(t, e) {
    let a = S();
    if (a.startSpanManual) return a.startSpanManual(t, e);
    let r = C(t),
        { forceTransaction: n, parentSpan: o } = t;
    return (0, i.$e)(t.scope, () =>
        M(o)(() => {
            let a = (0, i.nZ)(),
                o = b(a),
                _ =
                    t.onlyIfParent && !o
                        ? new p.b()
                        : v({
                              parentSpan: o,
                              spanArguments: r,
                              forceTransaction: n,
                              scope: a
                          });
            function c() {
                _.end();
            }
            return (
                (0, I.D)(a, _),
                (0, l.i)(
                    () => e(_, c),
                    () => {
                        let { status: t } = (0, R.XU)(_);
                        _.isRecording() &&
                            (!t || 'ok' === t) &&
                            _.setStatus({
                                code: N.jt,
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
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== n ? (t) => y(n, t) : (t) => t())(() => {
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
let m = ({ sentryTrace: t, baggage: e }, a) =>
    (0, i.$e)((n) => {
        let o = (0, r.pT)(t, e);
        return n.setPropagationContext(o), a();
    });
function y(t, e) {
    let a = S();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, I.D)(a, t || void 0), e(a)));
}
function P(t) {
    return (0, i.$e)((e) => (e.setPropagationContext((0, n.Q)()), s.X && o.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`), y(null, t)));
}
function v({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let n;
    if (!(0, u.z)()) return new p.b();
    let o = (0, i.aF)();
    if (t && !a)
        (n = (function (t, e, a) {
            let { spanId: r, traceId: n } = t.spanContext(),
                o = !e.getScopeData().sdkProcessingMetadata[h] && (0, R.Tt)(t),
                _ = o
                    ? new T.s({
                          ...a,
                          parentSpanId: r,
                          traceId: n,
                          sampled: o
                      })
                    : new p.b({ traceId: n });
            (0, R.j5)(t, _);
            let c = (0, i.s3)();
            return c && (c.emit('spanStart', _), a.endTimestamp && c.emit('spanEnd', _)), _;
        })(t, r, e)),
            (0, R.j5)(t, n);
    else if (t) {
        let a = (0, d.jC)(t),
            { traceId: o, spanId: _ } = t.spanContext(),
            i = (0, R.Tt)(t);
        (n = G(
            {
                traceId: o,
                parentSpanId: _,
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
            parentSpanId: _,
            sampled: i
        } = {
            ...o.getPropagationContext(),
            ...r.getPropagationContext()
        };
        (n = G(
            {
                traceId: t,
                parentSpanId: _,
                ...e
            },
            r,
            i
        )),
            a && (0, d.Lh)(n, a);
    }
    return (0, A.Z)(n), (0, L.YJ)(n, r, o), n;
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
    let t = (0, _.c)();
    return (0, c.G)(t);
}
function G(t, e, a) {
    let r = (0, i.s3)(),
        n = (r && r.getOptions()) || {},
        { name: o = '', attributes: _ } = t,
        [c, s] = e.getScopeData().sdkProcessingMetadata[h]
            ? [!1]
            : (0, f.R)(n, {
                  name: o,
                  parentSampled: a,
                  attributes: _,
                  transactionContext: {
                      name: o,
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
    return void 0 !== s && l.setAttribute(E.TE, s), r && r.emit('spanStart', l), l;
}
function b(t) {
    let e = (0, I.Y)(t);
    if (!e) return;
    let a = (0, i.s3)();
    return (a ? a.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(e) : e;
}
function M(t) {
    return void 0 !== t ? (e) => y(t, e) : (t) => t();
}
