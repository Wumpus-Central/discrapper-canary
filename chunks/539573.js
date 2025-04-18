n.d(t, {
    $q: () => u,
    U8: () => c,
    V6: () => s,
    uF: () => f,
    uS: () => l
}),
    n(415506),
    n(388685);
var r = n(673750),
    i = n(592125),
    a = n(981631),
    o = n(388032);
class s extends Error {}
class l extends Error {}
let c = new Set([a.evJ.AUTOMOD_MESSAGE_BLOCKED, a.evJ.AUTOMOD_TITLE_BLOCKED, a.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);
function u(e, t) {
    if (null == e) return null;
    let { code: n, message: r } = e;
    if (!c.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let s = i.Z.getChannel(t);
    return (null == s ? void 0 : s.isThread()) ? o.NW.string(o.t.DVdG9P) : ((null == s ? void 0 : s.isForumPost()) || (null == s ? void 0 : s.isForumLikeChannel())) && (n === a.evJ.AUTOMOD_TITLE_BLOCKED || n === a.evJ.AUTOMOD_MESSAGE_BLOCKED) ? o.NW.string(o.t.ipgKDg) : null;
}
function d(e) {
    let t = i.Z.getChannel(e.message.channelId);
    return (0, r.Bz)(e) ? o.NW.string(o.t.bU6o09) : (null == t ? void 0 : t.isThread()) ? o.NW.string(o.t.DVdG9P) : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? o.NW.string(o.t.ipgKDg) : o.NW.string(o.t.zQ69pq);
}
function f(e, t) {
    let n = u(t);
    return null != n ? n : null == e ? o.NW.string(o.t.zQ69pq) : d(e);
}
