t.d(n, {
    Cv: () => h,
    HL: () => f,
    KK: () => b,
    Q_: () => p,
    nw: () => m,
});
var l = t(647438),
    i = t(442837),
    r = t(904245),
    o = t(232567),
    c = t(430824),
    s = t(375954),
    a = t(982168),
    u = t(893908),
    d = t(953252);
function p(e) {
    return (0, i.e7)([c.Z], () => {
        if (null == e) return !1;
        let n = c.Z.getGuild(e);
        return null != n && (0, d.Z)(n) && null != (0, u.Z)(n);
    });
}
function f(e) {
    return (0, a.P0)(e);
}
function m(e) {
    return (0, a.gT)(e);
}
function h(e) {
    let { messageReference: n } = e,
        t = (0, i.e7)([s.Z], () => (null != n ? s.Z.getMessage(n.channel_id, n.message_id) : null));
    (0, l.useEffect)(() => {
        null == t &&
            null != n &&
            r.Z.fetchMessages({
                channelId: n.channel_id,
                jump: { messageId: n.message_id },
                limit: 10,
            });
    }, [t, n]);
}
function b(e) {
    var n, t;
    let l =
        null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport)
            ? void 0
            : n.reported_user_id;
    null != l && (0, o.PR)(l);
}
