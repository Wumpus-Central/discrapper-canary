t.d(l, { l: () => d });
var r = t(627968),
    n = t(64700),
    i = t(945810);
let a = n.lazy(() =>
        Promise.all([t.e("95317"), t.e("91081")])
            .then(t.bind(t, 441136))
            .then((e) => ({ default: e.SyntaxHighlight })),
    ),
    s = (0, i.mj)({
        name: "2026-03-arborium-highlight",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function d(e) {
    let { children: l, location: t, ...i } = e,
        { enabled: d } = s.useConfig({ location: t });
    return d ? (0, r.jsx)(n.Suspense, { fallback: l, children: (0, r.jsx)(a, { ...i }) }) : l;
}
