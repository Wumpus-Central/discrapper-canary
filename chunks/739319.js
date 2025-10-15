n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(454585),
    c = n(572004),
    d = n(388032),
    u = n(852950);
function _(e) {
    let {
            element: {
                data: { title: t, body: n, sms: l, is_localized: _ },
            },
        } = e,
        [m, p] = i.useState(!1),
        g = i.useRef(s.Z.reactParserFor(s.Z.defaultRules));
    return _
        ? (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(o.Heading, {
                      variant: "heading-sm/semibold",
                      color: "header-secondary",
                      className: u.header,
                      children: t,
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      className: u.bodyText,
                      children: g.current(n),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: a()(u.smsNumberContainer, { [u.copied]: m }),
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
                                  children: (0, r.jsx)(o.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: m ? d.intl.string(d.t.t5VZ88) : d.intl.string(d.t.OpuAlK),
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
