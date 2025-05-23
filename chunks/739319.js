n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    a = n(73800),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(454585),
    c = n(572004),
    d = n(388032),
    u = n(42055);
function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: m }
            }
        } = e,
        [p, _] = a.useState(!1),
        g = a.useRef(s.Z.reactParserFor(s.Z.defaultRules));
    return m
        ? (0, r.jsxs)('div', {
              className: u.container,
              children: [
                  (0, r.jsx)(o.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-secondary',
                      className: u.header,
                      children: t
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      className: u.bodyText,
                      children: g.current(n)
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: l()(u.smsNumberContainer, { [u.copied]: p }),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  selectable: !0,
                                  className: u.smsNumberText,
                                  children: i
                              }),
                              (0, r.jsx)(o.zxk, {
                                  size: o.zxk.Sizes.SMALL,
                                  className: u.__invalid_trailingButton,
                                  onClick: () => {
                                      (0, c.JG)(i, () => _(!0));
                                  },
                                  color: o.zxk.Colors.PRIMARY,
                                  children: p ? d.intl.string(d.t['t5VZ8/']) : d.intl.string(d.t.OpuAlJ)
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
