n.d(t, { Q: () => l });
var r = n(311907),
    i = n(775602),
    a = n(322631),
    s = n(227191);
let o = {
        subtitle: { onlyShowOnHover: !1 },
        description: {
            onlyShowOnHover: !0,
            className: s.L_,
        },
        descriptionCta: { onlyShowOnHover: !0 },
    },
    l = (e) => {
        let t = !(0, r.bG)([i.A], () => i.A.useReducedMotion),
            n = {
                [a.PJ.DEFAULT]: o,
                [a.PJ.REWARD]: {
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
                    cardContainer: { className: t ? s.tk : void 0 },
                },
                [a.PJ.PROMOTION_REDEMPTION]: {
                    cardContainer: { className: s.tk },
                    perkImage: {
                        disableHoverAnimation: !0,
                        className: s.y8,
                    },
                },
                [a.PJ.NITRO_GRADIENT_HOVER_BORDER]: { cardContainer: { className: s.tk } },
            };
        return null != e ? n[e] : n[a.PJ.DEFAULT];
    };
