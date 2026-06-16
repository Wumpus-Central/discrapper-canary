"use strict";
n.d(t, { z: () => o });
var i = n(64700),
    r = n(922139),
    s = n(844222),
    a = n(384494);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "respect-motion-settings",
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = i.useContext(s.C).reducedMotion.enabled,
        l = e;
    "animate-always" !== t &&
        ("respect-motion-settings" !== t || o) &&
        (l = "function" == typeof e ? () => ({ ...e(), ...a.W }) : { ...e, ...a.W });
    let u = "function" == typeof l,
        [c, d, _] = (0, r.useSpring)(l, n);
    return u || 3 == arguments.length ? [c, d, _] : c;
}
