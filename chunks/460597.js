n.d(t, { A: () => u });
var i = n(64700),
    l = n(314116),
    r = n(922590),
    a = n(607272),
    o = n(427262),
    d = n(433880),
    s = n(985018);
function u(e) {
    let { user: t } = e,
        n = (0, r.f1)(t.id),
        u = o.Ay.useName(t),
        c = i.useCallback(
            (e) => {
                let { id: n, name: i } = e;
                (0, l.A)({
                    title: s.intl.formatToPlainString(s.t["GOFk9+"], { name: u }),
                    subtitle: s.intl.format(s.t.dsU5bl, { name: u, gameName: i }),
                    confirmText: s.intl.string(s.t["cY+Oob"]),
                    onConfirm: () => a.A.removeFriend({ userId: t.id, applicationId: n, location: "Context Menu" }),
                });
            },
            [u, t],
        );
    return (0, d.A)({
        user: t,
        gameRelationships: n,
        menuItemId: "remove-game-friend",
        label: s.intl.string(s.t.RLcE6x),
        onClick: c,
        color: "danger",
    });
}
