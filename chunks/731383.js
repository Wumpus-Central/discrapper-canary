"use strict";
n.d(t, { i: () => _ });
var i = n(64700),
    r = n(964486),
    s = n(95561),
    a = n(734057),
    o = n(309010),
    l = n(174459),
    u = n(189551),
    c = n(307731),
    d = n(652215);
let _ = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: _, nonce: h, demoMode: f } = e,
        { current: p } = i.useRef({ guild_id: n, emoji_id: t, ...(0, s.dI)(a.A.getChannel(o.A.getChannelId(n))) });
    return (
        (0, r.Ay)(() => {
            (0, u.K)(c.EmojiInteractionPoint.TrackOpenPopoutUsed),
                f ||
                    l.default.track(d.HAw.OPEN_POPOUT, {
                        type: _?.analyticsType ?? "Standard Emoji Popout",
                        nonce: h,
                        ...p,
                    });
        }),
        p
    );
};
