"use strict";
n.d(t, { Lg: () => _, Sc: () => d, UF: () => c, dx: () => u }), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(626584),
    a = n(677413),
    o = n(287809),
    l = n(652215);
let u = new s.A("Scheduled Messages");
function c(e) {
    let { content: t, flags: n } = e,
        [i, s] = (0, a.A)(t);
    return i ? [s, (0, r.UI)(n ?? 0, l.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function d() {
    return (0, i.bG)([o.default], () => o.default.getCurrentUser()?.isStaff() ?? !1);
}
function _(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: f(e.scheduled_message),
        state: e.state,
    };
}
function f(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference,
    };
}
