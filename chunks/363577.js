n.d(t, { M: () => u });
var r = n(73800),
    i = n(392711),
    l = n(399606),
    a = n(986197),
    o = n(654344),
    s = n(135200),
    c = n(346585);
let u = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, l.e7)([s.Z], () => s.Z.validate(e), [e]),
        g = (0, l.e7)([s.Z], () => s.Z.isRateLimited()),
        h = (0, o.c)(),
        p = r.useMemo(() => (0, i.debounce)((e) => a.Z.attemptPomelo(e, n ? 'registration' : 'modal', n, u), h), [h, n, u]);
    return (
        r.useEffect(() => {
            t && !g && null == d && '' !== e && p(e);
        }, [t, g, d, e, p]),
        r.useMemo(() => (null != d ? (0, c.ti)(d) : void 0), [d])
    );
};
