"use strict";
n.d(t, { X: () => d, l: () => c }), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(734057),
    a = n(543465),
    o = n(152007),
    l = n(37411),
    u = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
        c = t.flags(e.id);
    if (null == c) return l.CP.NO_MESSAGES;
    if ((0, r.Lt)(c, l.CP.ALL_MESSAGES)) return l.CP.ALL_MESSAGES;
    if ((0, r.Lt)(c, l.CP.ONLY_MENTIONS)) return l.CP.ONLY_MENTIONS;
    if ((0, r.Lt)(c, l.CP.NO_MESSAGES)) return l.CP.NO_MESSAGES;
    let d = i.getChannel(e.parent_id);
    if (null == d || n.isGuildOrCategoryOrChannelMuted(d.guild_id, d.id)) return l.CP.NO_MESSAGES;
    let _ = n.resolvedMessageNotifications(d);
    return _ === u.orn.NO_MESSAGES
        ? l.CP.NO_MESSAGES
        : _ === u.orn.ONLY_MENTIONS
          ? l.CP.ONLY_MENTIONS
          : l.CP.ALL_MESSAGES;
}
function d(e) {
    return (0, i.bG)([o.A, a.Ay, s.A], () => c(e), [e]);
}
