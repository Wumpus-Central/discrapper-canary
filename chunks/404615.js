n.d(t, {
    _: function () {
        return o;
    }
});
var i = n(442837),
    s = n(607070),
    r = n(391110),
    a = n(696962);
let l = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: a.cardDescription
        },
        descriptionCta: { onlyShowOnHover: !0 }
    },
    o = (e) => {
        let t = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
            n = {
                [r.zW.DEFAULT]: l,
                [r.zW.REWARD]: {
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
                [r.zW.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: a.nitroGradientBorderHover } }
            };
        return null != e ? n[e] : n[r.zW.DEFAULT];
    };
