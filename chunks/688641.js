n.d(t, { Z: () => c }), n(953529);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(388032),
    s = n(367390);
function c(e) {
    let {
        className: t,
        iconContainerClassName: n,
        icon: r,
        title: c,
        description: u,
        userCount: d,
        onClick: p,
        highlight: h,
    } = e;
    return (0, i.jsxs)(a.P3F, {
        className: l()(s.container, t, null != h && { [s.pulse]: h }),
        onClick: p,
        children: [
            (0, i.jsx)("div", {
                className: l()(s.icon, n),
                children: r,
            }),
            (0, i.jsxs)("div", {
                className: s.textContainer,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-primary",
                        children: c,
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-primary",
                        className: s.inline,
                        children: u,
                    }),
                    null != d && d > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-primary",
                                      className: s.dot,
                                      children: "\u2022",
                                  }),
                                  (0, i.jsx)(a.Text, {
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
            (0, i.jsx)(a.Fbu, {
                size: "xs",
                color: "currentColor",
                className: s.caret,
            }),
        ],
    });
}
