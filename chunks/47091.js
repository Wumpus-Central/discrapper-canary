n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(91896),
    l = n(298213),
    u = n(51144),
    c = n(749302),
    d = n(388032);
function f(e) {
    let { user: t } = e,
        f = (0, a.Wu)([o.Z], () => o.Z.getGameFriendsForUser(t.id)),
        _ = u.ZP.useName(t),
        p = r.useCallback(
            (e) => {
                let { id: r, name: a } = e;
                (0, s.ZDy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (n) =>
                        (0, i.jsx)(e, {
                            header: d.intl.formatToPlainString(d.t['GOFk9/'], { name: _ }),
                            confirmText: d.intl.string(d.t['cY+Ooa']),
                            cancelText: d.intl.string(d.t['ETE/oK']),
                            onConfirm: () =>
                                l.Z.removeFriend({
                                    userId: t.id,
                                    applicationId: r,
                                    location: 'Context Menu'
                                }),
                            ...n,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: d.intl.format(d.t.dsU5bm, {
                                    name: _,
                                    gameName: a
                                })
                            })
                        });
                });
            },
            [_, t]
        );
    return (0, c.Z)({
        user: t,
        gameRelationships: f,
        menuItemId: 'remove-game-friend',
        label: d.intl.string(d.t['RLcE6+']),
        onClick: p
    });
}
