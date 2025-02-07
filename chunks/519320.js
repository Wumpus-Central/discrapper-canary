a.d(i, {
    EW: () => s,
    Np: () => l,
    tb: () => o
});
var n = a(626135),
    t = a(981631);
function o(e, i, a, o) {
    n.default.track(t.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: i,
        start_duration_secs: Math.min(null != i ? i : a, a),
        sender_user_id: o
    });
}
function s(e, i, a, o, s) {
    n.default.track(t.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: i,
        end_duration_secs: Math.min(null != i ? i : a, a),
        sender_user_id: o,
        duration_listening_secs: s
    });
}
function l(e, i) {
    n.default.track(t.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: i
    });
}
