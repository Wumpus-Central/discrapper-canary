n.d(t, { u: () => d });
var l = n(997101),
    i = n(278416),
    r = n(166532),
    a = n(202541),
    s = n(649975),
    o = n(375708);
let u = [r.pn.REVIEW, r.pn.ADD_PAYMENT_STEPS];
function c(e) {
    if (null != e) return null != l.d[e] ? e : void 0;
}
function d(e) {
    let {
            skuId: t,
            step: n,
            storeCountryFromCheckoutContext: l,
            relocationCountry: d,
            headerBadgePreset: p,
            headerBadgeText: m,
            headerBadgeIcon: h,
            headerBadgeVariant: C,
        } = e,
        f = o.intl.string(o.t.q9EGps);
    n === r.pn.ADD_PAYMENT_STEPS && (f = o.intl.string(o.t.CpOiEO));
    let S = { headerBadgeText: m, headerBadgeIcon: h, headerBadgeVariant: C };
    "beta" === p
        ? ((S.headerBadgeText = o.intl.string(o.t.oW0eUd)), (S.headerBadgeVariant = "default"))
        : "trial" === p
          ? ((S.headerBadgeText = o.intl.string(s.default["mWL08+"])), (S.headerBadgeIcon = i.TagIcon))
          : "promo" === p && (S.headerBadgeText = o.intl.string(s.default.Fjpyfj));
    let E = null != n && u.includes(n) ? { countryCode: c(l), relocationCountryCode: c(d) } : void 0;
    return null == t
        ? { title: f, gradientColor: void 0, ...E, ...S }
        : t === a.pe.TIER_0 || t === a.pe.TIER_1
          ? { title: f, gradientColor: "nitro-green", ...E, ...S }
          : t === a.pe.TIER_2
            ? { title: f, gradientColor: "nitro-pink", ...E, ...S }
            : { title: f, ...E, ...S };
}
