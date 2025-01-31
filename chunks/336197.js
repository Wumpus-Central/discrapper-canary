n.d(t, { Z: () => f });
var i = n(727429),
    r = n(703656),
    a = n(769654),
    s = n(592125),
    o = n(754688),
    l = n(849027),
    u = n(645727),
    c = n(981631);
function d(e) {
    if (null == e.channelId) return e;
    let t = s.Z.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, i.e)(t);
    return {
        ...e,
        guildId: null != n ? n : c.ME
    };
}
async function f(e, t) {
    let n = (0, o.Qj)(e);
    if (null != n && !(await (0, l.Z)(n))) {
        (0, u.k)({ kind: 'channel' });
        return;
    }
    if (null == n) {
        (0, r.uL)(e, t);
        return;
    }
    let i = d(n);
    if (null == i.channelId) {
        (0, a.X)(i.guildId);
        return;
    }
    null != i.threadId ? (0, r.uL)(c.Z5c.CHANNEL_THREAD_VIEW(i.guildId, i.channelId, i.threadId, i.messageId), t) : (0, r.uL)(c.Z5c.CHANNEL(i.guildId, i.channelId, i.messageId), t);
}
