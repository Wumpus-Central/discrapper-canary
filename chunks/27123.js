n.d(t, {
    T4: () => a,
    cB: () => o,
    cf: () => u,
    r1: () => c,
});
var r = n(215023),
    i = n(981631);
let a = (e) => {
        var t, n, a, o, s;
        let { product: l, isPremiumUser: c, isRental: u } = e;
        return u
            ? r.sT
            : null !=
                (s = (
                    null !=
                    (o =
                        null == (a = l.prices[c ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) ||
                        null == (n = a.countryPrices) ||
                        null == (t = n.prices)
                            ? void 0
                            : t.slice(0, 2))
                        ? o
                        : []
                ).find((e) => e.currency === i.pKx.DISCORD_ORB))
              ? s
              : null;
    },
    o = (e) => {
        var t, n, r, a, o;
        let { product: s, isPremiumUser: l } = e;
        return null !=
            (o = (
                null !=
                (a =
                    null == (r = s.prices[l ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) ||
                    null == (n = r.countryPrices) ||
                    null == (t = n.prices)
                        ? void 0
                        : t.slice(0, 2))
                    ? a
                    : []
            ).find((e) => e.currency !== i.pKx.DISCORD_ORB))
            ? o
            : null;
    },
    s = (e) =>
        null !=
        a({
            product: e,
            isPremiumUser: !1,
            isRental: !1,
        }),
    l = (e) =>
        null !=
        o({
            product: e,
            isPremiumUser: !1,
        }),
    c = (e) => {
        if (null == e) return !1;
        let t = s(e),
            n = l(e);
        return t && !n;
    },
    u = (e) =>
        e.filter((e) => {
            let t = s(e),
                n = l(e);
            return t && n;
        });
