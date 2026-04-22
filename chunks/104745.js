n.d(t, { P: () => p });
var l = n(627968);
n(64700);
var i = n(877624),
    a = n(742810),
    r = n(234419),
    s = n(549996),
    o = n(219794),
    u = n(585061),
    c = n(937008),
    d = n(788868);
function p(e) {
    let { planSkuId: t, referralTrialOfferId: n, className: p } = e,
        { isGift: m } = (0, c.Pv)(),
        h = (0, r.V)(n),
        A = (0, s.c)(i.C.PAYMENT_MODAL_BANNER),
        _ = (0, a.D7)({ location: "PremiumPaymentPromotionBanner" });
    return m || t !== d.pe.TIER_2
        ? null
        : null != A && "paymentModalBanner" === A.properties.properties.oneofKind
          ? (0, l.jsx)(o.f, {
                className: p,
                shouldUseOfferNotice: _,
                componentId: A.id,
                promotionBannerMarketingComponentFields: A.properties.properties.paymentModalBanner,
            })
          : h?.referrer_id != null
            ? (0, l.jsx)(u.A, { className: p })
            : null;
}
