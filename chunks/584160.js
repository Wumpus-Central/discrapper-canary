n.d(t, { M: () => o, u: () => u });
var i = n(997101),
    r = n(278416),
    a = n(166532),
    l = n(788868),
    s = n(327105),
    d = n(985018);
let o = [a.pn.PLAN_SELECT, a.pn.REVIEW, a.pn.ADD_PAYMENT_STEPS],
    u = (e) => {
        let {
                skuId: t,
                step: n,
                showTrialBadge: o,
                showPromoBadge: u,
                storeCountryFromCheckoutContext: c,
                isStoreCountryEnabled: _,
            } = e,
            f = d.intl.string(d.t.q9EGps);
        n === a.pn.ADD_PAYMENT_STEPS && (f = d.intl.string(d.t.CpOiEO));
        let m = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        o
            ? ((m.headerBadgeText = d.intl.string(s.default["mWL08+"])), (m.headerBadgeIcon = r.g))
            : u && (m.headerBadgeText = d.intl.string(s.default.Fjpyfj));
        let g = _ && null != c && null != i.d[c] ? c : void 0;
        return null == t
            ? { title: f, gradientColor: void 0, countryCode: g, ...m }
            : t === l.pe.TIER_0 || t === l.pe.TIER_1
              ? { title: f, gradientColor: "nitro-green", countryCode: g, ...m }
              : t === l.pe.TIER_2
                ? { title: f, gradientColor: "nitro-pink", countryCode: g, ...m }
                : { title: f, countryCode: g, ...m };
    };
