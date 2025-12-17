n.d(t, { M: () => u });
var r = n(473749),
    i = n(392711),
    s = n(399606),
    a = n(986197),
    l = n(654344),
    o = n(135200),
    c = n(346585);
let u = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, s.e7)([o.Z], () => o.Z.validate(e), [e]),
        h = (0, s.e7)([o.Z], () => o.Z.isRateLimited()),
        f = (0, l.c)(),
        g = r.useMemo(
            () => (0, i.debounce)((e) => a.Z.attemptPomelo(e, n ? "registration" : "modal", n, u), f),
            [f, n, u],
        );
    return (
        r.useEffect(() => {
            t && !h && null == d && "" !== e && g(e);
        }, [t, h, d, e, g]),
        r.useMemo(() => (null != d ? (0, c.ti)(d) : void 0), [d])
    );
};
