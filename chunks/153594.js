i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var s = i(17928),
    l = i(477782),
    a = i(952270),
    r = i(686449),
    d = i(543465),
    o = i(985018);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = (0, s.bG)([d.Ay], () => d.Ay.isGuildCollapsed(e), [e]);
    return (0, n.jsx)(l.sL, {
        id: "hide-muted-channels",
        label: o.intl.string(o.t.UwOLJO),
        leadingAccessory: t ? { type: "icon", icon: a.G } : void 0,
        action: () => r.A.toggleCollapseGuild(e),
        checked: i,
    });
}
