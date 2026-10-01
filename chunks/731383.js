n.d(t, { i: () => m });
var l = n(582128),
    i = n(964486),
    s = n(95561),
    a = n(734057),
    r = n(309010),
    o = n(174459),
    u = n(189551),
    d = n(307731),
    c = n(652215);
let m = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: m, nonce: x, demoMode: h } = e,
        { current: j } = l.useRef({ guild_id: n, emoji_id: t, ...(0, s.dI)(a.A.getChannel(r.Ay.getChannelId(n))) });
    return (
        (0, i.Ay)(() => {
            ((0, u.K)(d.EmojiInteractionPoint.TrackOpenPopoutUsed),
                h ||
                    o.default.track(c.HAw.OPEN_POPOUT, {
                        type: m?.analyticsType ?? "Standard Emoji Popout",
                        nonce: x,
                        ...j,
                    }));
        }),
        j
    );
};
