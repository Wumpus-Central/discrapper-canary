n.d(t, { S: () => c, V: () => f });
var l = n(477900);
n(582128);
var a = n(442433),
    r = n(800202),
    i = n(260498),
    s = n(193072),
    u = n(95264);
function o(e, t) {
    let { onExport: n } = (0, r.A)(e);
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, i.PV)(e),
        canRemix: (0, i.H_)(e),
        onRemix: () => (0, u.A)(e, t),
        onExport: n,
    };
}
function d(e) {
    let { project: t, guildId: n } = e,
        r = o(t, n);
    return (0, l.jsx)(s.z, { ...r, onCloseMenu: a.Z_ });
}
function c(e) {
    let { project: t, guildId: n } = e,
        a = o(t, n);
    return (0, l.jsx)(s.A, { ...a, trigger: "iconButton" });
}
function f(e, t, n) {
    (0, a.jA)(e, () => (0, l.jsx)(d, { project: t, guildId: n }));
}
