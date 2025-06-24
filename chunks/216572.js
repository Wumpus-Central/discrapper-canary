n.d(t, {
    Cv: () => h,
    HL: () => c,
    KK: () => g,
    Q_: () => u,
    nw: () => f
});
var i = n(73800),
    r = n(442837),
    l = n(904245),
    a = n(232567),
    o = n(430824),
    s = n(375954),
    d = n(982168);
function u(e) {
    return (0, r.e7)([o.Z], () => {
        if (null == e) return !1;
        let t = o.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function c(e) {
    return (0, d.P0)(e);
}
function f(e) {
    return (0, d.gT)(e);
}
function h(e) {
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
function g(e) {
    var t, n;
    let i = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? void 0 : t.reported_user_id;
    null != i && (0, a.PR)(i);
}
