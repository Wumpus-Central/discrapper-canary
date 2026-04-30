"use strict";
n.d(t, { Ad: () => r, BT: () => o, CK: () => l, Yd: () => a, xs: () => s });
var i = n(228366);
function r() {
    i.h.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function s(e) {
    i.h.dispatch({ type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId: e });
}
function a(e) {
    i.h.dispatch({ type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: e });
}
function o() {
    i.h.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
function l(e) {
    i.h.dispatch({ type: "PROFILE_POPOUT_GIFT_INTENTS_DISMISS", recipientUserId: e });
}
