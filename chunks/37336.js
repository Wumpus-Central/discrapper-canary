var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(38021),
    o = n(366010),
    d = n(834730),
    c = n(465794),
    u = n(448645),
    _ = n(652215),
    E = n(682901),
    A = n(792996),
    f = n(212e3);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onNitroClick: t } = e,
                { theme: n } = (0, l.wR)(),
                a = r.useMemo(
                    () => A.intl.format(A.t["tw/SSq"], { nitroTierName: (0, u.Dd)(E.PremiumTypes.TIER_2), onClick: t }),
                    [t],
                );
            return (0, i.jsxs)("div", {
                className: s()(f.Du, f.D7, (0, o.q)(n) && f.B9),
                children: [
                    (0, i.jsx)(d.E, { variant: "body-sm/medium", color: "text-default", children: a }),
                    (0, i.jsx)(c.A, {
                        size: "sm",
                        subscriptionTier: E.pe.TIER_2,
                        buttonTextOverride: A.intl.string(A.t.pj0XBN),
                        premiumModalAnalyticsLocation: {
                            section: _.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                            object: _.ZSU.BUTTON_CTA,
                        },
                    }),
                ],
            });
        },
    },
);
