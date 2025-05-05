n.d(t, { M: () => u });
var r = n(73800),
    i = n(392711),
    s = n(399606),
    o = n(986197),
    l = n(654344),
    a = n(135200),
    c = n(346585);
let u = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, s.e7)([a.Z], () => a.Z.validate(e), [e]),
        g = (0, s.e7)([a.Z], () => a.Z.isRateLimited()),
        m = (0, l.c)(),
        f = r.useMemo(() => (0, i.debounce)((e) => o.Z.attemptPomelo(e, n ? 'registration' : 'modal', n, u), m), [m, n, u]);
    return (
        r.useEffect(() => {
            t && !g && null == d && '' !== e && f(e);
        }, [t, g, d, e, f]),
        r.useMemo(() => (null != d ? (0, c.ti)(d) : void 0), [d])
    );
};
