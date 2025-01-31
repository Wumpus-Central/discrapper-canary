n.d(t, { q: () => o }), n(47120);
var i = n(192379),
    r = n(642128),
    a = n(186325),
    s = n(717495);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'respect-motion-settings',
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = i.useContext(a.S).reducedMotion.enabled,
        l = e;
    'animate-always' === t ||
        ('respect-motion-settings' === t && !o) ||
        (l =
            'function' == typeof e
                ? () => ({
                      ...e(),
                      ...s.F
                  })
                : {
                      ...e,
                      ...s.F
                  });
    let u = 'function' == typeof l,
        [c, d, f] = (0, r.useSpring)(l, n);
    return u || 3 == arguments.length ? [c, d, f] : c;
}
