n.d(t, { Jb: () => r, b4: () => a, oR: () => s, qf: () => l });
var i = n(73153);
function l(e, t, n) {
    return new Promise((l) => {
        setTimeout(() => {
            i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: e, isPrivate: t, context: n, resolve: l });
        }, 0);
    });
}
function s(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
}
function a(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
}
function r(e) {
    i.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
}
