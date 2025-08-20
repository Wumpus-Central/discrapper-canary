n.d(t, {
    Cv: () => b,
    HL: () => d,
    KK: () => h,
    Q_: () => f,
    nw: () => g,
});
var s = n(647438),
    i = n(442837),
    r = n(904245),
    c = n(232567),
    a = n(430824),
    o = n(375954),
    u = n(982168),
    l = n(893908),
    p = n(953252);
function f(e) {
    return (0, i.e7)([a.Z], () => {
        if (null == e) return !1;
        let t = a.Z.getGuild(e);
        return null != t && (0, p.Z)(t) && null != (0, l.Z)(t);
    });
}
function d(e) {
    return (0, u.P0)(e);
}
function g(e) {
    return (0, u.gT)(e);
}
function b(e) {
    let { messageReference: t } = e,
        n = (0, i.e7)([o.Z], () => (null != t ? o.Z.getMessage(t.channel_id, t.message_id) : null));
    (0, s.useEffect)(() => {
        null == n &&
            null != t &&
            r.Z.fetchMessages({
                channelId: t.channel_id,
                jump: { messageId: t.message_id },
                limit: 10,
            });
    }, [n, t]);
}
function h(e) {
    var t, n;
    let s =
        null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport)
            ? void 0
            : t.reported_user_id;
    null != s && (0, c.PR)(s);
}
