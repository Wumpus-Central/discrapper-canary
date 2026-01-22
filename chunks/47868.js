n.d(t, {
    A: () => d,
}),
    n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(732955),
    o = n(397927),
    c = n(985018),
    u = n(67170);

function d(e) {
    let {
            className: t,
            iconContainerClassName: n,
            icon: i,
            title: d,
            description: f,
            userCount: p,
            onClick: h,
            highlight: b,
            onDismiss: g,
        } = e,
        m = l.useCallback(
            (e) => {
                e.stopPropagation(), null == g || g();
            },
            [g],
        );
    return (0, r.jsxs)(o.DUT, {
        className: a()(
            u.kL,
            t,
            null != b && {
                [u.U6]: b,
            },
        ),
        onClick: h,
        children: [
            (0, r.jsx)("div", {
                className: a()(u.Kk, n),
                children: i,
            }),
            (0, r.jsxs)("div", {
                className: u.FS,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: d,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        className: u.mG,
                        children: f,
                    }),
                    null != p && p > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: u.Om,
                                      children: "•",
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: u.mG,
                                      children: c.intl.format(c.t.NywdIj, {
                                          count: p,
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != g
                ? (0, r.jsx)("div", {
                      className: u.r,
                      children: (0, r.jsx)(s.JnF, {
                          size: "xs",
                          onClick: m,
                      }),
                  })
                : (0, r.jsx)(o._BQ, {
                      size: "xs",
                      color: "currentColor",
                      className: u.OW,
                  }),
        ],
    });
}
