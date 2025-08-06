n.d(t, {
    Cv: () => h,
    HL: () => _,
    KK: () => m,
    Q_: () => f,
    nw: () => p
});
var r = n(73800),
    i = n(442837),
    o = n(904245),
    a = n(232567),
    s = n(430824),
    l = n(375954),
    c = n(982168),
    u = n(893908),
    d = n(953252);
function f(e) {
    return (0, i.e7)([s.Z], () => {
        if (null == e) return !1;
        let t = s.Z.getGuild(e);
        return null != t && (0, d.Z)(t) && null != (0, u.Z)(t);
    });
}
function _(e) {
    return (0, c.P0)(e);
}
function p(e) {
    return (0, c.gT)(e);
}
function h(e) {
    let { messageReference: t } = e,
        n = (0, i.e7)([l.Z], () => (null != t ? l.Z.getMessage(t.channel_id, t.message_id) : null));
    (0, r.useEffect)(() => {
        null == n &&
            null != t &&
            o.Z.fetchMessages({
                channelId: t.channel_id,
                jump: { messageId: t.message_id },
                limit: 10
            });
    }, [n, t]);
}
function m(e) {
    var t, n;
    let r = null == e || null == (n = e.messageSnapshots[0]) || null == (t = n.moderatorReport) ? void 0 : t.reported_user_id;
    null != r && (0, a.PR)(r);
}
