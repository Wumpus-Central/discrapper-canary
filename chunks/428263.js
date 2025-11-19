n.d(t, { default: () => E });
var a = n(54381),
    i = n(473749),
    s = n(481060),
    o = n(767714),
    l = n(313789),
    r = n(518596),
    c = n(626135),
    d = n(981631),
    _ = n(474936),
    p = n(388032),
    m = n(486756);
let E = (e) => {
    let { transitionState: t, onClose: n } = e;
    return (
        i.useEffect(() => {
            c.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, { type: _.cd.EMOJI_AUTOCOMPLETE_MODAL });
        }, []),
        (0, a.jsxs)(s.Y0X, {
            transitionState: t,
            size: s.CgR.SMALL,
            "aria-label": "",
            parentComponent: "ChannelAutocompleteEmojiUpsellModal",
            children: [
                (0, a.jsxs)(s.hzk, {
                    className: m.content,
                    children: [
                        (0, a.jsx)("div", {
                            role: "image",
                            className: m.image,
                        }),
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            className: m.header,
                            children: p.intl.string(p.t.Uq1zJY),
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: p.intl.format(p.t.xPaO3o, {
                                onLearnMore: () => {
                                    n(), (0, r.openUserSettings)(l.n.NITRO_PANEL, { section: d.oAB.PREMIUM });
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(s.mzw, {
                    children: (0, a.jsx)(o.Z, {
                        onClick: n,
                        textOptions: { textOverride: p.intl.string(p.t.pj0XBN) },
                        subscriptionTier: _.Si.TIER_2,
                        premiumModalAnalyticsLocation: { page: d.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL },
                    }),
                }),
                (0, a.jsx)(s.olH, {
                    className: m.closeButton,
                    onClick: n,
                }),
            ],
        })
    );
};
