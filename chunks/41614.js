n.d(a, {
    default: () => o,
});
var e = n(627968);
n(64700);
var i = n(397927),
    s = n(442433),
    r = n(147036),
    d = n(957565),
    l = n(746080),
    c = n(985018);

function o(t) {
    let { guild: a, onSelect: n } = t;
    return (0, e.jsx)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "game-shop-context",
        "aria-label": c.intl.string(c.t.vyaWs7),
        onClose: s.Z_,
        onSelect: n,
        children: (0, e.jsx)(i.rXV, {
            children: (0, e.jsx)(i.Drp, {
                id: "game-shop-copy-link",
                label: c.intl.string(c.t.WqhZss),
                action: () => {
                    (0, d.C)((0, r.n)(a.id, l.VV.GAME_SHOP));
                },
            }),
        }),
    });
}
