i.d(e, { Jb: () => r, b4: () => o, oR: () => l, qf: () => a });
var n = i(73153);
function a(t, e, i) {
    return new Promise((a) => {
        setTimeout(() => {
            n.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: t, isPrivate: e, context: i, resolve: a });
        }, 0);
    });
}
function l(t) {
    n.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: t });
}
function o(t) {
    n.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: t });
}
function r(t) {
    n.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: t });
}
