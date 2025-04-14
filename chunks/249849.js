e.d(t, { s: () => i });
var v = e(688619),
    r = e.n(v);
function n(h, t, e) {
    if (!r().valid(t)) return h.map(() => '#000000');
    let v = r()(t),
        n = v.luminance();
    return h.map((h, t) => v.luminance((h * e[t].base + n * e[t].tint) / (e[t].base + e[t].tint)).hex());
}
function i(h) {
    let { primaryBaseColors: t, primaryTintColor: e, primaryTintLuminances: v, primaryLuminanceWeights: r, secondaryBaseColors: i, secondaryTintColor: l, secondaryTintLuminances: o, secondaryLuminanceWeights: a } = h,
        s = null != e ? n(v, e, r) : t,
        Z = [];
    return (
        null != i && null != o && null != a && (Z = null != l ? n(o, l, a) : i),
        {
            primaryColorsTransformed: s,
            secondaryColorsTransformed: Z
        }
    );
}
