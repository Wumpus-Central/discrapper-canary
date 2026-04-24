"use strict";
n.d(t, { i: () => h });
var l = n(64700),
    i = n(964486),
    s = n(58149),
    a = n(734057),
    r = n(309010),
    o = n(954571),
    c = n(189551),
    u = n(307731),
    d = n(652215);
let h = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: h, nonce: m, demoMode: p } = e,
        { current: f } = l.useRef({ guild_id: n, emoji_id: t, ...(0, s.dI)(a.A.getChannel(r.A.getChannelId(n))) });
    return (
        (0, i.Ay)(() => {
            (0, c.K)(u.EmojiInteractionPoint.TrackOpenPopoutUsed),
                p ||
                    o.default.track(d.HAw.OPEN_POPOUT, {
                        type: h?.analyticsType ?? "Standard Emoji Popout",
                        nonce: m,
                        ...f,
                    });
        }),
        f
    );
};
