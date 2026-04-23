n.d(t, { Qo: () => g, V: () => A, W1: () => h, ml: () => m, vb: () => f });
var i = n(64700),
    l = n(311907),
    a = n(843472),
    r = n(803306),
    s = n(71393),
    o = n(320501),
    d = n(376708),
    c = n(272720),
    u = n(56595);
function g(e) {
    return (0, l.bG)([s.A], () => {
        if (null == e) return !1;
        let t = s.A.getGuild(e);
        return null != t && (0, u.A)(t) && null != (0, c.A)(t);
    });
}
function A(e) {
    return (0, d.uW)(e);
}
function h(e) {
    return (0, d.xJ)(e);
}
function m(e) {
    let { messageReference: t } = e,
        n = (0, l.bG)([o.A], () => (null != t ? o.A.getMessage(t.channel_id, t.message_id) : null));
    (0, i.useEffect)(() => {
        null == n &&
            null != t &&
            a.A.fetchMessages({ channelId: t.channel_id, jump: { messageId: t.message_id }, limit: 10 });
    }, [n, t]);
}
function f(e) {
    let t = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != t && (0, r.wz)(t);
}
