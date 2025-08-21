t.d(n, {
    Cv: () => g,
    HL: () => h,
    KK: () => O,
    Q_: () => f,
    nw: () => p,
});
var i = t(647438),
    r = t(442837),
    l = t(904245),
    a = t(232567),
    o = t(430824),
    s = t(375954),
    c = t(982168),
    u = t(893908),
    d = t(953252);
function f(e) {
    return (0, r.e7)([o.Z], () => {
        if (null == e) return !1;
        let n = o.Z.getGuild(e);
        return null != n && (0, d.Z)(n) && null != (0, u.Z)(n);
    });
}
function h(e) {
    return (0, c.P0)(e);
}
function p(e) {
    return (0, c.gT)(e);
}
function g(e) {
    let { messageReference: n } = e,
        t = (0, r.e7)([s.Z], () => (null != n ? s.Z.getMessage(n.channel_id, n.message_id) : null));
    (0, i.useEffect)(() => {
        null == t &&
            null != n &&
            l.Z.fetchMessages({
                channelId: n.channel_id,
                jump: { messageId: n.message_id },
                limit: 10,
            });
    }, [t, n]);
}
function O(e) {
    var n, t;
    let i =
        null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport)
            ? void 0
            : n.reported_user_id;
    null != i && (0, a.PR)(i);
}
