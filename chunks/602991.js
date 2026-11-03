l.d(e, { S: () => o, V: () => x });
var s = l(477900);
l(582128);
var i = l(442433),
    t = l(800202),
    a = l(174865),
    r = l(193072),
    d = l(95264);
function u(n, e) {
    let { onExport: l } = (0, t.A)(n);
    return { ...(0, a.A)(n, e), onRemix: () => (0, d.A)(n, e), onExport: l };
}
function c(n) {
    let { project: e, guildId: l } = n,
        t = u(e, l);
    return (0, s.jsx)(r.z, { ...t, onCloseMenu: i.Z_ });
}
function o(n) {
    let { project: e, guildId: l } = n,
        i = u(e, l);
    return (0, s.jsx)(r.A, { ...i, trigger: "iconButton" });
}
function x(n, e, l) {
    (0, i.jA)(n, () => (0, s.jsx)(c, { project: e, guildId: l }));
}
