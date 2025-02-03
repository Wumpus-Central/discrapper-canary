n.d(t, { Z: () => l });
var i = n(192379),
    r = n(320582),
    a = n(298213),
    s = n(749302),
    o = n(388032);
function l(e) {
    let { user: t } = e,
        n = (0, r.vh)(t.id),
        l = i.useCallback(
            (e) => {
                a.Z.acceptFriendRequest({
                    userId: t.id,
                    applicationId: e.id,
                    location: 'Context Menu'
                });
            },
            [t.id]
        );
    return (0, s.Z)({
        user: t,
        gameRelationships: n,
        menuItemId: 'add-game-friend',
        label: o.intl.string(o.t.X76oLC),
        onClick: l
    });
}
