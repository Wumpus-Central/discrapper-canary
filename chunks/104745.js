"use strict";
n.d(t, { P: () => d });
var r = n(627968);
n(64700);
var i = n(877624),
    s = n(234419),
    a = n(549996),
    o = n(219794),
    l = n(585061),
    u = n(937008),
    c = n(788868);
function d(e) {
    let { planSkuId: t, referralTrialOfferId: n, className: d } = e,
        { isGift: _ } = (0, u.Pv)(),
        f = (0, s.V)(n),
        p = (0, a.c)(i.C.PAYMENT_MODAL_BANNER);
    return _ || t !== c.pe.TIER_2
        ? null
        : null != p && "paymentModalBanner" === p.properties.properties.oneofKind
          ? (0, r.jsx)(o.f, {
                className: d,
                componentId: p.id,
                promotionBannerMarketingComponentFields: p.properties.properties.paymentModalBanner,
            })
          : f?.referrer_id != null
            ? (0, r.jsx)(l.A, { className: d })
            : null;
}
