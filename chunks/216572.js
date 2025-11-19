n.d(t, {
    Cv: () => f,
    HL: () => h,
    KK: () => m,
    Q_: () => p,
    nw: () => g,
});
var i = n(473749),
    r = n(442837),
    l = n(904245),
    s = n(232567),
    a = n(430824),
    o = n(375954),
    c = n(982168),
    d = n(893908),
    u = n(953252);
function p(e) {
    return (0, r.e7)([a.Z], () => {
        if (null == e) return !1;
        let t = a.Z.getGuild(e);
        return null != t && (0, u.Z)(t) && null != (0, d.Z)(t);
    });
}
function h(e) {
    return (0, c.P0)(e);
}
function g(e) {
    return (0, c.gT)(e);
}
function f(e) {
    let { messageReference: t } = e,
        n = (0, r.e7)([o.Z], () => (null != t ? o.Z.getMessage(t.channel_id, t.message_id) : null));
    (0, i.useEffect)(() => {
        null == n &&
            null != t &&
            l.Z.fetchMessages({
                channelId: t.channel_id,
                jump: { messageId: t.message_id },
                limit: 10,
            });
    }, [n, t]);
}
function m(e) {
    var t, n;
    let i =
        null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport)
            ? void 0
            : t.reported_user_id;
    null != i && (0, s.PR)(i);
}
