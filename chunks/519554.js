r.d(n, {
    b: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(666912),
    o = r(481060),
    l = r(717495);
function u(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
        i = arguments.length > 3 ? arguments[3] : void 0,
        u = a.useContext(o.AccessibilityPreferencesContext).reducedMotion.enabled,
        c = n;
    !('animate-always' === r || ('respect-motion-settings' === r && !u)) &&
        (c =
            'function' == typeof n
                ? (e, r) => ({
                      ...n(e, r),
                      ...l.F
                  })
                : n.map((e) => ({
                      ...e,
                      ...l.F
                  })));
    let d = 'function' == typeof c,
        [f, _, h] = (0, s.useSprings)(e, c, i);
    return d || 4 == arguments.length ? [f, _, h] : f;
}
