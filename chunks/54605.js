"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    r = n(136722),
    s = n(783878),
    a = n(652215),
    o = n(985018),
    l = n(551280);
function _(e) {
    let { error: t, selectedGuildId: n, onGuildChange: _, guilds: d, disabled: u = !1 } = e,
        c = d
            .filter((e) => r.zy(e.permissions, a.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: l.g,
        children: (0, i.jsx)(s.Z, {
            label: o.intl.string(o.t["1DXFFd"]),
            helperText: o.intl.format(o.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: o.intl.string(o.t.oM4E1A),
            options: c,
            onSelectionChange: _,
            disabled: u,
            value: n ?? void 0,
        }),
    });
}
