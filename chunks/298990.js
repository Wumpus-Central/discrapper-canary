"use strict";
n.d(t, { Jb: () => l, b4: () => s, oR: () => a, qf: () => r });
var i = n(228366);
function r(e, t, n) {
    return new Promise((r) => {
        setTimeout(() => {
            i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: e, isPrivate: t, context: n, resolve: r });
        }, 0);
    });
}
function a(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
}
function s(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
}
function l(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
}
