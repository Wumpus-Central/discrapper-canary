n.d(t, { Ad: () => a, BT: () => l, CK: () => o, Yd: () => s, xs: () => r });
var i = n(228366);
function a() {
    i.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function r(e) {
    i.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e });
}
function s(e) {
    i.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e });
}
function l() {
    i.h.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
function o(e) {
    i.h.dispatch({ type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS", recipientUserId: e });
}
