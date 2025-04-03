n.d(t, {
    EW: () => r,
    Np: () => s,
    tb: () => o
});
var i = n(626135),
    a = n(981631);
function o(e, t, n, o) {
    i.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: o
    });
}
function r(e, t, n, o, r) {
    i.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: o,
        duration_listening_secs: r
    });
}
function s(e, t) {
    i.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    });
}
