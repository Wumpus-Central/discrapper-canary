n.d(t, { Z: () => h });
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(524437),
    o = n(481060),
    c = n(695346),
    d = n(246992),
    u = n(616257),
    m = n(386);
let x = [
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
function h() {
    let e = r.useRef(null),
        t = c.JG.useSetting();
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(u.panel, m.panel),
        children: [
            (0, a.jsx)(o.Text, {
                variant: 'text-md/normal',
                children: 'Receive DMs In Game'
            }),
            (0, a.jsx)(o.PhF, {
                options: x,
                isSelected: (e) => e === t,
                select: c.JG.updateSetting,
                popoutLayerContext: d.O$,
                serialize: (e) => e.toString()
            })
        ]
    });
}
