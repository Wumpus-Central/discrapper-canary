n.d(t, { _O: () => s, dP: () => r, wQ: () => a });
var i = n(954571),
    l = n(652215);
function a(e, t, n, a) {
    i.default.track(l.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? n, n),
        sender_user_id: a,
    });
}
function r(e, t, n, a, r) {
    i.default.track(l.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? n, n),
        sender_user_id: a,
        duration_listening_secs: r,
    });
}
function s(e, t) {
    i.default.track(l.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: e, error_message: t });
}
