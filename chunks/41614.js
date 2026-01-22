s.d(n, { default: () => o });
var i = s(627968);
s(64700);
var a = s(397927),
    e = s(442433),
    r = s(147036),
    l = s(957565),
    c = s(746080),
    d = s(985018);
function o(t) {
    let { guild: n, onSelect: s } = t;
    return (0, i.jsx)(a.W1t, {
        navId: "game-shop-context",
        "aria-label": d.intl.string(d.t.vyaWs7),
        onClose: e.Z_,
        onSelect: s,
        children: (0, i.jsx)(a.rXV, {
            children: (0, i.jsx)(a.Drp, {
                id: "game-shop-copy-link",
                label: d.intl.string(d.t.WqhZss),
                action: () => {
                    (0, l.C)((0, r.n)(n.id, c.VV.GAME_SHOP));
                },
            }),
        }),
    });
}
