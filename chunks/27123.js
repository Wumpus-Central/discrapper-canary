n.d(t, {
    T4: () => o,
    cf: () => l,
    r1: () => s,
    vH: () => a,
}),
    n(388685);
var r = n(215023),
    i = n(981631);
let a = (e) => {
        var t, n, r, a;
        let { product: o, isPremiumUser: s } = e;
        return null !=
            (a =
                null == (r = o.prices[s ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) ||
                null == (n = r.countryPrices) ||
                null == (t = n.prices)
                    ? void 0
                    : t.slice(0, 2))
            ? a
            : [];
    },
    o = (e) => {
        var t;
        let { product: n, isPremiumUser: o, isRental: s } = e;
        return s
            ? r.sT
            : null !=
                (t = a({
                    product: n,
                    isPremiumUser: o,
                }).find((e) => e.currency === i.pKx.DISCORD_ORB))
              ? t
              : null;
    },
    s = (e) => {
        if (null == e) return !1;
        let t = a({
            product: e,
            isPremiumUser: !1,
        });
        return t.length > 0 && void 0 === t.find((e) => e.currency !== i.pKx.DISCORD_ORB);
    },
    l = (e) =>
        e.filter((e) => {
            let t = a({
                    product: e,
                    isPremiumUser: !1,
                }),
                n = !1,
                r = !1;
            for (let e of t) if ((e.currency === i.pKx.DISCORD_ORB ? (n = !0) : (r = !0), n && r)) break;
            return n && r;
        });
