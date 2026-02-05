"use strict";
n.d(t, { A: () => l });
var r = n(508675),
    i = n(95701),
    a = n(690521),
    s = n(488926),
    o = n(652215);
function l(e) {
    let { activity: t, user: n, channel: l } = e;
    if (null == n || t?.type !== o.$pd.CUSTOM_STATUS || null == t.emoji) return !1;
    let u = t.emoji;
    if (null == u.id || null == l || !(0, i.ke)(l.type)) return !0;
    let c = r.Ay.getUsableCustomEmojiById(u.id),
        d = a.Ay.isInternalEmojiForGuildId(c, l.getGuildId()),
        _ = s.$3({ permission: o.xBc.USE_EXTERNAL_EMOJIS, user: n, context: l });
    return !d || _;
}
