"use strict";
n.d(t, { Ad: () => p, Yd: () => g, np: () => m, qH: () => h, xs: () => E });
var i = n(636537),
    r = n(228366),
    s = n(427358),
    a = n(495544),
    o = n(232835),
    l = n(174459),
    u = n(38405),
    c = n(19745),
    d = n(202541),
    _ = n(652215);
function h(e) {
    let t = a.default.getId();
    return i.Bo.get({ url: _.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
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
function f(e, t, n) {
    l.default.track(_.HAw.GIFT_INTENT_DISMISSED, {
        gift_intent_type: e,
        dismiss_type: n,
        affinity: s.A.getUserAffinity(t)?.dmProbability,
    }),
        (0, c.l)("dismissGiftIntent") &&
            e !== d.np.UNSPECIFIED &&
            i.Bo.post({
                url: _.Rsh.GIFT_INTENTS_DISMISS,
                body: { intent_type: e, target_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).catch((e) => {
                u.A.captureException(e, { tags: { feature: "gift_intent" } });
            });
}
function p() {
    r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e }), f(t, e, "shown");
}
function m(e, t) {
    let n = o.A.getMessage(e, t)?.giftingPrompt;
    null != n && f(n.giftIntentType, n.recipientUserId, "explicit");
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e }), f(t, e, "gift_sent");
}
