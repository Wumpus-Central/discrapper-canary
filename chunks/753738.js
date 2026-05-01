n.d(t, { Nr: () => o, PD: () => _, cw: () => c, lH: () => l, yf: () => d });
var i = n(884384),
    a = n(734057),
    r = n(652215),
    s = n(985018);
class l extends Error {}
class o extends Error {}
let d = new Set([
    r.t02.AUTOMOD_MESSAGE_BLOCKED,
    r.t02.AUTOMOD_TITLE_BLOCKED,
    r.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
]);
function c(e, t) {
    if (null == e) return null;
    let { code: n, message: i } = e;
    if (!d.has(n)) return null;
    if (null != i) return i;
    if (null == t) return null;
    let l = a.A.getChannel(t);
    return l?.isThread()
        ? s.intl.string(s.t.DVdG9E)
        : (l?.isForumPost() || l?.isForumLikeChannel()) &&
            (n === r.t02.AUTOMOD_TITLE_BLOCKED || n === r.t02.AUTOMOD_MESSAGE_BLOCKED)
          ? s.intl.string(s.t.ipgKDg)
          : null;
}
function _(e, t) {
    let n,
        r = c(t);
    return null != r
        ? r
        : null == e
          ? s.intl.string(s.t.zQ69pv)
          : ((n = a.A.getChannel(e.message.channelId)),
            (0, i.Qn)(e)
                ? s.intl.string(s.t.bU6o0z)
                : n?.isThread()
                  ? s.intl.string(s.t.DVdG9E)
                  : n?.isForumPost() || n?.isForumLikeChannel()
                    ? s.intl.string(s.t.ipgKDg)
                    : s.intl.string(s.t.zQ69pv));
}
