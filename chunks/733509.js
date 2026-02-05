"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(311907),
    a = n(565645),
    s = n(557158),
    o = n(71393);
n(980504);
var l = n(985018);
function u(e) {
    let { sound: t } = e,
        n = (0, i.bG)([o.A], () => ("0" === t.guildId ? l.intl.string(l.t.Rtvk9X) : o.A.getGuild(t.guildId)?.name));
    return (0, r.jsxs)(s.Mr, {
        children: [
            (null != t.emojiId || null != t.emojiName) &&
                (0, r.jsx)(s.Ch, { children: (0, r.jsx)(a.A, { emojiId: t.emojiId, emojiName: t.emojiName }) }),
            (0, r.jsx)(s.oC, { children: (0, r.jsx)(s.dB, { children: t.name }) }),
            null != n && (0, r.jsx)(s.Aq, { children: n }),
        ],
    });
}
