n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    c = n(5036),
    a = n(9156),
    o = n(388032);
function s(e) {
    let t = (0, i.e7)([a.ZP], () => a.ZP.isGuildCollapsed(e), [e]);
    return (0, r.jsx)(l.S89, {
        id: "hide-muted-channels",
        label: o.intl.string(o.t.UwOLJO),
        action: () => c.Z.toggleCollapseGuild(e),
        checked: t,
    });
}
