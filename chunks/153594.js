n.d(a, { A: () => o });
var t = n(477900);
n(582128);
var l = n(17928),
    i = n(477782),
    r = n(952270),
    c = n(686449),
    d = n(543465),
    s = n(375708);
function o(e) {
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, l.bG)([d.Ay], () => d.Ay.isGuildCollapsed(e), [e]);
    return (0, t.jsx)(i.sL, {
        id: "hide-muted-channels",
        label: s.intl.string(s.t.UwOLJO),
        leadingAccessory: a ? { type: "icon", icon: r.EyeSlashIcon } : void 0,
        action: () => c.A.toggleCollapseGuild(e),
        checked: n,
    });
}
