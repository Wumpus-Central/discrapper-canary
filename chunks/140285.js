n.d(t, { Z: () => u }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(727843),
    s = n(944537),
    a = n(290348),
    o = n(91354),
    c = n(662961),
    d = n(388032);
function u(e) {
    let { "aria-labelledby": t, disabled: n = !1 } = e,
        { editStateId: u, guildId: g } = (0, l.N)(),
        [m, p] = a.GP(u, g);
    return (0, r.jsx)(i.FXm, {
        onChange: (e) => p(e),
        options: [
            {
                name: d.intl.string(d.t["vs2T+P"]),
                value: s.I.SOME_CHANNELS_ACCESS,
                leadingIcon: (0, i.GSL)(c.Z),
            },
            {
                name: d.intl.string(d.t.l4Tr7e),
                value: s.I.ALL_CHANNELS_ACCESS,
                leadingIcon: (0, i.GSL)(o.Z),
            },
        ],
        value: m,
        "aria-labelledby": t,
        disabled: n,
    });
}
