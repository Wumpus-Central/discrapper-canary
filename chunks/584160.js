t.d(s, { M: () => u, u: () => d });
var n = t(997101),
    i = t(278416),
    r = t(166532),
    a = t(788868),
    l = t(327105),
    c = t(375708);
let u = [r.pn.PLAN_SELECT, r.pn.REVIEW, r.pn.ADD_PAYMENT_STEPS],
    o = (e, s) => {
        if (s && null != e) return null != n.d[e] ? e : void 0;
    },
    d = (e) => {
        let {
                skuId: s,
                step: t,
                showTrialBadge: n,
                showPromoBadge: u,
                showBetaBadge: d,
                premiumDiscountPercent: m,
                storeCountryFromCheckoutContext: C,
                isStoreCountryEnabled: x,
                relocationCountry: p,
            } = e,
            L = c.intl.string(c.t.q9EGps);
        t === r.pn.ADD_PAYMENT_STEPS && (L = c.intl.string(c.t.CpOiEO));
        let h = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        d
            ? ((h.headerBadgeText = c.intl.string(c.t.oW0eUd)), (h.headerBadgeVariant = "default"))
            : n
              ? ((h.headerBadgeText = c.intl.string(l.default["mWL08+"])), (h.headerBadgeIcon = i.g))
              : u &&
                (h.headerBadgeText =
                    null != m
                        ? c.intl.formatToPlainString(c.t.iiLbvu, { percent: m })
                        : c.intl.string(l.default.Fjpyfj));
        let j = o(C, x),
            g = o(p, x);
        return null == s
            ? { title: L, gradientColor: void 0, countryCode: j, relocationCountryCode: g, ...h }
            : s === a.pe.TIER_0 || s === a.pe.TIER_1
              ? { title: L, gradientColor: "nitro-green", countryCode: j, relocationCountryCode: g, ...h }
              : s === a.pe.TIER_2
                ? { title: L, gradientColor: "nitro-pink", countryCode: j, relocationCountryCode: g, ...h }
                : { title: L, countryCode: j, relocationCountryCode: g, ...h };
    };
