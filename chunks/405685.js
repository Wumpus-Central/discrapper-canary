n.d(t, { a: () => d });
var r = n(951288);
n(647438);
var i = n(79766),
    a = n(639119),
    o = n(715130),
    s = n(427261),
    l = n(381507),
    c = n(987209),
    u = n(474936);
function d(e) {
    let { planSkuId: t, referralTrialOfferId: n } = e,
        { isGift: d } = (0, c.wD)(),
        f = (0, a.N)(n),
        _ = (0, o.H)(i.I.PAYMENT_MODAL_BANNER);
    return d || t !== u.Si.TIER_2
        ? null
        : null != _ && "paymentModalBanner" === _.properties.properties.oneofKind
          ? (0, r.jsx)(s.h, {
                componentId: _.id,
                promotionBannerMarketingComponentFields: _.properties.properties.paymentModalBanner,
            })
          : (null == f ? void 0 : f.referrer_id) != null
            ? (0, r.jsx)(l.Z, {})
            : null;
}
