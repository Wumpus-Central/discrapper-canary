n.d(t, {
    Q: () => f,
    o: () => d,
}),
    n(388685);
var r = n(473749),
    i = n(399606),
    a = n(823162),
    o = n(706454),
    s = n(914788),
    l = n(880257);
let c = new Set(["US"]),
    u = new Set(["en-US", "es-ES"]),
    d = () => {
        let e = (0, l.Z)(),
            t = (0, i.e7)([s.Z], () => s.Z.getUserCountry()),
            n = (0, i.e7)([o.default], () => o.default.locale);
        return (
            r.useEffect(() => {
                null == t && (0, a.hi)();
            }, [t]),
            !e && null != t && c.has(t.alpha2) && u.has(n)
        );
    },
    f = () => {
        let e = (0, l.Z)(),
            t = d();
        return !e && !t;
    };
