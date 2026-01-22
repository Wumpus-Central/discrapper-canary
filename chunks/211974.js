e.d(t, {
    V: () => f,
});
var g = e(310784),
    r = e.n(g);

function v(A, t, e) {
    if (!r().valid(t)) return A.map(() => "#000000");
    let g = r()(t),
        v = g.luminance();
    return A.map((A, t) => g.luminance((A * e[t].base + v * e[t].tint) / (e[t].base + e[t].tint)).hex());
}

function f(A) {
    let {
            primaryBaseColors: t,
            primaryTintColor: e,
            primaryTintLuminances: g,
            primaryLuminanceWeights: r,
            secondaryBaseColors: f,
            secondaryTintColor: B,
            secondaryTintLuminances: h,
            secondaryLuminanceWeights: n,
        } = A,
        l = null != e ? v(g, e, r) : t,
        C = [];
    return (
        null != f && null != h && null != n && (C = null != B ? v(h, B, n) : f),
        {
            primaryColorsTransformed: l,
            secondaryColorsTransformed: C,
        }
    );
}
