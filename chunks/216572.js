e.d(n, {
    Cv: () => g,
    HL: () => h,
    KK: () => Z,
    Q_: () => f,
    nw: () => v
});
var i = e(73800),
    r = e(442837),
    l = e(904245),
    a = e(232567),
    o = e(430824),
    s = e(375954),
    d = e(982168),
    u = e(893908),
    c = e(953252);
function f(t) {
    return (0, r.e7)([o.Z], () => {
        if (null == t) return !1;
        let n = o.Z.getGuild(t);
        return null != n && (0, c.Z)(n) && null != (0, u.Z)(n);
    });
}
function h(t) {
    return (0, d.P0)(t);
}
function v(t) {
    return (0, d.gT)(t);
}
function g(t) {
    let { messageReference: n } = t,
        e = (0, r.e7)([s.Z], () => (null != n ? s.Z.getMessage(n.channel_id, n.message_id) : null));
    (0, i.useEffect)(() => {
        null == e &&
            null != n &&
            l.Z.fetchMessages({
                channelId: n.channel_id,
                jump: { messageId: n.message_id },
                limit: 10
            });
    }, [e, n]);
}
function Z(t) {
    var n, e;
    let i = null == t || null == (e = t.messageSnapshots[0]) || null == (n = e.moderatorReport) ? void 0 : n.reported_user_id;
    null != i && (0, a.PR)(i);
}
