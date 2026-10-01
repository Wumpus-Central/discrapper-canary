n.d(t, { A: () => o });
var l = n(236285),
    i = n(95701),
    s = n(690521),
    a = n(488926),
    r = n(652215);
function o(e) {
    let { activity: t, user: n, channel: o } = e;
    if (null == n || t?.type !== r.$pd.CUSTOM_STATUS || null == t.emoji) return !1;
    let u = t.emoji;
    if (null == u.id || null == o || !(0, i.ke)(o.type)) return !0;
    let d = l.Ay.getUsableCustomEmojiById(u.id),
        c = s.Ay.isInternalEmojiForGuildId(d, o.getGuildId()),
        m = a.$3({ permission: r.xBc.USE_EXTERNAL_EMOJIS, user: n, context: o });
    return !c || m;
}
