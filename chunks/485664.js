n.d(e, {
    Q: () => u,
    o: () => _
}),
    n(47120);
var i = n(192379),
    r = n(399606),
    l = n(823162),
    a = n(706454),
    s = n(914788),
    o = n(880257);
let E = new Set(['US']),
    d = new Set(['en-US', 'es-ES']),
    _ = () => {
        let t = (0, o.Z)(),
            e = (0, r.e7)([s.Z], () => s.Z.getUserCountry()),
            n = (0, r.e7)([a.default], () => a.default.locale);
        return (
            i.useEffect(() => {
                null == e && (0, l.hi)();
            }, [e]),
            !t && null != e && E.has(e.alpha2) && d.has(n)
        );
    },
    u = () => {
        let t = (0, o.Z)(),
            e = _();
        return !t && !e;
    };
