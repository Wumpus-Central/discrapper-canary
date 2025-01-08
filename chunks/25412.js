r.d(t, {
    Z: function () {
        return f;
    }
});
var a = r(798192),
    n = r(135164),
    o = r(312976),
    s = r(181568);
let i = Math.PI,
    c = 180 / i,
    u = i / 180;
function l(e) {
    let t = e * e;
    return t * t * t * e;
}
function f(e, t, { kL: r = 1, kC: f = 1, kH: b = 1 } = {}) {
    let h, d, p;
    [e, t] = (0, s.Z)([e, t]);
    let [m, g, y] = n.Z.from(e),
        v = o.Z.from(n.Z, [m, g, y])[1],
        [Z, w, M] = n.Z.from(t),
        k = o.Z.from(n.Z, [Z, w, M])[1];
    v < 0 && (v = 0), k < 0 && (k = 0);
    let O = l((v + k) / 2),
        C = 0.5 * (1 - Math.sqrt(O / (O + 6103515625))),
        E = (1 + C) * g,
        j = (1 + C) * w,
        x = Math.sqrt(E ** 2 + y ** 2),
        R = Math.sqrt(j ** 2 + M ** 2),
        A = 0 === E && 0 === y ? 0 : Math.atan2(y, E),
        B = 0 === j && 0 === M ? 0 : Math.atan2(M, j);
    A < 0 && (A += 2 * i), B < 0 && (B += 2 * i), (A *= c);
    let S = Z - m,
        _ = R - x,
        N = (B *= c) - A,
        P = A + B,
        I = Math.abs(N);
    x * R == 0 ? (h = 0) : I <= 180 ? (h = N) : N > 180 ? (h = N - 360) : N < -180 ? (h = N + 360) : a.Z.warn('the unthinkable has happened');
    let D = 2 * Math.sqrt(R * x) * Math.sin((h * u) / 2),
        T = (m + Z) / 2,
        L = (x + R) / 2,
        F = l(L),
        q = (T - 50) ** 2,
        z = 1 + (0.015 * q) / Math.sqrt(20 + q),
        $ = 1 + 0.045 * L;
    let W = 1 + 0.015 * L * (p = 1 - 0.17 * Math.cos(((d = x * R == 0 ? P : I <= 180 ? P / 2 : P < 360 ? (P + 360) / 2 : (P - 360) / 2) - 30) * u) + 0.24 * Math.cos(2 * d * u) + 0.32 * Math.cos((3 * d + 6) * u) - 0.2 * Math.cos((4 * d - 63) * u)),
        U = (S / (r * z)) ** 2;
    return Math.sqrt((U += (_ / (f * $)) ** 2 + (D / (b * W)) ** 2 + (_ / (f * $)) * (-1 * Math.sin(30 * Math.exp(-1 * ((d - 275) / 25) ** 2) * 2 * u) * (2 * Math.sqrt(F / (F + 6103515625)))) * (D / (b * W))));
}
