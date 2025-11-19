n.d(t, { B: () => g }), n(953529);
var l = n(54381);
n(473749);
var o = n(28664),
    r = n(481060),
    i = n(98278),
    a = n(740594),
    s = n(612659),
    c = n(626135),
    d = n(981631),
    u = n(474936),
    p = n(88406),
    m = n(388032),
    f = n(679101);
function g(e) {
    let { onApply: t, onSurpriseMe: n, onClose: g, canApply: h } = e,
        x = (0, s.m)(u.PremiumTypes.TIER_2),
        b = (0, l.jsx)(r.Button, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: {
                type: "rive",
                asset: r.q8_,
                riveProps: { dataBinding: { fill: r.TVs.colors.ICON_PRIMARY } },
            },
            text: m.intl.string(p.default.NOGFds),
        }),
        _ = (0, l.jsxs)("div", {
            className: f.subscriberButtonContainer,
            children: [
                b,
                (0, l.jsx)(o.u, {
                    text: m.intl.string(p.default.cVTpnj),
                    shouldShow: !h,
                    children: (0, l.jsx)(r.Button, {
                        onClick: t,
                        disabled: !h,
                        text: m.intl.string(m.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        S = (0, l.jsxs)("div", {
            className: f.upsell,
            children: [
                (0, l.jsxs)("div", {
                    className: f.descriptionContainer,
                    children: [
                        (0, l.jsx)(o.u, {
                            text: m.intl.string(m.t["5AFxuK"]),
                            children: (0, l.jsx)(r.SrA, {
                                size: "md",
                                color: r.TVs.colors.ICON_PRIMARY,
                            }),
                        }),
                        (0, l.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: f.description,
                            children: m.intl.format(p.default.PWf0xS, {
                                onClickNitro: () => {
                                    c.default.track(d.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, i.$)(g);
                                },
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: f.buttonContainer,
                    children: [
                        b,
                        (0, l.jsx)(a.Z, {
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
        className: f.footer,
        children: x ? _ : S,
    });
}
