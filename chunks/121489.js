e.d(_, { _O: () => n, dP: () => i, wQ: () => d });
var t = e(174459),
    a = e(652215);
function d(s, _, e, d) {
    t.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: s,
        total_duration_secs: _,
        start_duration_secs: Math.min(_ ?? e, e),
        sender_user_id: d,
    });
}
function i(s, _, e, d, i) {
    t.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: s,
        total_duration_secs: _,
        end_duration_secs: Math.min(_ ?? e, e),
        sender_user_id: d,
        duration_listening_secs: i,
    });
}
function n(s, _) {
    t.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, { message_id: s, error_message: _ });
}
