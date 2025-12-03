n.d(t, { Z: () => d }), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(159691),
    s = n(481060),
    c = n(388032),
    u = n(367390);
function d(e) {
    let {
            className: t,
            iconContainerClassName: n,
            icon: l,
            title: d,
            description: p,
            userCount: h,
            onClick: f,
            highlight: m,
            onDismiss: g,
        } = e,
        b = r.useCallback(
            (e) => {
                e.stopPropagation(), null == g || g();
            },
            [g],
        );
    return (0, i.jsxs)(s.P3F, {
        className: a()(u.container, t, null != m && { [u.pulse]: m }),
        onClick: f,
        children: [
            (0, i.jsx)("div", {
                className: a()(u.icon, n),
                children: l,
            }),
            (0, i.jsxs)("div", {
                className: u.textContainer,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d,
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        className: u.inline,
                        children: p,
                    }),
                    null != h && h > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: u.dot,
                                      children: "\u2022",
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: u.inline,
                                      children: c.intl.format(c.t.NywdIj, { count: h }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != g
                ? (0, i.jsx)("div", {
                      className: u.dismissButton,
                      children: (0, i.jsx)(o.PZ7, {
                          size: "xs",
                          onClick: b,
                      }),
                  })
                : (0, i.jsx)(s.Fbu, {
                      size: "xs",
                      color: "currentColor",
                      className: u.caret,
                  }),
        ],
    });
}
