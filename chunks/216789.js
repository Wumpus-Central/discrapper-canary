n.d(t, {
    GO: () => l,
    IR: () => d,
    Uo: () => c,
    Us: () => u,
}),
    n(997841),
    n(388685);
var r = n(95015),
    i = n(710845),
    a = n(467798),
    o = n(215644),
    s = n(981631);
let l = new i.Z("Scheduled Messages");
function c(e) {
    let { content: t, flags: n } = e,
        [i, o] = (0, a.Z)(t);
    return i ? [o, (0, r.pj)(null != n ? n : 0, s.iLy.SUPPRESS_NOTIFICATIONS)] : [t, null != n ? n : 0];
}
function u(e) {
    let { location: t } = e;
    return o.Y.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function d(e) {
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
