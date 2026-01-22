n.d(t, {
    _O: () => o,
    dP: () => s,
    wQ: () => a,
});
var r = n(954571),
    i = n(652215);

function a(e, t, n, a) {
    r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: a,
    });
}

function s(e, t, n, a, s) {
    r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: a,
        duration_listening_secs: s,
    });
}

function o(e, t) {
    r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t,
    });
}
