n.d(e, { A: () => I });
var i = n(582128),
    A = n(17928),
    d = n(975807),
    r = n(927813),
    C = n(183972),
    a = n(919466),
    E = n(196099),
    l = n(297966);
n(375776);
let N = 5 * r.A.Millis.MINUTE;
function I(t) {
    let e = (0, A.bG)([a.A], () => a.A.getLastFetchTime()),
        n = (0, E.M)("xbox");
    return i.useCallback(async () => {
        var i;
        if (null != t && null != (i = e) && Date.now() - i < N) (0, d.A)(t.url, !0);
        else {
            let t = await (0, C.aB)(l.n9.XGPP);
            t?.redirect != null && (0, d.A)(t.redirect.url, !0);
        }
        n(E.H.CLAIM);
    }, [t, e, n]);
}
