l.d(t, { A: () => p });
var n = l(477900),
    i = l(562708),
    a = l(877624),
    r = l(139286),
    c = l(498470),
    o = l(288106),
    s = l(814124),
    d = l(758836);
function p(e) {
    let { shopNagbar: t, componentId: l, tab: p } = e;
    if (
        ((0, r.A)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: a.C.SHOP_NAGBAR, component_id: l },
        }),
        p === d.G2.ORBS)
    )
        return null;
    let h = (0, c.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
        }),
        { icon: u } = (0, c.x)({ buttonAction: t.ctaAction });
    return (0, n.jsx)(s.ZV, {
        promotionTheme: s.z8.NITRO,
        icon: o.cR.NITRO,
        headerText: t.body,
        ctaText: "" !== t.ctaLabel ? t.ctaLabel : void 0,
        ctaIcon: u,
        helpCenterId: t.helpArticle?.id !== "" ? t.helpArticle?.id : void 0,
        helpCenterLinkText: t.helpArticle?.linkText !== "" ? t.helpArticle?.linkText : void 0,
        onCtaClick: h,
    });
}
