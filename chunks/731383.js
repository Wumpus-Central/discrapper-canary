"use strict";
n.d(t, { i: () => _ });
var i = n(64700),
    r = n(964486),
    a = n(95561),
    s = n(734057),
    l = n(309010),
    o = n(174459),
    d = n(189551),
    c = n(307731),
    u = n(652215);
let _ = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: _, nonce: E, demoMode: A } = e,
        { current: h } = i.useRef({ guild_id: n, emoji_id: t, ...(0, a.dI)(s.A.getChannel(l.Ay.getChannelId(n))) });
    return (
        (0, r.Ay)(() => {
            (0, d.K)(c.EmojiInteractionPoint.TrackOpenPopoutUsed),
                A ||
                    o.default.track(u.HAw.OPEN_POPOUT, {
                        type: _?.analyticsType ?? "Standard Emoji Popout",
                        nonce: E,
                        ...h,
                    });
        }),
        h
    );
};
