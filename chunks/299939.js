n.d(t, { B: () => g }), n(953529);
var o = n(951288);
n(647438);
var l = n(28664),
    r = n(481060),
    a = n(98278),
    i = n(740594),
    s = n(612659),
    c = n(626135),
    d = n(981631),
    u = n(474936),
    p = n(62222),
    m = n(388032),
    f = n(365875);
function g(e) {
    let { onApply: t, onSurpriseMe: n, onClose: g, canApply: h } = e,
        x = (0, s.m)(u.p9.TIER_2),
        _ = (0, o.jsx)(r.zxk, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: r.$2U,
            text: m.intl.string(p.default.NOGFdn),
        }),
        b = (0, o.jsxs)("div", {
            className: f.subscriberButtonContainer,
            children: [
                _,
                (0, o.jsx)(l.u, {
                    text: m.intl.string(p.default.cVTpnp),
                    shouldShow: !h,
                    children: (0, o.jsx)(r.zxk, {
                        onClick: t,
                        disabled: !h,
                        text: m.intl.string(m.t["1Qm829"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        S = (0, o.jsxs)("div", {
            className: f.upsell,
            children: [
                (0, o.jsxs)("div", {
                    className: f.descriptionContainer,
                    children: [
                        (0, o.jsx)(l.u, {
                            text: m.intl.string(m.t["5AFxuL"]),
                            children: (0, o.jsx)(r.SrA, {
                                size: "md",
                                color: r.TVs.colors.ICON_PRIMARY,
                            }),
                        }),
                        (0, o.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: f.description,
                            children: m.intl.format(p.default.PWf0xc, {
                                onClickNitro: () => {
                                    c.default.track(d.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, a.$)(g);
                                },
                            }),
                        }),
                    ],
                }),
                (0, o.jsxs)("div", {
                    className: f.buttonContainer,
                    children: [
                        _,
                        (0, o.jsx)(i.Z, {
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
    return (0, o.jsx)(r.mzw, {
        "data-migration-pending": !0,
        className: f.footer,
        children: x ? b : S,
    });
}
