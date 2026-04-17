"use strict";
n.d(t, { Lg: () => f, Sc: () => _, UF: () => d, dx: () => c }), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(626584),
    a = n(677413),
    o = n(287809),
    l = n(336089),
    u = n(652215);
let c = new s.A("Scheduled Messages");
function d(e) {
    let { content: t, flags: n } = e,
        [i, s] = (0, a.A)(t);
    return i ? [s, (0, r.UI)(n ?? 0, u.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function _() {
    let e = (0, i.bG)([o.default], () => o.default.getCurrentUser()?.isStaff() ?? !1),
        t = l.A.useConfig({ location: "useCanUseScheduledMessages" });
    return e || t;
}
function f(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: p(e.scheduled_message),
        state: e.state,
    };
}
function p(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference,
    };
}
