n.d(e, { Jb: () => r, b4: () => o, oR: () => a, qf: () => l });
var i = n(73153);
function l(t, e, n) {
    return new Promise((l) => {
        setTimeout(() => {
            i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: t, isPrivate: e, context: n, resolve: l });
        }, 0);
    });
}
function a(t) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: t });
}
function o(t) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: t });
}
function r(t) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: t });
}
