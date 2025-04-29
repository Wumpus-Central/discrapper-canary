n.d(t, { Z: () => l });
var r = n(339085),
    i = n(131704),
    o = n(176354),
    a = n(700785),
    s = n(981631);
function l(e) {
    let { activity: t, user: n, channel: l } = e;
    if (null == n || (null == t ? void 0 : t.type) !== s.IIU.CUSTOM_STATUS || null == t.emoji) return !1;
    let c = t.emoji;
    if (null == c.id || null == l || !(0, i.zi)(l.type)) return !0;
    let u = r.ZP.getUsableCustomEmojiById(c.id),
        d = o.ZP.isInternalEmojiForGuildId(u, l.getGuildId()),
        f = a.BT({
            permission: s.Plq.USE_EXTERNAL_EMOJIS,
            user: n,
            context: l
        });
    return !d || f;
}
