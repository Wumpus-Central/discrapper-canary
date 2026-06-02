t.d(n, { M: () => d, u: () => o });
var s = t(997101),
    r = t(278416),
    i = t(166532),
    l = t(788868),
    a = t(327105),
    c = t(375708);
let d = [i.pn.PLAN_SELECT, i.pn.REVIEW, i.pn.ADD_PAYMENT_STEPS],
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
                storeCountryFromCheckoutContext: L,
                isStoreCountryEnabled: C,
                relocationCountry: m,
            } = e,
            h = c.intl.string(c.t.q9EGps);
        t === i.pn.ADD_PAYMENT_STEPS && (h = c.intl.string(c.t.CpOiEO));
        let p = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        o
            ? ((p.headerBadgeText = c.intl.string(c.t.oW0eUd)), (p.headerBadgeVariant = "default"))
            : s
              ? ((p.headerBadgeText = c.intl.string(a.default["mWL08+"])), (p.headerBadgeIcon = r.g))
              : d && (p.headerBadgeText = c.intl.string(a.default.Fjpyfj));
        let x = u(L, C),
            g = u(m, C);
        return null == n
            ? { title: h, gradientColor: void 0, countryCode: x, relocationCountryCode: g, ...p }
            : n === l.pe.TIER_0 || n === l.pe.TIER_1
              ? { title: h, gradientColor: "nitro-green", countryCode: x, relocationCountryCode: g, ...p }
              : n === l.pe.TIER_2
                ? { title: h, gradientColor: "nitro-pink", countryCode: x, relocationCountryCode: g, ...p }
                : { title: h, countryCode: x, relocationCountryCode: g, ...p };
    };
