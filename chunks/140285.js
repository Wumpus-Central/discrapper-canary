n.d(t, { Z: () => m }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(727843),
    a = n(944537),
    l = n(290348),
    o = n(91354),
    c = n(662961),
    d = n(388032),
    u = n(301849);
function m(e) {
    let { 'aria-labelledby': t, disabled: n = !1 } = e,
        { editStateId: m, guildId: g } = (0, s.N)(),
        [p, h] = l.GP(m, g);
    return (0, r.jsx)(i.FXm, {
        className: u.__invalid_channelAccessSelect,
        radioItemClassName: u.__invalid_channelAccessSelectRadioButton,
        withTransparentBackground: !0,
        size: i.FXm.Sizes.NOT_SET,
        onChange: (e) => {
            let { value: t } = e;
            return h(t);
        },
        options: [
            {
                name: d.NW.string(d.t['vs2T+P']),
                value: a.I.SOME_CHANNELS_ACCESS,
                icon: (0, i.GSL)(c.Z),
                radioBarClassName: u.__invalid_channelAccessSelectRadioBar
            },
            {
                name: d.NW.string(d.t.l4Tr7e),
                value: a.I.ALL_CHANNELS_ACCESS,
                icon: (0, i.GSL)(o.Z),
                radioBarClassName: u.__invalid_channelAccessSelectRadioBar
            }
        ],
        value: p,
        'aria-labelledby': t,
        disabled: n
    });
}
