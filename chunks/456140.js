r.d(t, { Z: () => i });
var a = r(135164),
    n = r(312976),
    s = r(181568);
let o = Math.PI / 180;
function i(e, t, { l: r = 2, c = 1 } = {}) {
    [e, t] = (0, s.Z)([e, t]);
    let [l, u, f] = a.Z.from(e),
        [, b, d] = n.Z.from(a.Z, [l, u, f]),
        [h, p, m] = a.Z.from(t),
        g = n.Z.from(a.Z, [h, p, m])[1];
    b < 0 && (b = 0), g < 0 && (g = 0);
    let y = l - h,
        v = b - g,
        Z = u - p,
        w = f - m,
        M = 0.511;
    l >= 16 && (M = (0.040975 * l) / (1 + 0.01765 * l));
    let k = (0.0638 * b) / (1 + 0.0131 * b) + 0.638;
    Number.isNaN(d) && (d = 0);
    let O = Math.pow(b, 4),
        E = Math.sqrt(O / (O + 1900)),
        C =
            k *
            (E *
                (d >= 164 && d <= 345
                    ? 0.56 + Math.abs(0.2 * Math.cos((d + 168) * o))
                    : 0.36 + Math.abs(0.4 * Math.cos((d + 35) * o))) +
                1 -
                E),
        x = (y / (r * M)) ** 2;
    return Math.sqrt((x += (v / (c * k)) ** 2 + (Z ** 2 + w ** 2 - v ** 2) / C ** 2));
}
