n.d(t, {
    C: function () {
        return l;
    },
    x: function () {
        return a;
    }
}),
    n(47120);
var i = n(570140),
    r = n(93127);
function a(e) {
    let { omitUserIds: t, guild: n, channel: a, applicationId: l, inviteTargetType: s } = e;
    return (0, r.W)().then(() => {
        i.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: n,
            channel: a,
            applicationId: l,
            inviteTargetType: s
        });
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
