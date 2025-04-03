r.d(t, { s: () => i });
var n = r(688619),
    h = r.n(n);
function v(e, t, r) {
    if (!h().valid(t)) return e.map(() => '#000000');
    let n = h()(t),
        v = n.luminance();
    return e.map((e, t) => n.luminance((e * r[t].base + v * r[t].tint) / (r[t].base + r[t].tint)).hex());
}
function i(e) {
    let { primaryBaseColors: t, primaryTintColor: r, primaryTintLuminances: n, primaryLuminanceWeights: h, secondaryBaseColors: i, secondaryTintColor: l, secondaryTintLuminances: o, secondaryLuminanceWeights: a } = e,
        s = null != r ? v(n, r, h) : t,
        c = [];
    return (
        null != i && null != o && null != a && (c = null != l ? v(o, l, a) : i),
        {
            primaryColorsTransformed: s,
            secondaryColorsTransformed: c
        }
    );
}
