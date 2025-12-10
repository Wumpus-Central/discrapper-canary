r.d(t, {
    GK: () => S,
    Iw: () => m,
    V0: () => D,
    _d: () => g,
    qp: () => C,
    yn: () => L,
});
var n = r(490990),
    a = r(974352),
    i = r(98076),
    o = r(732418),
    _ = r(509440),
    s = r(805666),
    c = r(4757),
    E = r(8062),
    l = r(990663),
    u = r(451542),
    d = r(354023),
    I = r(82255),
    p = r(464338),
    R = r(149821),
    T = r(671926),
    A = r(25855),
    f = r(74518),
    N = r(366000),
    O = r(39137);
let h = "__SENTRY_SUPPRESS_TRACING__";
function S(e, t) {
    let r = v();
    if (r.startSpan) return r.startSpan(e, t);
    let n = P(e),
        { forceTransaction: a, parentSpan: i } = e;
    return (0, _.$e)(e.scope, () =>
        G(i)(() => {
            let r = (0, _.nZ)(),
                i = w(r),
                o =
                    e.onlyIfParent && !i
                        ? new A.b()
                        : y({
                              parentSpan: i,
                              spanArguments: n,
                              forceTransaction: a,
                              scope: r,
                          });
            return (
                (0, d.D)(r, o),
                (0, l.i)(
                    () => t(o),
                    () => {
                        let { status: e } = (0, I.XU)(o);
                        o.isRecording() &&
                            (!e || "ok" === e) &&
                            o.setStatus({
                                code: N.jt,
                                message: "internal_error",
                            });
                    },
                    () => o.end(),
                )
            );
        }),
    );
}
function D(e, t) {
    let r = v();
    if (r.startSpanManual) return r.startSpanManual(e, t);
    let n = P(e),
        { forceTransaction: a, parentSpan: i } = e;
    return (0, _.$e)(e.scope, () =>
        G(i)(() => {
            let r = (0, _.nZ)(),
                i = w(r),
                o =
                    e.onlyIfParent && !i
                        ? new A.b()
                        : y({
                              parentSpan: i,
                              spanArguments: n,
                              forceTransaction: a,
                              scope: r,
                          });
            function s() {
                o.end();
            }
            return (
                (0, d.D)(r, o),
                (0, l.i)(
                    () => t(o, s),
                    () => {
                        let { status: e } = (0, I.XU)(o);
                        o.isRecording() &&
                            (!e || "ok" === e) &&
                            o.setStatus({
                                code: N.jt,
                                message: "internal_error",
                            });
                    },
                )
            );
        }),
    );
}
function C(e) {
    let t = v();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let r = P(e),
        { forceTransaction: n, parentSpan: a } = e;
    return (e.scope ? (t) => (0, _.$e)(e.scope, t) : void 0 !== a ? (e) => g(a, e) : (e) => e())(() => {
        let t = (0, _.nZ)(),
            a = w(t);
        return e.onlyIfParent && !a
            ? new A.b()
            : y({
                  parentSpan: a,
                  spanArguments: r,
                  forceTransaction: n,
                  scope: t,
              });
    });
}
let L = ({ sentryTrace: e, baggage: t }, r) =>
    (0, _.$e)((a) => {
        let i = (0, n.pT)(e, t);
        return a.setPropagationContext(i), r();
    });
function g(e, t) {
    let r = v();
    return r.withActiveSpan ? r.withActiveSpan(e, t) : (0, _.$e)((r) => ((0, d.D)(r, e || void 0), t(r)));
}
function m(e) {
    return (0, _.$e)(
        (t) => (
            t.setPropagationContext((0, a.Q)()),
            c.X && i.kg.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`),
            g(null, e)
        ),
    );
}
function y({ parentSpan: e, spanArguments: t, forceTransaction: r, scope: n }) {
    let a;
    if (!(0, u.z)()) return new A.b();
    let i = (0, _.aF)();
    if (e && !r)
        (a = (function (e, t, r) {
            let { spanId: n, traceId: a } = e.spanContext(),
                i = !t.getScopeData().sdkProcessingMetadata[h] && (0, I.Tt)(e),
                o = i
                    ? new f.s({
                          ...r,
                          parentSpanId: n,
                          traceId: a,
                          sampled: i,
                      })
                    : new A.b({ traceId: a });
            (0, I.j5)(e, o);
            let s = (0, _.s3)();
            return s && (s.emit("spanStart", o), r.endTimestamp && s.emit("spanEnd", o)), o;
        })(e, n, t)),
            (0, I.j5)(e, a);
    else if (e) {
        let r = (0, p.jC)(e),
            { traceId: i, spanId: o } = e.spanContext(),
            _ = (0, I.Tt)(e);
        (a = M(
            {
                traceId: i,
                parentSpanId: o,
                ...t,
            },
            n,
            _,
        )),
            (0, p.Lh)(a, r);
    } else {
        let {
            traceId: e,
            dsc: r,
            parentSpanId: o,
            sampled: _,
        } = {
            ...i.getPropagationContext(),
            ...n.getPropagationContext(),
        };
        (a = M(
            {
                traceId: e,
                parentSpanId: o,
                ...t,
            },
            n,
            _,
        )),
            r && (0, p.Lh)(a, r);
    }
    return (0, R.Z)(a), (0, O.YJ)(a, n, i), a;
}
function P(e) {
    let t = {
        isStandalone: (e.experimental || {}).standalone,
        ...e,
    };
    if (e.startTime) {
        let r = { ...t };
        return (r.startTimestamp = (0, I.$k)(e.startTime)), delete r.startTime, r;
    }
    return t;
}
function v() {
    let e = (0, o.c)();
    return (0, s.G)(e);
}
function M(e, t, r) {
    let n = (0, _.s3)(),
        a = (n && n.getOptions()) || {},
        { name: i = "", attributes: o } = e,
        [s, c] = t.getScopeData().sdkProcessingMetadata[h]
            ? [!1]
            : (0, T.R)(a, {
                  name: i,
                  parentSampled: r,
                  attributes: o,
                  transactionContext: {
                      name: i,
                      parentSampled: r,
                  },
              }),
        l = new f.s({
            ...e,
            attributes: {
                [E.Zj]: "custom",
                ...e.attributes,
            },
            sampled: s,
        });
    return void 0 !== c && l.setAttribute(E.TE, c), n && n.emit("spanStart", l), l;
}
function w(e) {
    let t = (0, d.Y)(e);
    if (!t) return;
    let r = (0, _.s3)();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, I.Gx)(t) : t;
}
function G(e) {
    return void 0 !== e ? (t) => g(e, t) : (e) => e();
}
