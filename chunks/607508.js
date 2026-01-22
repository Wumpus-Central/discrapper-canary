n.d(t, {
    X: () => d,
    l: () => u,
}),
    n(938796);
var r = n(665260),
    i = n(311907),
    a = n(734057),
    s = n(543465),
    o = n(152007),
    l = n(37411),
    c = n(652215);

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.A,
        u = t.flags(e.id);
    if (null == u) return l.CP.NO_MESSAGES;
    if ((0, r.Lt)(u, l.CP.ALL_MESSAGES)) return l.CP.ALL_MESSAGES;
    if ((0, r.Lt)(u, l.CP.ONLY_MENTIONS)) return l.CP.ONLY_MENTIONS;
    if ((0, r.Lt)(u, l.CP.NO_MESSAGES)) return l.CP.NO_MESSAGES;
    let d = i.getChannel(e.parent_id);
    if (null == d || n.isGuildOrCategoryOrChannelMuted(d.guild_id, d.id)) return l.CP.NO_MESSAGES;
    let f = n.resolvedMessageNotifications(d);
    return f === c.orn.NO_MESSAGES
        ? l.CP.NO_MESSAGES
        : f === c.orn.ONLY_MENTIONS
          ? l.CP.ONLY_MENTIONS
          : l.CP.ALL_MESSAGES;
}

function d(e) {
    return (0, i.bG)([o.A, s.Ay, a.A], () => u(e), [e]);
}
