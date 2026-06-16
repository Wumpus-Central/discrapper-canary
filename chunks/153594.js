t.d(a, { A: () => o });
var n = t(627968);
t(64700);
var l = t(17928),
    i = t(477782),
    r = t(952270),
    c = t(686449),
    d = t(543465),
    s = t(375708);
function o(e) {
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = (0, l.bG)([d.Ay], () => d.Ay.isGuildCollapsed(e), [e]);
    return (0, n.jsx)(i.sL, {
        id: "hide-muted-channels",
        label: s.intl.string(s.t.UwOLJO),
        leadingAccessory: a ? { type: "icon", icon: r.G } : void 0,
        action: () => c.A.toggleCollapseGuild(e),
        checked: t,
    });
}
