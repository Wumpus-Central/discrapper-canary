n.d(t, { Z: () => u }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(388032),
    c = n(144058);
function u(e) {
    let { className: t, onJump: n } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(o.P3F, {
        className: a()(c.jumpButton, t),
        onClick: (e) => {
            u(!0), n(e);
        },
        children: l
            ? (0, r.jsx)(o.$jN, { type: o.$jN.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(o.Text, {
                  variant: 'text-xs/medium',
                  className: c.text,
                  children: s.intl.string(s.t.k5WiPT)
              })
    });
}
