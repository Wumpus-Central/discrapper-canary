l.d(t, { L: () => s, l: () => d });
var r = l(477900),
    n = l(582128),
    i = l(945810);
let a = n.lazy(() =>
        Promise.all([l.e("684031"), l.e("964367"), l.e("955184"), l.e("91081")])
            .then(l.bind(l, 441136))
            .then((e) => ({ default: e.SyntaxHighlight })),
    ),
    s = (0, i.mj)({
        name: "2026-03-arborium-highlight",
        kind: "user",
        defaultConfig: { enabled: !1, preferNative: !1 },
        variations: { 1: { enabled: !0, preferNative: !1 }, 2: { enabled: !0, preferNative: !0 } },
    });
function d(e) {
    let { children: t, location: l, ...i } = e,
        { enabled: d, preferNative: o } = s.useConfig({ location: l });
    return d ? (0, r.jsx)(n.Suspense, { fallback: t, children: (0, r.jsx)(a, { ...i, preferNative: o }) }) : t;
}
