n.d(e, {
    Cv: () => S,
    HL: () => _,
    KK: () => E,
    Q_: () => g,
    nw: () => f
});
var i = n(73800),
    l = n(442837),
    a = n(904245),
    s = n(232567),
    r = n(430824),
    o = n(375954),
    d = n(982168),
    c = n(893908),
    u = n(953252);
function g(t) {
    return (0, l.e7)([r.Z], () => {
        if (null == t) return !1;
        let e = r.Z.getGuild(t);
        return null != e && (0, u.Z)(e) && null != (0, c.Z)(e);
    });
}
function _(t) {
    return (0, d.P0)(t);
}
function f(t) {
    return (0, d.gT)(t);
}
function S(t) {
    let { messageReference: e } = t,
        n = (0, l.e7)([o.Z], () => (null != e ? o.Z.getMessage(e.channel_id, e.message_id) : null));
    (0, i.useEffect)(() => {
        null == n &&
            null != e &&
            a.Z.fetchMessages({
                channelId: e.channel_id,
                jump: { messageId: e.message_id },
                limit: 10
            });
    }, [n, e]);
}
function E(t) {
    var e, n;
    let i = null == t || null == (n = t.messageSnapshots[0]) || null == (e = n.moderatorReport) ? void 0 : e.reported_user_id;
    null != i && (0, s.PR)(i);
}
