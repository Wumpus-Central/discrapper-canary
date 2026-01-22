n.d(t, {
    Ju: () => f,
    WJ: () => c,
    XR: () => d,
    bg: () => u,
    v2: () => l,
    xi: () => o,
});
var r = n(562465),
    i = n(73153),
    a = n(349435),
    s = n(652215);
function o(e, t) {
    return (
        i.h.dispatch({
            type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
            channelId: e,
            warningIds: t,
        }),
        r.Bo.post({
            url: s.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    );
}
function l(e, t, n) {
    i.h.dispatch({
        type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
        channelId: e,
        warningId: t,
        feedbackType: n,
    });
}
function c(e) {
    i.h.dispatch({
        type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
        channelId: e,
    });
}
function u(e) {
    i.h.dispatch({
        type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
        channelId: e,
    });
}
function d(e) {
    return r.Bo.post({
        url: s.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e),
        rejectWithError: !1,
    });
}
function f(e) {
    return r.Bo.post({
        url: s.Rsh.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: a._j.STRANGER_DANGER },
        rejectWithError: !1,
    });
}
