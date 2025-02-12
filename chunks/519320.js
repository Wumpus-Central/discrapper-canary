n.d(t, {
    EW: () => r,
    Np: () => s,
    tb: () => a
});
var i = n(626135),
    l = n(981631);
function a(e, t, n, a) {
    i.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: a
    });
}
function r(e, t, n, a, r) {
    i.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: a,
        duration_listening_secs: r
    });
}
function s(e, t) {
    i.default.track(l.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    });
}
