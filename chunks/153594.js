n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(686449),
    a = n(543465),
    o = n(985018);
function c(e) {
    let t = (0, r.bG)([a.Ay], () => a.Ay.isGuildCollapsed(e), [e]);
    return (0, i.jsx)(s.sLh, {
        id: "hide-muted-channels",
        label: o.intl.string(o.t.UwOLJO),
        action: () => l.A.toggleCollapseGuild(e),
        checked: t,
    });
}
