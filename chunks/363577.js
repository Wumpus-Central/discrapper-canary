n.d(t, { M: () => d });
var i = n(192379),
    s = n(392711),
    a = n(399606),
    l = n(986197),
    r = n(654344),
    o = n(135200),
    u = n(346585);
let d = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, a.e7)([o.Z], () => o.Z.validate(e), [e]),
        m = (0, a.e7)([o.Z], () => o.Z.isRateLimited()),
        g = (0, r.c)(),
        E = i.useMemo(() => (0, s.debounce)((e) => l.Z.attemptPomelo(e, n ? 'registration' : 'modal', n, d), g), [g, n, d]);
    return (
        i.useEffect(() => {
            t && !m && null == c && '' !== e && E(e);
        }, [t, m, c, e, E]),
        i.useMemo(() => (null != c ? (0, u.ti)(c) : void 0), [c])
    );
};
