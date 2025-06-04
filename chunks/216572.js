t.d(e, {
    Cv: () => h,
    HL: () => c,
    KK: () => v,
    Q_: () => u,
    nw: () => f
});
var i = t(73800),
    r = t(442837),
    a = t(904245),
    l = t(232567),
    o = t(430824),
    s = t(375954),
    d = t(982168);
function u(n) {
    return (0, r.e7)([o.Z], () => {
        if (null == n) return !1;
        let e = o.Z.getGuild(n);
        return null != e && e.getModeratorReportingEnabled() && null != e.getModeratorReportChannelId();
    });
}
function c(n) {
    return (0, d.P0)(n);
}
function f(n) {
    return (0, d.gT)(n);
}
function h(n) {
    let { messageReference: e } = n,
        t = (0, r.e7)([s.Z], () => (null != e ? s.Z.getMessage(e.channel_id, e.message_id) : null));
    (0, i.useEffect)(() => {
        null == t &&
            null != e &&
            a.Z.fetchMessages({
                channelId: e.channel_id,
                jump: { messageId: e.message_id },
                limit: 10
            });
    }, [t, e]);
}
function v(n) {
    var e, t;
    let i = null == n || null == (t = n.messageSnapshots[0]) || null == (e = t.moderatorReport) ? void 0 : e.reported_user_id;
    null != i && (0, l.PR)(i);
}
