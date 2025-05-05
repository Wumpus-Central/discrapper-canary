n.d(e, {
    Q: () => c,
    o: () => E
}),
    n(388685);
var i = n(73800),
    r = n(399606),
    l = n(823162),
    a = n(706454),
    d = n(914788),
    s = n(880257);
let o = new Set(['US']),
    u = new Set(['en-US', 'es-ES']),
    E = () => {
        let t = (0, s.Z)(),
            e = (0, r.e7)([d.Z], () => d.Z.getUserCountry()),
            n = (0, r.e7)([a.default], () => a.default.locale);
        return (
            i.useEffect(() => {
                null == e && (0, l.hi)();
            }, [e]),
            !t && null != e && o.has(e.alpha2) && u.has(n)
        );
    },
    c = () => {
        let t = (0, s.Z)(),
            e = E();
        return !t && !e;
    };
