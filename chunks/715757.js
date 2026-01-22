n.d(e, {
    Qo: () => g,
    V: () => _,
    W1: () => A,
    ml: () => S,
    vb: () => f,
});
var i = n(64700),
    r = n(311907),
    l = n(843472),
    a = n(803306),
    s = n(71393),
    o = n(320501),
    d = n(376708),
    u = n(272720),
    c = n(56595);
function g(t) {
    return (0, r.bG)([s.A], () => {
        if (null == t) return !1;
        let e = s.A.getGuild(t);
        return null != e && (0, c.A)(e) && null != (0, u.A)(e);
    });
}
function _(t) {
    return (0, d.uW)(t);
}
function A(t) {
    return (0, d.xJ)(t);
}
function S(t) {
    let { messageReference: e } = t,
        n = (0, r.bG)([o.A], () => (null != e ? o.A.getMessage(e.channel_id, e.message_id) : null));
    (0, i.useEffect)(() => {
        null == n &&
            null != e &&
            l.A.fetchMessages({
                channelId: e.channel_id,
                jump: { messageId: e.message_id },
                limit: 10,
            });
    }, [n, e]);
}
function f(t) {
    var e, n;
    let i =
        null == t || null == (n = t.messageSnapshots[0]) || null == (e = n.moderatorReport)
            ? void 0
            : e.reported_user_id;
    null != i && (0, a.wz)(i);
}
