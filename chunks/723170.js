n.d(t, {
    B: () => d,
    J: () => c
}),
    n(789020);
var i = n(442837),
    r = n(592125),
    a = n(9156),
    s = n(630388),
    o = n(569471),
    l = n(124368),
    u = n(981631);
function c(e) {
    let t = o.Z.flags(e.id);
    if (null == t) return l.iN.NO_MESSAGES;
    if ((0, s.yE)(t, l.iN.ALL_MESSAGES)) return l.iN.ALL_MESSAGES;
    if ((0, s.yE)(t, l.iN.ONLY_MENTIONS)) return l.iN.ONLY_MENTIONS;
    if ((0, s.yE)(t, l.iN.NO_MESSAGES)) return l.iN.NO_MESSAGES;
    let n = r.Z.getChannel(e.parent_id);
    if (null == n || a.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return l.iN.NO_MESSAGES;
    let i = a.ZP.resolvedMessageNotifications(n);
    return i === u.bL.NO_MESSAGES ? l.iN.NO_MESSAGES : i === u.bL.ONLY_MENTIONS ? l.iN.ONLY_MENTIONS : l.iN.ALL_MESSAGES;
}
function d(e) {
    return (0, i.e7)([o.Z, a.ZP, r.Z], () => c(e), [e]);
}
