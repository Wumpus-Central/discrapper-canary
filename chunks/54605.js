"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(136722),
    s = n(783878),
    a = n(652215),
    o = n(985018),
    l = n(551280);
function u(e) {
    let { error: t, selectedGuildId: n, onGuildChange: u, guilds: c, disabled: d = !1 } = e,
        _ = c
            .filter((e) => i.zy(e.permissions, a.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(s.Z, {
            label: o.intl.string(o.t["1DXFFd"]),
            helperText: o.intl.format(o.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: o.intl.string(o.t.oM4E1A),
            options: _,
            onSelectionChange: u,
            disabled: d,
            value: n ?? void 0,
        }),
    });
}
