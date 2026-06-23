"use strict";
n.d(t, { M: () => u, u: () => d });
var i = n(997101),
    r = n(278416),
    s = n(166532),
    a = n(788868),
    o = n(327105),
    l = n(375708);
let u = [s.pn.PLAN_SELECT, s.pn.REVIEW, s.pn.ADD_PAYMENT_STEPS],
    c = (e) => {
        if (null != e) return null != i.d[e] ? e : void 0;
    },
    d = (e) => {
        let {
                skuId: t,
                step: n,
                showTrialBadge: i,
                showPromoBadge: u,
                showBetaBadge: d,
                premiumDiscountPercent: _,
                storeCountryFromCheckoutContext: h,
                relocationCountry: f,
            } = e,
            p = l.intl.string(l.t.q9EGps);
        n === s.pn.ADD_PAYMENT_STEPS && (p = l.intl.string(l.t.CpOiEO));
        let E = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        d
            ? ((E.headerBadgeText = l.intl.string(l.t.oW0eUd)), (E.headerBadgeVariant = "default"))
            : i
              ? ((E.headerBadgeText = l.intl.string(o.default["mWL08+"])), (E.headerBadgeIcon = r.g))
              : u &&
                (E.headerBadgeText =
                    null != _
                        ? l.intl.formatToPlainString(l.t.iiLbvu, { percent: _ })
                        : l.intl.string(o.default.Fjpyfj));
        let m = c(h),
            g = c(f);
        return null == t
            ? { title: p, gradientColor: void 0, countryCode: m, relocationCountryCode: g, ...E }
            : t === a.pe.TIER_0 || t === a.pe.TIER_1
              ? { title: p, gradientColor: "nitro-green", countryCode: m, relocationCountryCode: g, ...E }
              : t === a.pe.TIER_2
                ? { title: p, gradientColor: "nitro-pink", countryCode: m, relocationCountryCode: g, ...E }
                : { title: p, countryCode: m, relocationCountryCode: g, ...E };
    };
