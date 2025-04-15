r.d(t, { s: () => o });
var n = r(688619),
    i = r.n(n);
function s(e, t, r) {
    if (!i().valid(t)) return e.map(() => '#000000');
    let n = i()(t),
        s = n.luminance();
    return e.map((e, t) => n.luminance((e * r[t].base + s * r[t].tint) / (r[t].base + r[t].tint)).hex());
}
function o(e) {
    let { primaryBaseColors: t, primaryTintColor: r, primaryTintLuminances: n, primaryLuminanceWeights: i, secondaryBaseColors: o, secondaryTintColor: l, secondaryTintLuminances: a, secondaryLuminanceWeights: c } = e,
        h = null != r ? s(n, r, i) : t,
        v = [];
    return (
        null != o && null != a && null != c && (v = null != l ? s(a, l, c) : o),
        {
            primaryColorsTransformed: h,
            secondaryColorsTransformed: v
        }
    );
}
