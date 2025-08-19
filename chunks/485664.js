n.d(e, {
    Q: () => c,
    o: () => E,
}),
    n(388685);
var i = n(647438),
    r = n(399606),
    l = n(823162),
    a = n(706454),
    o = n(914788),
    d = n(880257);
let s = new Set(["US"]),
    u = new Set(["en-US", "es-ES"]),
    E = () => {
        let t = (0, d.Z)(),
            e = (0, r.e7)([o.Z], () => o.Z.getUserCountry()),
            n = (0, r.e7)([a.default], () => a.default.locale);
        return (
            i.useEffect(() => {
                null == e && (0, l.hi)();
            }, [e]),
            !t && null != e && s.has(e.alpha2) && u.has(n)
        );
    },
    c = () => {
        let t = (0, d.Z)(),
            e = E();
        return !t && !e;
    };
