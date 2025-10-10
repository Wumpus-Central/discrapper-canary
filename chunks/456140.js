r.d(t, { Z: () => i });
var a = r(135164),
    n = r(312976),
    o = r(181568);
let s = Math.PI / 180;
function i(e, t, { l: r = 2, c = 1 } = {}) {
    [e, t] = (0, o.Z)([e, t]);
    let [u, l, f] = a.Z.from(e),
        [, b, d] = n.Z.from(a.Z, [u, l, f]),
        [h, p, m] = a.Z.from(t),
        g = n.Z.from(a.Z, [h, p, m])[1];
    b < 0 && (b = 0), g < 0 && (g = 0);
    let y = u - h,
        v = b - g,
        Z = l - p,
        w = f - m,
        M = 0.511;
    u >= 16 && (M = (0.040975 * u) / (1 + 0.01765 * u));
    let k = (0.0638 * b) / (1 + 0.0131 * b) + 0.638;
    Number.isNaN(d) && (d = 0);
    let O = Math.pow(b, 4),
        E = Math.sqrt(O / (O + 1900)),
        x =
            k *
            (E *
                (d >= 164 && d <= 345
                    ? 0.56 + Math.abs(0.2 * Math.cos((d + 168) * s))
                    : 0.36 + Math.abs(0.4 * Math.cos((d + 35) * s))) +
                1 -
                E),
        C = (y / (r * M)) ** 2;
    return Math.sqrt((C += (v / (c * k)) ** 2 + (Z ** 2 + w ** 2 - v ** 2) / x ** 2));
}
