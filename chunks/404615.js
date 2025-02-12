n.d(t, { _: () => o });
var i = n(442837),
    r = n(607070),
    a = n(391110),
    s = n(755664);
let l = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: s.cardDescription
        },
        descriptionCta: { onlyShowOnHover: !0 }
    },
    o = (e) => {
        let t = (0, i.e7)([r.Z], () => r.Z.useReducedMotion),
            n = {
                [a.zW.DEFAULT]: l,
                [a.zW.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: 'text-sm/semibold'
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: s.cardDescriptionTenureReward
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: s.descriptionCTATenureReward
                    },
                    cardContainer: { className: t ? void 0 : s.nitroGradientBorderHover }
                },
                [a.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: s.nitroGradientBorderHover } }
            };
        return null != e ? n[e] : n[a.zW.DEFAULT];
    };
