l.d(t, { l: () => d });
var r = l(627968),
    n = l(64700),
    i = l(945810);
let a = n.lazy(() =>
        Promise.all([l.e("8314"), l.e("60071")])
            .then(l.bind(l, 714554))
            .then((e) => ({ default: e.SyntaxHighlight })),
    ),
    s = (0, i.mj)({
        name: "2026-03-arborium-highlight",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function d(e) {
    let { children: t, location: l, ...i } = e,
        { enabled: d } = s.useConfig({ location: l });
    return d ? (0, r.jsx)(n.Suspense, { fallback: t, children: (0, r.jsx)(a, { ...i }) }) : t;
}
