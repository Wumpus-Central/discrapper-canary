r.d(t, { L: () => s, l: () => d });
var l = r(477900),
    n = r(582128),
    i = r(945810);
let a = n.lazy(() =>
        Promise.all([r.e("205528"), r.e("964367"), r.e("955184"), r.e("91081")])
            .then(r.bind(r, 441136))
            .then((e) => ({ default: e.SyntaxHighlight })),
    ),
    s = (0, i.mj)({
        name: "2026-03-arborium-highlight",
        kind: "user",
        defaultConfig: { enabled: !1, preferNative: !1 },
        variations: { 1: { enabled: !0, preferNative: !1 }, 2: { enabled: !0, preferNative: !0 } },
    });
function d(e) {
    let { children: t, location: r, ...i } = e,
        { enabled: d, preferNative: o } = s.useConfig({ location: r });
    return d ? (0, l.jsx)(n.Suspense, { fallback: t, children: (0, l.jsx)(a, { ...i, preferNative: o }) }) : t;
}
