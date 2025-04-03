n.d(t, { Z: () => h });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(524437),
    s = n(481060),
    c = n(695346),
    d = n(246992),
    u = n(616257),
    m = n(386);
let x = [
    {
        label: 'Unset',
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
    },
    {
        label: 'All',
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
    },
    {
        label: 'Users With Game',
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
    },
    {
        label: 'None',
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
    }
];
function h() {
    let e = a.useRef(null),
        t = c.JG.useSetting();
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(u.panel, m.panel),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: 'Receive DMs In Game'
            }),
            (0, r.jsx)(s.PhF, {
                options: x,
                isSelected: (e) => e === t,
                select: c.JG.updateSetting,
                popoutLayerContext: d.O$,
                serialize: (e) => e.toString()
            })
        ]
    });
}
