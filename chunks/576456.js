n.d(t, { A: () => h });
var s = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(939249),
    o = n(289873),
    d = n(834730),
    c = n(985018),
    u = n(373423);
function h(e) {
    let { className: t, onJump: n } = e,
        [l, h] = a.useState(!1);
    return (0, s.jsx)(r.D, {
        className: i()(u.n, t),
        onClick: (e) => {
            h(!0), n(e);
        },
        children: l
            ? (0, s.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS })
            : (0, s.jsx)(d.E, { variant: "text-xs/medium", className: u.Q, children: c.intl.string(c.t.k5WiPf) }),
    });
}
