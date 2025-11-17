n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(388032),
    c = n(59777);
function u(e) {
    let { className: t, onJump: n } = e,
        [l, u] = i.useState(!1);
    return (0, r.jsx)(a.P3F, {
        className: o()(c.jumpButton, t),
        onClick: (e) => {
            u(!0), n(e);
        },
        children: l
            ? (0, r.jsx)(a.$jN, { type: a.$jN.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(a.Text, {
                  variant: "text-xs/medium",
                  className: c.text,
                  children: s.intl.string(s.t.k5WiPf),
              }),
    });
}
