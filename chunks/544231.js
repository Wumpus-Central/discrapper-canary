n.d(t, { Ju: () => c, WJ: () => o, XR: () => d, bg: () => E, v2: () => l, xi: () => _ });
var i = n(636537),
    r = n(228366),
    a = n(349435),
    s = n(652215);
function _(e, t) {
    return (
        r.h.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId: e, warningIds: t }),
        i.Bo.post({
            url: s.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    );
}
function l(e, t, n) {
    r.h.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId: e, warningId: t, feedbackType: n });
}
function o(e) {
    r.h.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId: e });
}
function E(e) {
    r.h.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId: e });
}
function d(e) {
    return i.Bo.post({ url: s.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e), rejectWithError: !1 });
}
function c(e) {
    return i.Bo.post({
        url: s.Rsh.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: a._j.STRANGER_DANGER },
        rejectWithError: !1,
    });
}
