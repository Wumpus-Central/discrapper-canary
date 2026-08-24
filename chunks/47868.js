t.d(n, { A: () => h });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(815021),
    o = t(939249),
    c = t(297264),
    u = t(834730),
    d = t(320448),
    A = t(375708),
    m = t(906212);
function h(e) {
    let {
            className: n,
            iconContainerClassName: t,
            icon: a,
            title: h,
            description: C,
            userCount: E,
            onClick: f,
            highlight: p,
            onDismiss: g,
        } = e,
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), g?.();
            },
            [g],
        );
    return (0, l.jsxs)(o.D, {
        className: s()(m.kL, n, null != p && { [m.U6]: p }),
        onClick: f,
        children: [
            (0, l.jsx)("div", { className: s()(m.Kk, t), children: a }),
            (0, l.jsxs)("div", {
                className: m.FS,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: h }),
                    (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: m.mG, children: C }),
                    null != E && E > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: m.Om,
                                      children: "\u2022",
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: m.mG,
                                      children: A.intl.format(A.t.NywdIj, { count: E }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != g
                ? (0, l.jsx)("div", { className: m.r, children: (0, l.jsx)(r.J, { size: "xs", onClick: x }) })
                : (0, l.jsx)(d._, { size: "xs", color: "currentColor", className: m.OW }),
        ],
    });
}
