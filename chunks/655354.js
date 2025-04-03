n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(388032),
    c = n(144058);
function u(e) {
    let { className: t, onJump: n } = e,
        [a, u] = i.useState(!1);
    return (0, r.jsx)(o.P3F, {
        className: l()(c.jumpButton, t),
        onClick: (e) => {
            u(!0), n(e);
        },
        children: a
            ? (0, r.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(o.Text, {
                  variant: 'text-xs/medium',
                  className: c.text,
                  children: s.NW.string(s.t.k5WiPT)
              })
    });
}
