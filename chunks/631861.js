n.d(e, { default: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(239091),
    c = n(883385),
    a = n(108843),
    l = n(100527),
    u = n(299206),
    s = n(51182),
    f = n(745437),
    p = n(981631),
    b = n(388032);
let d = (0, a.Z)(
    (0, c.Z)(
        function (t) {
            let { game: e, guildId: n, context: c, onSelect: a } = t,
                l = (0, f.Z)(e),
                p = (0, s.Z)(e, n, c),
                d = (0, u.Z)({
                    id: e.id,
                    label: b.intl.string(b.t['FfCL+/'])
                });
            return (0, r.jsxs)(i.v2r, {
                navId: 'game-context',
                onClose: o.Zy,
                'aria-label': b.intl.string(b.t.liqwPD),
                onSelect: a,
                children: [
                    (0, r.jsxs)(i.kSQ, {
                        children: [l, p]
                    }),
                    (0, r.jsx)(i.kSQ, { children: d })
                ]
            });
        },
        { object: p.qAy.CONTEXT_MENU }
    ),
    [l.Z.CONTEXT_MENU, l.Z.GAME_MENU]
);
