"use strict";
n.d(t, { tJ: () => c, tM: () => u, v2: () => _, wg: () => d });
var r = n(310784),
    i = n.n(r),
    a = n(735438),
    s = n(317097),
    o = n(582754);
n(325335);
var l = n(652215);
function u(e) {
    return null == e ? null : (0, s.OK)(e) > 0.5 ? l.NJ8.DARK : l.NJ8.LIGHT;
}
function c(e, t, n) {
    let r = n / 100,
        i = 1 - r;
    return [Math.round(e[0] * i + t[0] * r), Math.round(e[1] * i + t[1] * r), Math.round(e[2] * i + t[2] * r)];
}
let d = (0, a.memoize)(
        (e) => {
            let t = (0, o.OB)(e, { base: "#ffffff", contrastRatio: o.Tr.HighContrastText });
            return (0, s.LX)(t);
        },
        (e) => e,
    ),
    _ = (0, a.memoize)(
        (e, t, n) => {
            let r = (n ?? u(e)) !== l.NJ8.LIGHT,
                s = 0.5,
                o = 0.1,
                c = 0.8,
                d = i().mix(i()(e), i()(t), s, "lab"),
                _ = Math.round(100 * d.get("hsl.l")) / 100,
                f = r ? (0, a.clamp)(_, 0, o) : (0, a.clamp)(_, c, 1);
            return i()(d).set("hsl.l", f).num();
        },
        (e, t, n) => `${e}-${t}-${n}`,
    );
