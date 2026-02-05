"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(306444),
    r = n(846922),
    a = n(922975),
    o = n(847419),
    d = n(277321),
    c = n(985018);
function u(e) {
    let { "aria-labelledby": t, disabled: n = !1 } = e,
        { editStateId: u, guildId: m } = (0, l.O)(),
        [g, x] = a.W5(u, m);
    return (0, i.jsx)(s.z6M, {
        onChange: (e) => x(e),
        options: [
            { name: c.intl.string(c.t["vs2T+B"]), value: r.h.SOME_CHANNELS_ACCESS, leadingIcon: (0, s.kHD)(d.A) },
            { name: c.intl.string(c.t.l4Tr7X), value: r.h.ALL_CHANNELS_ACCESS, leadingIcon: (0, s.kHD)(o.A) },
        ],
        value: g,
        "aria-labelledby": t,
        disabled: n,
    });
}
