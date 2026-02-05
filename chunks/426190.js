n.d(t, { N: () => u, z: () => _ });
var i = n(64700),
    s = n(417597),
    r = n(966107),
    a = n(773669),
    l = n(695515),
    o = n(438732);
let c = new Set(["US"]),
    d = new Set(["en-US", "es-ES"]),
    u = () => {
        let e = (0, o.A)(),
            t = (0, s.bG)([l.A], () => l.A.getUserCountry()),
            n = (0, s.bG)([a.default], () => a.default.locale);
        return (
            i.useEffect(() => {
                null == t && (0, r.xf)();
            }, [t]),
            !e && null != t && c.has(t.alpha2) && d.has(n)
        );
    },
    _ = () => {
        let e = (0, o.A)(),
            t = u();
        return !e && !t;
    };
