"use strict";
n.d(t, { MU: () => c, uO: () => _ });
var i = n(997101),
    r = n(278416),
    s = n(166532),
    a = n(788868),
    o = n(327105),
    l = n(375708);
let u = [s.pn.REVIEW, s.pn.ADD_PAYMENT_STEPS],
    c = [s.pn.PLAN_SELECT, ...u],
    d = (e) => {
        if (null != e) return null != i.d[e] ? e : void 0;
    },
    _ = (e) => {
        let {
                skuId: t,
                step: n,
                showTrialBadge: i,
                showPromoBadge: c,
                showBetaBadge: _,
                premiumDiscountPercent: h,
                storeCountryFromCheckoutContext: f,
                relocationCountry: p,
            } = e,
            E = l.intl.string(l.t.q9EGps);
        n === s.pn.ADD_PAYMENT_STEPS && (E = l.intl.string(l.t.CpOiEO));
        let m = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
        _
            ? ((m.headerBadgeText = l.intl.string(l.t.oW0eUd)), (m.headerBadgeVariant = "default"))
            : i
              ? ((m.headerBadgeText = l.intl.string(o.default["mWL08+"])), (m.headerBadgeIcon = r.g))
              : c &&
                (m.headerBadgeText =
                    null != h
                        ? l.intl.formatToPlainString(l.t.iiLbvu, { percent: h })
                        : l.intl.string(o.default.Fjpyfj));
        let g = null != n && u.includes(n) ? { countryCode: d(f), relocationCountryCode: d(p) } : void 0;
        return null == t
            ? { title: E, gradientColor: void 0, ...g, ...m }
            : t === a.pe.TIER_0 || t === a.pe.TIER_1
              ? { title: E, gradientColor: "nitro-green", ...g, ...m }
              : t === a.pe.TIER_2
                ? { title: E, gradientColor: "nitro-pink", ...g, ...m }
                : { title: E, ...g, ...m };
    };
