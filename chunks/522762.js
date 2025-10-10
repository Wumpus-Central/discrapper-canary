n.d(t, { Z: () => a });
var i = n(951288);
n(647438);
var r = n(442837),
    s = n(481060),
    l = n(5036),
    o = n(9156),
    c = n(388032);
function a(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.isGuildCollapsed(e), [e]);
    return (0, i.jsx)(s.S89, {
        id: "hide-muted-channels",
        label: c.intl.string(c.t.UwOLJC),
        action: () => l.Z.toggleCollapseGuild(e),
        checked: t,
    });
}
