n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(454585),
    c = n(572004),
    d = n(388032),
    u = n(852950);
function m(e) {
    let {
            element: {
                data: { title: t, body: n, sms: l, is_localized: m },
            },
        } = e,
        [_, p] = i.useState(!1),
        f = i.useRef(s.Z.reactParserFor(s.Z.defaultRules));
    return m
        ? (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(o.X6q, {
                      variant: "heading-sm/semibold",
                      color: "header-secondary",
                      className: u.header,
                      children: t,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: u.bodyText,
                      children: f.current(n),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: a()(u.smsNumberContainer, { [u.copied]: _ }),
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: u.smsNumberText,
                                  children: l,
                              }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, r.jsx)(o.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: _ ? d.intl.string(d.t["t5VZ8/"]) : d.intl.string(d.t.OpuAlJ),
                                      onClick: () => {
                                          (0, c.JG)(l, () => p(!0));
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
