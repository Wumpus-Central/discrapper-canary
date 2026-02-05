"use strict";
n.d(t, { i: () => _ });
var r = n(64700),
    i = n(964486),
    a = n(58149),
    s = n(734057),
    o = n(309010),
    l = n(954571),
    u = n(189551),
    c = n(307731),
    d = n(652215);
let _ = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: _, nonce: f, demoMode: p } = e,
        { current: h } = r.useRef({ guild_id: n, emoji_id: t, ...(0, a.dI)(s.A.getChannel(o.A.getChannelId(n))) });
    return (
        (0, i.Ay)(() => {
            (0, u.K)(c.Vl.TrackOpenPopoutUsed),
                p ||
                    l.default.track(d.HAw.OPEN_POPOUT, {
                        type: _?.analyticsType ?? "Standard Emoji Popout",
                        nonce: f,
                        ...h,
                    });
        }),
        h
    );
};
