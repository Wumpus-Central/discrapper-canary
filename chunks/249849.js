n.d(t, { s: () => a });
var r = n(688619),
    i = n.n(r);
function o(e, t, n) {
    if (!i().valid(t)) return e.map(() => '#000000');
    let r = i()(t),
        o = r.luminance();
    return e.map((e, t) => r.luminance((e * n[t].base + o * n[t].tint) / (n[t].base + n[t].tint)).hex());
}
function a(e) {
    let { primaryBaseColors: t, primaryTintColor: n, primaryTintLuminances: r, primaryLuminanceWeights: i, secondaryBaseColors: a, secondaryTintColor: s, secondaryTintLuminances: l, secondaryLuminanceWeights: c } = e,
        u = null != n ? o(r, n, i) : t,
        d = [];
    return (
        null != a && null != l && null != c && (d = null != s ? o(l, s, c) : a),
        {
            primaryColorsTransformed: u,
            secondaryColorsTransformed: d
        }
    );
}
