r.d(t, { Z: () => i });
var a = r(135164),
    n = r(312976),
    s = r(181568);
let o = Math.PI / 180;
function i(e, t, { l: r = 2, c = 1 } = {}) {
    let l;
    [e, t] = (0, s.Z)([e, t]);
    let [u, f, b] = a.Z.from(e),
        [, d, h] = n.Z.from(a.Z, [u, f, b]),
        [p, m, g] = a.Z.from(t),
        y = n.Z.from(a.Z, [p, m, g])[1];
    d < 0 && (d = 0), y < 0 && (y = 0);
    let v = u - p,
        Z = d - y,
        w = f - m,
        M = b - g,
        k = 0.511;
    u >= 16 && (k = (0.040975 * u) / (1 + 0.01765 * u));
    let O = (0.0638 * d) / (1 + 0.0131 * d) + 0.638;
    Number.isNaN(h) && (h = 0);
    let C = Math.pow(d, 4),
        E = Math.sqrt(C / (C + 1900)),
        j = O * (E * (h >= 164 && h <= 345 ? 0.56 + Math.abs(0.2 * Math.cos((h + 168) * o)) : 0.36 + Math.abs(0.4 * Math.cos((h + 35) * o))) + 1 - E),
        x = (v / (r * k)) ** 2;
    return Math.sqrt((x += (Z / (c * O)) ** 2 + (w ** 2 + M ** 2 - Z ** 2) / j ** 2));
}
