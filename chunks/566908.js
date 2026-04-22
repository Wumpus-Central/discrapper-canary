n.d(t, { Lg: () => p, Sc: () => _, UF: () => d, dx: () => c }), n(938796);
var r = n(665260),
    l = n(311907),
    i = n(626584),
    a = n(677413),
    s = n(287809),
    o = n(336089),
    u = n(652215);
let c = new i.A("Scheduled Messages");
function d(e) {
    let { content: t, flags: n } = e,
        [l, i] = (0, a.A)(t);
    return l ? [i, (0, r.UI)(n ?? 0, u.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function _() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()?.isStaff() ?? !1),
        t = o.A.useConfig({ location: "useCanUseScheduledMessages" });
    return e || t;
}
function p(e) {
    var t;
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: {
            channelId: (t = e.scheduled_message).channel_id,
            content: t.content,
            type: t.type,
            flags: t.flags,
            messageReference: t.message_reference,
        },
        state: e.state,
    };
}
