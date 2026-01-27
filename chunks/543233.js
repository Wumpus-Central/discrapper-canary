n.d(t, {
    Q: () => o,
});
var r = n(311907),
    i = n(775602),
    l = n(322631),
    s = n(227191);
let a = {
        subtitle: {
            onlyShowOnHover: !1,
        },
        description: {
            onlyShowOnHover: !0,
            className: s.L_,
        },
        descriptionCta: {
            onlyShowOnHover: !0,
        },
    },
    o = (e) => {
        let t = (0, r.bG)([i.A], () => i.A.useReducedMotion),
            n = {
                [l.PJ.DEFAULT]: a,
                [l.PJ.REWARD]: {
                    subtitle: {
                        onlyShowOnHover: !0,
                        textVariant: "text-sm/semibold",
                    },
                    description: {
                        onlyShowOnHover: !0,
                        className: s.p9,
                    },
                    descriptionCta: {
                        onlyShowOnHover: !1,
                        hideOnHoverComponent: !0,
                        className: s.LV,
                    },
                    cardContainer: {
                        className: t ? void 0 : s.tk,
                    },
                },
                [l.PJ.PROMOTION_REDEMPTION]: {
                    cardContainer: {
                        className: s.tk,
                    },
                    perkImage: {
                        disableHoverAnimation: !0,
                        className: s.y8,
                    },
                },
                [l.PJ.NITRO_GRADIENT_HOVER_BORDER]: {
                    cardContainer: {
                        className: s.tk,
                    },
                },
            };
        return null != e ? n[e] : n[l.PJ.DEFAULT];
    };
