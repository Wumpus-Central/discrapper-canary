n.d(t, { S: () => c, V: () => f });
var l = n(477900);
n(582128);
var a = n(442433),
    i = n(800202),
    r = n(260498),
    s = n(193072),
    o = n(95264);
function u(e, t) {
    let { onExport: n } = (0, i.A)(e);
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, r.PV)(e),
        canRemix: (0, r.H_)(e),
        onRemix: () => (0, o.A)(e, t),
        onExport: n,
    };
}
function d(e) {
    let { project: t, guildId: n } = e,
        i = u(t, n);
    return (0, l.jsx)(s.z, { ...i, onCloseMenu: a.Z_ });
}
function c(e) {
    let { project: t, guildId: n } = e,
        a = u(t, n);
    return (0, l.jsx)(s.A, { ...a, trigger: "iconButton" });
}
function f(e, t, n) {
    (0, a.jA)(e, () => (0, l.jsx)(d, { project: t, guildId: n }));
}
