n.d(t, { A: () => u });
var r = n(627968),
    i = n(136722),
    a = n(397927),
    s = n(652215),
    o = n(985018),
    l = n(80739);
let c = 5;
function u(e) {
    let { error: t, selectedGuildId: n, onGuildChange: u, guilds: d, disabled: f = !1 } = e,
        p = d
            .filter((e) => i.zy(e.permissions, s.xBc.MANAGE_GUILD))
            .map((e) => ({
                id: e.id,
                value: e.id,
                label: e.name,
            }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(a.ZiE, {
            label: o.intl.string(o.t["1DXFFd"]),
            helperText: o.intl.format(o.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: c,
            placeholder: o.intl.string(o.t.oM4E1A),
            options: p,
            onSelectionChange: u,
            disabled: f,
            value: null != n ? n : void 0,
        }),
    });
}
