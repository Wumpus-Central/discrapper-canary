n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(727843),
    s = n(944537),
    a = n(290348),
    o = n(91354),
    c = n(662961),
    d = n(388032),
    u = n(83701);
function m(e) {
    let { 'aria-labelledby': t, disabled: n = !1 } = e,
        { editStateId: m, guildId: h } = (0, l.N)(),
        [g, x] = a.GP(m, h);
    return (0, i.jsx)(r.RadioGroup, {
        className: u.__invalid_channelAccessSelect,
        radioItemClassName: u.__invalid_channelAccessSelectRadioButton,
        withTransparentBackground: !0,
        size: r.RadioGroup.Sizes.NOT_SET,
        onChange: (e) => {
            let { value: t } = e;
            return x(t);
        },
        options: [
            {
                name: d.intl.string(d.t['vs2T+P']),
                value: s.I.SOME_CHANNELS_ACCESS,
                icon: (0, r.makeIconCompat)(c.Z),
                radioBarClassName: u.__invalid_channelAccessSelectRadioBar
            },
            {
                name: d.intl.string(d.t.l4Tr7e),
                value: s.I.ALL_CHANNELS_ACCESS,
                icon: (0, r.makeIconCompat)(o.Z),
                radioBarClassName: u.__invalid_channelAccessSelectRadioBar
            }
        ],
        value: g,
        'aria-labelledby': t,
        disabled: n
    });
}
