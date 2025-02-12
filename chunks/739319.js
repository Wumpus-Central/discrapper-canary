n.d(t, { Z: () => m }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(454585),
    d = n(572004),
    c = n(388032),
    u = n(228732);
function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: r, is_localized: m }
            }
        } = e,
        [x, _] = i.useState(!1),
        h = i.useRef(o.Z.reactParserFor(o.Z.defaultRules));
    return m
        ? (0, l.jsxs)('div', {
              className: u.container,
              children: [
                  (0, l.jsx)(s.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-secondary',
                      className: u.header,
                      children: t
                  }),
                  (0, l.jsx)(s.Text, {
                      variant: 'text-sm/normal',
                      className: u.bodyText,
                      children: h.current(n)
                  }),
                  (0, l.jsx)('div', {
                      children: (0, l.jsxs)('div', {
                          className: a()(u.smsNumberContainer, { [u.copied]: x }),
                          children: [
                              (0, l.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  selectable: !0,
                                  className: u.smsNumberText,
                                  children: r
                              }),
                              (0, l.jsx)(s.zxk, {
                                  size: s.zxk.Sizes.SMALL,
                                  className: u.__invalid_trailingButton,
                                  onClick: () => {
                                      (0, d.JG)(r) && _(!0);
                                  },
                                  color: s.zxk.Colors.PRIMARY,
                                  children: x ? c.intl.string(c.t['t5VZ8/']) : c.intl.string(c.t.OpuAlJ)
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
