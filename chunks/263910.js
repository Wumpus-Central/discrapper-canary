n.d(e, { A: () => l });
var i = n(582128),
    A = n(17928),
    C = n(975807),
    d = n(927813),
    r = n(183972),
    a = n(919466),
    E = n(196099),
    I = n(297966);
n(375776);
let _ = 5 * d.A.Millis.MINUTE;
function l(t) {
    let e = (0, A.bG)([a.A], () => a.A.getLastFetchTime()),
        n = (0, E.M)("xbox");
    return i.useCallback(async () => {
        var i;
        if (null != t && null != (i = e) && Date.now() - i < _) (0, C.A)(t.url, !0);
        else {
            let t = await (0, r.aB)(I.n9.XGPP);
            t?.redirect != null && (0, C.A)(t.redirect.url, !0);
        }
        n(E.H.CLAIM);
    }, [t, e, n]);
}
