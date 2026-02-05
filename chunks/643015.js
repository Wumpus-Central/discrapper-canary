i.d(t, { A: () => d });
var n = i(64700),
    a = i(311907),
    l = i(287809),
    r = i(966107),
    s = i(380335);
let o = new Set(["GB"]);
function d() {
    let e = (0, a.bG)([s.A], () => s.A.getUserCountryCode()),
        t = !1 === (0, a.bG)([l.default], () => l.default.getCurrentUser()?.nsfwAllowed);
    return (
        n.useEffect(() => {
            null == e && (0, r.xf)();
        }, [e]),
        null != e && !!o.has(e.alpha2) && !!t
    );
}
