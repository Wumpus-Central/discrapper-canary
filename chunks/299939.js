n.d(t, { B: () => g }), n(953529);
var l = n(54381);
n(473749);
var o = n(28664),
    r = n(481060),
    a = n(98278),
    i = n(740594),
    s = n(612659),
    c = n(626135),
    d = n(981631),
    u = n(474936),
    f = n(143525),
    p = n(388032),
    m = n(425329);
function g(e) {
    let { onApply: t, onSurpriseMe: n, onClose: g, canApply: h } = e,
        b = (0, s.m)(u.PremiumTypes.TIER_2),
        x = (0, l.jsx)(r.Button, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: {
                type: "rive",
                asset: r.q8_,
                riveProps: { dataBinding: { fill: r.TVs.colors.ICON_STRONG } },
            },
            text: p.intl.string(f.default.NOGFds),
        }),
        S = (0, l.jsxs)("div", {
            className: m.subscriberButtonContainer,
            children: [
                x,
                (0, l.jsx)(o.u, {
                    text: p.intl.string(f.default.cVTpnj),
                    shouldShow: !h,
                    children: (0, l.jsx)(r.Button, {
                        onClick: t,
                        disabled: !h,
                        text: p.intl.string(p.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        j = (0, l.jsxs)("div", {
            className: m.upsell,
            children: [
                (0, l.jsxs)("div", {
                    className: m.descriptionContainer,
                    children: [
                        (0, l.jsx)(o.u, {
                            text: p.intl.string(p.t["5AFxuK"]),
                            children: (0, l.jsx)(r.SrA, {
                                size: "md",
                                color: r.TVs.colors.ICON_STRONG,
                            }),
                        }),
                        (0, l.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: m.description,
                            children: p.intl.format(f.default.PWf0xS, {
                                onClickNitro: () => {
                                    c.default.track(d.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, a.$)(g);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: m.buttonContainer,
                    children: [
                        x,
                        (0, l.jsx)(i.Z, {
                            premiumModalAnalyticsLocation: {
                                section: d.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: d.qAy.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: u.Si.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, l.jsx)(r.mzw, {
        "data-migration-pending": !0,
        className: m.footer,
        children: b ? S : j,
    });
}
