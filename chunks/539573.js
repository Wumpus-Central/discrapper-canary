n.d(t, {
    $q: () => c,
    U8: () => u,
    V6: () => o,
    uF: () => f,
    uS: () => l
}),
    n(411104),
    n(47120);
var i = n(673750),
    r = n(592125),
    a = n(981631),
    s = n(388032);
class o extends Error {}
class l extends Error {}
let u = new Set([a.evJ.AUTOMOD_MESSAGE_BLOCKED, a.evJ.AUTOMOD_TITLE_BLOCKED, a.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);
function c(e, t) {
    if (null == e) return null;
    let { code: n, message: i } = e;
    if (!u.has(n)) return null;
    if (null != i) return i;
    if (null == t) return null;
    let o = r.Z.getChannel(t);
    return (null == o ? void 0 : o.isThread()) ? s.intl.string(s.t.DVdG9P) : ((null == o ? void 0 : o.isForumPost()) || (null == o ? void 0 : o.isForumLikeChannel())) && (n === a.evJ.AUTOMOD_TITLE_BLOCKED || n === a.evJ.AUTOMOD_MESSAGE_BLOCKED) ? s.intl.string(s.t.ipgKDg) : null;
}
function d(e) {
    let t = r.Z.getChannel(e.message.channelId);
    return (0, i.Bz)(e) ? s.intl.string(s.t.bU6o09) : (null == t ? void 0 : t.isThread()) ? s.intl.string(s.t.DVdG9P) : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? s.intl.string(s.t.ipgKDg) : s.intl.string(s.t.zQ69pq);
}
function f(e, t) {
    let n = c(t);
    return null != n ? n : null == e ? s.intl.string(s.t.zQ69pq) : d(e);
}
