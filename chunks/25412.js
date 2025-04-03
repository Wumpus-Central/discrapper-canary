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
    Z < 0 && (Z = 0), O < 0 && (O = 0);
    let C = u((Z + O) / 2),
        E = 0.5 * (1 - Math.sqrt(C / (C + 6103515625))),
        j = (1 + E) * y,
        x = (1 + E) * M,
        R = Math.sqrt(j ** 2 + v ** 2),
        A = Math.sqrt(x ** 2 + k ** 2),
        B = 0 === j && 0 === v ? 0 : Math.atan2(v, j),
        _ = 0 === x && 0 === k ? 0 : Math.atan2(k, x);
    B < 0 && (B += 2 * i), _ < 0 && (_ += 2 * i), (B *= c);
    let N = w - g,
        S = A - R,
        P = (_ *= c) - B,
        I = B + _,
        D = Math.abs(P);
    R * A == 0 ? (h = 0) : D <= 180 ? (h = P) : P > 180 ? (h = P - 360) : P < -180 ? (h = P + 360) : a.Z.warn('the unthinkable has happened');
    let T = 2 * Math.sqrt(A * R) * Math.sin((h * l) / 2),
        L = (g + w) / 2,
        F = (R + A) / 2,
        q = u(F),
        z = (L - 50) ** 2,
        $ = 1 + (0.015 * z) / Math.sqrt(20 + z),
        W = 1 + 0.045 * F,
        U = 1 + 0.015 * F * (1 - 0.17 * Math.cos(((p = R * A == 0 ? I : D <= 180 ? I / 2 : I < 360 ? (I + 360) / 2 : (I - 360) / 2) - 30) * l) + 0.24 * Math.cos(2 * p * l) + 0.32 * Math.cos((3 * p + 6) * l) - 0.2 * Math.cos((4 * p - 63) * l)),
        G = (N / (r * $)) ** 2;
    return Math.sqrt((G += (S / (b * W)) ** 2 + (T / (d * U)) ** 2 + (S / (b * W)) * (-1 * Math.sin(2 * (30 * Math.exp(-1 * ((p - 275) / 25) ** 2)) * l) * (2 * Math.sqrt(q / (q + 6103515625)))) * (T / (d * U))));
}
