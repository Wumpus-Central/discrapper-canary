n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(388032),
    c = n(68394);
function d(e) {
    let { className: t, onJump: n } = e,
        [l, d] = r.useState(!1);
    return (0, i.jsx)(o.Clickable, {
        className: a()(c.jumpButton, t),
        onClick: (e) => {
            d(!0), n(e);
        },
        children: l
            ? (0, i.jsx)(o.Spinner, { type: o.Spinner.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(o.Text, {
                  variant: 'text-xs/normal',
                  className: c.text,
                  children: s.intl.string(s.t.k5WiPT)
              })
    });
}
