(n.d(t, {
    GO: () => l,
    IR: () => d,
    Uo: () => c,
    Us: () => u
}),
    n(997841),
    n(388685));
var r = n(710845),
    i = n(467798),
    a = n(630388),
    o = n(215644),
    s = n(981631);
let l = new r.Z('Scheduled Messages');
function c(e) {
    let { content: t, flags: n } = e,
        [r, o] = (0, i.Z)(t);
    return r ? [o, (0, a.pj)(null != n ? n : 0, s.iLy.SUPPRESS_NOTIFICATIONS)] : [t, null != n ? n : 0];
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
        scheduledMessage: _(e.scheduled_message),
        state: e.state
    };
}
function _(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference
    };
}
