n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(454585),
    d = n(572004),
    c = n(388032),
    u = n(852950);
function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: m },
            },
        } = e,
        [p, g] = l.useState(!1),
        _ = l.useRef(o.Z.reactParserFor(o.Z.defaultRules));
    return m
        ? (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      className: u.header,
                      children: t,
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      className: u.bodyText,
                      children: _.current(n),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: a()(u.smsNumberContainer, { [u.copied]: p }),
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: u.smsNumberText,
                                  children: i,
                              }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, r.jsx)(s.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: p ? c.intl.string(c.t.t5VZ88) : c.intl.string(c.t.OpuAlK),
                                      onClick: () => {
                                          (0, d.JG)(i, () => g(!0));
                                      },
                                  }),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null;
}
