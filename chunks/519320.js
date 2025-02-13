i.d(t, {
    EW: () => r,
    Np: () => s,
    tb: () => o
});
var n = i(626135),
    a = i(981631);
function o(e, t, i, o) {
    n.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : i, i),
        sender_user_id: o
    });
}
function r(e, t, i, o, r) {
    n.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : i, i),
        sender_user_id: o,
        duration_listening_secs: r
    });
}
function s(e, t) {
    n.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    });
}
