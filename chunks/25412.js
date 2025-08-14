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
    let h, p;
    [e, t] = (0, o.Z)([e, t]);
    let [m, g, y] = n.Z.from(e),
        v = s.Z.from(n.Z, [m, g, y])[1],
        [Z, w, M] = n.Z.from(t),
        k = s.Z.from(n.Z, [Z, w, M])[1];
    v < 0 && (v = 0), k < 0 && (k = 0);
    let O = u((v + k) / 2),
        E = 0.5 * (1 - Math.sqrt(O / (O + 6103515625))),
        C = (1 + E) * g,
        x = (1 + E) * w,
        j = Math.sqrt(C ** 2 + y ** 2),
        R = Math.sqrt(x ** 2 + M ** 2),
        A = 0 === C && 0 === y ? 0 : Math.atan2(y, C),
        _ = 0 === x && 0 === M ? 0 : Math.atan2(M, x);
    A < 0 && (A += 2 * i), _ < 0 && (_ += 2 * i), (A *= c);
    let B = Z - m,
        N = R - j,
        S = (_ *= c) - A,
        I = A + _,
        P = Math.abs(S);
    j * R == 0
        ? (h = 0)
        : P <= 180
          ? (h = S)
          : S > 180
            ? (h = S - 360)
            : S < -180
              ? (h = S + 360)
              : a.Z.warn("the unthinkable has happened");
    let D = 2 * Math.sqrt(R * j) * Math.sin((h * l) / 2),
        T = (m + Z) / 2,
        L = (j + R) / 2,
        F = u(L),
        q = (T - 50) ** 2,
        z = 1 + (0.015 * q) / Math.sqrt(20 + q),
        $ = 1 + 0.045 * L,
        U =
            1 +
            0.015 *
                L *
                (1 -
                    0.17 *
                        Math.cos(
                            ((p = j * R == 0 ? I : P <= 180 ? I / 2 : I < 360 ? (I + 360) / 2 : (I - 360) / 2) - 30) *
                                l,
                        ) +
                    0.24 * Math.cos(2 * p * l) +
                    0.32 * Math.cos((3 * p + 6) * l) -
                    0.2 * Math.cos((4 * p - 63) * l)),
        W = (B / (r * z)) ** 2;
    return Math.sqrt(
        (W +=
            (N / (b * $)) ** 2 +
            (D / (d * U)) ** 2 +
            (N / (b * $)) *
                (-1 *
                    Math.sin(2 * (30 * Math.exp(-1 * ((p - 275) / 25) ** 2)) * l) *
                    (2 * Math.sqrt(F / (F + 6103515625)))) *
                (D / (d * U))),
    );
}
