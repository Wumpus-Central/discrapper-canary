n.d(t, { Qo: () => h, V: () => g, W1: () => m, ml: () => A, vb: () => p });
var l = n(64700),
    i = n(17928),
    s = n(720149),
    a = n(803306),
    r = n(71393),
    o = n(232835),
    c = n(376708),
    d = n(272720),
    u = n(56595);
function h(e) {
    return (0, i.bG)([r.A], () => {
        if (null == e) return !1;
        let t = r.A.getGuild(e);
        return null != t && (0, u.A)(t) && null != (0, d.A)(t);
    });
}
function g(e) {
    return (0, c.uW)(e);
}
function m(e) {
    return (0, c.xJ)(e);
}
function A(e) {
    let { messageReference: t } = e,
        n = (0, i.bG)([o.A], () => (null != t ? o.A.getMessage(t.channel_id, t.message_id) : null));
    (0, l.useEffect)(() => {
        null == n &&
            null != t &&
            s.A.fetchMessages({ channelId: t.channel_id, jump: { messageId: t.message_id }, limit: 10 });
    }, [n, t]);
}
function p(e) {
    let t = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != t && (0, a.wz)(t);
}
