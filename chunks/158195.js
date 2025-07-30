r.d(t, { default: () => p });
var n = r(255367);
r(73800);
var o = r(481060),
    c = r(239091),
    i = r(883385),
    a = r(108843),
    l = r(100527),
    u = r(584836),
    b = r(544642),
    s = r(965244),
    f = r(981631),
    O = r(388032);
let p = (0, a.Z)(
    (0, i.Z)(
        function (e) {
            let { guildId: t, context: r, onSelect: i } = e,
                a = (0, b.Z)(t, r),
                l = (0, s.Z)(t, r),
                f = (0, u.Z)(t, r);
            return (0, n.jsxs)(o.v2r, {
                navId: 'moderation-raid-context',
                onClose: c.Zy,
                'aria-label': O.intl.string(O.t.liqwPD),
                onSelect: i,
                children: [
                    (0, n.jsx)(o.kSQ, { children: l }),
                    (0, n.jsxs)(o.kSQ, {
                        children: [f, a]
                    })
                ]
            });
        },
        { object: f.qAy.CONTEXT_MENU }
    ),
    [l.Z.CONTEXT_MENU, l.Z.GUILD_MODERATION_RAID_MENU]
);
