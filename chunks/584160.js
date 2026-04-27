a.d(t, { M: () => c, u: () => u });
var n = a(997101),
    r = a(278416),
    i = a(166532),
    s = a(788868),
    l = a(327105),
    o = a(985018);
let c = [i.pn.PLAN_SELECT, i.pn.REVIEW, i.pn.ADD_PAYMENT_STEPS],
    d = (e, t) => {
        if (t && null != e) return null != n.d[e] ? e : void 0;
    },
    u = (e) => {
        let {
                skuId: t,
                step: a,
                showTrialBadge: n,
                showPromoBadge: c,
                storeCountryFromCheckoutContext: u,
                isStoreCountryEnabled: _,
                relocationCountry: p,
            } = e,
            m = o.intl.string(o.t.q9EGps);
        a === i.pn.ADD_PAYMENT_STEPS && (m = o.intl.string(o.t.CpOiEO));
        let b = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        n
            ? ((b.headerBadgeText = o.intl.string(l.default["mWL08+"])), (b.headerBadgeIcon = r.g))
            : c && (b.headerBadgeText = o.intl.string(l.default.Fjpyfj));
        let f = d(u, _),
            x = d(p, _);
        return null == t
            ? { title: m, gradientColor: void 0, countryCode: f, relocationCountryCode: x, ...b }
            : t === s.pe.TIER_0 || t === s.pe.TIER_1
              ? { title: m, gradientColor: "nitro-green", countryCode: f, relocationCountryCode: x, ...b }
              : t === s.pe.TIER_2
                ? { title: m, gradientColor: "nitro-pink", countryCode: f, relocationCountryCode: x, ...b }
                : { title: m, countryCode: f, relocationCountryCode: x, ...b };
    };
