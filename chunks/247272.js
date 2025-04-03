n.d(t, {
    C: () => r,
    x: () => s
}),
    n(47120);
var l = n(570140),
    i = n(93127);
function s(e) {
    let { omitUserIds: t, guild: n, channel: s, applicationId: r, inviteTargetType: a } = e;
    return (0, i.W)().then(() => {
        l.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: s,
            applicationId: r,
            inviteTargetType: a
        });
    });
}
function r(e) {
    l.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
n(751771);
