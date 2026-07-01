"use strict";
n.d(t, { Ad: () => E, BT: () => I, Yd: () => A, np: () => g, qH: () => f, xs: () => m });
var i = n(636537),
    r = n(228366),
    s = n(427358),
    a = n(495544),
    o = n(232835),
    l = n(174459),
    u = n(38405),
    c = n(19745),
    d = n(51501),
    _ = n(788868),
    h = n(652215);
function f(e) {
    let t = a.default.getId();
    return i.Bo.get({ url: h.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
        (n) => {
            a.default.getId() !== t
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
            u.A.captureException(e, { tags: { feature: "gift_intent" } }),
                r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
        },
    );
}
function p(e, t, n) {
    if (
        (l.default.track(h.HAw.GIFT_INTENT_DISMISSED, {
            gift_intent_type: e,
            dismiss_type: n,
            affinity: s.A.getUserAffinity(t)?.dmProbability,
        }),
        !(0, c.l)("dismissGiftIntent"))
    )
        return;
    let r = (0, d.Mi)(e);
    null != r &&
        i.Bo.post({
            url: h.Rsh.GIFT_INTENTS_DISMISS,
            body: { intent_type: r, target_id: t },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).catch((e) => {
            u.A.captureException(e, { tags: { feature: "gift_intent" } });
        });
}
function E() {
    r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e }), p(t, e, "shown");
}
function g(e, t) {
    let n = o.A.getMessage(e, t)?.giftingPrompt;
    null != n && p(n.giftIntentType, n.recipientUserId, "explicit");
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e }), p(t, e, "gift_sent");
}
function I() {
    r.h.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
