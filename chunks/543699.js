"use strict";
n.d(t, { tJ: () => c, tM: () => u, v2: () => _, wg: () => d });
var i = n(310784),
    r = n.n(i),
    s = n(735438),
    a = n(317097),
    o = n(498596);
n(325335);
var l = n(652215);
function u(e) {
    return null == e ? null : (0, a.OK)(e) > 0.5 ? l.NJ8.DARK : l.NJ8.LIGHT;
}
function c(e, t, n) {
    let i = n / 100,
        r = 1 - i;
    return [Math.round(e[0] * r + t[0] * i), Math.round(e[1] * r + t[1] * i), Math.round(e[2] * r + t[2] * i)];
}
let d = (0, s.memoize)(
        (e) => {
            let t = (0, o.OB)(e, { base: "#ffffff", contrastRatio: o.Tr.HighContrastText });
            return (0, a.LX)(t);
        },
        (e) => e,
    ),
    _ = (0, s.memoize)(
        (e, t, n) => {
            let i = (n ?? u(e)) !== l.NJ8.LIGHT,
                a = r().mix(r()(e), r()(t), 0.5, "lab"),
                o = Math.round(100 * a.get("hsl.l")) / 100,
                c = i ? (0, s.clamp)(o, 0, 0.1) : (0, s.clamp)(o, 0.8, 1);
            return r()(a).set("hsl.l", c).num();
        },
        (e, t, n) => `${e}-${t}-${n}`,
    );
