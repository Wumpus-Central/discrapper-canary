n.d(t, { s: () => s });
var i = n(688619),
    r = n.n(i);
function a(e, t, n) {
    if (!r().valid(t)) return e.map(() => '#000000');
    let i = r()(t),
        a = i.luminance();
    return e.map((e, t) => i.luminance((e * n[t].base + a * n[t].tint) / (n[t].base + n[t].tint)).hex());
}
function s(e) {
    let { primaryBaseColors: t, primaryTintColor: n, primaryTintLuminances: i, primaryLuminanceWeights: r, secondaryBaseColors: s, secondaryTintColor: o, secondaryTintLuminances: l, secondaryLuminanceWeights: u } = e,
        c = null != n ? a(i, n, r) : t,
        d = [];
    return (
        null != s && null != l && null != u && (d = null != o ? a(l, o, u) : s),
        {
            primaryColorsTransformed: c,
            secondaryColorsTransformed: d
        }
    );
}
