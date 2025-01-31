n.d(t, { Z: () => l });
var i = n(339085),
    r = n(131704),
    a = n(176354),
    s = n(700785),
    o = n(981631);
function l(e) {
    let { activity: t, user: n, channel: l } = e;
    if (null == n || (null == t ? void 0 : t.type) !== o.IIU.CUSTOM_STATUS || null == t.emoji) return !1;
    let u = t.emoji;
    if (null == u.id || null == l || !(0, r.zi)(l.type)) return !0;
    let c = i.ZP.getUsableCustomEmojiById(u.id),
        d = a.ZP.isInternalEmojiForGuildId(c, l.getGuildId()),
        f = s.BT({
            permission: o.Plq.USE_EXTERNAL_EMOJIS,
            user: n,
            context: l
        });
    return !d || f;
}
