r.d(n, {
    $q: function () {
        return p;
    },
    U8: function () {
        return f;
    },
    V6: function () {
        return c;
    },
    uF: function () {
        return _;
    },
    uS: function () {
        return d;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(673750),
    s = r(592125),
    l = r(981631),
    u = r(388032);
class c extends Error {}
class d extends Error {}
let f = new Set([l.evJ.AUTOMOD_MESSAGE_BLOCKED, l.evJ.AUTOMOD_TITLE_BLOCKED, l.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);
function p(e, n) {
    if (null == e) return null;
    let { code: r, message: i } = e;
    if (!f.has(r)) return null;
    if (null != i) return i;
    if (null == n) return null;
    let a = s.Z.getChannel(n);
    return (null == a ? void 0 : a.isThread()) ? u.intl.string(u.t.DVdG9P) : ((null == a ? void 0 : a.isForumPost()) || (null == a ? void 0 : a.isForumLikeChannel())) && (r === l.evJ.AUTOMOD_TITLE_BLOCKED || r === l.evJ.AUTOMOD_MESSAGE_BLOCKED) ? u.intl.string(u.t.ipgKDg) : null;
}
function h(e) {
    let n = s.Z.getChannel(e.message.channelId);
    return (0, o.Bz)(e) ? u.intl.string(u.t.bU6o09) : (null == n ? void 0 : n.isThread()) ? u.intl.string(u.t.DVdG9P) : (null == n ? void 0 : n.isForumPost()) || (null == n ? void 0 : n.isForumLikeChannel()) ? u.intl.string(u.t.ipgKDg) : u.intl.string(u.t.zQ69pq);
}
function _(e, n) {
    let r = p(n);
    return null != r ? r : null == e ? u.intl.string(u.t.zQ69pq) : h(e);
}
