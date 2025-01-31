n.d(t, { Z: () => c });
var i = n(192379),
    r = n(442837),
    a = n(91896),
    s = n(298213),
    o = n(749302),
    l = n(981631),
    u = n(388032);
function c(e) {
    let { user: t } = e,
        n = (0, r.Wu)([a.Z], () => a.Z.getGameRelationshipsForUserOfType(t.id, l.OGo.PENDING_INCOMING)),
        c = i.useCallback(
            (e) => {
                s.Z.acceptFriendRequest({
                    userId: t.id,
                    applicationId: e.id,
                    location: 'Context Menu'
                });
            },
            [t.id]
        );
    return (0, o.Z)({
        user: t,
        gameRelationships: n,
        menuItemId: 'add-game-friend',
        label: u.intl.string(u.t.X76oLC),
        onClick: c
    });
}
