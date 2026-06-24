"use strict";
n.d(t, { Ad: () => h, BT: () => m, CK: () => g, Yd: () => E, np: () => p, qH: () => d, xs: () => f });
var i = n(636537),
    r = n(228366),
    s = n(495544),
    a = n(232835),
    o = n(19745),
    l = n(51501),
    u = n(788868),
    c = n(652215);
function d(e) {
    let t = s.default.getId();
    return i.Bo.get({ url: c.Rsh.GIFT_INTENT_DISMISSALS, oldFormErrors: !0, rejectWithError: !0 }).then(
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
function _(e, t) {
    if (!(0, o.l)("dismissGiftIntent")) return;
    let n = (0, l.Mi)(e);
    null != n &&
        i.Bo.post({
            url: c.Rsh.GIFT_INTENTS_DISMISS,
            body: { intent_type: n, target_id: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).catch(() => {});
}
function h() {
    r.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e }), _(t, e);
}
function p(e, t) {
    let n = a.A.getMessage(e, t)?.giftingPrompt;
    null != n && _(n.giftIntentType, n.recipientUserId);
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.np.FRIEND_ANNIVERSARY;
    r.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e }), _(t, e);
}
function m() {
    r.h.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
function g(e) {
    r.h.dispatch({ type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS", recipientUserId: e });
}
