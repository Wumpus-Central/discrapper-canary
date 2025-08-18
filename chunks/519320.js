n.d(t, {
    EW: () => o,
    Np: () => a,
    tb: () => l,
});
var r = n(626135),
    i = n(981631);
function l(e, t, n, l) {
    r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: l,
    });
}
function o(e, t, n, l, o) {
    r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: l,
        duration_listening_secs: o,
    });
}
function a(e, t) {
    r.default.track(i.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t,
    });
}
