n.d(t, {
    Cv: () => g,
    HL: () => d,
    KK: () => p,
    Q_: () => c,
    nw: () => f
});
var i = n(73800),
    l = n(442837),
    r = n(904245),
    a = n(232567),
    o = n(430824),
    u = n(375954),
    s = n(982168);
function c(e) {
    return (0, l.e7)([o.Z], () => {
        if (null == e) return !1;
        let t = o.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function d(e) {
    return (0, s.P0)(e);
}
function f(e) {
    return (0, s.gT)(e);
}
function g(e) {
    let { messageReference: t } = e,
        n = (0, l.e7)([u.Z], () => (null != t ? u.Z.getMessage(t.channel_id, t.message_id) : null));
    (0, i.useEffect)(() => {
        null == n &&
            null != t &&
            r.Z.fetchMessages({
                channelId: t.channel_id,
                jump: { messageId: t.message_id },
                limit: 10
            });
    }, [n, t]);
}
function p(e) {
    var t, n;
    let i = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? void 0 : t.reported_user_id;
    null != i && (0, a.PR)(i);
}
