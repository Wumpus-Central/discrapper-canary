n.d(t, { A: () => u });
var r = n(64700),
    i = n(314116),
    a = n(922590),
    s = n(607272),
    o = n(427262),
    l = n(433880),
    c = n(985018);
function u(e) {
    let { user: t } = e,
        n = (0, a.f1)(t.id),
        u = o.Ay.useName(t),
        d = r.useCallback(
            (e) => {
                let { id: n, name: r } = e;
                (0, i.A)({
                    title: c.intl.formatToPlainString(c.t["GOFk9+"], { name: u }),
                    subtitle: c.intl.format(c.t.dsU5bl, {
                        name: u,
                        gameName: r,
                    }),
                    confirmText: c.intl.string(c.t["cY+Oob"]),
                    onConfirm: () =>
                        s.A.removeFriend({
                            userId: t.id,
                            applicationId: n,
                            location: "Context Menu",
                        }),
                });
            },
            [u, t],
        );
    return (0, l.A)({
        user: t,
        gameRelationships: n,
        menuItemId: "remove-game-friend",
        label: c.intl.string(c.t.RLcE6x),
        onClick: d,
        color: "danger",
    });
}
