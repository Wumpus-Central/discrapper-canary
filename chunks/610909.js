n.d(e, { default: () => s });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(239091),
    c = n(108843),
    o = n(100527),
    l = n(415439),
    u = n(388032);
let s = (0, c.Z)(
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
                        action: () => (0, l.BV)(!1, o.Z.APP_DMS_QUICK_LAUNCHER),
                        subtext: u.NW.format(u.t['Wz/nKi'], {})
                    })
                },
                'play-again'
            )
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.APP_DMS_QUICK_LAUNCHER]
);
