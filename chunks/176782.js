n.d(t, { _: () => l });
var r = n(442837),
    i = n(607070),
    a = n(391110),
    o = n(424373);
let s = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: o.cardDescription,
        },
        descriptionCta: { onlyShowOnHover: !0 },
    },
    l = (e) => {
        let t = !(0, r.e7)([i.Z], () => i.Z.useReducedMotion),
            n = {
                [a.zW.DEFAULT]: s,
                [a.zW.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: "text-sm/semibold",
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: o.cardDescriptionTenureReward,
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: o.descriptionCTATenureReward,
                    },
                    cardContainer: { className: t ? o.nitroGradientBorderHover : void 0 },
                },
                [a.zW.PROMOTION_REDEMPTION]: {
                    cardContainer: { className: o.nitroGradientBorderHover },
                    perkImage: {
                        disableHoverAnimation: !0,
                        className: o.promotionRedemptionImage,
                    },
                },
                [a.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: o.nitroGradientBorderHover } },
            };
        return null != e ? n[e] : n[a.zW.DEFAULT];
    };
