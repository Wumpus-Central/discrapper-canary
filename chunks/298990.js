n.d(t, {
    Jb: () => s,
    b4: () => a,
    oR: () => i,
    qf: () => l,
});
var r = n(73153);
function l(e, t, n) {
    return new Promise((l) => {
        setTimeout(() => {
            r.h.dispatch({
                type: "ACTIVITY_INVITE_MODAL_OPEN",
                activity: e,
                isPrivate: t,
                context: n,
                resolve: l,
            });
        }, 0);
    });
}
function i(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_QUERY",
        query: e,
    });
}
function a(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        channelId: e,
    });
}
function s(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        userId: e,
    });
}
