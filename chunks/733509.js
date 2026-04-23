"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(311907),
    s = n(565645),
    a = n(557158),
    o = n(71393);
n(980504);
var l = n(985018);
function u(e) {
    let { sound: t } = e,
        n = (0, i.bG)([o.A], () => ("0" === t.guildId ? l.intl.string(l.t.Rtvk9X) : o.A.getGuild(t.guildId)?.name));
    return (0, r.jsxs)(a.Mr, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, r.jsx)(a.Ch, { children: (0, r.jsx)(s.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, r.jsx)(a.oC, { children: (0, r.jsx)(a.dB, { children: t.name }) }),
            null != n && (0, r.jsx)(a.Aq, { children: n }),
        ],
    });
}
