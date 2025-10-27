n.d(t, {
    C: () => r,
    x: () => s,
}),
    n(388685);
var i = n(570140),
    l = n(93127);
function s(e) {
    let { omitUserIds: t, guild: n, channel: s, applicationId: r, inviteTargetType: a } = e;
    return (0, l._)().then(() => {
        i.Z.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: s,
            applicationId: r,
            inviteTargetType: a,
        });
    });
}
function r(e) {
    i.Z.dispatch({
        type: "INVITE_SUGGESTIONS_SEARCH",
        query: e,
    });
}
n(751771);
