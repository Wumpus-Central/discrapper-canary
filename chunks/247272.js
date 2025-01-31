i.d(t, {
    C: () => r,
    x: () => a
}),
    i(47120);
var n = i(570140),
    l = i(93127);
function a(e) {
    let { omitUserIds: t, guild: i, channel: a, applicationId: r, inviteTargetType: s } = e;
    return (0, l.W)().then(() => {
        n.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: i,
            channel: a,
            applicationId: r,
            inviteTargetType: s
        });
    });
}
function r(e) {
    n.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
i(751771);
