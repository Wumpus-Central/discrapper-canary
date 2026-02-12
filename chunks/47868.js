n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(732955),
    o = n(397927),
    d = n(985018),
    c = n(67170);
function u(e) {
    let {
            className: t,
            iconContainerClassName: n,
            icon: s,
            title: u,
            description: h,
            userCount: A,
            onClick: m,
            highlight: p,
            onDismiss: g,
        } = e,
        _ = l.useCallback(
            (e) => {
                e.stopPropagation(), g?.();
            },
            [g],
        );
    return (0, i.jsxs)(o.DUT, {
        className: a()(c.kL, t, null != p && { [c.U6]: p }),
        onClick: m,
        children: [
            (0, i.jsx)("div", { className: a()(c.Kk, n), children: s }),
            (0, i.jsxs)("div", {
                className: c.FS,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-md/semibold", color: "text-strong", children: u }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        className: c.mG,
                        children: h,
                    }),
                    null != A && A > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: c.Om,
                                      children: "•",
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: c.mG,
                                      children: d.intl.format(d.t.NywdIj, { count: A }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != g
                ? (0, i.jsx)("div", { className: c.r, children: (0, i.jsx)(r.JnF, { size: "xs", onClick: _ }) })
                : (0, i.jsx)(o._BQ, { size: "xs", color: "currentColor", className: c.OW }),
        ],
    });
}
