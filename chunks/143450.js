r.d(n, {
    q: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(666912),
    o = r(186325),
    l = r(717495);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'respect-motion-settings',
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = a.useContext(o.S).reducedMotion.enabled,
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
        [d, f, _] = (0, s.useSpring)(u, r);
    return c || 3 == arguments.length ? [d, f, _] : d;
}
