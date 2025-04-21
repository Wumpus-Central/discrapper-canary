v.d(g, { s: () => f });
var B = v(688619),
    t = v.n(B);
function e(A, g, v) {
    if (!t().valid(g)) return A.map(() => '#000000');
    let B = t()(g),
        e = B.luminance();
    return A.map((A, g) => B.luminance((A * v[g].base + e * v[g].tint) / (v[g].base + v[g].tint)).hex());
}
function f(A) {
    let { primaryBaseColors: g, primaryTintColor: v, primaryTintLuminances: B, primaryLuminanceWeights: t, secondaryBaseColors: f, secondaryTintColor: r, secondaryTintLuminances: C, secondaryLuminanceWeights: h } = A,
        n = null != v ? e(B, v, t) : g,
        w = [];
    return (
        null != f && null != C && null != h && (w = null != r ? e(C, r, h) : f),
        {
            primaryColorsTransformed: n,
            secondaryColorsTransformed: w
        }
    );
}
