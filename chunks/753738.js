n.d(t, {
    Nr: () => l,
    PD: () => f,
    cw: () => u,
    lH: () => o,
    yf: () => c,
}),
    n(65821),
    n(896048);
var r = n(884384),
    i = n(734057),
    a = n(652215),
    s = n(985018);
class o extends Error {}
class l extends Error {}
let c = new Set([
    a.t02.AUTOMOD_MESSAGE_BLOCKED,
    a.t02.AUTOMOD_TITLE_BLOCKED,
    a.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE,
]);

function u(e, t) {
    if (null == e) return null;
    let { code: n, message: r } = e;
    if (!c.has(n)) return null;
    if (null != r) return r;
    if (null == t) return null;
    let o = i.A.getChannel(t);
    return (null == o ? void 0 : o.isThread())
        ? s.intl.string(s.t.DVdG9E)
        : ((null == o ? void 0 : o.isForumPost()) || (null == o ? void 0 : o.isForumLikeChannel())) &&
            (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED)
          ? s.intl.string(s.t.ipgKDg)
          : null;
}

function d(e) {
    let t = i.A.getChannel(e.message.channelId);
    return (0, r.Qn)(e)
        ? s.intl.string(s.t.bU6o0z)
        : (null == t ? void 0 : t.isThread())
          ? s.intl.string(s.t.DVdG9E)
          : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel())
            ? s.intl.string(s.t.ipgKDg)
            : s.intl.string(s.t.zQ69pv);
}

function f(e, t) {
    let n = u(t);
    return null != n ? n : null == e ? s.intl.string(s.t.zQ69pv) : d(e);
}
