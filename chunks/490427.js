n.d(l, { A: () => o });
var t = n(350835),
    s = n(236285),
    i = n(95701),
    a = n(690521),
    r = n(488926),
    u = n(652215);
function o(e) {
    let { activity: l, user: n, channel: o } = e;
    if (null == n || l?.type !== t.$.CUSTOM_STATUS || null == l.emoji) return !1;
    let c = l.emoji;
    if (null == c.id || null == o || !(0, i.ke)(o.type)) return !0;
    let d = s.Ay.getUsableCustomEmojiById(c.id),
        m = a.Ay.isInternalEmojiForGuildId(d, o.getGuildId()),
        x = r.$3({ permission: u.xBc.USE_EXTERNAL_EMOJIS, user: n, context: o });
    return !m || x;
}
