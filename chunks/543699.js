n.d(t, {
    tJ: () => u,
    tM: () => c,
    v2: () => f,
    wg: () => d,
}),
    n(896048);
var r = n(310784),
    i = n.n(r),
    a = n(735438),
    s = n(317097),
    o = n(582754);
n(325335);
var l = n(652215);
function c(e) {
    return null == e ? null : (0, s.OK)(e) > 0.5 ? l.NJ8.DARK : l.NJ8.LIGHT;
}
function u(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
let d = (0, a.memoize)(
        (e) => {
            let t = (0, o.OB)(e, {
                base: "#ffffff",
                contrastRatio: o.Tr.HighContrastText,
            });
            return (0, s.LX)(t);
        },
        (e) => e,
    ),
    f = (0, a.memoize)(
        (e, t, n) => {
            let r = (null != n ? n : c(e)) !== l.NJ8.LIGHT,
                s = 0.5,
                o = 0.1,
                u = 0.8,
                d = i().mix(i()(e), i()(t), s, "lab"),
                f = Math.round(100 * d.get("hsl.l")) / 100,
                p = r ? (0, a.clamp)(f, 0, o) : (0, a.clamp)(f, u, 1);
            return i()(d).set("hsl.l", p).num();
        },
        (e, t, n) => "".concat(e, "-").concat(t, "-").concat(n),
    );
