n.d(t, { Z: () => o });
var i = n(54381);
n(473749);
var r = n(442837),
    s = n(481060),
    l = n(5036),
    a = n(9156),
    c = n(388032);
function o(e) {
    let t = (0, r.e7)([a.ZP], () => a.ZP.isGuildCollapsed(e), [e]);
    return (0, i.jsx)(s.S89, {
        id: "hide-muted-channels",
        label: c.intl.string(c.t.UwOLJO),
        action: () => l.Z.toggleCollapseGuild(e),
        checked: t,
    });
}
