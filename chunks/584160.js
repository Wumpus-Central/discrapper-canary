t.d(s, { MU: () => o, uO: () => m });
var n = t(997101),
    i = t(278416),
    r = t(166532),
    a = t(202541),
    l = t(327105),
    c = t(375708);
let u = [r.pn.REVIEW, r.pn.ADD_PAYMENT_STEPS],
    o = [r.pn.PLAN_SELECT, ...u];
function d(e) {
    if (null != e) return null != n.d[e] ? e : void 0;
}
function m(e) {
    let {
            skuId: s,
            step: t,
            storeCountryFromCheckoutContext: n,
            relocationCountry: o,
            headerBadgePreset: m,
            customHeaderBadgeText: C,
        } = e,
        x = c.intl.string(c.t.q9EGps);
    t === r.pn.ADD_PAYMENT_STEPS && (x = c.intl.string(c.t.CpOiEO));
    let p = { headerBadgeText: void 0, headerBadgeIcon: void 0 };
    null != C
        ? (p.headerBadgeText = C)
        : "beta" === m
          ? ((p.headerBadgeText = c.intl.string(c.t.oW0eUd)), (p.headerBadgeVariant = "default"))
          : "trial" === m
            ? ((p.headerBadgeText = c.intl.string(l.default["mWL08+"])), (p.headerBadgeIcon = i.g))
            : "promo" === m && (p.headerBadgeText = c.intl.string(l.default.Fjpyfj));
    let L = null != t && u.includes(t) ? { countryCode: d(n), relocationCountryCode: d(o) } : void 0;
    return null == s
        ? { title: x, gradientColor: void 0, ...L, ...p }
        : s === a.pe.TIER_0 || s === a.pe.TIER_1
          ? { title: x, gradientColor: "nitro-green", ...L, ...p }
          : s === a.pe.TIER_2
            ? { title: x, gradientColor: "nitro-pink", ...L, ...p }
            : { title: x, ...L, ...p };
}
