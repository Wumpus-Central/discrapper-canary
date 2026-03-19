"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(732955),
    o = n(397927),
    c = n(985018),
    d = n(167192);
function u(e) {
    let {
            className: t,
            iconContainerClassName: n,
            icon: l,
            title: u,
            description: h,
            userCount: A,
            onClick: m,
            highlight: g,
            onDismiss: p,
        } = e,
        _ = s.useCallback(
            (e) => {
                e.stopPropagation(), p?.();
            },
            [p],
        );
    return (0, i.jsxs)(o.DUT, {
        className: a()(d.kL, t, null != g && { [d.U6]: g }),
        onClick: m,
        children: [
            (0, i.jsx)("div", { className: a()(d.Kk, n), children: l }),
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
            null != p
                ? (0, i.jsx)("div", { className: d.r, children: (0, i.jsx)(r.JnF, { size: "xs", onClick: _ }) })
                : (0, i.jsx)(o._BQ, { size: "xs", color: "currentColor", className: d.OW }),
        ],
    });
}
