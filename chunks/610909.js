n.d(e, { default: () => s });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(239091),
    c = n(153867),
    o = n(108843),
    l = n(100527),
    u = n(388032);
let s = (0, o.Z)(
    function (t) {
        return (0, r.jsx)(a.v2r, {
            navId: 'play-again-context',
            onClose: i.Zy,
            'aria-label': u.NW.string(u.t.qDZryM),
            onSelect: t.onSelect,
            children: (0, r.jsx)(
                a.kSQ,
                {
                    children: (0, r.jsx)(a.sNh, {
                        id: 'show-play-again',
                        label: u.NW.string(u.t.AHtm4O),
                        action: () => c.ZP.updatedUnsyncedSettings({ showPlayAgain: !1 }),
                        subtext: u.NW.format(u.t['Wz/nKi'], {})
                    })
                },
                'play-again'
            )
        });
    },
    [l.Z.CONTEXT_MENU, l.Z.APP_DMS_QUICK_LAUNCHER]
);
