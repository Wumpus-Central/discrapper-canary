var n = l(477900),
    i = l(613412),
    a = l(877624),
    s = l(139286),
    o = l(498470),
    c = l(604913),
    r = l(814124),
    p = l(758836),
    d = l(49999);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { shopNagbar: t, componentId: l, promotionId: _, tab: u, onDismiss: A } = e;
            if (
                ((0, s.A)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                    properties: { component_type: a.C.SHOP_NAGBAR, component_id: l, promotion_id: _ },
                }),
                u === p.G2.ORBS)
            )
                return null;
            let h = (0, o.h)({
                    buttonAction: t.ctaAction,
                    deeplinkSection: t.deeplinkSection,
                    applicationId: t.navigableStorefrontApplicationId?.value,
                    onClose: () => A(d.i.TAKE_ACTION),
                }),
                { icon: C } = (0, o.x)({ buttonAction: t.ctaAction });
            return (0, n.jsx)(r.Z, {
                tab: u,
                promotionFlavor: c.Pz.NITRO,
                icon: c.cR.NITRO,
                headerText: t.body,
                ctaText: "" !== t.ctaLabel ? t.ctaLabel : void 0,
                ctaIcon: C,
                helpCenterId: t.helpArticle?.id !== "" ? t.helpArticle?.id : void 0,
                helpCenterLinkText: t.helpArticle?.linkText !== "" ? t.helpArticle?.linkText : void 0,
                onCtaClick: h,
                onDismiss: () => A(d.i.USER_DISMISS),
            });
        },
    },
);
