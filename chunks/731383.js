n.d(t, { i: () => m });
var l = n(582128),
    s = n(964486),
    i = n(666860),
    a = n(734057),
    r = n(309010),
    o = n(174459),
    u = n(189551),
    c = n(307731),
    d = n(652215);
let m = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: m, nonce: x, demoMode: h } = e,
        { current: j } = l.useRef({ guild_id: n, emoji_id: t, ...(0, i.dI)(a.A.getChannel(r.Ay.getChannelId(n))) });
    return (
        (0, s.Ay)(() => {
            ((0, u.K)(c.EmojiInteractionPoint.TrackOpenPopoutUsed),
                h ||
                    o.default.track(d.HAw.OPEN_POPOUT, {
                        type: m?.analyticsType ?? "Standard Emoji Popout",
                        nonce: x,
                        ...j,
                    }));
        }),
        j
    );
};
