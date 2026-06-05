t.d(n, { M: () => d, u: () => o });
var s = t(997101),
    i = t(278416),
    r = t(166532),
    l = t(788868),
    a = t(327105),
    c = t(375708);
let d = [r.pn.PLAN_SELECT, r.pn.REVIEW, r.pn.ADD_PAYMENT_STEPS],
    u = (e, n) => {
        if (n && null != e) return null != s.d[e] ? e : void 0;
    },
    o = (e) => {
        let {
                skuId: n,
                step: t,
                showTrialBadge: s,
                showPromoBadge: d,
                showBetaBadge: o,
                premiumDiscountPercent: L,
                storeCountryFromCheckoutContext: C,
                isStoreCountryEnabled: m,
                relocationCountry: h,
            } = e,
            p = c.intl.string(c.t.q9EGps);
        t === r.pn.ADD_PAYMENT_STEPS && (p = c.intl.string(c.t.CpOiEO));
        let g = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        o
            ? ((g.headerBadgeText = c.intl.string(c.t.oW0eUd)), (g.headerBadgeVariant = "default"))
            : s
              ? ((g.headerBadgeText = c.intl.string(a.default["mWL08+"])), (g.headerBadgeIcon = i.g))
              : d &&
                (g.headerBadgeText =
                    null != L
                        ? c.intl.formatToPlainString(c.t.iiLbvu, { percent: L })
                        : c.intl.string(a.default.Fjpyfj));
        let x = u(C, m),
            T = u(h, m);
        return null == n
            ? { title: p, gradientColor: void 0, countryCode: x, relocationCountryCode: T, ...g }
            : n === l.pe.TIER_0 || n === l.pe.TIER_1
              ? { title: p, gradientColor: "nitro-green", countryCode: x, relocationCountryCode: T, ...g }
              : n === l.pe.TIER_2
                ? { title: p, gradientColor: "nitro-pink", countryCode: x, relocationCountryCode: T, ...g }
                : { title: p, countryCode: x, relocationCountryCode: T, ...g };
    };
