A.d(e, { A: () => u });
var r = A(64700),
    I = A(17928),
    a = A(975807),
    C = A(927813),
    E = A(183972),
    _ = A(919466),
    l = A(196099),
    N = A(297966);
A(375776);
let n = 5 * C.A.Millis.MINUTE;
function u(t) {
    let e = (0, I.bG)([_.A], () => _.A.getLastFetchTime()),
        A = (0, l.M)("xbox");
    return r.useCallback(async () => {
        var r;
        if (null != t && null != (r = e) && Date.now() - r < n) (0, a.A)(t.url, !0);
        else {
            let t = await (0, E.aB)(N.n9.XGPP);
            t?.redirect != null && (0, a.A)(t.redirect.url, !0);
        }
        A(l.H.CLAIM);
    }, [t, e, A]);
}
