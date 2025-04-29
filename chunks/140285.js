n.d(t, { Z: () => m }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(727843),
    s = n(944537),
    a = n(290348),
    o = n(91354),
    c = n(662961),
    u = n(388032),
    d = n(301849);
function m(e) {
    let { 'aria-labelledby': t, disabled: n = !1 } = e,
        { editStateId: m, guildId: g } = (0, l.N)(),
        [p, h] = a.GP(m, g);
    return (0, r.jsx)(i.FXm, {
        className: d.__invalid_channelAccessSelect,
        radioItemClassName: d.__invalid_channelAccessSelectRadioButton,
        withTransparentBackground: !0,
        size: i.FXm.Sizes.NOT_SET,
        onChange: (e) => {
            let { value: t } = e;
            return h(t);
        },
        options: [
            {
                name: u.intl.string(u.t['vs2T+P']),
                value: s.I.SOME_CHANNELS_ACCESS,
                icon: (0, i.GSL)(c.Z),
                radioBarClassName: d.__invalid_channelAccessSelectRadioBar
            },
            {
                name: u.intl.string(u.t.l4Tr7e),
                value: s.I.ALL_CHANNELS_ACCESS,
                icon: (0, i.GSL)(o.Z),
                radioBarClassName: d.__invalid_channelAccessSelectRadioBar
            }
        ],
        value: p,
        'aria-labelledby': t,
        disabled: n
    });
}
