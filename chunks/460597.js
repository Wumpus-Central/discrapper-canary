"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(314116),
    a = n(922590),
    s = n(607272),
    o = n(427262),
    l = n(433880),
    u = n(985018);
function c(e) {
    let { user: t } = e,
        n = (0, a.f1)(t.id),
        c = o.Ay.useName(t),
        d = r.useCallback(
            (e) => {
                let { id: n, name: r } = e;
                (0, i.A)({
                    title: u.intl.formatToPlainString(u.t["GOFk9+"], { name: c }),
                    subtitle: u.intl.format(u.t.dsU5bl, { name: c, gameName: r }),
                    confirmText: u.intl.string(u.t["cY+Oob"]),
                    onConfirm: () => s.A.removeFriend({ userId: t.id, applicationId: n, location: "Context Menu" }),
                });
            },
            [c, t],
        );
    return (0, l.A)({
        user: t,
        gameRelationships: n,
        menuItemId: "remove-game-friend",
        label: u.intl.string(u.t.RLcE6x),
        onClick: d,
        color: "danger",
    });
}
