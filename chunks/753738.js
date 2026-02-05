"use strict";
n.d(t, { Nr: () => l, PD: () => _, cw: () => c, lH: () => o, yf: () => u });
var r = n(884384),
    i = n(734057),
    a = n(652215),
    s = n(985018);
class o extends Error {}
class l extends Error {}
let u = new Set([
    a.t02.AUTOMOD_MESSAGE_BLOCKED,
    a.t02.AUTOMOD_TITLE_BLOCKED,
    a.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
]);
function c(e, t) {
    if (null == e) return null;
    let { code: n, message: r } = e;
    if (!u.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let o = i.A.getChannel(t);
    return o?.isThread()
        ? s.intl.string(s.t.DVdG9E)
        : (o?.isForumPost() || o?.isForumLikeChannel()) &&
            (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED)
          ? s.intl.string(s.t.ipgKDg)
          : null;
}
function d(e) {
    let t = i.A.getChannel(e.message.channelId);
    return (0, r.Qn)(e)
        ? s.intl.string(s.t.bU6o0z)
        : t?.isThread()
          ? s.intl.string(s.t.DVdG9E)
          : t?.isForumPost() || t?.isForumLikeChannel()
            ? s.intl.string(s.t.ipgKDg)
            : s.intl.string(s.t.zQ69pv);
}
function _(e, t) {
    let n = c(t);
    return null != n ? n : null == e ? s.intl.string(s.t.zQ69pv) : d(e);
}
