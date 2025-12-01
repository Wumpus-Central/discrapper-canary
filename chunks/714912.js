n.d(t, { Z: () => u });
var r = n(866659);
let i = 2,
    a = 3,
    o = 4,
    s = 25.4,
    l = 10,
    c = 1,
    u = { get: d };
function d(e, t) {
    let n = {},
        i = !1,
        a = f(e, "exif", "FocalLength", t),
        o = f(e, "exif", "FocalPlaneXResolution", t),
        s = f(e, "exif", "FocalPlaneYResolution", t),
        l = f(e, "exif", "FocalPlaneResolutionUnit", t),
        c = f(e, "file", "Image Width", t),
        u = f(e, "file", "Image Height", t),
        d = f(e, "exif", "FocalLengthIn35mmFilm", t) || p(o, s, l, c, u, a);
    d &&
        ((n.FocalLength35efl = {
            value: d,
            description: r.Z.FocalLengthIn35mmFilm(d),
        }),
        (i = !0));
    let h = _(a, d);
    h && ((n.ScaleFactorTo35mmEquivalent = h), (i = !0));
    let g = m(d);
    if ((g && ((n.FieldOfView = g), (i = !0)), i)) return n;
}
function f(e, t, n, r) {
    return r && e[t] && e[t][n] ? e[t][n].value : !r && e[n] ? e[n].value : void 0;
}
function p(e, t, n, r, u, d) {
    let f = 43.27;
    if (e && t && n && r && u && d)
        try {
            let p;
            switch (n) {
                case i:
                    p = s;
                    break;
                case a:
                    p = l;
                    break;
                case o:
                    p = c;
                    break;
                default:
                    return;
            }
            let _ = (e[0] / e[1]) * p,
                m = (t[0] / t[1]) * p,
                h = r / _,
                g = u / m,
                E = Math.sqrt(h ** 2 + g ** 2);
            return (d[0] / d[1]) * (f / E);
        } catch (e) {}
}
function _(e, t) {
    if (e && t)
        try {
            let n = t / (e[0] / e[1]);
            return {
                value: n,
                description: n.toFixed(1),
            };
        } catch (e) {}
}
function m(e) {
    let t = 36;
    if (e)
        try {
            let n = 2 * Math.atan(t / (2 * e)) * (180 / Math.PI);
            return {
                value: n,
                description: n.toFixed(1) + " deg",
            };
        } catch (e) {}
}
