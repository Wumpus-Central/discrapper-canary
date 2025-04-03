n.d(e, {
    Q: () => c,
    o: () => u
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    a = n(823162),
    o = n(706454),
    s = n(914788),
    l = n(880257);
let d = new Set(['US']),
    E = new Set(['en-US', 'es-ES']),
    u = () => {
        let t = (0, l.Z)(),
            e = (0, i.e7)([s.Z], () => s.Z.getUserCountry()),
            n = (0, i.e7)([o.default], () => o.default.locale);
        return (
            r.useEffect(() => {
                null == e && (0, a.hi)();
            }, [e]),
            !t && null != e && d.has(e.alpha2) && E.has(n)
        );
    },
    c = () => {
        let t = (0, l.Z)(),
            e = u();
        return !t && !e;
    };
