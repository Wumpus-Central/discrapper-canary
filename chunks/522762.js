n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    c = n(5036),
    o = n(9156),
    a = n(388032);
function u(e) {
    let t = (0, l.e7)([o.ZP], () => o.ZP.isGuildCollapsed(e), [e]);
    return (0, r.jsx)(i.S89, {
        id: 'hide-muted-channels',
        label: a.intl.string(a.t.UwOLJC),
        action: () => c.Z.toggleCollapseGuild(e),
        checked: t
    });
}
