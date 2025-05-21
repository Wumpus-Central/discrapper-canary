t.d(n, {
    Cv: () => h,
    HL: () => c,
    KK: () => v,
    Q_: () => s,
    nw: () => f
});
var i = t(73800),
    r = t(442837),
    a = t(904245),
    l = t(232567),
    o = t(430824),
    d = t(375954),
    u = t(982168);
function s(e) {
    return (0, r.e7)([o.Z], () => {
        if (null == e) return !1;
        let n = o.Z.getGuild(e);
        return null != n && n.getModeratorReportingEnabled() && null != n.getModeratorReportChannelId();
    });
}
function c(e) {
    return (0, u.P0)(e);
}
function f(e) {
    return (0, u.gT)(e);
}
function h(e, n) {
    let { messageReference: t } = e,
        l = (0, r.e7)([d.Z], () => (null != t ? d.Z.getMessage(t.channel_id, t.message_id) : null));
    (0, i.useEffect)(() => {
        n &&
            null == l &&
            null != t &&
            a.Z.fetchMessages({
                channelId: t.channel_id,
                jump: { messageId: t.message_id },
                limit: 10
            });
    }, [n, l, t]);
}
function v(e) {
    var n, t;
    let i = null == e || null == (t = e.messageSnapshots[0]) || null == (n = t.moderatorReport) ? void 0 : n.reported_user_id;
    null != i && (0, l.PR)(i);
}
