"use strict";
n.d(t, { i: () => p });
var i = n(627968),
    r = n(64700),
    s = n(877624),
    a = n(549996),
    o = n(562708),
    l = n(144165),
    u = n(262427),
    c = n(139286),
    d = n(726813);
function _(e) {
    let { componentId: t, promotionBannerMarketingComponentFields: n } = e;
    (0, c.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: s.C.PAYMENT_MODAL_BANNER, component_id: t },
    });
    let r = (0, i.jsx)(l._, { src: n.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, i.jsx)(u.J, { className: d.No, customGraphic: r, text: n.body });
}
var h = n(937008),
    f = n(788868);
function p(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: o } = (0, h.Pv)(),
        l = (0, a.c)(s.C.PAYMENT_MODAL_BANNER);
    return r.useMemo(
        () =>
            o ||
            t !== f.pe.TIER_2 ||
            null == l ||
            "paymentModalBanner" !== l.properties.properties.oneofKind ||
            (l.properties.contentIdentifier === f.iu && n?.orbsReward !== f.Qm)
                ? null
                : (0, i.jsx)(_, {
                      componentId: l.id,
                      promotionBannerMarketingComponentFields: l.properties.properties.paymentModalBanner,
                  }),
        [o, t, l, n?.orbsReward],
    );
}
