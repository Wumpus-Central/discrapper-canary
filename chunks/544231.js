"use strict";
n.d(t, { Ju: () => _, WJ: () => u, XR: () => d, bg: () => c, v2: () => l, xi: () => o });
var r = n(562465),
    i = n(73153),
    s = n(349435),
    a = n(652215);
function o(e, t) {
    return (
        i.h.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId: e, warningIds: t }),
        r.Bo.post({
            url: a.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    );
}
function l(e, t, n) {
    i.h.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId: e, warningId: t, feedbackType: n });
}
function u(e) {
    i.h.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId: e });
}
function c(e) {
    i.h.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId: e });
}
function d(e) {
    return r.Bo.post({ url: a.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e), rejectWithError: !1 });
}
function _(e) {
    return r.Bo.post({
        url: a.Rsh.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: s._j.STRANGER_DANGER },
        rejectWithError: !1,
    });
}
