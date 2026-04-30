"use strict";
n.d(t, { l: () => l });
var i = n(627968),
    r = n(64700),
    s = n(945810);
let a = r.lazy(() =>
        Promise.all([n.e("6580"), n.e("35477"), n.e("60071")])
            .then(n.bind(n, 714554))
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
    return l ? (0, i.jsx)(r.Suspense, { fallback: t, children: (0, i.jsx)(a, { ...s }) }) : t;
}
