"use strict";
n.d(t, { Cu: () => a.Cu, Fe: () => o, c2: () => l, sq: () => a.sq });
var r = n(627968),
    i = n(64700),
    a = n(841117);
let s = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () =>
        (0, r.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: e } });
};
function o(e) {
    let { createPromise: t, webpackId: n, renderLoader: o, name: l, memo: u = !1 } = e,
        c = i.lazy(() => (0, a.sq)({ createPromise: t, webpackId: n })),
        d = (e) => (0, r.jsx)(i.Suspense, { fallback: null != o ? o() : s()(), children: (0, r.jsx)(c, { ...e }) });
    return u && (d = i.memo(d)), (d.displayName = `Suspense(${l || "Unknown"})`), d;
}
function l(e) {
    let { createPromise: t, webpackId: n, render: s, renderFallback: o } = e,
        [l, u] = i.useState(null);
    return (
        i.useEffect(() => {
            (0, a.sq)({ createPromise: t, webpackId: n }).then((e) => {
                let { default: t } = e;
                return u(t);
            });
        }, []),
        (0, r.jsx)(r.Fragment, { children: null == l ? o() : s(l) })
    );
}
