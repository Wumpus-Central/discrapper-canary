n.d(t, {
    GK: () => S,
    Iw: () => C,
    V0: () => L,
    _d: () => D,
    qp: () => g,
    yn: () => m,
});
var r = n(490990),
    i = n(974352),
    a = n(98076),
    o = n(732418),
    _ = n(509440),
    s = n(805666),
    c = n(4757),
    E = n(8062),
    l = n(990663),
    u = n(451542),
    d = n(354023),
    p = n(82255),
    f = n(464338),
    I = n(149821),
    T = n(671926),
    R = n(25855),
    A = n(74518),
    N = n(366000),
    h = n(39137);
let O = "__SENTRY_SUPPRESS_TRACING__";
function S(e, t) {
    let n = v();
    if (n.startSpan) return n.startSpan(e, t);
    let r = P(e),
        { forceTransaction: i, parentSpan: a } = e;
    return (0, _.$e)(e.scope, () =>
        w(a)(() => {
            let n = (0, _.nZ)(),
                a = M(n),
                o =
                    e.onlyIfParent && !a
                        ? new R.b()
                        : y({
                              parentSpan: a,
                              spanArguments: r,
                              forceTransaction: i,
                              scope: n,
                          });
            return (
                (0, d.D)(n, o),
                (0, l.i)(
                    () => t(o),
                    () => {
                        let { status: e } = (0, p.XU)(o);
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
function L(e, t) {
    let n = v();
    if (n.startSpanManual) return n.startSpanManual(e, t);
    let r = P(e),
        { forceTransaction: i, parentSpan: a } = e;
    return (0, _.$e)(e.scope, () =>
        w(a)(() => {
            let n = (0, _.nZ)(),
                a = M(n),
                o =
                    e.onlyIfParent && !a
                        ? new R.b()
                        : y({
                              parentSpan: a,
                              spanArguments: r,
                              forceTransaction: i,
                              scope: n,
                          });
            function s() {
                o.end();
            }
            return (
                (0, d.D)(n, o),
                (0, l.i)(
                    () => t(o, s),
                    () => {
                        let { status: e } = (0, p.XU)(o);
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
function g(e) {
    let t = v();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let n = P(e),
        { forceTransaction: r, parentSpan: i } = e;
    return (e.scope ? (t) => (0, _.$e)(e.scope, t) : void 0 !== i ? (e) => D(i, e) : (e) => e())(() => {
        let t = (0, _.nZ)(),
            i = M(t);
        return e.onlyIfParent && !i
            ? new R.b()
            : y({
                  parentSpan: i,
                  spanArguments: n,
                  forceTransaction: r,
                  scope: t,
              });
    });
}
let m = ({ sentryTrace: e, baggage: t }, n) =>
    (0, _.$e)((i) => {
        let a = (0, r.pT)(e, t);
        return i.setPropagationContext(a), n();
    });
function D(e, t) {
    let n = v();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : (0, _.$e)((n) => ((0, d.D)(n, e || void 0), t(n)));
}
function C(e) {
    return (0, _.$e)(
        (t) => (
            t.setPropagationContext((0, i.Q)()),
            c.X && a.kg.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`),
            D(null, e)
        ),
    );
}
function y({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
    let i;
    if (!(0, u.z)()) return new R.b();
    let a = (0, _.aF)();
    if (e && !n)
        (i = (function (e, t, n) {
            let { spanId: r, traceId: i } = e.spanContext(),
                a = !t.getScopeData().sdkProcessingMetadata[O] && (0, p.Tt)(e),
                o = a
                    ? new A.s({
                          ...n,
                          parentSpanId: r,
                          traceId: i,
                          sampled: a,
                      })
                    : new R.b({ traceId: i });
            (0, p.j5)(e, o);
            let s = (0, _.s3)();
            return s && (s.emit("spanStart", o), n.endTimestamp && s.emit("spanEnd", o)), o;
        })(e, r, t)),
            (0, p.j5)(e, i);
    else if (e) {
        let n = (0, f.jC)(e),
            { traceId: a, spanId: o } = e.spanContext(),
            _ = (0, p.Tt)(e);
        (i = b(
            {
                traceId: a,
                parentSpanId: o,
                ...t,
            },
            r,
            _,
        )),
            (0, f.Lh)(i, n);
    } else {
        let {
            traceId: e,
            dsc: n,
            parentSpanId: o,
            sampled: _,
        } = {
            ...a.getPropagationContext(),
            ...r.getPropagationContext(),
        };
        (i = b(
            {
                traceId: e,
                parentSpanId: o,
                ...t,
            },
            r,
            _,
        )),
            n && (0, f.Lh)(i, n);
    }
    return (0, I.Z)(i), (0, h.YJ)(i, r, a), i;
}
function P(e) {
    let t = {
        isStandalone: (e.experimental || {}).standalone,
        ...e,
    };
    if (e.startTime) {
        let n = { ...t };
        return (n.startTimestamp = (0, p.$k)(e.startTime)), delete n.startTime, n;
    }
    return t;
}
function v() {
    let e = (0, o.c)();
    return (0, s.G)(e);
}
function b(e, t, n) {
    let r = (0, _.s3)(),
        i = (r && r.getOptions()) || {},
        { name: a = "", attributes: o } = e,
        [s, c] = t.getScopeData().sdkProcessingMetadata[O]
            ? [!1]
            : (0, T.R)(i, {
                  name: a,
                  parentSampled: n,
                  attributes: o,
                  transactionContext: {
                      name: a,
                      parentSampled: n,
                  },
              }),
        l = new A.s({
            ...e,
            attributes: {
                [E.Zj]: "custom",
                ...e.attributes,
            },
            sampled: s,
        });
    return void 0 !== c && l.setAttribute(E.TE, c), r && r.emit("spanStart", l), l;
}
function M(e) {
    let t = (0, d.Y)(e);
    if (!t) return;
    let n = (0, _.s3)();
    return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, p.Gx)(t) : t;
}
function w(e) {
    return void 0 !== e ? (t) => D(e, t) : (e) => e();
}
