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
        d = f(e, "exif", "FocalLengthIn35mmFilm", t) || _(o, s, l, c, u, a);
    d &&
        ((n.FocalLength35efl = {
            value: d,
            description: r.Z.FocalLengthIn35mmFilm(d),
        }),
        (i = !0));
    let m = p(a, d);
    m && ((n.ScaleFactorTo35mmEquivalent = m), (i = !0));
    let g = h(d);
    if ((g && ((n.FieldOfView = g), (i = !0)), i)) return n;
}
function f(e, t, n, r) {
    return r && e[t] && e[t][n] ? e[t][n].value : !r && e[n] ? e[n].value : void 0;
}
function _(e, t, n, r, u, d) {
    let f = 43.27;
    if (e && t && n && r && u && d)
        try {
            let _;
            switch (n) {
                case i:
                    _ = s;
                    break;
                case a:
                    _ = l;
                    break;
                case o:
                    _ = c;
                    break;
                default:
                    return;
            }
            let p = (e[0] / e[1]) * _,
                h = (t[0] / t[1]) * _,
                m = r / p,
                g = u / h,
                E = Math.sqrt(m ** 2 + g ** 2);
            return (d[0] / d[1]) * (f / E);
        } catch (e) {}
}
function p(e, t) {
    if (e && t)
        try {
            let n = t / (e[0] / e[1]);
            return {
                value: n,
                description: n.toFixed(1),
            };
        } catch (e) {}
}
function h(e) {
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
