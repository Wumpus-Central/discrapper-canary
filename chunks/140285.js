n.d(t, { Z: () => g }), n(388685);
var r = n(951288);
n(647438);
var i = n(755721),
    l = n(481060),
    a = n(727843),
    s = n(944537),
    o = n(290348),
    c = n(91354),
    d = n(662961),
    u = n(388032),
    m = n(605041);
function g(e) {
    let { "aria-labelledby": t, disabled: n = !1 } = e,
        { editStateId: g, guildId: p } = (0, a.N)(),
        [f, h] = o.GP(g, p);
    return (0, r.jsx)(i.Gu, {
        className: m.__invalid_channelAccessSelect,
        radioItemClassName: m.__invalid_channelAccessSelectRadioButton,
        withTransparentBackground: !0,
        size: i.l7.NOT_SET,
        onChange: (e) => {
            let { value: t } = e;
            return h(t);
        },
        options: [
            {
                name: u.intl.string(u.t["vs2T+P"]),
                value: s.I.SOME_CHANNELS_ACCESS,
                icon: (0, l.GSL)(d.Z),
                radioBarClassName: m.__invalid_channelAccessSelectRadioBar,
            },
            {
                name: u.intl.string(u.t.l4Tr7e),
                value: s.I.ALL_CHANNELS_ACCESS,
                icon: (0, l.GSL)(c.Z),
                radioBarClassName: m.__invalid_channelAccessSelectRadioBar,
            },
        ],
        value: f,
        "aria-labelledby": t,
        disabled: n,
    });
}
