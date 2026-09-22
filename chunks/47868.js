t.d(n, { A: () => h });
var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    o = t(815021),
    r = t(939249),
    c = t(297264),
    u = t(834730),
    d = t(320448),
    A = t(375708),
    m = t(906212);
function h(e) {
    let {
            className: n,
            iconContainerClassName: t,
            icon: s,
            title: h,
            description: C,
            userCount: p,
            onClick: x,
            highlight: g,
            onDismiss: f,
        } = e,
        E = l.useCallback(
            (e) => {
                (e.stopPropagation(), f?.());
            },
            [f],
        );
    return (0, i.jsxs)(r.D, {
        className: a()(m.kL, n, null != g && { [m.U6]: g }),
        onClick: x,
        children: [
            (0, i.jsx)("div", { className: a()(m.Kk, t), children: s }),
            (0, i.jsxs)("div", {
                className: m.FS,
                children: [
                    (0, i.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: h }),
                    (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: m.mG, children: C }),
                    null != p && p > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: m.Om,
                                      children: "\u2022",
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: m.mG,
                                      children: A.intl.format(A.t.NywdIj, { count: p }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != f
                ? (0, i.jsx)("div", { className: m.r, children: (0, i.jsx)(o.J, { size: "xs", onClick: E }) })
                : (0, i.jsx)(d._, { size: "xs", color: "currentColor", className: m.OW }),
        ],
    });
}
