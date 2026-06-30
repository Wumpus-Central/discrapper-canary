"use strict";
n.d(t, { Ad: () => f, BT: () => g, Yd: () => m, np: () => E, qH: () => _, xs: () => p });
var i = n(636537),
    r = n(228366),
    s = n(495544),
    a = n(232835),
    o = n(38405),
    l = n(19745),
    u = n(51501),
    c = n(788868),
    d = n(652215);
function _(e) {
    let t = s.default.getId();
    return i.Bo.get({ url: d.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
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
        (e) => {
            o.A.captureException(e, { tags: { feature: "gift_intent" } }),
                r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
        },
    );
}
function h(e, t) {
    if (!(0, l.l)("dismissGiftIntent")) return;
    let n = (0, u.Mi)(e);
    null != n &&
        i.Bo.post({
            url: d.Rsh.GIFT_INTENTS_DISMISS,
            body: { intent_type: n, target_id: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).catch((e) => {
            o.A.captureException(e, { tags: { feature: "gift_intent" } });
        });
}
function f() {
    r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e }), h(t, e);
}
function E(e, t) {
    let n = a.A.getMessage(e, t)?.giftingPrompt;
    null != n && h(n.giftIntentType, n.recipientUserId);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e }), h(t, e);
}
function g() {
    r.h.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
