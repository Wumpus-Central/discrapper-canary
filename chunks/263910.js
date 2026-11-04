var C = e(582128),
    r = e(855986),
    a = e(975807),
    E = e(927813),
    I = e(183972),
    _ = e(919466),
    n = e(196099),
    N = e(297966);
e(375776);
let l = 5 * E.A.Millis.MINUTE;
e.d(
    A,
    {},
    {
        A: function (t) {
            let A = (0, r.bG)([_.A], () => _.A.getLastFetchTime()),
                e = (0, n.M)("xbox");
            return C.useCallback(async () => {
                var C;
                if (null != t && null != (C = A) && Date.now() - C < l) (0, a.A)(t.url, !0);
                else {
                    let t = await (0, I.aB)(N.n9.XGPP);
                    t?.redirect != null && (0, a.A)(t.redirect.url, !0);
                }
                e(n.H.CLAIM);
            }, [t, A, e]);
        },
    },
);
