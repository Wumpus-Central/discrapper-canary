n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(454585),
    c = n(572004),
    d = n(388032),
    u = n(419175);
function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: l, is_localized: m },
            },
        } = e,
        [p, g] = i.useState(!1),
        _ = i.useRef(o.Z.reactParserFor(o.Z.defaultRules));
    return m
        ? (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(s.X6q, {
                      variant: "heading-sm/semibold",
                      color: "header-secondary",
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
                                  children: l,
                              }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, r.jsx)(s.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: p ? d.intl.string(d.t["t5VZ8/"]) : d.intl.string(d.t.OpuAlJ),
                                      onClick: () => {
                                          (0, c.JG)(l, () => g(!0));
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
