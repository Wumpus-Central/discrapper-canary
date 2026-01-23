n.d(a, {
    default: () => o,
});
var i = n(627968);
n(64700);
var e = n(397927),
    s = n(442433),
    r = n(147036),
    d = n(957565),
    l = n(746080),
    c = n(985018);

function o(t) {
    let { guild: a, onSelect: n } = t;
    return (0, i.jsx)(e.W1t, {
        "data-menu-migration-ready": !0,
        navId: "game-shop-context",
        "aria-label": c.intl.string(c.t.vyaWs7),
        onClose: s.Z_,
        onSelect: n,
        children: (0, i.jsx)(e.rXV, {
            children: (0, i.jsx)(e.Drp, {
                id: "game-shop-copy-link",
                label: c.intl.string(c.t.WqhZss),
                action: () => {
                    (0, d.C)((0, r.n)(a.id, l.VV.GAME_SHOP));
                },
            }),
        }),
    });
}
