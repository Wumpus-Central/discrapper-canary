(n.d(t, { Z: () => m }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(120356),
    o = n.n(i),
    l = n(481060),
    s = n(454585),
    c = n(572004),
    d = n(388032),
    u = n(163124);
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
                  (0, r.jsx)(l.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-secondary',
                      className: u.header,
                      children: t
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      className: u.bodyText,
                      children: g.current(n)
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: o()(u.smsNumberContainer, { [u.copied]: p }),
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  selectable: !0,
                                  className: u.smsNumberText,
                                  children: i
                              }),
                              (0, r.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, r.jsx)(l.zxk, {
                                      variant: 'secondary',
                                      size: 'sm',
                                      text: p ? d.intl.string(d.t['t5VZ8/']) : d.intl.string(d.t.OpuAlJ),
                                      onClick: () => {
                                          (0, c.JG)(i, () => _(!0));
                                      }
                                  })
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
