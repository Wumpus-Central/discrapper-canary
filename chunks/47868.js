t.d(n, { A: () => h });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
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
            icon: a,
            title: h,
            description: C,
            userCount: p,
            onClick: x,
            highlight: g,
            onDismiss: f,
        } = e,
        E = i.useCallback(
            (e) => {
                (e.stopPropagation(), f?.());
            },
            [f],
        );
    return (0, l.jsxs)(r.D, {
        className: s()(m.kL, n, null != g && { [m.U6]: g }),
        onClick: x,
        children: [
            (0, l.jsx)("div", { className: s()(m.Kk, t), children: a }),
            (0, l.jsxs)("div", {
                className: m.FS,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: h }),
                    (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: m.mG, children: C }),
                    null != p && p > 0
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
                                      children: A.intl.format(A.t.NywdIj, { count: p }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != f
                ? (0, l.jsx)("div", { className: m.r, children: (0, l.jsx)(o.J, { size: "xs", onClick: E }) })
                : (0, l.jsx)(d._, { size: "xs", color: "currentColor", className: m.OW }),
        ],
    });
}
