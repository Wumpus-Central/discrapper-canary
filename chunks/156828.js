"use strict";
n.d(t, { Cu: () => s.Cu, Fe: () => o, c2: () => u, qT: () => l, sq: () => s.sq });
var i = n(627968),
    r = n(64700),
    s = n(841117);
let a = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
    return () =>
        (0, i.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: e } });
};
function o(e) {
    let { createPromise: t, webpackId: n, renderLoader: o, name: l, memo: u = !1 } = e,
        c = r.lazy(() => (0, s.sq)({ createPromise: t, webpackId: n, name: l })),
        d = (e) => (0, i.jsx)(r.Suspense, { fallback: null != o ? o() : a()(), children: (0, i.jsx)(c, { ...e }) });
    return u && (d = r.memo(d)), (d.displayName = `Suspense(${l || "Unknown"})`), d;
}
function l(e) {
    let { createPromise: t, webpackId: n, renderLoader: o, name: l, memo: u = !1 } = e,
        c = null,
        d = null,
        _ = () => (
            null == c && (c = (0, s.sq)({ createPromise: t, webpackId: n }).then((e) => ((d = e.default), e))), c
        ),
        f = r.lazy(_),
        h = (e) => {
            let [t] = r.useState(() => d);
            return null != t
                ? (0, i.jsx)(t, { ...e })
                : (0, i.jsx)(r.Suspense, { fallback: null != o ? o() : a()(), children: (0, i.jsx)(f, { ...e }) });
        };
    u && (h = r.memo(h)), (h.displayName = `Suspense(${l || "Unknown"})`);
    let p = h;
    return (
        (p.preload = () => {
            _();
        }),
        p
    );
}
function u(e) {
    let { createPromise: t, webpackId: n, render: a, renderFallback: o } = e,
        [l, u] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, s.sq)({ createPromise: t, webpackId: n }).then((e) => {
                let { default: t } = e;
                return u(t);
            });
        }, []),
        (0, i.jsx)(i.Fragment, { children: null == l ? o() : a(l) })
    );
}
