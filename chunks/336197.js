r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(727429),
    a = r(703656),
    o = r(769654),
    s = r(592125),
    l = r(754688),
    u = r(849027),
    c = r(645727),
    d = r(981631);
function f(e) {
    if (null == e.channelId) return e;
    let n = s.Z.getChannel(e.channelId);
    if (null == n) return e;
    let r = (0, i.e)(n);
    return {
        ...e,
        guildId: null != r ? r : d.ME
    };
}
async function p(e, n) {
    let r = (0, l.Qj)(e);
    if (null != r && !(await (0, u.Z)(r))) {
        (0, c.k)({ kind: 'channel' });
        return;
    }
    if (null == r) {
        (0, a.uL)(e, n);
        return;
    }
    let i = f(r);
    if (null == i.channelId) {
        (0, o.X)(i.guildId);
        return;
    }
    null != i.threadId ? (0, a.uL)(d.Z5c.CHANNEL_THREAD_VIEW(i.guildId, i.channelId, i.threadId, i.messageId), n) : (0, a.uL)(d.Z5c.CHANNEL(i.guildId, i.channelId, i.messageId), n);
}
