n.d(t, { Cu: () => r.Cu, Fe: () => s, c2: () => o, qT: () => l, sq: () => r.sq });
var i = n(627968),
    a = n(64700),
    r = n(841117);
let _ = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () =>
        (0, i.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: e } });
};
function s(e) {
    let { createPromise: t, webpackId: n, renderLoader: s, name: l, memo: o = !1 } = e,
        E = a.lazy(() => (0, r.sq)({ createPromise: t, webpackId: n })),
        d = (e) => (0, i.jsx)(a.Suspense, { fallback: null != s ? s() : _()(), children: (0, i.jsx)(E, { ...e }) });
    return o && (d = a.memo(d)), (d.displayName = `Suspense(${l || "Unknown"})`), d;
}
function l(e) {
    let { createPromise: t, webpackId: n, renderLoader: s, name: l, memo: o = !1 } = e,
        E = null,
        d = null,
        c = () => (
            null == E && (E = (0, r.sq)({ createPromise: t, webpackId: n }).then((e) => ((d = e.default), e))), E
        ),
        u = a.lazy(c),
        I = (e) => {
            let [t] = a.useState(() => d);
            return null != t
                ? (0, i.jsx)(t, { ...e })
                : (0, i.jsx)(a.Suspense, { fallback: null != s ? s() : _()(), children: (0, i.jsx)(u, { ...e }) });
        };
    o && (I = a.memo(I)), (I.displayName = `Suspense(${l || "Unknown"})`);
    let T = I;
    return (
        (T.preload = () => {
            c();
        }),
        T
    );
}
function o(e) {
    let { createPromise: t, webpackId: n, render: _, renderFallback: s } = e,
        [l, o] = a.useState(null);
    return (
        a.useEffect(() => {
            (0, r.sq)({ createPromise: t, webpackId: n }).then((e) => {
                let { default: t } = e;
                return o(t);
            });
        }, []),
        (0, i.jsx)(i.Fragment, { children: null == l ? s() : _(l) })
    );
}
