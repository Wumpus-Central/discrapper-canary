"use strict";
n.d(t, { A: () => f });
var r = n(584682),
    i = n(376708),
    a = n(976860),
    s = n(345942),
    o = n(734057),
    l = n(376943),
    u = n(150129),
    c = n(9588),
    d = n(652215);
function _(e) {
    if (null == e.channelId) return e;
    let t = o.A.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, r.j)(t);
    return { ...e, guildId: n ?? d.ME };
}
async function f(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await (0, u.A)(n))) return void (0, c.K)({ kind: "channel" });
    if (null == n) return void (0, a.pX)(e, t);
    let r = _(n);
    null == r.channelId
        ? (0, s.u)(r.guildId)
        : (0, i.C$)(r.channelId) && (0, i.C$)(r.threadId)
          ? null != r.threadId
              ? (0, a.pX)(d.BVt.CHANNEL_THREAD_VIEW(r.guildId, r.channelId, r.threadId, r.messageId), t)
              : (0, a.pX)(d.BVt.CHANNEL(r.guildId, r.channelId, r.messageId), t)
          : (0, c.E)();
}
