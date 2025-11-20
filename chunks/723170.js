n.d(t, {
    B: () => d,
    J: () => u,
}),
    n(997841);
var r = n(95015),
    i = n(442837),
    a = n(592125),
    o = n(9156),
    s = n(569471),
    l = n(124368),
    c = n(981631);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.ZP,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Z,
        u = t.flags(e.id);
    if (null == u) return l.iN.NO_MESSAGES;
    if ((0, r.yE)(u, l.iN.ALL_MESSAGES)) return l.iN.ALL_MESSAGES;
    if ((0, r.yE)(u, l.iN.ONLY_MENTIONS)) return l.iN.ONLY_MENTIONS;
    if ((0, r.yE)(u, l.iN.NO_MESSAGES)) return l.iN.NO_MESSAGES;
    let d = i.getChannel(e.parent_id);
    if (null == d || n.isGuildOrCategoryOrChannelMuted(d.guild_id, d.id)) return l.iN.NO_MESSAGES;
    let f = n.resolvedMessageNotifications(d);
    return f === c.bL.NO_MESSAGES
        ? l.iN.NO_MESSAGES
        : f === c.bL.ONLY_MENTIONS
          ? l.iN.ONLY_MENTIONS
          : l.iN.ALL_MESSAGES;
}
function d(e) {
    return (0, i.e7)([s.Z, o.ZP, a.Z], () => u(e), [e]);
}
