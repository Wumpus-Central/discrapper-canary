t.d(n, {
    Cv: () => p,
    HL: () => h,
    KK: () => j,
    Q_: () => f,
    nw: () => b,
});
var r = t(473749),
    i = t(442837),
    l = t(904245),
    o = t(232567),
    a = t(430824),
    u = t(375954),
    c = t(982168),
    d = t(893908),
    s = t(953252);
function f(e) {
    return (0, i.e7)([a.Z], () => {
        if (null == e) return !1;
        let n = a.Z.getGuild(e);
        return null != n && (0, s.Z)(n) && null != (0, d.Z)(n);
    });
}
function h(e) {
    return (0, c.P0)(e);
}
function b(e) {
    return (0, c.gT)(e);
}
function p(e) {
    let { messageReference: n } = e,
        t = (0, i.e7)([u.Z], () => (null != n ? u.Z.getMessage(n.channel_id, n.message_id) : null));
    (0, r.useEffect)(() => {
        null == t &&
            null != n &&
            l.Z.fetchMessages({
                channelId: n.channel_id,
                jump: { messageId: n.message_id },
                limit: 10,
            });
    }, [t, n]);
}
function j(e) {
    var n, t;
    let r =
        null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport)
            ? void 0
            : n.reported_user_id;
    null != r && (0, o.PR)(r);
}
