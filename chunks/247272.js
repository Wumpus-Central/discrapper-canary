n.d(t, {
    C: () => r,
    x: () => a,
}),
    n(388685);
var l = n(570140),
    i = n(93127);
function a(e) {
    let { omitUserIds: t, guild: n, channel: a, applicationId: r, inviteTargetType: s } = e;
    return (0, i._)().then(() => {
        l.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: a,
            applicationId: r,
            inviteTargetType: s,
        });
    });
}
function r(e) {
    l.Z.dispatch({
        type: "INVITE_SUGGESTIONS_SEARCH",
        query: e,
    });
}
n(751771);
