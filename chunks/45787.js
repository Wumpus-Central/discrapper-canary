"use strict";
n.d(t, { Ad: () => l, BT: () => d, CK: () => _, Yd: () => c, qH: () => o, xs: () => u });
var i = n(636537),
    r = n(228366),
    s = n(495544),
    a = n(652215);
function o(e) {
    let t = s.default.getId();
    return i.Bo.get({ url: a.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
        (n) => {
            s.default.getId() !== t
                ? r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" })
                : r.h.dispatch({
                      type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS",
                      dismissals: (n.body.dismissals ?? []).map((e) => ({
                          targetId: e.target_id,
                          dismissedAtMs: Number(e.dismissed_at_ms),
                      })),
                      settingsTimestampMs: e,
                  });
        },
        () => {
            r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
        },
    );
}
function l() {
    r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function u(e) {
    r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e });
}
function c(e) {
    r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e });
}
function d() {
    r.h.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
function _(e) {
    r.h.dispatch({ type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS", recipientUserId: e });
}
