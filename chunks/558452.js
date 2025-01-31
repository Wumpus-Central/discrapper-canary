n.d(t, { Y: () => o }), n(47120);
var i = n(192379),
    r = n(642128),
    a = n(481060),
    s = n(717495);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
        o = arguments.length > 3 ? arguments[3] : void 0,
        l = i.useContext(a.Sfi).reducedMotion.enabled,
        u = t;
    'animate-always' === n ||
        ('respect-motion-settings' === n && !l) ||
        (u = {
            ...t,
            ...s.F
        });
    let [c, d, f] = (0, r.useTransition)(e, u, o);
    return 4 == arguments.length ? [c, d, f] : c;
}
