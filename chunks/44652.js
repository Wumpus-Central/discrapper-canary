t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(192379),
    i = t(442837),
    r = t(91896),
    a = t(298213),
    u = t(749302),
    o = t(981631),
    d = t(388032);
function s(e) {
    let { user: n } = e,
        t = (0, i.Wu)([r.Z], () => r.Z.getGameRelationshipsForUser(n.id, o.OGo.PENDING_INCOMING)),
        s = l.useCallback(
            (e) => {
                a.Z.acceptFriendRequest({
                    userId: n.id,
                    applicationId: e.id,
                    location: 'Context Menu'
                });
            },
            [n.id]
        );
    return (0, u.Z)({
        user: n,
        gameRelationships: t,
        menuItemId: 'add-game-friend',
        label: d.intl.string(d.t.X76oLC),
        onClick: s
    });
}
