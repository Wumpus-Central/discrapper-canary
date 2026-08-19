n.d(t, { i: () => f });
var l = n(477900),
    i = n(582128),
    r = n(877624),
    a = n(87725),
    s = n(549996),
    o = n(562708),
    u = n(144165),
    c = n(262427),
    d = n(139286),
    p = n(462718);
function m(e) {
    let { componentId: t, promotionId: n, promotionBannerMarketingComponentFields: i } = e;
    (0, d.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: r.C.PAYMENT_MODAL_BANNER, component_id: t, promotion_id: n },
    });
    let a = (0, l.jsx)(u._, { src: i.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, l.jsx)(c.J, { className: p.No, customGraphic: a, text: i.body });
}
var h = n(951305),
    C = n(202541);
function f(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: o } = (0, h.Pv)(),
        u = (0, a.t4)((e) => e.get("selectedPlanAttributes").isPremiumGroupPurchase),
        c = (0, s.c)(r.C.PAYMENT_MODAL_BANNER);
    return i.useMemo(
        () =>
            o ||
            u ||
            t !== C.pe.TIER_2 ||
            null == c ||
            "paymentModalBanner" !== c.properties.properties.oneofKind ||
            (c.properties.contentIdentifier === C.iu && n?.orbsReward !== C.Qm)
                ? null
                : (0, l.jsx)(m, {
                      componentId: c.id,
                      promotionId: c.promotionId,
                      promotionBannerMarketingComponentFields: c.properties.properties.paymentModalBanner,
                  }),
        [o, u, t, c, n?.orbsReward],
    );
}
