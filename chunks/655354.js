n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(388032),
    c = n(882412);
function d(e) {
    let { className: t, onJump: n } = e,
        [a, d] = i.useState(!1);
    return (0, r.jsx)(l.P3F, {
        className: o()(c.jumpButton, t),
        onClick: (e) => {
            d(!0), n(e);
        },
        children: a
            ? (0, r.jsx)(l.$jN, { type: l.$jN.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(l.Text, {
                  variant: 'text-xs/normal',
                  className: c.text,
                  children: s.NW.string(s.t.k5WiPT)
              })
    });
}
