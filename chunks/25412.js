r.d(t, { Z: () => f });
var a = r(798192),
    n = r(135164),
    s = r(312976),
    o = r(181568);
let i = Math.PI,
    c = 180 / i,
    l = i / 180;
function u(e) {
    let t = e * e;
    return t * t * t * e;
}
function f(e, t, { kL: r = 1, kC: b = 1, kH: d = 1 } = {}) {
    let h, p, m;
    [e, t] = (0, o.Z)([e, t]);
    let [g, y, v] = n.Z.from(e),
        Z = s.Z.from(n.Z, [g, y, v])[1],
        [w, M, k] = n.Z.from(t),
        O = s.Z.from(n.Z, [w, M, k])[1];
    (Z < 0 && (Z = 0), O < 0 && (O = 0));
    let E = u((Z + O) / 2),
        C = 0.5 * (1 - Math.sqrt(E / (E + 6103515625))),
        x = (1 + C) * y,
        j = (1 + C) * M,
        R = Math.sqrt(x ** 2 + v ** 2),
        A = Math.sqrt(j ** 2 + k ** 2),
        _ = 0 === x && 0 === v ? 0 : Math.atan2(v, x),
        B = 0 === j && 0 === k ? 0 : Math.atan2(k, j);
    (_ < 0 && (_ += 2 * i), B < 0 && (B += 2 * i), (_ *= c));
    let N = w - g,
        S = A - R,
        I = (B *= c) - _,
        P = _ + B,
        D = Math.abs(I);
    R * A == 0 ? (h = 0) : D <= 180 ? (h = I) : I > 180 ? (h = I - 360) : I < -180 ? (h = I + 360) : a.Z.warn('the unthinkable has happened');
    let T = 2 * Math.sqrt(A * R) * Math.sin((h * l) / 2),
        L = (g + w) / 2,
        F = (R + A) / 2,
        q = u(F),
        z = (L - 50) ** 2,
        $ = 1 + (0.015 * z) / Math.sqrt(20 + z),
        U = 1 + 0.045 * F,
        W = 1 + 0.015 * F * (1 - 0.17 * Math.cos(((p = R * A == 0 ? P : D <= 180 ? P / 2 : P < 360 ? (P + 360) / 2 : (P - 360) / 2) - 30) * l) + 0.24 * Math.cos(2 * p * l) + 0.32 * Math.cos((3 * p + 6) * l) - 0.2 * Math.cos((4 * p - 63) * l)),
        G = (N / (r * $)) ** 2;
    return Math.sqrt((G += (S / (b * U)) ** 2 + (T / (d * W)) ** 2 + (S / (b * U)) * (-1 * Math.sin(2 * (30 * Math.exp(-1 * ((p - 275) / 25) ** 2)) * l) * (2 * Math.sqrt(q / (q + 6103515625)))) * (T / (d * W))));
}
