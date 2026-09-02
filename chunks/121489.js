n.d(t, { _O: () => _, dP: () => a, wQ: () => i });
var r = n(174459),
    s = n(652215);
function i(e, t, n, i) {
    r.default.track(s.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? n, n),
        sender_user_id: i,
    });
}
function a(e, t, n, i, a) {
    r.default.track(s.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? n, n),
        sender_user_id: i,
        duration_listening_secs: a,
    });
}
function _(e, t) {
    r.default.track(s.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: e, error_message: t });
}
