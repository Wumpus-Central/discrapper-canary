n.d(t, {
    GO: function () {
        return l;
    },
    IR: function () {
        return o;
    },
    Us: function () {
        return a;
    }
}),
    n(789020);
var i = n(259443),
    r = n(215644);
let l = new i.Yd('Scheduled Messages');
function a(e) {
    let { location: t } = e;
    return r.Y.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function o(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: (function (e) {
            return {
                channelId: e.channel_id,
                content: e.content,
                type: e.type,
                flags: e.flags,
                messageReference: e.message_reference
            };
        })(e.scheduled_message),
        state: e.state
    };
}
