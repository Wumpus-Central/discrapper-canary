A.d(e, { A: () => u });
var r = A(64700),
    I = A(17928),
    a = A(975807),
    C = A(183972),
    E = A(919466),
    _ = A(196099),
    l = A(297966),
    N = A(927813);
A(985603);
let n = 5 * N.A.Millis.MINUTE;
function u(t) {
    let e = (0, I.bG)([E.A], () => E.A.getLastFetchTime()),
        A = (0, _.M)("xbox");
    return r.useCallback(async () => {
        var r;
        if (null != t && null != (r = e) && Date.now() - r < n) (0, a.A)(t.url, !0);
        else {
            let t = await (0, C.aB)(l.n9.XGPP);
            t?.redirect != null && (0, a.A)(t.redirect.url, !0);
        }
        A(_.H.CLAIM);
    }, [t, e, A]);
}
