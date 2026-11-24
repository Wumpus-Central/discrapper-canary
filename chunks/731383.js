var l = n(582128),
    i = n(964486),
    r = n(149468),
    s = n(734057),
    a = n(309010),
    o = n(129230),
    u = n(189551),
    d = n(307731),
    c = n(652215);
n.d(
    t,
    {},
    {
        i: (e) => {
            let { emojiId: t, currentGuildId: n, popoutData: m, nonce: h, demoMode: f } = e,
                { current: p } = l.useRef({
                    guild_id: n,
                    emoji_id: t,
                    ...(0, r.dI)(s.A.getChannel(a.Ay.getChannelId(n))),
                });
            return (
                (0, i.Ay)(() => {
                    ((0, u.K)(d.Vl.TrackOpenPopoutUsed),
                        f ||
                            o.default.track(c.HAw.OPEN_POPOUT, {
                                type: m?.analyticsType ?? "Standard Emoji Popout",
                                nonce: h,
                                ...p,
                            }));
                }),
                p
            );
        },
    },
);
