"use strict";
n.d(t, { MU: () => c, uO: () => _ });
var i = n(997101),
    r = n(278416),
    s = n(166532),
    a = n(788868),
    o = n(327105),
    l = n(375708);
let u = [s.pn.REVIEW, s.pn.ADD_PAYMENT_STEPS],
    c = [s.pn.PLAN_SELECT, ...u];
function d(e) {
    if (null != e) return null != i.d[e] ? e : void 0;
}
function _(e) {
    let {
            skuId: t,
            step: n,
            storeCountryFromCheckoutContext: i,
            relocationCountry: c,
            headerBadgePreset: _,
            customHeaderBadgeText: h,
        } = e,
        f = l.intl.string(l.t.q9EGps);
    n === s.pn.ADD_PAYMENT_STEPS && (f = l.intl.string(l.t.CpOiEO));
    let p = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
    null != h
        ? (p.headerBadgeText = h)
        : "beta" === _
          ? ((p.headerBadgeText = l.intl.string(l.t.oW0eUd)), (p.headerBadgeVariant = "default"))
          : "trial" === _
            ? ((p.headerBadgeText = l.intl.string(o.default["mWL08+"])), (p.headerBadgeIcon = r.g))
            : "promo" === _ && (p.headerBadgeText = l.intl.string(o.default.Fjpyfj));
    let E = null != n && u.includes(n) ? { countryCode: d(i), relocationCountryCode: d(c) } : void 0;
    return null == t
        ? { title: f, gradientColor: void 0, ...E, ...p }
        : t === a.pe.TIER_0 || t === a.pe.TIER_1
          ? { title: f, gradientColor: "nitro-green", ...E, ...p }
          : t === a.pe.TIER_2
            ? { title: f, gradientColor: "nitro-pink", ...E, ...p }
            : { title: f, ...E, ...p };
}
