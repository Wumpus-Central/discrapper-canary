r.d(n, {
    B: function () {
        return p;
    },
    J: function () {
        return f;
    }
});
var i = r(789020);
var a = r(442837),
    o = r(592125),
    s = r(9156),
    l = r(630388),
    u = r(569471),
    c = r(124368),
    d = r(981631);
function f(e) {
    let n = u.Z.flags(e.id);
    if (null == n) return c.iN.NO_MESSAGES;
    if ((0, l.yE)(n, c.iN.ALL_MESSAGES)) return c.iN.ALL_MESSAGES;
    if ((0, l.yE)(n, c.iN.ONLY_MENTIONS)) return c.iN.ONLY_MENTIONS;
    if ((0, l.yE)(n, c.iN.NO_MESSAGES)) return c.iN.NO_MESSAGES;
    let r = o.Z.getChannel(e.parent_id);
    if (null == r || s.ZP.isGuildOrCategoryOrChannelMuted(r.guild_id, r.id)) return c.iN.NO_MESSAGES;
    let i = s.ZP.resolvedMessageNotifications(r);
    return i === d.bL.NO_MESSAGES ? c.iN.NO_MESSAGES : i === d.bL.ONLY_MENTIONS ? c.iN.ONLY_MENTIONS : c.iN.ALL_MESSAGES;
}
function p(e) {
    return (0, a.e7)([u.Z, s.ZP, o.Z], () => f(e), [e]);
}
