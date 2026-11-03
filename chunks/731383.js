n.d(e, { i: () => p });
var i = n(582128),
    r = n(964486),
    l = n(666860),
    s = n(734057),
    o = n(309010),
    a = n(174459),
    u = n(189551),
    d = n(307731),
    c = n(652215);
let p = (t) => {
    let { emojiId: e, currentGuildId: n, popoutData: p, nonce: m, demoMode: f } = t,
        { current: A } = i.useRef({ guild_id: n, emoji_id: e, ...(0, l.dI)(s.A.getChannel(o.Ay.getChannelId(n))) });
    return (
        (0, r.Ay)(() => {
            ((0, u.K)(d.EmojiInteractionPoint.TrackOpenPopoutUsed),
                f ||
                    a.default.track(c.HAw.OPEN_POPOUT, {
                        type: p?.analyticsType ?? "Standard Emoji Popout",
                        nonce: m,
                        ...A,
                    }));
        }),
        A
    );
};
