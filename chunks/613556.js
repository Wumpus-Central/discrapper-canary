l.d(t, { A: () => u });
var n = l(477900),
    a = l(562708),
    i = l(877624),
    s = l(139286),
    c = l(498470),
    o = l(288106),
    r = l(814124),
    p = l(758836),
    d = l(49999);
function u(e) {
    let { shopNagbar: t, componentId: l, tab: u, onDismiss: _ } = e;
    if (
        ((0, s.A)({
            type: a.ImpressionTypes.VIEW,
            name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: i.C.SHOP_NAGBAR, component_id: l },
        }),
        u === p.G2.ORBS)
    )
        return null;
    let A = (0, c.h)({
            buttonAction: t.ctaAction,
            deeplinkSection: t.deeplinkSection,
            applicationId: t.navigableStorefrontApplicationId?.value,
            onClose: () => _(d.i.TAKE_ACTION),
        }),
        { icon: h } = (0, c.x)({ buttonAction: t.ctaAction });
    return (0, n.jsx)(r.Z, {
        tab: u,
        promotionFlavor: o.Pz.NITRO,
        icon: o.cR.NITRO,
        headerText: t.body,
        ctaText: "" !== t.ctaLabel ? t.ctaLabel : void 0,
        ctaIcon: h,
        helpCenterId: t.helpArticle?.id !== "" ? t.helpArticle?.id : void 0,
        helpCenterLinkText: t.helpArticle?.linkText !== "" ? t.helpArticle?.linkText : void 0,
        onCtaClick: A,
        onDismiss: () => _(d.i.USER_DISMISS),
    });
}
