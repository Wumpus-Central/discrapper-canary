var l = n(582128),
    i = n(964486),
    r = n(149468),
    s = n(734057),
    a = n(309010),
    u = n(129230),
    o = n(189551),
    d = n(307731),
    c = n(652215);
n.d(
    t,
    {},
    {
        i: (e) => {
            let { emojiId: t, currentGuildId: n, popoutData: h, nonce: m, demoMode: f } = e,
                { current: p } = l.useRef({
                    guild_id: n,
                    emoji_id: t,
                    ...(0, r.dI)(s.A.getChannel(a.Ay.getChannelId(n))),
                });
            return (
                (0, i.Ay)(() => {
                    ((0, o.K)(d.Vl.TrackOpenPopoutUsed),
                        f ||
                            u.default.track(c.HAw.OPEN_POPOUT, {
                                type: h?.analyticsType ?? "Standard Emoji Popout",
                                nonce: m,
                                ...p,
                            }));
                }),
                p
            );
        },
    },
);
