n.d(t, {
    EW: () => l,
    Np: () => o,
    tb: () => a
});
var r = n(626135),
    i = n(981631);
function a(e, t, n, a) {
    r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: a
    });
}
function l(e, t, n, a, l) {
    r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: a,
        duration_listening_secs: l
    });
}
function o(e, t) {
    r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    });
}
