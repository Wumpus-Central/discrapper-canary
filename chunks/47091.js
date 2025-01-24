t.d(n, {
    Z: function () {
        return Z;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(91896),
    o = t(298213),
    d = t(51144),
    s = t(749302),
    c = t(388032);
function Z(e) {
    let { user: n } = e,
        Z = (0, r.Wu)([u.Z], () => u.Z.getGameFriendsForUser(n.id)),
        f = d.ZP.useName(n),
        m = i.useCallback(
            (e) => {
                let { id: i, name: r } = e;
                (0, a.openModalLazy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
                    return (t) =>
                        (0, l.jsx)(e, {
                            header: c.intl.formatToPlainString(c.t['GOFk9/'], { name: f }),
                            confirmText: c.intl.string(c.t['cY+Ooa']),
                            cancelText: c.intl.string(c.t['ETE/oK']),
                            onConfirm: () =>
                                o.Z.removeFriend({
                                    userId: n.id,
                                    applicationId: i,
                                    location: 'Context Menu'
                                }),
                            ...t,
                            children: (0, l.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: c.intl.format(c.t.dsU5bm, {
                                    name: f,
                                    gameName: r
                                })
                            })
                        });
                });
            },
            [f, n]
        );
    return (0, s.Z)({
        user: n,
        gameRelationships: Z,
        menuItemId: 'remove-game-friend',
        label: c.intl.string(c.t['RLcE6+']),
        onClick: m
    });
}
