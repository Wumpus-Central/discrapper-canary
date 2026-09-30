n.d(t, { i: () => m });
var l = n(582128),
    i = n(964486),
    s = n(95561),
    r = n(734057),
    a = n(309010),
    o = n(174459),
    u = n(189551),
    c = n(307731),
    d = n(652215);
let m = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: m, nonce: h, demoMode: p } = e,
        { current: f } = l.useRef({ guild_id: n, emoji_id: t, ...(0, s.dI)(r.A.getChannel(a.Ay.getChannelId(n))) });
    return (
        (0, i.Ay)(() => {
            ((0, u.K)(c.EmojiInteractionPoint.TrackOpenPopoutUsed),
                p ||
                    o.default.track(d.HAw.OPEN_POPOUT, {
                        type: m?.analyticsType ?? "Standard Emoji Popout",
                        nonce: h,
                        ...f,
                    }));
        }),
        f
    );
};
