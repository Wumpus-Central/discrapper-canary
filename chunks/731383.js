"use strict";
n.d(t, { i: () => h });
var l = n(582128),
    i = n(964486),
    s = n(95561),
    r = n(734057),
    a = n(309010),
    o = n(174459),
    u = n(189551),
    c = n(307731),
    d = n(652215);
let h = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: h, nonce: m, demoMode: f } = e,
        { current: p } = l.useRef({ guild_id: n, emoji_id: t, ...(0, s.dI)(r.A.getChannel(a.Ay.getChannelId(n))) });
    return (
        (0, i.Ay)(() => {
            (0, u.K)(c.EmojiInteractionPoint.TrackOpenPopoutUsed),
                f ||
                    o.default.track(d.HAw.OPEN_POPOUT, {
                        type: h?.analyticsType ?? "Standard Emoji Popout",
                        nonce: m,
                        ...p,
                    });
        }),
        p
    );
};
