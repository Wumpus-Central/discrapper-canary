n.d(t, {
    C: () => s,
    x: () => r
}),
    n(388685);
var l = n(570140),
    i = n(93127);
function r(e) {
    let { omitUserIds: t, guild: n, channel: r, applicationId: s, inviteTargetType: a } = e;
    return (0, i.W)().then(() => {
        l.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: r,
            applicationId: s,
            inviteTargetType: a
        });
    });
}
function s(e) {
    l.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
n(751771);
