l.d(t, { A: () => h });
var n = l(477900),
    i = l(562708),
    a = l(877624),
    s = l(139286),
    c = l(498470),
    r = l(288106),
    o = l(814124),
    d = l(758836),
    p = l(49999);
function h(e) {
    let { shopNagbar: t, componentId: l, tab: h, onDismiss: u } = e;
    if (
        ((0, s.A)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: a.C.SHOP_NAGBAR, component_id: l },
        }),
        h === d.G2.ORBS)
    )
        return null;
    let x = (0, c.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => u(p.i.TAKE_ACTION),
        }),
        { icon: A } = (0, c.x)({ buttonAction: t.ctaAction });
    return (0, n.jsx)(o.Z, {
        promotionFlavor: r.Pz.NITRO,
        icon: r.cR.NITRO,
        headerText: t.body,
        ctaText: "" !== t.ctaLabel ? t.ctaLabel : void 0,
        ctaIcon: A,
        helpCenterId: t.helpArticle?.id !== "" ? t.helpArticle?.id : void 0,
        helpCenterLinkText: t.helpArticle?.linkText !== "" ? t.helpArticle?.linkText : void 0,
        onCtaClick: x,
        onDismiss: () => u(p.i.USER_DISMISS),
    });
}
