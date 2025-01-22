r.d(n, {
    Y: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(642128),
    s = r(481060),
    l = r(717495);
function u(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
        i = arguments.length > 3 ? arguments[3] : void 0,
        u = a.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled,
        c = n;
    !('animate-always' === r || ('respect-motion-settings' === r && !u)) &&
        (c = {
            ...n,
            ...l.F
        });
    let [d, f, p] = (0, o.useTransition)(e, c, i);
    return 4 == arguments.length ? [d, f, p] : d;
}
