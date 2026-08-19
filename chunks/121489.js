n.d(e, { _O: () => l, dP: () => a, wQ: () => s });
var i = n(174459),
    r = n(652215);
function s(t, e, n, s) {
    i.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: t,
        total_duration_secs: e,
        start_duration_secs: Math.min(e ?? n, n),
        sender_user_id: s,
    });
}
function a(t, e, n, s, a) {
    i.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: t,
        total_duration_secs: e,
        end_duration_secs: Math.min(e ?? n, n),
        sender_user_id: s,
        duration_listening_secs: a,
    });
}
function l(t, e) {
    i.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: t, error_message: e });
}
