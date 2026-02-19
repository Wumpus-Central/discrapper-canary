"use strict";
n.d(t, { Jb: () => o, b4: () => a, oR: () => s, qf: () => i });
var r = n(73153);
function i(e, t, n) {
    return new Promise((i) => {
        setTimeout(() => {
            r.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: e, isPrivate: t, context: n, resolve: i });
        }, 0);
    });
}
function s(e) {
    r.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
}
function a(e) {
    r.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
}
function o(e) {
    r.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
}
