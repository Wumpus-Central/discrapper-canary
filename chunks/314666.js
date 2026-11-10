n.d(t, { i: () => S });
var l = n(477900),
    i = n(582128),
    r = n(877624),
    a = n(316363),
    s = n(412260),
    o = n(641436),
    u = n(613412),
    c = n(517352),
    d = n(251843),
    m = n(262427),
    p = n(139286),
    h = n(462718);
function C(e) {
    let {
        componentId: t,
        componentType: n = c.oW.PAYMENT_MODAL_BANNER,
        promotionId: i,
        promotionBannerMarketingComponentFields: r,
    } = e;
    (0, p.A)({
        type: u.ImpressionTypes.VIEW,
        name: u.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n, component_id: t, promotion_id: i },
    });
    let a = (0, l.jsx)(d._, { src: r.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, l.jsx)(m.J, { className: h.No, customGraphic: a, text: r.body });
}
var f = n(418200),
    E = n(682901);
function S(e) {
    var t;
    let { planSkuId: n, invoice: u } = e,
        { isGift: c } = (0, f.Pv)(),
        d = (0, a.t4)((e) => e.get("selectedPlanAttributes").isPremiumGroupPurchase),
        m = ((t = r.C.PAYMENT_MODAL_BANNER), (0, o.C)(() => s.A.getMarketingComponentByType(t)));
    return i.useMemo(
        () =>
            c ||
            d ||
            n !== E.pe.TIER_2 ||
            null == m ||
            "paymentModalBanner" !== m.properties.properties.oneofKind ||
            (m.properties.contentIdentifier === E.iu && u?.orbsReward !== 1e4)
                ? null
                : (0, l.jsx)(C, {
                      componentId: m.id,
                      promotionId: m.promotionId,
                      promotionBannerMarketingComponentFields: m.properties.properties.paymentModalBanner,
                  }),
        [c, d, n, m, u?.orbsReward],
    );
}
