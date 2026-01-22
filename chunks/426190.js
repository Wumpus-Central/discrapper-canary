n.d(t, {
    N: () => d,
    z: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(417597),
    a = n(966107),
    s = n(773669),
    o = n(695515),
    l = n(945276);
let c = new Set(["US"]),
    u = new Set(["en-US", "es-ES"]),
    d = () => {
        let e = (0, l.A)(),
            t = (0, i.bG)([o.A], () => o.A.getUserCountry()),
            n = (0, i.bG)([s.default], () => s.default.locale);
        return (
            r.useEffect(() => {
                null == t && (0, a.xf)();
            }, [t]),
            !e && null != t && c.has(t.alpha2) && u.has(n)
        );
    },
    f = () => {
        let e = (0, l.A)(),
            t = d();
        return !e && !t;
    };
