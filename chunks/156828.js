n.d(t, { Cu: () => r.Cu, Fe: () => l, c2: () => d, qT: () => o, sq: () => r.sq });
var i = n(627968),
    a = n(64700),
    r = n(841117);
let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () =>
        (0, i.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: e } });
};
function l(e) {
    let { createPromise: t, webpackId: n, renderLoader: l, name: o, memo: d = !1 } = e,
        c = a.lazy(() => (0, r.sq)({ createPromise: t, webpackId: n })),
        _ = (e) => (0, i.jsx)(a.Suspense, { fallback: null != l ? l() : s()(), children: (0, i.jsx)(c, { ...e }) });
    return d && (_ = a.memo(_)), (_.displayName = `Suspense(${o || "Unknown"})`), _;
}
function o(e) {
    let { createPromise: t, webpackId: n, renderLoader: l, name: o, memo: d = !1 } = e,
        c = null,
        _ = null,
        E = () => (
            null == c && (c = (0, r.sq)({ createPromise: t, webpackId: n }).then((e) => ((_ = e.default), e))), c
        ),
        u = a.lazy(E),
        A = (e) => {
            let [t] = a.useState(() => _);
            return null != t
                ? (0, i.jsx)(t, { ...e })
                : (0, i.jsx)(a.Suspense, { fallback: null != l ? l() : s()(), children: (0, i.jsx)(u, { ...e }) });
        };
    d && (A = a.memo(A)), (A.displayName = `Suspense(${o || "Unknown"})`);
    let I = A;
    return (
        (I.preload = () => {
            E();
        }),
        I
    );
}
function d(e) {
    let { createPromise: t, webpackId: n, render: s, renderFallback: l } = e,
        [o, d] = a.useState(null);
    return (
        a.useEffect(() => {
            (0, r.sq)({ createPromise: t, webpackId: n }).then((e) => {
                let { default: t } = e;
                return d(t);
            });
        }, []),
        (0, i.jsx)(i.Fragment, { children: null == o ? l() : s(o) })
    );
}
