n.d(t, { _: () => o });
var r = n(442837),
    i = n(607070),
    s = n(391110),
    a = n(758114);
let l = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: a.cardDescription
        },
        descriptionCta: { onlyShowOnHover: !0 }
    },
    o = (e) => {
        let t = (0, r.e7)([i.Z], () => i.Z.useReducedMotion),
            n = {
                [s.zW.DEFAULT]: l,
                [s.zW.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: 'text-sm/semibold'
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: a.cardDescriptionTenureReward
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: a.descriptionCTATenureReward
                    },
                    cardContainer: { className: t ? void 0 : a.nitroGradientBorderHover }
                },
                [s.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: a.nitroGradientBorderHover } }
            };
        return null != e ? n[e] : n[s.zW.DEFAULT];
    };
