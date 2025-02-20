n.d(e, {
    Q: () => c,
    o: () => d
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    o = n(823162),
    a = n(706454),
    s = n(914788),
    l = n(880257);
let E = new Set(['US']),
    u = new Set(['en-US', 'es-ES']),
    d = () => {
        let t = (0, l.Z)(),
            e = (0, i.e7)([s.Z], () => s.Z.getUserCountry()),
            n = (0, i.e7)([a.default], () => a.default.locale);
        return (
            r.useEffect(() => {
                null == e && (0, o.hi)();
            }, [e]),
            !t && null != e && E.has(e.alpha2) && u.has(n)
        );
    },
    c = () => {
        let t = (0, l.Z)(),
            e = d();
        return !t && !e;
    };
