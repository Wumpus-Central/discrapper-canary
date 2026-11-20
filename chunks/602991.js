var s = l(477900);
l(582128);
var t = l(442433),
    i = l(800202),
    a = l(174865),
    r = l(119199),
    o = l(95264);
function u(n, e) {
    let { onExport: l } = (0, i.A)(n);
    return { ...(0, a.A)(n, e), onRemix: () => (0, o.A)(n, e), onExport: l };
}
function d(n) {
    let { project: e, guildId: l } = n,
        i = u(e, l);
    return (0, s.jsx)(r.z, { ...i, onCloseMenu: t.Z_ });
}
l.d(
    e,
    {},
    {
        S: function (n) {
            let { project: e, guildId: l } = n,
                t = u(e, l);
            return (0, s.jsx)(r.A, { ...t });
        },
        V: function (n, e, l) {
            (0, t.jA)(n, () => (0, s.jsx)(d, { project: e, guildId: l }));
        },
    },
);
