n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(120356),
    o = n.n(i),
    l = n(481060),
    s = n(454585),
    c = n(572004),
    d = n(388032),
    u = n(852950);
function _(e) {
    let {
            element: {
                data: { title: t, body: n, sms: i, is_localized: _ },
            },
        } = e,
        [m, p] = a.useState(!1),
        g = a.useRef(s.Z.reactParserFor(s.Z.defaultRules));
    return _
        ? (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(l.X6q, {
                      variant: "heading-sm/semibold",
                      color: "header-secondary",
                      className: u.header,
                      children: t,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      className: u.bodyText,
                      children: g.current(n),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: o()(u.smsNumberContainer, { [u.copied]: m }),
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  selectable: !0,
                                  className: u.smsNumberText,
                                  children: i,
                              }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.__invalid_trailingButton,
                                  children: (0, r.jsx)(l.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: m ? d.intl.string(d.t["t5VZ8/"]) : d.intl.string(d.t.OpuAlJ),
                                      onClick: () => {
                                          (0, c.JG)(i, () => p(!0));
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
