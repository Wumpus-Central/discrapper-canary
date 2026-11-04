var n = e(855986),
    t = e(4227),
    u = e(623373);
e.d(
    a,
    {},
    {
        K: function (s) {
            let a = (0, n.bG)([t.A], () => t.A.purchases);
            return null != s && (0, u.B1)(s)
                ? Math.max(
                      0,
                      s.variants.findIndex((s) => !a.has(s.skuId)),
                  )
                : 0;
        },
    },
);
