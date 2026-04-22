"use strict";
n.d(t, { A: () => _ });
var r = n(584682),
    i = n(376708),
    s = n(976860),
    a = n(345942),
    o = n(734057),
    l = n(376943),
    u = n(150129),
    d = n(9588),
    c = n(652215);
async function _(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await (0, u.A)(n))) return void (0, d.K)({ kind: "channel" });
    if (null == n) return void (0, s.pX)(e, t);
    let _ = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, r.j)(t);
        return { ...e, guildId: n ?? c.ME };
    })(n);
    null == _.channelId
        ? (0, a.u)(_.guildId)
        : (0, i.C$)(_.channelId) && (0, i.C$)(_.threadId)
          ? null != _.threadId
              ? (0, s.pX)(c.BVt.CHANNEL_THREAD_VIEW(_.guildId, _.channelId, _.threadId, _.messageId), t)
              : (0, s.pX)(c.BVt.CHANNEL(_.guildId, _.channelId, _.messageId), t)
          : (0, d.E)();
}
