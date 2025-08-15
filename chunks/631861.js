n.d(e, { default: () => v });
var r = n(255367);
n(73800);
var i = n(481060),
    c = n(239091),
    o = n(883385),
    a = n(108843),
    l = n(100527),
    u = n(299206),
    s = n(51182),
    f = n(393910),
    d = n(745437),
    p = n(981631),
    b = n(388032);
let v = (0, a.Z)(
    (0, o.Z)(
        function (t) {
            let { game: e, guildId: n, context: o, onSelect: a } = t,
                l = (0, f.Z)(e.id),
                p = (0, d.Z)(e),
                v = (0, s.Z)(e, n, o),
                Z = (0, u.Z)({
                    id: e.id,
                    label: b.intl.string(b.t["FfCL+/"]),
                });
            return (0, r.jsxs)(i.v2r, {
                navId: "game-context",
                onClose: c.Zy,
                "aria-label": b.intl.string(b.t.liqwPD),
                onSelect: a,
                children: [
                    (0, r.jsxs)(i.kSQ, {
                        children: [l, p, v],
                    }),
                    (0, r.jsx)(i.kSQ, { children: Z }),
                ],
            });
        },
        { object: p.qAy.CONTEXT_MENU },
    ),
    [l.Z.CONTEXT_MENU, l.Z.GAME_MENU],
);
