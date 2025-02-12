n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(388032),
    c = n(906687);
function d(e) {
    let { className: t, onJump: n } = e,
        [a, d] = l.useState(!1);
    return (0, i.jsx)(s.P3F, {
        className: r()(c.jumpButton, t),
        onClick: (e) => {
            d(!0), n(e);
        },
        children: a
            ? (0, i.jsx)(s.$jN, { type: s.$jN.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(s.Text, {
                  variant: 'text-xs/normal',
                  className: c.text,
                  children: o.intl.string(o.t.k5WiPT)
              })
    });
}
