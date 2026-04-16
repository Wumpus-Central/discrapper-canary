"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(136722),
    s = n(397927),
    a = n(652215),
    o = n(985018),
    l = n(551280);
let u = 5;
function c(e) {
    let { error: t, selectedGuildId: n, onGuildChange: c, guilds: d, disabled: _ = !1 } = e,
        f = d
            .filter((e) => i.zy(e.permissions, a.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(s.ZiE, {
            label: o.intl.string(o.t["1DXFFd"]),
            helperText: o.intl.format(o.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: u,
            placeholder: o.intl.string(o.t.oM4E1A),
            options: f,
            onSelectionChange: c,
            disabled: _,
            value: n ?? void 0,
        }),
    });
}
