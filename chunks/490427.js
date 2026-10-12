n.d(l, { A: () => u });
var t = n(236285),
    s = n(95701),
    i = n(690521),
    a = n(488926),
    r = n(652215);
function u(e) {
    let { activity: l, user: n, channel: u } = e;
    if (null == n || l?.type !== r.$pd.CUSTOM_STATUS || null == l.emoji) return !1;
    let o = l.emoji;
    if (null == o.id || null == u || !(0, s.ke)(u.type)) return !0;
    let c = t.Ay.getUsableCustomEmojiById(o.id),
        d = i.Ay.isInternalEmojiForGuildId(c, u.getGuildId()),
        m = a.$3({ permission: r.xBc.USE_EXTERNAL_EMOJIS, user: n, context: u });
    return !d || m;
}
