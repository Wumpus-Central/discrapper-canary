n.d(t, { _: () => o });
var i = n(442837),
    s = n(607070),
    r = n(391110),
    l = n(696962);
let a = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: l.cardDescription
        },
        descriptionCta: { onlyShowOnHover: !0 }
    },
    o = (e) => {
        let t = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            n = {
                [r.zW.DEFAULT]: a,
                [r.zW.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: 'text-sm/semibold'
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: l.cardDescriptionTenureReward
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: l.descriptionCTATenureReward
                    },
                    cardContainer: { className: t ? void 0 : l.nitroGradientBorderHover }
                },
                [r.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: l.nitroGradientBorderHover } }
            };
        return null != e ? n[e] : n[r.zW.DEFAULT];
    };
