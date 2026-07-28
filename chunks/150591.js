"use strict";
n.d(t, { hP: () => d, kS: () => c });
var i = n(582128),
    r = n(717421),
    a = n(844222),
    s = n(815390);
let l = { mass: 1, tension: 1e3, friction: 48 },
    o = { mass: 1, tension: 1200, friction: 80 },
    d = l;
function c(e, t) {
    let n = e === s.i.ENTERING || e === s.i.ENTERED,
        { reducedMotion: d } = i.useContext(a.C),
        c = n || d.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, r.z)({ opacity: +!!n, transform: c, config: n ? l : o, delay: 64 * !!n }, "animate-always");
}
