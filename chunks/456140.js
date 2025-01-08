r.d(t, {
    Z: function () {
        return i;
    }
});
var a = r(135164),
    n = r(312976),
    o = r(181568);
let s = Math.PI / 180;
function i(e, t, { l: r = 2, c: i = 1 } = {}) {
    let c;
    [e, t] = (0, o.Z)([e, t]);
    let [u, l, f] = a.Z.from(e),
        [, b, h] = n.Z.from(a.Z, [u, l, f]),
        [d, p, m] = a.Z.from(t),
        g = n.Z.from(a.Z, [d, p, m])[1];
    b < 0 && (b = 0), g < 0 && (g = 0);
    let y = u - d,
        v = b - g,
        Z = l - p,
        w = f - m,
        M = 0.511;
    u >= 16 && (M = (0.040975 * u) / (1 + 0.01765 * u));
    let k = (0.0638 * b) / (1 + 0.0131 * b) + 0.638;
    Number.isNaN(h) && (h = 0);
    let O = Math.pow(b, 4),
        C = Math.sqrt(O / (O + 1900)),
        E = k * (C * (c = h >= 164 && h <= 345 ? 0.56 + Math.abs(0.2 * Math.cos((h + 168) * s)) : 0.36 + Math.abs(0.4 * Math.cos((h + 35) * s))) + 1 - C),
        j = (y / (r * M)) ** 2;
    return Math.sqrt((j += (v / (i * k)) ** 2 + (Z ** 2 + w ** 2 - v ** 2) / E ** 2));
}
