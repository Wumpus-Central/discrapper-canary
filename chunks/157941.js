"use strict";
n.d(t, { L: () => l, l: () => o });
var i = n(627968),
    r = n(64700),
    a = n(945810);
let s = r.lazy(() =>
        n
            .e("91081")
            .then(n.bind(n, 441136))
            .then((e) => ({ default: e.SyntaxHighlight })),
    ),
    l = (0, a.mj)({
        name: "2026-03-arborium-highlight",
        kind: "user",
        defaultConfig: { enabled: !1, preferNative: !1 },
        variations: { 1: { enabled: !0, preferNative: !1 }, 2: { enabled: !0, preferNative: !0 } },
    });
function o(e) {
    let { children: t, location: n, ...a } = e,
        { enabled: o, preferNative: d } = l.useConfig({ location: n });
    return o ? (0, i.jsx)(r.Suspense, { fallback: t, children: (0, i.jsx)(s, { ...a, preferNative: d }) }) : t;
}
