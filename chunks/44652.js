n.d(t, { Z: () => l });
var r = n(192379),
    i = n(320582),
    o = n(298213),
    a = n(749302),
    s = n(388032);
function l(e) {
    let { user: t } = e,
        n = (0, i.vh)(t.id),
        l = r.useCallback(
            (e) => {
                o.Z.acceptFriendRequest({
                    userId: t.id,
                    applicationId: e.id,
                    location: 'Context Menu'
                });
            },
            [t.id]
        );
    return (0, a.Z)({
        user: t,
        gameRelationships: n,
        menuItemId: 'add-game-friend',
        label: s.NW.string(s.t.X76oLC),
        onClick: l
    });
}
