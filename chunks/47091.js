n.d(t, { Z: () => u });
var r = n(473749),
    i = n(248514),
    a = n(320582),
    o = n(298213),
    s = n(51144),
    l = n(749302),
    c = n(388032);
function u(e) {
    let { user: t } = e,
        n = (0, a.ML)(t.id),
        u = s.ZP.useName(t),
        d = r.useCallback(
            (e) => {
                let { id: n, name: r } = e;
                (0, i.Z)({
                    title: c.intl.formatToPlainString(c.t["GOFk9+"], { name: u }),
                    subtitle: c.intl.format(c.t.dsU5bl, {
                        name: u,
                        gameName: r,
                    }),
                    confirmText: c.intl.string(c.t["cY+Oob"]),
                    onConfirm: () =>
                        o.Z.removeFriend({
                            userId: t.id,
                            applicationId: n,
                            location: "Context Menu",
                        }),
                });
            },
            [u, t],
        );
    return (0, l.Z)({
        user: t,
        gameRelationships: n,
        menuItemId: "remove-game-friend",
        label: c.intl.string(c.t.RLcE6x),
        onClick: d,
        color: "danger",
    });
}
