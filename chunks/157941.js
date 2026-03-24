"use strict";
n.d(t, { l: () => l });
var r = n(627968),
    i = n(64700),
    s = n(945810);
let a = i.lazy(() =>
        Promise.all([n.e("95317"), n.e("91081")])
            .then(n.bind(n, 441136))
            .then((e) => ({ default: e.SyntaxHighlight })),
    ),
    o = (0, s.mj)({
        name: "2026-03-arborium-highlight",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l(e) {
    let { children: t, location: n, ...s } = e,
        { enabled: l } = o.useConfig({ location: n });
    return l ? (0, r.jsx)(i.Suspense, { fallback: t, children: (0, r.jsx)(a, { ...s }) }) : t;
}
