n.d(t, { default: () => O });
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(239091),
    c = n(883385),
    l = n(108843),
    u = n(100527),
    a = n(584836),
    f = n(544642),
    s = n(965244),
    b = n(981631),
    d = n(388032);
let O = (0, l.Z)(
    (0, c.Z)(
        function (e) {
            let { guildId: t, context: n, onSelect: c } = e,
                l = (0, f.Z)(t, n),
                u = (0, s.Z)(t, n),
                b = (0, a.Z)(t, n);
            return (0, r.jsxs)(o.v2r, {
                navId: 'moderation-raid-context',
                onClose: i.Zy,
                'aria-label': d.NW.string(d.t.liqwPD),
                onSelect: c,
                children: [
                    (0, r.jsx)(o.kSQ, { children: u }),
                    (0, r.jsxs)(o.kSQ, {
                        children: [b, l]
                    })
                ]
            });
        },
        { object: b.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_MODERATION_RAID_MENU]
);
