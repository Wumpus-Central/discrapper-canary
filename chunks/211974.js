g.d(v, { V: () => f });
var B = g(310784),
    C = g.n(B);
function h(A, v, g) {
    if (!C().valid(v)) return A.map(() => "#000000");
    let B = C()(v),
        h = B.luminance();
    return A.map((A, v) => B.luminance((A * g[v].base + h * g[v].tint) / (g[v].base + g[v].tint)).hex());
}
function f(A) {
    let {
            primaryBaseColors: v,
            primaryTintColor: g,
            primaryTintLuminances: B,
            primaryLuminanceWeights: C,
            secondaryBaseColors: f,
            secondaryTintColor: Q,
            secondaryTintLuminances: H,
            secondaryLuminanceWeights: w,
        } = A,
        M = null != g ? h(B, g, C) : v,
        D = [];
    return (
        null != f && null != H && null != w && (D = null != Q ? h(H, Q, w) : f),
        { primaryColorsTransformed: M, secondaryColorsTransformed: D }
    );
}
