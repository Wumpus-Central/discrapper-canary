e.d(t, { default: () => I });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(239091),
    u = e(883385),
    a = e(108843),
    d = e(100527),
    o = e(584836),
    c = e(544642),
    s = e(965244),
    f = e(981631),
    _ = e(388032);
let I = (0, a.Z)(
    (0, u.Z)(
        function (n) {
            let { guildId: t, context: e, onSelect: u } = n,
                a = (0, c.Z)(t, e),
                d = (0, s.Z)(t, e),
                f = (0, o.Z)(t, e);
            return (0, i.jsxs)(l.v2r, {
                navId: 'moderation-raid-context',
                onClose: r.Zy,
                'aria-label': _.intl.string(_.t.liqwPD),
                onSelect: u,
                children: [
                    (0, i.jsx)(l.kSQ, { children: d }),
                    (0, i.jsxs)(l.kSQ, {
                        children: [f, a]
                    })
                ]
            });
        },
        { object: f.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_RAID_MENU]
);
