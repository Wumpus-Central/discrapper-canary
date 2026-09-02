A.d(e, { A: () => L });
var C = A(582128),
    E = A(17928),
    r = A(975807),
    I = A(927813),
    _ = A(183972),
    a = A(919466),
    N = A(196099),
    n = A(297966);
A(375776);
let l = 5 * I.A.Millis.MINUTE;
function L(t) {
    let e = (0, E.bG)([a.A], () => a.A.getLastFetchTime()),
        A = (0, N.M)("xbox");
    return C.useCallback(async () => {
        var C;
        if (null != t && null != (C = e) && Date.now() - C < l) (0, r.A)(t.url, !0);
        else {
            let t = await (0, _.aB)(n.n9.XGPP);
            t?.redirect != null && (0, r.A)(t.redirect.url, !0);
        }
        A(N.H.CLAIM);
    }, [t, e, A]);
}
