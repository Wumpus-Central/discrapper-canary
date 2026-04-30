"use strict";
n.d(t, { Nr: () => l, PD: () => d, cw: () => c, lH: () => o, yf: () => u });
var i = n(779185),
    r = n(734057),
    s = n(652215),
    a = n(375708);
class o extends Error {}
class l extends Error {}
let u = new Set([
    s.t02.AUTOMOD_MESSAGE_BLOCKED,
    s.t02.AUTOMOD_TITLE_BLOCKED,
    s.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
]);
function c(e, t) {
    if (null == e) return null;
    let { code: n, message: i } = e;
    if (!u.has(n)) return null;
    if (null != i) return i;
    if (null == t) return null;
    let o = r.A.getChannel(t);
    return o?.isThread()
        ? a.intl.string(a.t.DVdG9E)
        : (o?.isForumPost() || o?.isForumLikeChannel()) &&
            (n === s.t02.AUTOMOD_TITLE_BLOCKED || n === s.t02.AUTOMOD_MESSAGE_BLOCKED)
          ? a.intl.string(a.t.ipgKDg)
          : null;
}
function d(e, t) {
    let n,
        s = c(t);
    return null != s
        ? s
        : null == e
          ? a.intl.string(a.t.zQ69pv)
          : ((n = r.A.getChannel(e.message.channelId)),
            (0, i.Qn)(e)
                ? a.intl.string(a.t.bU6o0z)
                : n?.isThread()
                  ? a.intl.string(a.t.DVdG9E)
                  : n?.isForumPost() || n?.isForumLikeChannel()
                    ? a.intl.string(a.t.ipgKDg)
                    : a.intl.string(a.t.zQ69pv));
}
