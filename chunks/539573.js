n.d(t, {
    $q: () => u,
    U8: () => c,
    V6: () => s,
    uF: () => f,
    uS: () => l
}),
    n(411104),
    n(47120);
var r = n(673750),
    i = n(592125),
    o = n(981631),
    a = n(388032);
class s extends Error {}
class l extends Error {}
let c = new Set([o.evJ.AUTOMOD_MESSAGE_BLOCKED, o.evJ.AUTOMOD_TITLE_BLOCKED, o.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);
function u(e, t) {
    if (null == e) return null;
    let { code: n, message: r } = e;
    if (!c.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let s = i.Z.getChannel(t);
    return (null == s ? void 0 : s.isThread()) ? a.NW.string(a.t.DVdG9P) : ((null == s ? void 0 : s.isForumPost()) || (null == s ? void 0 : s.isForumLikeChannel())) && (n === o.evJ.AUTOMOD_TITLE_BLOCKED || n === o.evJ.AUTOMOD_MESSAGE_BLOCKED) ? a.NW.string(a.t.ipgKDg) : null;
}
function d(e) {
    let t = i.Z.getChannel(e.message.channelId);
    return (0, r.Bz)(e) ? a.NW.string(a.t.bU6o09) : (null == t ? void 0 : t.isThread()) ? a.NW.string(a.t.DVdG9P) : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? a.NW.string(a.t.ipgKDg) : a.NW.string(a.t.zQ69pq);
}
function f(e, t) {
    let n = u(t);
    return null != n ? n : null == e ? a.NW.string(a.t.zQ69pq) : d(e);
}
