"use strict";
n.d(t, { P: () => _ });
var r = n(627968);
n(64700);
var i = n(877624),
    s = n(608805),
    a = n(234419),
    o = n(549996),
    l = n(219794),
    u = n(585061),
    c = n(937008),
    d = n(788868);
function _(e) {
    let { planSkuId: t, referralTrialOfferId: n, className: _ } = e,
        { isGift: f } = (0, c.Pv)(),
        p = (0, a.V)(n),
        h = (0, o.c)(i.C.PAYMENT_MODAL_BANNER),
        m = (0, s.D7)({ location: "PremiumPaymentPromotionBanner" });
    return f || t !== d.pe.TIER_2
        ? null
        : null != h && "paymentModalBanner" === h.properties.properties.oneofKind
          ? (0, r.jsx)(l.f, {
                className: _,
                shouldUseOfferNotice: m,
                componentId: h.id,
                promotionBannerMarketingComponentFields: h.properties.properties.paymentModalBanner,
            })
          : p?.referrer_id != null
            ? (0, r.jsx)(u.A, { className: _ })
            : null;
}
