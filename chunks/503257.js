var r = i(477900);
i(582128);
var n = i(772707),
    s = i(403581),
    a = i(964486),
    c = i(87719),
    o = i(783420),
    p = i(938973),
    d = i(129230),
    l = i(448645),
    _ = i(652215),
    u = i(682901),
    C = i(683825),
    E = i(792996),
    k = i(253146);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onClose: i } = t,
                { subscribeButtonProps: I } = (0, p.B)({ subscriptionTier: u.pe.TIER_2 });
            return (
                (0, a.Ay)(() => {
                    d.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: u.e.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                        sku_id: (0, l.mH)(u.pe.TIER_2),
                    });
                }),
                (0, r.jsx)(o.A, {
                    subscriptionTier: u.pe.TIER_2,
                    children: (t) => {
                        let { onClick: a } = t;
                        return (0, r.jsx)(n.k, {
                            transitionState: e,
                            onClose: i,
                            gradientColor: "nitro-pink",
                            graphic: { type: "image", src: k },
                            badge: { type: "early_access", variant: "inverted", icon: s.NitroWheelIcon },
                            title: E.intl.string(C.default["3I65bs"]),
                            actions: [
                                { text: E.intl.string(E.t.PcTCB7), variant: "secondary", onClick: () => (0, c.x)(i) },
                                {
                                    ...I,
                                    onClick: (t) => {
                                        (i(), a(t));
                                    },
                                },
                            ],
                        });
                    },
                })
            );
        },
    },
);
