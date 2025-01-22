n.d(t, {
    EW: function () {
        return s;
    },
    Np: function () {
        return c;
    },
    tb: function () {
        return o;
    }
});
var i,
    r,
    l = n(626135),
    a = n(981631);
function o(e, t, n, i) {
    l.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: i
    });
}
function s(e, t, n, i, r) {
    l.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: i,
        duration_listening_secs: r
    });
}
function c(e, t) {
    l.default.track(a.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    });
}
((i = r || (r = {})).SENT = 'sent'), (i.CANCELLED_DURATION = 'cancelled_duration'), (i.CANCELLED_USER_REQUESTED = 'cancelled_user_requested'), (i.CANCELLED_GESTURE_CONFLICT = 'cancelled_gesture_conflict'), (i.CANCELLED_ON_BACKGROUND = 'cancelled_on_background');
