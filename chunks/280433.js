n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(954197),
    s = n(565787),
    r = n(306444),
    a = n(846922),
    o = n(922975),
    d = n(847419),
    c = n(277321),
    u = n(985018);
function m(e) {
    let { "aria-labelledby": t, disabled: n = !1 } = e,
        { editStateId: m, guildId: g } = (0, r.O)(),
        [h, x] = o.W5(m, g);
    return (0, i.jsx)(l.z, {
        onChange: (e) => x(e),
        options: [
            { name: u.intl.string(u.t["vs2T+B"]), value: a.h.SOME_CHANNELS_ACCESS, leadingIcon: (0, s.k)(c.A) },
            { name: u.intl.string(u.t.l4Tr7X), value: a.h.ALL_CHANNELS_ACCESS, leadingIcon: (0, s.k)(d.A) },
        ],
        value: h,
        "aria-labelledby": t,
        disabled: n,
    });
}
