"use strict";
n.d(t, { Ju: () => _, WJ: () => u, XR: () => d, bg: () => c, v2: () => l, xi: () => o });
var i = n(636537),
    r = n(228366),
    s = n(349435),
    a = n(652215);
function o(e, t) {
    return (
        r.h.dispatch({ type: "DISMISS_CHANNEL_SAFETY_WARNINGS", channelId: e, warningIds: t }),
        i.Bo.post({
            url: a.Rsh.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    );
}
function l(e, t, n) {
    r.h.dispatch({ type: "CHANNEL_SAFETY_WARNING_FEEDBACK", channelId: e, warningId: t, feedbackType: n });
}
function u(e) {
    r.h.dispatch({ type: "CLEAR_CHANNEL_SAFETY_WARNINGS", channelId: e });
}
function c(e) {
    r.h.dispatch({ type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP", channelId: e });
}
function d(e) {
    return i.Bo.post({ url: a.Rsh.SAFETY_WARNING_FALSE_POSITIVE(e), rejectWithError: !1 });
}
function _(e) {
    return i.Bo.post({
        url: a.Rsh.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: s._j.STRANGER_DANGER },
        rejectWithError: !1,
    });
}
