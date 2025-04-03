n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
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
        [x, p] = l.useState(!1),
        f = l.useRef(s.Z.reactParserFor(s.Z.defaultRules));
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
                      children: f.current(n)
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: a()(u.smsNumberContainer, { [u.copied]: x }),
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
                                      (0, c.JG)(i) && p(!0);
                                  },
                                  color: o.zxk.Colors.PRIMARY,
                                  children: x ? d.NW.string(d.t['t5VZ8/']) : d.NW.string(d.t.OpuAlJ)
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
