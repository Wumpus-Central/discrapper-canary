t.d(n, {
    Cv: () => m,
    HL: () => f,
    KK: () => h,
    Q_: () => p,
    nw: () => b,
});
var a = t(473749),
    l = t(442837),
    i = t(904245),
    r = t(232567),
    o = t(430824),
    c = t(375954),
    s = t(982168),
    d = t(893908),
    u = t(953252);
function p(e) {
    return (0, l.e7)([o.Z], () => {
        if (null == e) return !1;
        let n = o.Z.getGuild(e);
        return null != n && (0, u.Z)(n) && null != (0, d.Z)(n);
    });
}
function f(e) {
    return (0, s.P0)(e);
}
function b(e) {
    return (0, s.gT)(e);
}
function m(e) {
    let { messageReference: n } = e,
        t = (0, l.e7)([c.Z], () => (null != n ? c.Z.getMessage(n.channel_id, n.message_id) : null));
    (0, a.useEffect)(() => {
        null == t &&
            null != n &&
            i.Z.fetchMessages({
                channelId: n.channel_id,
                jump: { messageId: n.message_id },
                limit: 10,
            });
    }, [t, n]);
}
function h(e) {
    var n, t;
    let a =
        null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport)
            ? void 0
            : n.reported_user_id;
    null != a && (0, r.PR)(a);
}
