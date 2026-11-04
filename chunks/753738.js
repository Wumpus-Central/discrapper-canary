var i = n(870801),
    r = n(734057),
    a = n(652215),
    s = n(792996);
let l = new Set([
    a.t02.AUTOMOD_MESSAGE_BLOCKED,
    a.t02.AUTOMOD_TITLE_BLOCKED,
    a.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
]);
function o(e, t) {
    if (null == e) return null;
    let { code: n, message: i } = e;
    if (!l.has(n)) return null;
    if (null != i) return i;
    if (null == t) return null;
    let o = r.A.getChannel(t);
    return o?.isThread()
        ? s.intl.string(s.t.DVdG9E)
        : (o?.isForumPost() || o?.isForumLikeChannel()) &&
            (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED)
          ? s.intl.string(s.t.ipgKDg)
          : null;
}
n.d(
    t,
    {},
    {
        Nr: class extends Error {},
        PD: function (e, t) {
            let n,
                a = o(t);
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
        },
        cw: o,
        lH: class extends Error {},
        yf: l,
    },
);
