n.d(t, { Z: () => u });
var r = n(54381),
    i = n(149765),
    a = n(481060),
    o = n(981631),
    s = n(388032),
    l = n(829478);
let c = 5;
function u(e) {
    let { error: t, selectedGuildId: n, onGuildChange: u, guilds: d, disabled: f = !1 } = e,
        p = d
            .filter((e) => i.e$(e.permissions, o.Plq.MANAGE_GUILD))
            .map((e) => ({
                id: e.id,
                value: e.id,
                label: e.name,
            }));
    return (0, r.jsx)("div", {
        className: l.selector,
        children: (0, r.jsx)(a.VcW, {
            label: s.intl.string(s.t["1DXFFd"]),
            helperText: s.intl.format(s.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: c,
            placeholder: s.intl.string(s.t.oM4E1A),
            options: p,
            onSelectionChange: u,
            disabled: f,
            value: null != n ? n : void 0,
        }),
    });
}
