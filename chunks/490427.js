"use strict";
n.d(t, { A: () => o });
var l = n(236285),
    i = n(95701),
    s = n(690521),
    r = n(488926),
    a = n(652215);
function o(e) {
    let { activity: t, user: n, channel: o } = e;
    if (null == n || t?.type !== a.$pd.CUSTOM_STATUS || null == t.emoji) return !1;
    let u = t.emoji;
    if (null == u.id || null == o || !(0, i.ke)(o.type)) return !0;
    let c = l.Ay.getUsableCustomEmojiById(u.id),
        d = s.Ay.isInternalEmojiForGuildId(c, o.getGuildId()),
        h = r.$3({ permission: a.xBc.USE_EXTERNAL_EMOJIS, user: n, context: o });
    return !d || h;
}
