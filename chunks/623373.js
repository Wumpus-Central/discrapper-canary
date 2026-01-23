n.d(t, {
    $K: () => l,
    Ab: () => d,
    B1: () => p,
    CW: () => o,
    YW: () => h,
    ex: () => f,
    rb: () => _,
}),
    n(896048);
var r = n(575593),
    i = n(590180),
    a = n(758836),
    s = n(652215);
let o = (e) => {
        var t, n, r, i, o;
        let { product: l, isPremiumUser: c, isRental: u } = e;
        return u
            ? a.nE
            : null !=
                (n = (
                    null !=
                    (t =
                        null == (o = l.prices[c ? s.lid.PREMIUM_TIER_2 : s.lid.DEFAULT]) ||
                        null == (i = o.countryPrices) ||
                        null == (r = i.prices)
                            ? void 0
                            : r.slice(0, 2))
                        ? t
                        : []
                ).find((e) => e.currency === s.Yri.DISCORD_ORB))
              ? n
              : null;
    },
    l = (e) => {
        var t, n, r, i, a;
        let { product: o, isPremiumUser: l } = e;
        return null !=
            (n = (
                null !=
                (t =
                    null == (a = o.prices[l ? s.lid.PREMIUM_TIER_2 : s.lid.DEFAULT]) ||
                    null == (i = a.countryPrices) ||
                    null == (r = i.prices)
                        ? void 0
                        : r.slice(0, 2))
                    ? t
                    : []
            ).find((e) => e.currency !== s.Yri.DISCORD_ORB))
            ? n
            : null;
    },
    c = (e) =>
        null !=
        o({
            product: e,
            isPremiumUser: !1,
            isRental: !1,
        }),
    u = (e) =>
        null !=
        l({
            product: e,
            isPremiumUser: !1,
        }),
    d = (e) => {
        if (null == e) return !1;
        let t = c(e),
            n = u(e);
        return t && !n;
    },
    f = (e) =>
        e.filter((e) => {
            let t = c(e),
                n = u(e);
            return t && n;
        }),
    p = (e) => e.type === r.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    _ = (e, t) => {
        var n, a, s;
        return e.type === r.R.VARIANTS_GROUP &&
            null != t &&
            null != (n = i.A.getProduct(null == (s = e.variants) || null == (a = s[t]) ? void 0 : a.skuId))
            ? n
            : e;
    },
    h = (e) => {
        if (null == e) return null;
        if (e.type === r.R.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    };
