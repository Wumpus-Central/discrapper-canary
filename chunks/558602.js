r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(339085),
    a = r(131704),
    o = r(176354),
    s = r(700785),
    l = r(981631);
function u(e, n, r) {
    if (e.type !== l.IIU.CUSTOM_STATUS || null == e.emoji) return !1;
    let u = e.emoji;
    if (null == u.id || null == r || !(0, a.zi)(r.type)) return !0;
    let c = i.ZP.getUsableCustomEmojiById(u.id),
        d = o.ZP.isInternalEmojiForGuildId(c, r.getGuildId()),
        f = s.BT({
            permission: l.Plq.USE_EXTERNAL_EMOJIS,
            user: n,
            context: r
        });
    return !d || f;
}
