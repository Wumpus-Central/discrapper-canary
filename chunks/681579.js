n.d(t, { B: () => a, t: () => s });
var i = n(73153),
    l = n(219271);
function s(e) {
    let { omitUserIds: t, guild: n, channel: s, applicationId: a, inviteTargetType: r } = e;
    return (0, l.u)().then(() => {
        i.h.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: t ?? new Set(),
            guild: n,
            channel: s,
            applicationId: a,
            inviteTargetType: r,
        });
    });
}
function a(e) {
    i.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
}
n(535820);
