n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    d = n(5036),
    r = n(9156),
    s = n(388032);
function c(e) {
    let t = (0, i.e7)([r.ZP], () => r.ZP.isGuildCollapsed(e), [e]);
    return (0, l.jsx)(a.S89, {
        id: 'hide-muted-channels',
        label: s.intl.string(s.t.UwOLJC),
        action: () => d.Z.toggleCollapseGuild(e),
        checked: t
    });
}
