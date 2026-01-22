n.d(t, { default: () => A });
var r = n(627968);
n(64700);
var i = n(397927),
    c = n(442433),
    o = n(847767),
    a = n(358367),
    l = n(793574),
    u = n(50268),
    s = n(570336),
    b = n(927197),
    d = n(912025),
    f = n(652215),
    p = n(985018);
let A = (0, a.A)(
    (0, o.A)(
        function (e) {
            let { game: t, guildId: n, context: o, onSelect: a } = e,
                l = (0, b.A)(t.id, t.name),
                f = (0, d.A)(t),
                A = (0, s.A)(t, n, o),
                j = (0, u.A)({
                    id: t.id,
                    label: p.intl.string(p.t["FfCL+6"]),
                });
            return (0, r.jsxs)(i.W1t, {
                navId: "game-context",
                onClose: c.Z_,
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: a,
                children: [
                    (0, r.jsxs)(i.rXV, {
                        children: [l, f, A],
                    }),
                    (0, r.jsx)(i.rXV, { children: j }),
                ],
            });
        },
        { object: f.ZSU.CONTEXT_MENU },
    ),
    [l.A.CONTEXT_MENU, l.A.GAME_MENU],
);
