var l = n(855986),
    i = n(561573),
    r = n(379031);
n.d(
    t,
    {},
    {
        n: function (e) {
            let { surface: t, skuId: n } = e,
                a = (0, r.g)(t);
            return (0, l.bG)(
                [i.A],
                () =>
                    (function (e, t) {
                        if (null == e) return null;
                        for (let n of e) {
                            let e = n[t];
                            if (e?.amount != null && e.amount > 0) return e;
                        }
                        return null;
                    })(i.A.getRewardsForSkuId(n), a),
                [n, a],
            );
        },
    },
);
