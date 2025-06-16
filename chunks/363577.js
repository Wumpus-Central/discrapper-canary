n.d(t, { M: () => u });
var r = n(73800),
    i = n(392711),
    l = n(399606),
    o = n(986197),
    a = n(654344),
    s = n(135200),
    c = n(346585);
let u = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, l.e7)([s.Z], () => s.Z.validate(e), [e]),
        h = (0, l.e7)([s.Z], () => s.Z.isRateLimited()),
        g = (0, a.c)(),
        p = r.useMemo(() => (0, i.debounce)((e) => o.Z.attemptPomelo(e, n ? 'registration' : 'modal', n, u), g), [g, n, u]);
    return (
        r.useEffect(() => {
            t && !h && null == d && '' !== e && p(e);
        }, [t, h, d, e, p]),
        r.useMemo(() => (null != d ? (0, c.ti)(d) : void 0), [d])
    );
};
