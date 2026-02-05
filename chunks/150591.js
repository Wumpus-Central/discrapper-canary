"use strict";
n.d(t, { hP: () => u, kS: () => c });
var r = n(64700),
    i = n(717421),
    a = n(844222),
    s = n(815390);
let o = { mass: 1, tension: 1e3, friction: 48 },
    l = { mass: 1, tension: 1200, friction: 80 },
    u = o;
function c(e, t) {
    let n = e === s.i.ENTERING || e === s.i.ENTERED,
        { reducedMotion: u } = r.useContext(a.C),
        c = n || u.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, i.z)({ opacity: +!!n, transform: c, config: n ? o : l, delay: 64 * !!n }, "animate-always");
}
