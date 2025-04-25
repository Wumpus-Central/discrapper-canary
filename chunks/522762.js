n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(5036),
    o = n(9156),
    a = n(388032);
function c(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.isGuildCollapsed(e), [e]);
    return (0, i.jsx)(l.S89, {
        id: 'hide-muted-channels',
        label: a.intl.string(a.t.UwOLJC),
        action: () => s.Z.toggleCollapseGuild(e),
        checked: t
    });
}
