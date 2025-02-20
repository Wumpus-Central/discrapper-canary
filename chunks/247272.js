i.d(t, {
    C: () => o,
    x: () => r
}),
    i(47120);
var n = i(570140),
    a = i(93127);
function r(e) {
    let { omitUserIds: t, guild: i, channel: r, applicationId: o, inviteTargetType: l } = e;
    return (0, a.W)().then(() => {
        n.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: i,
            channel: r,
            applicationId: o,
            inviteTargetType: l
        });
    });
}
function o(e) {
    n.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
i(751771);
