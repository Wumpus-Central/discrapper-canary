r.d(n, { tJ: () => i, tM: () => h, v2: () => d, wg: () => c });
var e = r(310784),
    a = r.n(e),
    u = r(435558),
    l = r(317097),
    o = r(498596);
r(325335);
var s = r(652215);
function h(t) {
    return null == t ? null : (0, l.OK)(t) > 0.5 ? s.NJ8.DARK : s.NJ8.LIGHT;
}
function i(t, n, r) {
    let e = r / 100,
        a = 1 - e;
    return [Math.round(t[0] * a + n[0] * e), Math.round(t[1] * a + n[1] * e), Math.round(t[2] * a + n[2] * e)];
}
let c = (0, u.memoize)(
        (t) => {
            let n = (0, o.OB)(t, { base: "#ffffff", contrastRatio: o.Tr.HighContrastText });
            return (0, l.LX)(n);
        },
        (t) => t,
    ),
    d = (0, u.memoize)(
        (t, n, r) => {
            let e = (r ?? h(t)) !== s.NJ8.LIGHT,
                l = a().mix(a()(t), a()(n), 0.5, "lab"),
                o = Math.round(100 * l.get("hsl.l")) / 100,
                i = e ? (0, u.clamp)(o, 0, 0.1) : (0, u.clamp)(o, 0.8, 1);
            return a()(l).set("hsl.l", i).num();
        },
        (t, n, r) => `${t}-${n}-${r}`,
    );
