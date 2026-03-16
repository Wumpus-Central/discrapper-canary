"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(732955),
    o = n(397927),
    c = n(985018),
    d = n(67170);
function u(e) {
    let {
            className: t,
            iconContainerClassName: n,
            icon: l,
            title: u,
            description: h,
            userCount: A,
            onClick: m,
            highlight: p,
            onDismiss: g,
        } = e,
        _ = s.useCallback(
            (e) => {
                e.stopPropagation(), g?.();
            },
            [g],
        );
    return (0, i.jsxs)(o.DUT, {
        className: r()(d.kL, t, null != p && { [d.U6]: p }),
        onClick: m,
        children: [
            (0, i.jsx)("div", { className: r()(d.Kk, n), children: l }),
            (0, i.jsxs)("div", {
                className: d.FS,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-md/semibold", color: "text-strong", children: u }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        className: d.mG,
                        children: h,
                    }),
                    null != A && A > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: d.Om,
                                      children: "•",
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: d.mG,
                                      children: c.intl.format(c.t.NywdIj, { count: A }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != g
                ? (0, i.jsx)("div", { className: d.r, children: (0, i.jsx)(a.JnF, { size: "xs", onClick: _ }) })
                : (0, i.jsx)(o._BQ, { size: "xs", color: "currentColor", className: d.OW }),
        ],
    });
}
