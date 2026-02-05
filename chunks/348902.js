n.d(e, { default: () => b });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(442433),
    l = n(847767),
    c = n(358367),
    o = n(793574),
    s = n(50268),
    u = n(570336),
    d = n(927197),
    A = n(912025),
    p = n(652215),
    E = n(985018);
let b = (0, c.A)(
    (0, l.A)(
        function (t) {
            let { game: e, guildId: n, context: l, onSelect: c } = t,
                o = (0, d.A)(e.id, e.name),
                p = (0, A.A)(e),
                b = (0, u.A)(e, n, l),
                v = (0, s.A)({ id: e.id, label: E.intl.string(E.t["FfCL+6"]) });
            return (0, i.jsxs)(r.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "game-context",
                onClose: a.Z_,
                "aria-label": E.intl.string(E.t.liqwPJ),
                onSelect: c,
                children: [(0, i.jsxs)(r.rXV, { children: [o, p, b] }), (0, i.jsx)(r.rXV, { children: v })],
            });
        },
        { object: p.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.GAME_MENU],
);
