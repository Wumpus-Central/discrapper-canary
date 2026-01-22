n.d(t, {
    P: () => d,
});
var r = n(627968);
n(64700);
var i = n(877624),
    a = n(234419),
    s = n(549996),
    o = n(219794),
    l = n(585061),
    c = n(937008),
    u = n(788868);

function d(e) {
    let { planSkuId: t, referralTrialOfferId: n } = e,
        { isGift: d } = (0, c.Pv)(),
        f = (0, a.V)(n),
        p = (0, s.c)(i.C.PAYMENT_MODAL_BANNER);
    return d || t !== u.pe.TIER_2
        ? null
        : null != p && "paymentModalBanner" === p.properties.properties.oneofKind
          ? (0, r.jsx)(o.f, {
                componentId: p.id,
                promotionBannerMarketingComponentFields: p.properties.properties.paymentModalBanner,
            })
          : (null == f ? void 0 : f.referrer_id) != null
            ? (0, r.jsx)(l.A, {})
            : null;
}
