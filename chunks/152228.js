_.d(e, {
    GK: () => C,
    Iw: () => g,
    V0: () => P,
    _d: () => S,
    qp: () => h,
    yn: () => D,
});
var a = _(370541),
    r = _(731889),
    n = _(622916),
    o = _(356442),
    E = _(263449),
    i = _(833873),
    c = _(255768),
    s = _(988097),
    l = _(366569),
    I = _(73453),
    R = _(99342),
    N = _(696486),
    A = _(305625),
    u = _(966497),
    T = _(787659),
    d = _(789112),
    f = _(275689),
    O = _(793373),
    L = _(881243);
let p = "__SENTRY_SUPPRESS_TRACING__";
function C(t, e) {
    let _ = G();
    if (_.startSpan) return _.startSpan(t, e);
    let a = m(t),
        { forceTransaction: r, parentSpan: n } = t;
    return (0, E.$e)(t.scope, () =>
        W(n)(() => {
            let _ = (0, E.nZ)(),
                n = U(_),
                o =
                    t.onlyIfParent && !n
                        ? new d.b()
                        : y({
                              parentSpan: n,
                              spanArguments: a,
                              forceTransaction: r,
                              scope: _,
                          });
            return (
                (0, R.D)(_, o),
                (0, l.i)(
                    () => e(o),
                    () => {
                        let { status: t } = (0, N.XU)(o);
                        o.isRecording() &&
                            (!t || "ok" === t) &&
                            o.setStatus({
                                code: O.jt,
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
    let _ = G();
    if (_.startSpanManual) return _.startSpanManual(t, e);
    let a = m(t),
        { forceTransaction: r, parentSpan: n } = t;
    return (0, E.$e)(t.scope, () =>
        W(n)(() => {
            let _ = (0, E.nZ)(),
                n = U(_),
                o =
                    t.onlyIfParent && !n
                        ? new d.b()
                        : y({
                              parentSpan: n,
                              spanArguments: a,
                              forceTransaction: r,
                              scope: _,
                          });
            function i() {
                o.end();
            }
            return (
                (0, R.D)(_, o),
                (0, l.i)(
                    () => e(o, i),
                    () => {
                        let { status: t } = (0, N.XU)(o);
                        o.isRecording() &&
                            (!t || "ok" === t) &&
                            o.setStatus({
                                code: O.jt,
                                message: "internal_error",
                            });
                    },
                )
            );
        }),
    );
}
function h(t) {
    let e = G();
    if (e.startInactiveSpan) return e.startInactiveSpan(t);
    let _ = m(t),
        { forceTransaction: a, parentSpan: r } = t;
    return (t.scope ? (e) => (0, E.$e)(t.scope, e) : void 0 !== r ? (t) => S(r, t) : (t) => t())(() => {
        let e = (0, E.nZ)(),
            r = U(e);
        return t.onlyIfParent && !r
            ? new d.b()
            : y({
                  parentSpan: r,
                  spanArguments: _,
                  forceTransaction: a,
                  scope: e,
              });
    });
}
let D = ({ sentryTrace: t, baggage: e }, _) =>
    (0, E.$e)((r) => {
        let n = (0, a.pT)(t, e);
        return r.setPropagationContext(n), _();
    });
function S(t, e) {
    let _ = G();
    return _.withActiveSpan ? _.withActiveSpan(t, e) : (0, E.$e)((_) => ((0, R.D)(_, t || void 0), e(_)));
}
function g(t) {
    return (0, E.$e)(
        (e) => (
            e.setPropagationContext((0, r.Q)()),
            c.X && n.kg.info(`Starting a new trace with id ${e.getPropagationContext().traceId}`),
            S(null, t)
        ),
    );
}
function y({ parentSpan: t, spanArguments: e, forceTransaction: _, scope: a }) {
    let r;
    if (!(0, I.z)()) return new d.b();
    let n = (0, E.aF)();
    if (t && !_)
        (r = (function (t, e, _) {
            let { spanId: a, traceId: r } = t.spanContext(),
                n = !e.getScopeData().sdkProcessingMetadata[p] && (0, N.Tt)(t),
                o = n
                    ? new f.s({
                          ..._,
                          parentSpanId: a,
                          traceId: r,
                          sampled: n,
                      })
                    : new d.b({ traceId: r });
            (0, N.j5)(t, o);
            let i = (0, E.s3)();
            return i && (i.emit("spanStart", o), _.endTimestamp && i.emit("spanEnd", o)), o;
        })(t, a, e)),
            (0, N.j5)(t, r);
    else if (t) {
        let _ = (0, A.jC)(t),
            { traceId: n, spanId: o } = t.spanContext(),
            E = (0, N.Tt)(t);
        (r = v(
            {
                traceId: n,
                parentSpanId: o,
                ...e,
            },
            a,
            E,
        )),
            (0, A.Lh)(r, _);
    } else {
        let {
            traceId: t,
            dsc: _,
            parentSpanId: o,
            sampled: E,
        } = {
            ...n.getPropagationContext(),
            ...a.getPropagationContext(),
        };
        (r = v(
            {
                traceId: t,
                parentSpanId: o,
                ...e,
            },
            a,
            E,
        )),
            _ && (0, A.Lh)(r, _);
    }
    return (0, u.Z)(r), (0, L.YJ)(r, a, n), r;
}
function m(t) {
    let e = {
        isStandalone: (t.experimental || {}).standalone,
        ...t,
    };
    if (t.startTime) {
        let _ = { ...e };
        return (_.startTimestamp = (0, N.$k)(t.startTime)), delete _.startTime, _;
    }
    return e;
}
function G() {
    let t = (0, o.c)();
    return (0, i.G)(t);
}
function v(t, e, _) {
    let a = (0, E.s3)(),
        r = (a && a.getOptions()) || {},
        { name: n = "", attributes: o } = t,
        [i, c] = e.getScopeData().sdkProcessingMetadata[p]
            ? [!1]
            : (0, T.R)(r, {
                  name: n,
                  parentSampled: _,
                  attributes: o,
                  transactionContext: {
                      name: n,
                      parentSampled: _,
                  },
              }),
        l = new f.s({
            ...t,
            attributes: {
                [s.Zj]: "custom",
                ...t.attributes,
            },
            sampled: i,
        });
    return void 0 !== c && l.setAttribute(s.TE, c), a && a.emit("spanStart", l), l;
}
function U(t) {
    let e = (0, R.Y)(t);
    if (!e) return;
    let _ = (0, E.s3)();
    return (_ ? _.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, N.Gx)(e) : e;
}
function W(t) {
    return void 0 !== t ? (e) => S(t, e) : (t) => t();
}
