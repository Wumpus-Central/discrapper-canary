n.d(t, { W: () => u });
var r = n(64700),
    i = n(735438),
    s = n(417597),
    l = n(32120),
    a = n(686683),
    o = n(574454),
    c = n(871210);
let u = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        d = (0, s.bG)([o.A], () => o.A.validate(e), [e]),
        h = (0, s.bG)([o.A], () => o.A.isRateLimited()),
        f = (0, a.G)(),
        p = r.useMemo(
            () => (0, i.debounce)((e) => l.A.attemptPomelo(e, n ? "registration" : "modal", n, u), f),
            [f, n, u],
        );
    return (
        r.useEffect(() => {
            t && !h && null == d && "" !== e && p(e);
        }, [t, h, d, e, p]),
        r.useMemo(() => (null != d ? (0, c.z2)(d) : void 0), [d])
    );
};
