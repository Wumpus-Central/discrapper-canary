s.d(l, { A: () => d });
var t = s(350835),
    n = s(236285),
    i = s(95701),
    r = s(690521),
    a = s(488926),
    c = s(652215);
function d(e) {
    let { activity: l, user: s, channel: d } = e;
    if (null == s || l?.type !== t.$.CUSTOM_STATUS || null == l.emoji) return !1;
    let u = l.emoji;
    if (null == u.id || null == d || !(0, i.ke)(d.type)) return !0;
    let o = n.Ay.getUsableCustomEmojiById(u.id),
        m = r.Ay.isInternalEmojiForGuildId(o, d.getGuildId()),
        h = a.$3({ permission: c.xBc.USE_EXTERNAL_EMOJIS, user: s, context: d });
    return !m || h;
}
