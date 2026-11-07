var n = l(477900),
    i = l(613412),
    a = l(517352),
    o = l(139286),
    s = l(498470),
    c = l(604913),
    r = l(814124),
    p = l(758836),
    d = l(49999);
l.d(
    t,
    {},
    {
        A: function (e) {
            let {
                shopNagbar: t,
                componentId: l,
                componentType: u = a.oW.SHOP_NAGBAR,
                promotionId: _,
                tab: h,
                onDismiss: A,
            } = e;
            if (
                ((0, o.A)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                    properties: { component_type: u, component_id: l, promotion_id: _ },
                }),
                h === p.G2.ORBS)
            )
                return null;
            let C = (0, s.h)({
                    buttonAction: t.ctaAction,
                    deeplinkSection: t.deeplinkSection,
                    applicationId: t.navigableStorefrontApplicationId?.value,
                    shopCollectionId: t.shopCollectionId?.value,
                    onClose: () => A(d.i.TAKE_ACTION),
                }),
                { icon: m } = (0, s.x)({ buttonAction: t.ctaAction });
            return (0, n.jsx)(r.Z, {
                tab: h,
                promotionFlavor: c.Pz.NITRO,
                icon: c.cR.NITRO,
                headerText: t.body,
                ctaText: "" !== t.ctaLabel ? t.ctaLabel : void 0,
                ctaIcon: m,
                helpCenterId: t.helpArticle?.id !== "" ? t.helpArticle?.id : void 0,
                helpCenterLinkText: t.helpArticle?.linkText !== "" ? t.helpArticle?.linkText : void 0,
                onCtaClick: C,
                onDismiss: () => A(d.i.USER_DISMISS),
            });
        },
    },
);
