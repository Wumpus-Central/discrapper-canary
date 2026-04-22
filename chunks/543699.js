"use strict";
n.d(t, { tJ: () => d, tM: () => u, v2: () => _, wg: () => c });
var r = n(310784),
    i = n.n(r),
    s = n(735438),
    a = n(317097),
    o = n(458217);
n(325335);
var l = n(652215);
function u(e) {
    return null == e ? null : (0, a.OK)(e) > 0.5 ? l.NJ8.DARK : l.NJ8.LIGHT;
}
function d(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
let c = (0, s.memoize)(
        (e) => {
            let t = (0, o.OB)(e, { base: "#ffffff", contrastRatio: o.Tr.HighContrastText });
            return (0, a.LX)(t);
        },
        (e) => e,
    ),
    _ = (0, s.memoize)(
        (e, t, n) => {
            let r = (n ?? u(e)) !== l.NJ8.LIGHT,
                a = i().mix(i()(e), i()(t), 0.5, "lab"),
                o = Math.round(100 * a.get("hsl.l")) / 100,
                d = r ? (0, s.clamp)(o, 0, 0.1) : (0, s.clamp)(o, 0.8, 1);
            return i()(a).set("hsl.l", d).num();
        },
        (e, t, n) => `${e}-${t}-${n}`,
    );
