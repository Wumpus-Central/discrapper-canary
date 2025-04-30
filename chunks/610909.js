e.d(n, { default: () => s });
var r = e(200651);
e(192379);
var a = e(481060),
    i = e(239091),
    c = e(108843),
    l = e(100527),
    o = e(415439),
    u = e(388032);
let s = (0, c.Z)(
    function (t) {
        return (0, r.jsx)(a.v2r, {
            navId: 'play-again-context',
            onClose: i.Zy,
            'aria-label': u.intl.string(u.t.qDZryM),
            onSelect: t.onSelect,
            children: (0, r.jsx)(
                a.kSQ,
                {
                    children: (0, r.jsx)(a.sNh, {
                        id: 'show-play-again',
                        label: u.intl.string(u.t.AHtm4O),
                        action: () => (0, o.BV)(!1, l.Z.APP_DMS_QUICK_LAUNCHER),
                        subtext: u.intl.format(u.t['Wz/nKi'], {})
                    })
                },
                'play-again'
            )
        });
    },
    [l.Z.CONTEXT_MENU, l.Z.APP_DMS_QUICK_LAUNCHER]
);
