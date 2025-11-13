a.d(e, {
    GK: () => h,
    Iw: () => S,
    V0: () => P,
    _d: () => g,
    qp: () => C,
    yn: () => D,
});
var r = a(370541),
    _ = a(731889),
    n = a(622916),
    o = a(356442),
    i = a(263449),
    E = a(833873),
    c = a(255768),
    s = a(988097),
    l = a(366569),
    I = a(73453),
    R = a(99342),
    u = a(696486),
    A = a(305625),
    N = a(966497),
    T = a(787659),
    d = a(789112),
    f = a(275689),
    L = a(793373),
    p = a(881243);
let O = "__SENTRY_SUPPRESS_TRACING__";
function h(t, e) {
    let a = y();
    if (a.startSpan) return a.startSpan(t, e);
    let r = v(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        W(n)(() => {
            let a = (0, i.nZ)(),
                n = G(a),
                o =
                    t.onlyIfParent && !n
                        ? new d.b()
                        : m({
                              parentSpan: n,
                              spanArguments: r,
                              forceTransaction: _,
                              scope: a,
                          });
            return (
                (0, R.D)(a, o),
                (0, l.i)(
                    () => e(o),
                    () => {
                        let { status: t } = (0, u.XU)(o);
                        o.isRecording() &&
                            (!t || "ok" === t) &&
                            o.setStatus({
                                code: L.jt,
                                message: "internal_error",
                            });
                    },
                    () => o.end(),
                )
            );
        }),
    );
}
function P(t, e) {
    let a = y();
    if (a.startSpanManual) return a.startSpanManual(t, e);
    let r = v(t),
        { forceTransaction: _, parentSpan: n } = t;
    return (0, i.$e)(t.scope, () =>
        W(n)(() => {
            let a = (0, i.nZ)(),
                n = G(a),
                o =
                    t.onlyIfParent && !n
                        ? new d.b()
                        : m({
                              parentSpan: n,
                              spanArguments: r,
                              forceTransaction: _,
                              scope: a,
                          });
            function E() {
                o.end();
            }
            return (
                (0, R.D)(a, o),
                (0, l.i)(
                    () => e(o, E),
                    () => {
                        let { status: t } = (0, u.XU)(o);
                        o.isRecording() &&
                            (!t || "ok" === t) &&
                            o.setStatus({
                                code: L.jt,
                                message: "internal_error",
                            });
                    },
                )
            );
        }),
    );
}
function C(t) {
    let e = y();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    let a = v(t),
        { forceTransaction: r, parentSpan: _ } = t;
    return (t.scope ? (e) => (0, i.$e)(t.scope, e) : void 0 !== _ ? (t) => g(_, t) : (t) => t())(() => {
        let e = (0, i.nZ)(),
            _ = G(e);
        return t.onlyIfParent && !_
            ? new d.b()
            : m({
                  parentSpan: _,
                  spanArguments: a,
                  forceTransaction: r,
                  scope: e,
              });
    });
}
let D = ({ sentryTrace: t, baggage: e }, a) =>
    (0, i.$e)((_) => {
        let n = (0, r.pT)(t, e);
        return _.setPropagationContext(n), a();
    });
function g(t, e) {
    let a = y();
    return a.withActiveSpan ? a.withActiveSpan(t, e) : (0, i.$e)((a) => ((0, R.D)(a, t || void 0), e(a)));
}
function S(t) {
    return (0, i.$e)(
        (e) => (
            e.setPropagationContext((0, _.Q)()),
            c.X && n.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`),
            g(null, t)
        ),
    );
}
function m({ parentSpan: t, spanArguments: e, forceTransaction: a, scope: r }) {
    let _;
    if (!(0, I.z)()) return new d.b();
    let n = (0, i.aF)();
    if (t && !a)
        (_ = (function (t, e, a) {
            let { spanId: r, traceId: _ } = t.spanContext(),
                n = !e.getScopeData().sdkProcessingMetadata[O] && (0, u.Tt)(t),
                o = n
                    ? new f.s({
                          ...a,
                          parentSpanId: r,
                          traceId: _,
                          sampled: n,
                      })
                    : new d.b({ traceId: _ });
            (0, u.j5)(t, o);
            let E = (0, i.s3)();
            return E && (E.emit("spanStart", o), a.endTimestamp && E.emit("spanEnd", o)), o;
        })(t, r, e)),
            (0, u.j5)(t, _);
    else if (t) {
        let a = (0, A.jC)(t),
            { traceId: n, spanId: o } = t.spanContext(),
            i = (0, u.Tt)(t);
        (_ = U(
            {
                traceId: n,
                parentSpanId: o,
                ...e,
            },
            r,
            i,
        )),
            (0, A.Lh)(_, a);
    } else {
        let {
            traceId: t,
            dsc: a,
            parentSpanId: o,
            sampled: i,
        } = {
            ...n.getPropagationContext(),
            ...r.getPropagationContext(),
        };
        (_ = U(
            {
                traceId: t,
                parentSpanId: o,
                ...e,
            },
            r,
            i,
        )),
            a && (0, A.Lh)(_, a);
    }
    return (0, N.Z)(_), (0, p.YJ)(_, r, n), _;
}
function v(t) {
    let e = {
        isStandalone: (t.experimental || {}).standalone,
        ...t,
    };
    if (t.startTime) {
        let a = { ...e };
        return (a.startTimestamp = (0, u.$k)(t.startTime)), delete a.startTime, a;
    }
    return e;
}
function y() {
    let t = (0, o.c)();
    return (0, E.G)(t);
}
function U(t, e, a) {
    let r = (0, i.s3)(),
        _ = (r && r.getOptions()) || {},
        { name: n = "", attributes: o } = t,
        [E, c] = e.getScopeData().sdkProcessingMetadata[O]
            ? [!1]
            : (0, T.R)(_, {
                  name: n,
                  parentSampled: a,
                  attributes: o,
                  transactionContext: {
                      name: n,
                      parentSampled: a,
                  },
              }),
        l = new f.s({
            ...t,
            attributes: {
                [s.Zj]: "custom",
                ...t.attributes,
            },
            sampled: E,
        });
    return void 0 !== c && l.setAttribute(s.TE, c), r && r.emit("spanStart", l), l;
}
function G(t) {
    let e = (0, R.Y)(t);
    if (!e) return;
    let a = (0, i.s3)();
    return (a ? a.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, u.Gx)(e) : e;
}
function W(t) {
    return void 0 !== t ? (e) => g(t, e) : (t) => t();
}
