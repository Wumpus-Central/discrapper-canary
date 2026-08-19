t.d(n, { A: () => d });
var l = t(477900);
t(580321);
var i = t(849516),
    s = t(17928),
    a = t(446243),
    r = t(558076),
    o = t(204651),
    c = t(375708),
    u = t(1195);
function d(e) {
    let { channel: n, themeable: t } = e,
        d = (0, s.bG)([r.A], () => null != r.A.getPendingNote(n.id)),
        A = (0, s.bG)([r.A], () => r.A.getNotes(n.id).length >= 20);
    return (0, l.jsx)(o.l, {
        isTrayButton: !0,
        themeable: t,
        label: A ? c.intl.string(u.default.k4cbsb) : c.intl.string(u.default["lL1Y+d"]),
        iconComponent: i.u,
        onClick: function () {
            (0, a.WT)(n.id);
        },
        disabled: d || A,
    });
}
