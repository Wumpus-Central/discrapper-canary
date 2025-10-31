t.d(n, {
    Cv: () => p,
    HL: () => h,
    KK: () => Z,
    Q_: () => f,
    nw: () => b,
});
var r = t(647438),
    i = t(442837),
    l = t(904245),
    a = t(232567),
    o = t(430824),
    c = t(375954),
    s = t(982168),
    u = t(893908),
    d = t(953252);
function f(e) {
    return (0, i.e7)([o.Z], () => {
        if (null == e) return !1;
        let n = o.Z.getGuild(e);
        return null != n && (0, d.Z)(n) && null != (0, u.Z)(n);
    });
}
function h(e) {
    return (0, s.P0)(e);
}
function b(e) {
    return (0, s.gT)(e);
}
function p(e) {
    let { messageReference: n } = e,
        t = (0, i.e7)([c.Z], () => (null != n ? c.Z.getMessage(n.channel_id, n.message_id) : null));
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
function Z(e) {
    var n, t;
    let r =
        null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport)
            ? void 0
            : n.reported_user_id;
    null != r && (0, a.PR)(r);
}
