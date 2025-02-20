n.d(t, {
    GO: () => o,
    IR: () => s,
    Us: () => a
}),
    n(789020);
var r = n(259443),
    i = n(215644);
let o = new r.Yd('Scheduled Messages');
function a(e) {
    let { location: t } = e;
    return i.Y.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: l(e.scheduled_message),
        state: e.state
    };
}
function l(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference
    };
}
