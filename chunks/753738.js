n.d(t, { Nr: () => l, PD: () => d, cw: () => E, lH: () => _, yf: () => o });
var i = n(884384),
    r = n(734057),
    a = n(652215),
    s = n(985018);
class _ extends Error {}
class l extends Error {}
let o = new Set([
    a.t02.AUTOMOD_MESSAGE_BLOCKED,
    a.t02.AUTOMOD_TITLE_BLOCKED,
    a.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
]);
function E(e, t) {
    if (null == e) return null;
    let { code: n, message: i } = e;
    if (!o.has(n)) return null;
    if (null != i) return i;
    if (null == t) return null;
    let _ = r.A.getChannel(t);
    return _?.isThread()
        ? s.intl.string(s.t.DVdG9E)
        : (_?.isForumPost() || _?.isForumLikeChannel()) &&
            (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED)
          ? s.intl.string(s.t.ipgKDg)
          : null;
}
function d(e, t) {
    let n,
        a = E(t);
    return null != a
        ? a
        : null == e
          ? s.intl.string(s.t.zQ69pv)
          : ((n = r.A.getChannel(e.message.channelId)),
            (0, i.Qn)(e)
                ? s.intl.string(s.t.bU6o0z)
                : n?.isThread()
                  ? s.intl.string(s.t.DVdG9E)
                  : n?.isForumPost() || n?.isForumLikeChannel()
                    ? s.intl.string(s.t.ipgKDg)
                    : s.intl.string(s.t.zQ69pv));
}
