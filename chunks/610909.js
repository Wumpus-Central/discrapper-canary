a.d(t, { default: () => u });
var i = a(200651);
a(192379);
var e = a(481060),
    r = a(239091),
    l = a(153867),
    s = a(108843),
    c = a(100527),
    o = a(388032);
let u = (0, s.Z)(
    function (n) {
        return (0, i.jsx)(e.v2r, {
            navId: 'play-again-context',
            onClose: r.Zy,
            'aria-label': o.intl.string(o.t.qDZryM),
            onSelect: n.onSelect,
            children: (0, i.jsx)(
                e.kSQ,
                {
                    children: (0, i.jsx)(e.sNh, {
                        id: 'show-play-again',
                        label: o.intl.string(o.t.AHtm4O),
                        action: () => l.ZP.updatedUnsyncedSettings({ showPlayAgain: !1 }),
                        subtext: o.intl.format(o.t['Wz/nKi'], {})
                    })
                },
                'play-again'
            )
        });
    },
    [c.Z.CONTEXT_MENU, c.Z.APP_DMS_QUICK_LAUNCHER]
);
