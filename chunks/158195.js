n.d(t, { default: () => O });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(239091),
    c = n(883385),
    l = n(108843),
    a = n(100527),
    u = n(584836),
    s = n(544642),
    f = n(965244),
    b = n(981631),
    d = n(388032);
let O = (0, l.Z)(
    (0, c.Z)(
        function (e) {
            let { guildId: t, context: n, onSelect: c } = e,
                l = (0, s.Z)(t, n),
                a = (0, f.Z)(t, n),
                b = (0, u.Z)(t, n);
            return (0, r.jsxs)(i.v2r, {
                navId: 'moderation-raid-context',
                onClose: o.Zy,
                'aria-label': d.intl.string(d.t.liqwPD),
                onSelect: c,
                children: [
                    (0, r.jsx)(i.kSQ, { children: a }),
                    (0, r.jsxs)(i.kSQ, {
                        children: [b, l]
                    })
                ]
            });
        },
        { object: b.qAy.CONTEXT_MENU }
    ),
    [a.Z.CONTEXT_MENU, a.Z.GUILD_MODERATION_RAID_MENU]
);
