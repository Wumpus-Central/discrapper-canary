"use strict";
n.d(t, { P: () => d });
var r = n(627968);
n(64700);
var i = n(877624),
    a = n(234419),
    s = n(549996),
    o = n(219794),
    l = n(585061),
    u = n(937008),
    c = n(788868);
function d(e) {
    let { planSkuId: t, referralTrialOfferId: n } = e,
        { isGift: d } = (0, u.Pv)(),
        _ = (0, a.V)(n),
        f = (0, s.c)(i.C.PAYMENT_MODAL_BANNER);
    return d || t !== c.pe.TIER_2
        ? null
        : null != f && "paymentModalBanner" === f.properties.properties.oneofKind
          ? (0, r.jsx)(o.f, {
                componentId: f.id,
                promotionBannerMarketingComponentFields: f.properties.properties.paymentModalBanner,
            })
          : _?.referrer_id != null
            ? (0, r.jsx)(l.A, {})
            : null;
}
