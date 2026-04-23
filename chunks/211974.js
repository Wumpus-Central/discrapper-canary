h.d(v, { V: () => f });
var g = h(310784),
    B = h.n(g);
function C(A, v, h) {
    if (!B().valid(v)) return A.map(() => "#000000");
    let g = B()(v),
        C = g.luminance();
    return A.map((A, v) => g.luminance((A * h[v].base + C * h[v].tint) / (h[v].base + h[v].tint)).hex());
}
function f(A) {
    let {
            primaryBaseColors: v,
            primaryTintColor: h,
            primaryTintLuminances: g,
            primaryLuminanceWeights: B,
            secondaryBaseColors: f,
            secondaryTintColor: M,
            secondaryTintLuminances: H,
            secondaryLuminanceWeights: Q,
        } = A,
        w = null != h ? C(g, h, B) : v,
        t = [];
    return (
        null != f && null != H && null != Q && (t = null != M ? C(H, M, Q) : f),
        { primaryColorsTransformed: w, secondaryColorsTransformed: t }
    );
}
