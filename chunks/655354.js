(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(388032),
    c = n(144058);
function u(e) {
    let { className: t, onJump: n } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(s.P3F, {
        className: o()(c.jumpButton, t),
        onClick: (e) => {
            (u(!0), n(e));
        },
        children: l
            ? (0, r.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(s.Text, {
                  variant: 'text-xs/medium',
                  className: c.text,
                  children: a.intl.string(a.t.k5WiPT)
              })
    });
}
