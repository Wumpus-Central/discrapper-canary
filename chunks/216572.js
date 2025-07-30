n.d(t, {
    Cv: () => v,
    HL: () => h,
    KK: () => b,
    Q_: () => f,
    nw: () => g
});
var i = n(73800),
    r = n(442837),
    l = n(904245),
    a = n(232567),
    o = n(430824),
    s = n(375954),
    d = n(982168),
    u = n(893908),
    c = n(953252);
function f(e) {
    return (0, r.e7)([o.Z], () => {
        if (null == e) return !1;
        let t = o.Z.getGuild(e);
        return null != t && (0, c.Z)(t) && null != (0, u.Z)(t);
    });
}
function h(e) {
    return (0, d.P0)(e);
}
function g(e) {
    return (0, d.gT)(e);
}
function v(e) {
    let { messageReference: t } = e,
        n = (0, r.e7)([s.Z], () => (null != t ? s.Z.getMessage(t.channel_id, t.message_id) : null));
    (0, i.useEffect)(() => {
        null == n &&
            null != t &&
            l.Z.fetchMessages({
                channelId: t.channel_id,
                jump: { messageId: t.message_id },
                limit: 10
            });
    }, [n, t]);
}
function b(e) {
    var t, n;
    let i = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? void 0 : t.reported_user_id;
    null != i && (0, a.PR)(i);
}
