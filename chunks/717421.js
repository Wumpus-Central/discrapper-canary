n.d(t, { z: () => l });
var i = n(582128),
    r = n(221877),
    a = n(844222),
    s = n(384494);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "respect-motion-settings",
        n = arguments.length > 2 ? arguments[2] : void 0,
        l = i.useContext(a.C).reducedMotion.enabled,
        o = e;
    "animate-always" !== t &&
        ("respect-motion-settings" !== t || l) &&
        (o = "function" == typeof e ? () => ({ ...e(), ...s.W }) : { ...e, ...s.W });
    let d = "function" == typeof o,
        [c, u, _] = (0, r.useSpring)(o, n);
    return d || 3 == arguments.length ? [c, u, _] : c;
}
