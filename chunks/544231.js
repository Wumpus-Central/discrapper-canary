n.d(t, { Ju: () => E, WJ: () => d, XR: () => _, bg: () => c, v2: () => o, xi: () => l });
var i = n(636537),
    a = n(228366),
    r = n(349435),
    s = n(652215);
function l(e, t) {
    return (
        a.h.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId: e, warningIds: t }),
        i.Bo.post({
            url: s.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    );
}
function o(e, t, n) {
    a.h.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId: e, warningId: t, feedbackType: n });
}
function d(e) {
    a.h.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId: e });
}
function c(e) {
    a.h.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId: e });
}
function _(e) {
    return i.Bo.post({ url: s.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e), rejectWithError: !1 });
}
function E(e) {
    return i.Bo.post({
        url: s.Rsh.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: r._j.STRANGER_DANGER },
        rejectWithError: !1,
    });
}
