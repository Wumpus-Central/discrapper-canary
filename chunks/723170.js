n.d(t, {
    B: () => d,
    J: () => u
}),
    n(789020);
var r = n(442837),
    i = n(592125),
    o = n(9156),
    a = n(630388),
    s = n(569471),
    l = n(124368),
    c = n(981631);
function u(e) {
    let t = s.Z.flags(e.id);
    if (null == t) return l.iN.NO_MESSAGES;
    if ((0, a.yE)(t, l.iN.ALL_MESSAGES)) return l.iN.ALL_MESSAGES;
    if ((0, a.yE)(t, l.iN.ONLY_MENTIONS)) return l.iN.ONLY_MENTIONS;
    if ((0, a.yE)(t, l.iN.NO_MESSAGES)) return l.iN.NO_MESSAGES;
    let n = i.Z.getChannel(e.parent_id);
    if (null == n || o.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return l.iN.NO_MESSAGES;
    let r = o.ZP.resolvedMessageNotifications(n);
    return r === c.bL.NO_MESSAGES ? l.iN.NO_MESSAGES : r === c.bL.ONLY_MENTIONS ? l.iN.ONLY_MENTIONS : l.iN.ALL_MESSAGES;
}
function d(e) {
    return (0, r.e7)([s.Z, o.ZP, i.Z], () => u(e), [e]);
}
