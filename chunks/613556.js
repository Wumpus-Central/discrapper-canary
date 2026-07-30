n.d(t, { A: () => u });
var l = n(477900),
    i = n(562708),
    a = n(877624),
    s = n(139286),
    c = n(498470),
    o = n(288106),
    r = n(814124),
    d = n(758836),
    p = n(49999);
function u(e) {
    let { shopNagbar: t, componentId: n, tab: u, onDismiss: h } = e;
    if (
        ((0, s.A)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: a.C.SHOP_NAGBAR, component_id: n },
        }),
        u === d.G2.ORBS)
    )
        return null;
    let x = (0, c.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => h(p.i.TAKE_ACTION),
        }),
        { icon: m } = (0, c.x)({ buttonAction: t.ctaAction });
    return (0, l.jsx)(r.ZV, {
        promotionTheme: r.z8.NITRO,
        icon: o.cR.NITRO,
        headerText: t.body,
        ctaText: "" !== t.ctaLabel ? t.ctaLabel : void 0,
        ctaIcon: m,
        helpCenterId: t.helpArticle?.id !== "" ? t.helpArticle?.id : void 0,
        helpCenterLinkText: t.helpArticle?.linkText !== "" ? t.helpArticle?.linkText : void 0,
        onCtaClick: x,
        onDismiss: () => h(p.i.USER_DISMISS),
    });
}
