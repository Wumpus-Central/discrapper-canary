"use strict";
n.d(t, { M: () => u, u: () => c });
var r = n(997101),
    i = n(397927),
    s = n(166532),
    a = n(788868),
    o = n(366023),
    l = n(985018);
let u = [s.pn.PLAN_SELECT, s.pn.REVIEW, s.pn.ADD_PAYMENT_STEPS],
    c = (e) => {
        let {
                skuId: t,
                step: n,
                showTrialBadge: u,
                showPromoBadge: c,
                storeCountryFromCheckoutContext: d,
                isStoreCountryEnabled: _,
            } = e,
            f = l.intl.string(l.t.q9EGps);
        n === s.pn.ADD_PAYMENT_STEPS && (f = l.intl.string(l.t.CpOiEO));
        let p = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        u
            ? ((p.headerBadgeText = l.intl.string(o.default["mWL08+"])), (p.headerBadgeIcon = i.gqV))
            : c && (p.headerBadgeText = l.intl.string(o.default.Fjpyfj));
        let h = _ && null != d && null != r.d[d] ? d : void 0;
        return null == t
            ? { title: f, gradientColor: void 0, countryCode: h, ...p }
            : t === a.pe.TIER_0 || t === a.pe.TIER_1
              ? { title: f, gradientColor: "nitro-green", countryCode: h, ...p }
              : t === a.pe.TIER_2
                ? { title: f, gradientColor: "nitro-pink", countryCode: h, ...p }
                : { title: f, countryCode: h, ...p };
    };
