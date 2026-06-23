n.d(t, { N: () => d, z: () => f });
var u = n(64700),
    a = n(702841),
    l = n(966107),
    s = n(773669),
    r = n(695515),
    c = n(438732);
let h = new Set(["US"]),
    p = new Set(["en-US", "es-ES"]);
function d() {
    let e = (0, c.A)(),
        t = (0, a.bG)([r.A], () => r.A.getUserCountry()),
        n = (0, a.bG)([s.default], () => s.default.locale);
    return (
        u.useEffect(() => {
            null == t && (0, l.xf)();
        }, [t]),
        !e && null != t && h.has(t.alpha2) && p.has(n)
    );
}
function f() {
    let e = (0, c.A)(),
        t = d();
    return !e && !t;
}
