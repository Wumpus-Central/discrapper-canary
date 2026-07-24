t.d(n, { Qo: () => p, V: () => h, W1: () => f, ml: () => g, vb: () => m });
var u = t(64700),
    l = t(17928),
    s = t(493336),
    r = t(803306),
    i = t(71393),
    a = t(232835),
    c = t(892340),
    d = t(272720),
    o = t(56595);
function p(e) {
    return (0, l.bG)([i.A], () => {
        if (null == e) return !1;
        let n = i.A.getGuild(e);
        return null != n && (0, o.A)(n) && null != (0, d.A)(n);
    });
}
function h(e) {
    return (0, c.uW)(e);
}
function f(e) {
    return (0, c.xJ)(e);
}
function g(e) {
    let { messageReference: n } = e,
        t = (0, l.bG)([a.A], () => (null != n ? a.A.getMessage(n.channel_id, n.message_id) : null));
    (0, u.useEffect)(() => {
        null == t &&
            null != n &&
            s.A.fetchMessages({ channelId: n.channel_id, jump: { messageId: n.message_id }, limit: 10 });
    }, [t, n]);
}
function m(e) {
    let n = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
    null != n && (0, r.getUser)(n);
}
