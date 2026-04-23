"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(136722),
    s = n(783878),
    a = n(652215),
    o = n(985018),
    l = n(551280);
function d(e) {
    let { error: t, selectedGuildId: n, onGuildChange: d, guilds: _, disabled: u = !1 } = e,
        c = _.filter((e) => r.zy(e.permissions, a.xBc.MANAGE_GUILD)).map((e) => ({
            id: e.id,
            value: e.id,
            label: e.name,
        }));
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
            onSelectionChange: d,
            disabled: u,
            value: n ?? void 0,
        }),
    });
}
