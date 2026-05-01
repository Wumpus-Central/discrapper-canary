p.d(i, { Jb: () => n, b4: () => h, oR: () => c, qf: () => _ });
var I = p(228366);
function _(t, i, p) {
    return new Promise((_) => {
        setTimeout(() => {
            I.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_OPEN", activity: t, isPrivate: i, context: p, resolve: _ });
        }, 0);
    });
}
function c(t) {
    I.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: t });
}
function h(t) {
    I.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: t });
}
function n(t) {
    I.h.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: t });
}
