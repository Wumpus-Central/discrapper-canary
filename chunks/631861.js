n.d(e, { default: () => p });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(239091),
    c = n(883385),
    a = n(108843),
    l = n(100527),
    u = n(299206),
    s = n(51182),
    f = n(745437),
    b = n(981631),
    d = n(388032);
let p = (0, a.Z)(
    (0, c.Z)(
        function (t) {
            let { game: e, guildId: n, context: c, onSelect: a } = t,
                l = (0, f.Z)(e),
                b = (0, s.Z)(e, n, c),
                p = (0, u.Z)({
                    id: e.id,
                    label: d.intl.string(d.t['FfCL+/'])
                });
            return (0, r.jsxs)(o.v2r, {
                navId: 'game-context',
                onClose: i.Zy,
                'aria-label': d.intl.string(d.t.liqwPD),
                onSelect: a,
                children: [
                    (0, r.jsxs)(o.kSQ, {
                        children: [l, b]
                    }),
                    (0, r.jsx)(o.kSQ, { children: p })
                ]
            });
        },
        { object: b.qAy.CONTEXT_MENU }
    ),
    [l.Z.CONTEXT_MENU, l.Z.GAME_MENU]
);
