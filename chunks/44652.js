n.d(t, { Z: () => l });
var r = n(73800),
    i = n(320582),
    a = n(298213),
    o = n(749302),
    s = n(388032);
function l(e) {
    let { user: t } = e,
        n = (0, i.vh)(t.id),
        l = r.useCallback(
            (e) => {
                a.Z.acceptFriendRequest({
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
        label: s.intl.string(s.t.X76oLC),
        onClick: l
    });
}
