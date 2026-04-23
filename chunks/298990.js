n.d(t, { Jb: () => r, b4: () => a, oR: () => s, qf: () => i });
var l = n(228366);
function i(e, t, n) {
    return new Promise((i) => {
        setTimeout(() => {
            l.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: e, isPrivate: t, context: n, resolve: i });
        }, 0);
    });
}
function s(e) {
    l.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: e });
}
function a(e) {
    l.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: e });
}
function r(e) {
    l.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: e });
}
