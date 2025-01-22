r.d(n, {
    s: function () {
        return s;
    }
});
var i = r(688619),
    a = r.n(i);
function o(e, n, r) {
    if (!a().valid(n)) return e.map(() => '#000000');
    let i = a()(n),
        o = i.luminance();
    return e.map((e, n) => i.luminance((e * r[n].base + o * r[n].tint) / (r[n].base + r[n].tint)).hex());
}
function s(e) {
    let { primaryBaseColors: n, primaryTintColor: r, primaryTintLuminances: i, primaryLuminanceWeights: a, secondaryBaseColors: s, secondaryTintColor: l, secondaryTintLuminances: u, secondaryLuminanceWeights: c } = e,
        d = null != r ? o(i, r, a) : n,
        f = [];
    return (
        null != s && null != u && null != c && (f = null != l ? o(u, l, c) : s),
        {
            primaryColorsTransformed: d,
            secondaryColorsTransformed: f
        }
    );
}
