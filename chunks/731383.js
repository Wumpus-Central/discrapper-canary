n.d(t, { i: () => m });
var i = n(582128),
    l = n(964486),
    s = n(666860),
    a = n(734057),
    r = n(309010),
    o = n(174459),
    d = n(189551),
    u = n(307731),
    c = n(652215);
let m = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: m, nonce: x, demoMode: h } = e,
        { current: j } = i.useRef({ guild_id: n, emoji_id: t, ...(0, s.dI)(a.A.getChannel(r.Ay.getChannelId(n))) });
    return (
        (0, l.Ay)(() => {
            ((0, d.K)(u.EmojiInteractionPoint.TrackOpenPopoutUsed),
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
