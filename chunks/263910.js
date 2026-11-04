var C = e(582128),
    E = e(855986),
    r = e(975807),
    I = e(927813),
    _ = e(183972),
    a = e(919466),
    N = e(196099),
    n = e(297966);
e(375776);
let l = 5 * I.A.Millis.MINUTE;
e.d(
    A,
    {},
    {
        A: function (t) {
            let A = (0, E.bG)([a.A], () => a.A.getLastFetchTime()),
                e = (0, N.M)("xbox");
            return C.useCallback(async () => {
                var C;
                if (null != t && null != (C = A) && Date.now() - C < l) (0, r.A)(t.url, !0);
                else {
                    let t = await (0, _.aB)(n.n9.XGPP);
                    t?.redirect != null && (0, r.A)(t.redirect.url, !0);
                }
                e(N.H.CLAIM);
            }, [t, A, e]);
        },
    },
);
