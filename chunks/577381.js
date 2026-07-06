n.d(t, { i: () => C });
var l = n(627968),
    i = n(64700),
    r = n(877624),
    a = n(549996),
    s = n(562708),
    o = n(144165),
    u = n(262427),
    c = n(139286),
    d = n(432029);
function p(e) {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e;
    (0, c.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: r.C.PAYMENT_MODAL_BANNER, component_id: t },
    });
    let i = (0, l.jsx)(o._, { src: n.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, l.jsx)(u.J, { className: d.No, customGraphic: i, text: n.body });
}
var m = n(937008),
    h = n(202541);
function C(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: s } = (0, m.Pv)(),
        o = (0, a.c)(r.C.PAYMENT_MODAL_BANNER);
    return i.useMemo(
        () =>
            s ||
            t !== h.pe.TIER_2 ||
            null == o ||
            "paymentModalBanner" !== o.properties.properties.oneofKind ||
            (o.properties.contentIdentifier === h.iu && n?.orbsReward !== h.Qm)
                ? null
                : (0, l.jsx)(p, {
                      componentId: o.id,
                      promotionBannerMarketingComponentFields: o.properties.properties.paymentModalBanner,
                  }),
        [s, t, o, n?.orbsReward],
    );
}
