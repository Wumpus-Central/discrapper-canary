n.d(t, {
    GO: () => l,
    IR: () => d,
    Uo: () => c,
    Us: () => u
}),
    n(789020),
    n(47120);
var r = n(259443),
    i = n(467798),
    o = n(630388),
    a = n(215644),
    s = n(981631);
let l = new r.Yd('Scheduled Messages');
function c(e) {
    let { content: t, flags: n } = e,
        [r, a] = (0, i.Z)(t);
    return r ? [a, (0, o.pj)(null != n ? n : 0, s.iLy.SUPPRESS_NOTIFICATIONS)] : [t, null != n ? n : 0];
}
function u(e) {
    let { location: t } = e;
    return a.Y.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function d(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: f(e.scheduled_message),
        state: e.state
    };
}
function f(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference
    };
}
