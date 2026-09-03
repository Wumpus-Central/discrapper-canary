n.d(t, { Cu: () => a.Cu, Fe: () => l, c2: () => d, qT: () => o, sq: () => a.sq });
var i = n(477900),
    r = n(582128),
    a = n(841117);
let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () =>
        (0, i.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: e } });
};
function l(e) {
    let { createPromise: t, webpackId: n, renderLoader: l, name: o, memo: d = !1 } = e,
        c = r.lazy(() => (0, a.sq)({ createPromise: t, webpackId: n, name: o })),
        u = (e) => (0, i.jsx)(r.Suspense, { fallback: null != l ? l() : s()(), children: (0, i.jsx)(c, { ...e }) });
    return d && (u = r.memo(u)), (u.displayName = `Suspense(${o || "Unknown"})`), u;
}
function o(e) {
    let { createPromise: t, webpackId: n, renderLoader: l, name: o, memo: d = !1 } = e,
        c = null,
        u = null,
        _ = () => (
            null == c && (c = (0, a.sq)({ createPromise: t, webpackId: n }).then((e) => ((u = e.default), e))), c
        ),
        E = r.lazy(_),
        A = (e) => {
            let [t] = r.useState(() => u);
            return null != t
                ? (0, i.jsx)(t, { ...e })
                : (0, i.jsx)(r.Suspense, { fallback: null != l ? l() : s()(), children: (0, i.jsx)(E, { ...e }) });
        };
    d && (A = r.memo(A)), (A.displayName = `Suspense(${o || "Unknown"})`);
    let h = A;
    return (
        (h.preload = () => {
            _();
        }),
        h
    );
}
function d(e) {
    let { createPromise: t, webpackId: n, render: s, renderFallback: l } = e,
        [o, d] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, a.sq)({ createPromise: t, webpackId: n }).then((e) => {
                let { default: t } = e;
                return d(t);
            });
        }, []),
        (0, i.jsx)(i.Fragment, { children: null == o ? l() : s(o) })
    );
}
