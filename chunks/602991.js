l.d(e, { S: () => c, V: () => x });
var s = l(477900);
l(582128);
var i = l(442433),
    a = l(800202),
    r = l(174865),
    t = l(193072),
    d = l(95264);
function u(n, e) {
    let { onExport: l } = (0, a.A)(n);
    return { ...(0, r.A)(n, e), onRemix: () => (0, d.A)(n, e), onExport: l };
}
function o(n) {
    let { project: e, guildId: l } = n,
        a = u(e, l);
    return (0, s.jsx)(t.z, { ...a, onCloseMenu: i.Z_ });
}
function c(n) {
    let { project: e, guildId: l } = n,
        i = u(e, l);
    return (0, s.jsx)(t.A, { ...i, trigger: "iconButton" });
}
function x(n, e, l) {
    (0, i.jA)(n, () => (0, s.jsx)(o, { project: e, guildId: l }));
}
