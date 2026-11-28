var r = i(477900),
    n = i(582128),
    s = i(772707),
    c = i(403581),
    o = i(87719),
    l = i(783420),
    u = i(938973),
    a = i(805573),
    p = i(682901),
    d = i(636107),
    _ = i(792996),
    b = i(246814);
let h = { subscribe: "checkout", nitro_home: "nitro_home", close: null };
i.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: i, source: C } = e,
                { subscribeButtonProps: k } = (0, u.B)({ subscriptionTier: p.pe.TIER_2 }),
                { trackViewed: g, trackInteracted: f } = (0, a.r)(p.e.AUTOCLIPS_EA_CAPTURE_MODE_ROADBLOCK_UPSELL),
                E = n.useRef("close");
            return (
                n.useEffect(() => (g(C), () => f(E.current, h[E.current])), [C, g, f]),
                (0, r.jsx)(l.A, {
                    subscriptionTier: p.pe.TIER_2,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, r.jsx)(s.k, {
                            transitionState: t,
                            onClose: i,
                            gradientColor: "nitro-pink",
                            graphic: { type: "image", src: b.A },
                            badge: { type: "early_access", variant: "inverted", icon: c.NitroWheelIcon },
                            title: _.intl.string(d.default["3I65bs"]),
                            subtitle: _.intl.string(d.default.gq07bs),
                            actions: [
                                {
                                    text: _.intl.string(_.t.PcTCB7),
                                    variant: "secondary",
                                    onClick: () => {
                                        ((E.current = "nitro_home"), (0, o.x)(i));
                                    },
                                },
                                {
                                    ...k,
                                    onClick: (e) => {
                                        ((E.current = "subscribe"), i(), n(e));
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
