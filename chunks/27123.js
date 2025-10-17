n.d(t, {
    T4: () => a,
    cf: () => s,
    r1: () => o,
    vH: () => i,
}),
    n(388685);
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
    },
    o = (e) => {
        if (null == e) return !1;
        let t = i({
            product: e,
            isPremiumUser: !1,
        });
        return t.length > 0 && void 0 === t.find((e) => e.currency !== r.pKx.DISCORD_ORB);
    },
    s = (e) =>
        e.filter((e) => {
            let t = i({
                    product: e,
                    isPremiumUser: !1,
                }),
                n = !1,
                a = !1;
            for (let e of t) if ((e.currency === r.pKx.DISCORD_ORB ? (n = !0) : (a = !0), n && a)) break;
            return n && a;
        });
