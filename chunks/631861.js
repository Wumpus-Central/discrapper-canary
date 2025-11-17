n.d(e, { default: () => v });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(239091),
    c = n(883385),
    a = n(108843),
    l = n(100527),
    u = n(299206),
    s = n(51182),
    f = n(393910),
    b = n(745437),
    d = n(981631),
    p = n(388032);
let v = (0, a.Z)(
    (0, c.Z)(
        function (t) {
            let { game: e, guildId: n, context: c, onSelect: a } = t,
                l = (0, f.Z)(e.id, e.name),
                d = (0, b.Z)(e),
                v = (0, s.Z)(e, n, c),
                Z = (0, u.Z)({
                    id: e.id,
                    label: p.intl.string(p.t["FfCL+6"]),
                });
            return (0, r.jsxs)(i.v2r, {
                navId: "game-context",
                onClose: o.Zy,
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: a,
                children: [
                    (0, r.jsxs)(i.kSQ, {
                        children: [l, d, v],
                    }),
                    (0, r.jsx)(i.kSQ, { children: Z }),
                ],
            });
        },
        { object: d.qAy.CONTEXT_MENU },
    ),
    [l.Z.CONTEXT_MENU, l.Z.GAME_MENU],
);
