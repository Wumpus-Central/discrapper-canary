i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(686449),
    a = i(543465),
    d = i(985018);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, l.bG)([a.Ay], () => a.Ay.isGuildCollapsed(e), [e]);
    return (0, n.jsx)(s.sLh, {
        id: "hide-muted-channels",
        label: d.intl.string(d.t.UwOLJO),
        leadingAccessory: t ? { type: "icon", icon: s.G3N } : void 0,
        action: () => r.A.toggleCollapseGuild(e),
        checked: i,
    });
}
