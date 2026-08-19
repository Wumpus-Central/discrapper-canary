"use strict";
n.d(t, { Ad: () => A, Yd: () => f, np: () => I, qH: () => _, xs: () => h });
var i = n(636537),
    r = n(228366),
    a = n(427358),
    s = n(280450),
    l = n(232835),
    o = n(174459),
    d = n(38405),
    c = n(202541),
    u = n(652215);
function _(e) {
    let t = s.default.getId();
    return i.Bo.get({ url: u.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
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
            d.A.captureException(e, { tags: { feature: "gift_intent" } }),
                r.h.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
        },
    );
}
function E(e, t, n) {
    o.default.track(u.HAw.GIFT_INTENT_DISMISSED, {
        gift_intent_type: e,
        dismiss_type: n,
        affinity: a.A.getUserAffinity(t)?.dmProbability,
    }),
        e !== c.np.UNSPECIFIED &&
            i.Bo.post({
                url: u.Rsh.GIFT_INTENTS_DISMISS,
                body: { intent_type: e, target_id: t },
                oldFormErrors: !0,
                rejectWithError: !0,
            }).catch((e) => {
                d.A.captureException(e, { tags: { feature: "gift_intent" } });
            });
}
function A() {
    r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e }), E(t, e, "shown");
}
function I(e, t) {
    let n = l.A.getMessage(e, t)?.giftingPrompt;
    null != n && E(n.giftIntentType, n.recipientUserId, "explicit");
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e }), E(t, e, "gift_sent");
}
