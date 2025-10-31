n.d(t, { Z: () => c }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(388032),
    s = n(367390);
function c(e) {
    let {
        className: t,
        iconContainerClassName: n,
        icon: i,
        title: c,
        description: u,
        userCount: d,
        onClick: p,
        highlight: f,
    } = e;
    return (0, r.jsxs)(a.P3F, {
        className: l()(s.container, t, null != f && { [s.pulse]: f }),
        onClick: p,
        children: [
            (0, r.jsx)("div", {
                className: l()(s.icon, n),
                children: i,
            }),
            (0, r.jsxs)("div", {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-primary",
                        children: c,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-primary",
                        className: s.inline,
                        children: u,
                    }),
                    null != d && d > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-primary",
                                      className: s.dot,
                                      children: "\u2022",
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-primary",
                                      className: s.inline,
                                      children: o.intl.format(o.t.NywdIj, { count: d }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(a.Fbu, {
                size: "xs",
                color: "currentColor",
                className: s.caret,
            }),
        ],
    });
}
