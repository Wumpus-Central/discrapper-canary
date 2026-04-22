n.d(t, { M: () => u, u: () => c });
var a = n(997101),
    r = n(278416),
    l = n(166532),
    i = n(788868),
    s = n(327105),
    o = n(985018);
let u = [l.pn.PLAN_SELECT, l.pn.REVIEW, l.pn.ADD_PAYMENT_STEPS],
    c = (e) => {
        let {
                skuId: t,
                step: n,
                showTrialBadge: u,
                showPromoBadge: c,
                storeCountryFromCheckoutContext: d,
                isStoreCountryEnabled: m,
            } = e,
            p = o.intl.string(o.t.q9EGps);
        n === l.pn.ADD_PAYMENT_STEPS && (p = o.intl.string(o.t.CpOiEO));
        let _ = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        u
            ? ((_.headerBadgeText = o.intl.string(s.default["mWL08+"])), (_.headerBadgeIcon = r.g))
            : c && (_.headerBadgeText = o.intl.string(s.default.Fjpyfj));
        let f = m && null != d && null != a.d[d] ? d : void 0;
        return null == t
            ? { title: p, gradientColor: void 0, countryCode: f, ..._ }
            : t === i.pe.TIER_0 || t === i.pe.TIER_1
              ? { title: p, gradientColor: "nitro-green", countryCode: f, ..._ }
              : t === i.pe.TIER_2
                ? { title: p, gradientColor: "nitro-pink", countryCode: f, ..._ }
                : { title: p, countryCode: f, ..._ };
    };
