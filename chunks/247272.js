(n.d(t, {
    C: () => l,
    x: () => r
}),
    n(388685));
var a = n(570140),
    i = n(93127);
function r(e) {
    let { omitUserIds: t, guild: n, channel: r, applicationId: l, inviteTargetType: s } = e;
    return (0, i._)().then(() => {
        a.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: r,
            applicationId: l,
            inviteTargetType: s
        });
    });
}
function l(e) {
    a.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
n(751771);
