var n = e(477900);
e(582128);
var r = e(772707),
    s = e(403581),
    a = e(964486),
    c = e(87719),
    l = e(783420),
    o = e(938973),
    p = e(129230),
    _ = e(448645),
    d = e(652215),
    u = e(682901),
    C = e(683825),
    E = e(792996),
    k = e(246814);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: e } = t,
                { subscribeButtonProps: I } = (0, o.B)({ subscriptionTier: u.pe.TIER_2 });
            return (
                (0, a.Ay)(() => {
                    p.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: u.e.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
                        sku_id: (0, _.mH)(u.pe.TIER_2),
                    });
                }),
                (0, n.jsx)(l.A, {
                    subscriptionTier: u.pe.TIER_2,
                    children: (t) => {
                        let { onClick: a } = t;
                        return (0, n.jsx)(r.k, {
                            transitionState: i,
                            onClose: e,
                            gradientColor: "nitro-pink",
                            graphic: { type: "image", src: k.A },
                            badge: { type: "early_access", variant: "inverted", icon: s.NitroWheelIcon },
                            title: E.intl.string(C.default["3I65bs"]),
                            subtitle: E.intl.string(C.default.gq07bs),
                            actions: [
                                { text: E.intl.string(E.t.PcTCB7), variant: "secondary", onClick: () => (0, c.x)(e) },
                                {
                                    ...I,
                                    onClick: (t) => {
                                        (e(), a(t));
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
