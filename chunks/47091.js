n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(320582),
    o = n(298213),
    l = n(51144),
    u = n(749302),
    c = n(388032);
function d(e) {
    let { user: t } = e,
        d = (0, s.ML)(t.id),
        f = l.ZP.useName(t),
        _ = r.useCallback(
            (e) => {
                let { id: r, name: s } = e;
                (0, a.ZDy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (n) =>
                        (0, i.jsx)(e, {
                            header: c.intl.formatToPlainString(c.t['GOFk9/'], { name: f }),
                            confirmText: c.intl.string(c.t['cY+Ooa']),
                            cancelText: c.intl.string(c.t['ETE/oK']),
                            onConfirm: () =>
                                o.Z.removeFriend({
                                    userId: t.id,
                                    applicationId: r,
                                    location: 'Context Menu'
                                }),
                            ...n,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: c.intl.format(c.t.dsU5bm, {
                                    name: f,
                                    gameName: s
                                })
                            })
                        });
                });
            },
            [f, t]
        );
    return (0, u.Z)({
        user: t,
        gameRelationships: d,
        menuItemId: 'remove-game-friend',
        label: c.intl.string(c.t['RLcE6+']),
        onClick: _,
        color: 'danger'
    });
}
