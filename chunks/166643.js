n.d(t, { A: () => d });
var i = n(64700),
    l = n(997101),
    s = n(17928),
    a = n(966107),
    r = n(840387),
    o = n(923495);
[...l.M.EU_COUNTRIES];
let c = new Set(["GB"]);
function d() {
    let e, t;
    return (
        (e = (0, s.bG)([o.A], () => o.A.getUserCountryCode())),
        i.useEffect(() => {
            null == e && (0, a.xf)();
        }, [e]),
        (t = e),
        (0, r.Z)() && null != t && c.has(t.alpha2)
    );
}
