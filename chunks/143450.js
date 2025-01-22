r.d(n, {
    q: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(642128),
    s = r(186325),
    l = r(717495);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'respect-motion-settings',
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = a.useContext(s.S).reducedMotion.enabled,
        u = e;
    !('animate-always' === n || ('respect-motion-settings' === n && !i)) &&
        (u =
            'function' == typeof e
                ? () => ({
                      ...e(),
                      ...l.F
                  })
                : {
                      ...e,
                      ...l.F
                  });
    let c = 'function' == typeof u,
        [d, f, p] = (0, o.useSpring)(u, r);
    return c || 3 == arguments.length ? [d, f, p] : d;
}
