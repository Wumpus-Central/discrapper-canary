n.d(t, { Z: () => u }), n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(727843),
    a = n(944537),
    s = n(290348),
    o = n(91354),
    c = n(662961),
    d = n(388032);
function u(e) {
    let { "aria-labelledby": t, disabled: n = !1 } = e,
        { editStateId: u, guildId: g } = (0, l.N)(),
        [m, p] = s.GP(u, g);
    return (0, r.jsx)(i.FXm, {
        onChange: (e) => p(e),
        options: [
            {
                name: d.intl.string(d.t["vs2T+B"]),
                value: a.I.SOME_CHANNELS_ACCESS,
                leadingIcon: (0, i.GSL)(c.Z),
            },
            {
                name: d.intl.string(d.t.l4Tr7X),
                value: a.I.ALL_CHANNELS_ACCESS,
                leadingIcon: (0, i.GSL)(o.Z),
            },
        ],
        value: m,
        "aria-labelledby": t,
        disabled: n,
    });
}
