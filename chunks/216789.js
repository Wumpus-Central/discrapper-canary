n.d(t, {
    GO: () => a,
    IR: () => o,
    Us: () => s
}),
    n(789020);
var i = n(259443),
    r = n(215644);
let a = new i.Yd('Scheduled Messages');
function s(e) {
    let { location: t } = e;
    return r.Y.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function o(e) {
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
