"use strict";
n.d(t, { A: () => c });
var i = n(584682),
    r = n(376708),
    s = n(976860),
    a = n(345942),
    o = n(734057),
    l = n(376943),
    _ = n(460115),
    d = n(9588),
    u = n(652215);
async function c(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await (0, _.A)(n))) return void (0, d.K)({ kind: "channel" });
    if (null == n) return void (0, s.pX)(e, t);
    let c = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, i.j)(t);
        return { ...e, guildId: n ?? u.ME };
    })(n);
    null == c.channelId
        ? (0, a.u)(c.guildId)
        : (0, r.C$)(c.channelId) && (0, r.C$)(c.threadId)
          ? null != c.threadId
              ? (0, s.pX)(u.BVt.CHANNEL_THREAD_VIEW(c.guildId, c.channelId, c.threadId, c.messageId), t)
              : (0, s.pX)(u.BVt.CHANNEL(c.guildId, c.channelId, c.messageId), t)
          : (0, d.E)();
}
