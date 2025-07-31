a.d(t, { Z: () => x });
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(524437),
    o = a(481060),
    c = a(695346),
    d = a(246992),
    u = a(616257),
    m = a(386);
let p = [
    {
        label: 'Unset',
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
    },
    {
        label: 'All',
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
    },
    {
        label: 'Users With Game',
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
    },
    {
        label: 'None',
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
    }
];
function x() {
    let e = r.useRef(null),
        t = c.JG.useSetting();
    return (0, n.jsxs)('div', {
        ref: e,
        className: i()(u.panel, m.panel),
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                children: 'Receive DMs In Game'
            }),
            (0, n.jsx)(o.PhF, {
                options: p,
                isSelected: (e) => e === t,
                select: c.JG.updateSetting,
                popoutLayerContext: d.O$,
                serialize: (e) => e.toString()
            })
        ]
    });
}
