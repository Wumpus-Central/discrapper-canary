n.d(t, {
    Cv: () => f,
    HL: () => s,
    Q_: () => u,
    nw: () => c
});
var i = n(73800),
    r = n(442837),
    a = n(904245),
    l = n(430824),
    o = n(375954),
    d = n(982168);
function u(e) {
    return (0, r.e7)([l.Z], () => {
        if (null == e) return !1;
        let t = l.Z.getGuild(e);
        return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId();
    });
}
function s(e) {
    return (0, d.P0)(e);
}
function c(e) {
    return (0, d.gT)(e);
}
function f(e, t) {
    let { messageReference: n } = e,
        l = (0, r.e7)([o.Z], () => (null != n ? o.Z.getMessage(n.channel_id, n.message_id) : null));
    (0, i.useEffect)(() => {
        t &&
            null == l &&
            null != n &&
            a.Z.fetchMessages({
                channelId: n.channel_id,
                jump: { messageId: n.message_id },
                limit: 10
            });
    }, [t, l, n]);
}
