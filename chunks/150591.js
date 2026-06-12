"use strict";
n.d(t, { hP: () => u, kS: () => c });
var i = n(64700),
    r = n(717421),
    s = n(844222),
    a = n(815390);
let o = { mass: 1, tension: 1e3, friction: 48 },
    l = { mass: 1, tension: 1200, friction: 80 },
    u = o;
function c(e, t) {
    let n = e === a.i.ENTERING || e === a.i.ENTERED,
        { reducedMotion: u } = i.useContext(s.C),
        c = n || u.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, r.z)({ opacity: +!!n, transform: c, config: n ? o : l, delay: 64 * !!n }, "animate-always");
}
