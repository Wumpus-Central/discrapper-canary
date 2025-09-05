n.d(t, {
    T: () => a,
    v: () => i,
});
var r = n(981631);
let i = (e) => {
        var t, n, i, a;
        let { product: o, isPremiumUser: s } = e;
        return null !=
            (a =
                null == (i = o.prices[s ? r.tuJ.PREMIUM_TIER_2 : r.tuJ.DEFAULT]) ||
                null == (n = i.countryPrices) ||
                null == (t = n.prices)
                    ? void 0
                    : t.slice(0, 2))
            ? a
            : [];
    },
    a = (e) => {
        var t;
        let { product: n, isPremiumUser: a } = e;
        return null !=
            (t = i({
                product: n,
                isPremiumUser: a,
            }).find((e) => e.currency === r.pKx.DISCORD_ORB))
            ? t
            : null;
    };
