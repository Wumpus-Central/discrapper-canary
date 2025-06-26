r.d(t, { M: () => u });
var n = r(73800),
    i = r(392711),
    o = r(399606),
    s = r(986197),
    a = r(654344),
    l = r(135200),
    c = r(346585);
let u = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, o.e7)([l.Z], () => l.Z.validate(e), [e]),
        m = (0, o.e7)([l.Z], () => l.Z.isRateLimited()),
        g = (0, a.c)(),
        f = n.useMemo(() => (0, i.debounce)((e) => s.Z.attemptPomelo(e, r ? 'registration' : 'modal', r, u), g), [g, r, u]);
    return (
        n.useEffect(() => {
            t && !m && null == d && '' !== e && f(e);
        }, [t, m, d, e, f]),
        n.useMemo(() => (null != d ? (0, c.ti)(d) : void 0), [d])
    );
};
