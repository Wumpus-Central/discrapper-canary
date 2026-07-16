n.d(t, { u: () => d });
var l = n(997101),
    i = n(278416),
    r = n(166532),
    a = n(202541),
    s = n(327105),
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
        A = o.intl.string(o.t.q9EGps);
    n === r.pn.ADD_PAYMENT_STEPS && (A = o.intl.string(o.t.CpOiEO));
    let E = { headerBadgeText: m, headerBadgeIcon: h, headerBadgeVariant: C };
    "beta" === p
        ? ((E.headerBadgeText = o.intl.string(o.t.oW0eUd)), (E.headerBadgeVariant = "default"))
        : "trial" === p
          ? ((E.headerBadgeText = o.intl.string(s.default["mWL08+"])), (E.headerBadgeIcon = i.g))
          : "promo" === p && (E.headerBadgeText = o.intl.string(s.default.Fjpyfj));
    let f = null != n && u.includes(n) ? { countryCode: c(l), relocationCountryCode: c(d) } : void 0;
    return null == t
        ? { title: A, gradientColor: void 0, ...f, ...E }
        : t === a.pe.TIER_0 || t === a.pe.TIER_1
          ? { title: A, gradientColor: "nitro-green", ...f, ...E }
          : t === a.pe.TIER_2
            ? { title: A, gradientColor: "nitro-pink", ...f, ...E }
            : { title: A, ...f, ...E };
}
