n.d(t, { i: () => f });
var l = n(477900),
    i = n(582128),
    r = n(877624),
    a = n(721836),
    s = n(549996),
    o = n(562708),
    u = n(144165),
    c = n(262427),
    d = n(139286),
    m = n(462718);
function p(e) {
    let { componentId: t, promotionId: n, promotionBannerMarketingComponentFields: i } = e;
    (0, d.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: r.C.PAYMENT_MODAL_BANNER, component_id: t, promotion_id: n },
    });
    let a = (0, l.jsx)(u._, { src: i.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, l.jsx)(c.J, { className: m.No, customGraphic: a, text: i.body });
}
var C = n(951305),
    h = n(202541);
function f(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: o } = (0, C.Pv)(),
        u = (0, a.t4)((e) => e.get("selectedPlanAttributes").isPremiumGroupPurchase),
        c = (0, s.c)(r.C.PAYMENT_MODAL_BANNER);
    return i.useMemo(
        () =>
            o ||
            u ||
            t !== h.pe.TIER_2 ||
            null == c ||
            "paymentModalBanner" !== c.properties.properties.oneofKind ||
            (c.properties.contentIdentifier === h.iu && n?.orbsReward !== h.Qm)
                ? null
                : (0, l.jsx)(p, {
                      componentId: c.id,
                      promotionId: c.promotionId,
                      promotionBannerMarketingComponentFields: c.properties.properties.paymentModalBanner,
                  }),
        [o, u, t, c, n?.orbsReward],
    );
}
