"use strict";
n.d(t, { Lg: () => d, Sc: () => c, UF: () => u, dx: () => l }), n(938796);
var r = n(665260),
    i = n(626584),
    a = n(677413),
    s = n(403531),
    o = n(652215);
let l = new i.A("Scheduled Messages");
function u(e) {
    let { content: t, flags: n } = e,
        [i, s] = (0, a.A)(t);
    return i ? [s, (0, r.UI)(n ?? 0, o.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function c(e) {
    let { location: t } = e;
    return s.t.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function d(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: _(e.scheduled_message),
        state: e.state,
    };
}
function _(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference,
    };
}
