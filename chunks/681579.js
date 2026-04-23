n.d(t, { B: () => s, t: () => a });
var l = n(73153),
    i = n(219271);
function a(e) {
    let { omitUserIds: t, guild: n, channel: a, applicationId: s, inviteTargetType: r } = e;
    return (0, i.u)().then(() => {
        l.h.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: t ?? new Set(),
            guild: n,
            channel: a,
            applicationId: s,
            inviteTargetType: r,
        });
    });
}
function s(e) {
    l.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e });
}
n(535820);
