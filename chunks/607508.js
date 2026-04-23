"use strict";
n.d(t, { X: () => u, l: () => _ }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(734057),
    a = n(543465),
    o = n(152007),
    l = n(37411),
    d = n(652215);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
        _ = t.flags(e.id);
    if (null == _) return l.CP.NO_MESSAGES;
    if ((0, i.Lt)(_, l.CP.ALL_MESSAGES)) return l.CP.ALL_MESSAGES;
    if ((0, i.Lt)(_, l.CP.ONLY_MENTIONS)) return l.CP.ONLY_MENTIONS;
    if ((0, i.Lt)(_, l.CP.NO_MESSAGES)) return l.CP.NO_MESSAGES;
    let u = r.getChannel(e.parent_id);
    if (null == u || n.isGuildOrCategoryOrChannelMuted(u.guild_id, u.id)) return l.CP.NO_MESSAGES;
    let c = n.resolvedMessageNotifications(u);
    return c === d.orn.NO_MESSAGES
        ? l.CP.NO_MESSAGES
        : c === d.orn.ONLY_MENTIONS
          ? l.CP.ONLY_MENTIONS
          : l.CP.ALL_MESSAGES;
}
function u(e) {
    return (0, r.bG)([o.A, a.Ay, s.A], () => _(e), [e]);
}
