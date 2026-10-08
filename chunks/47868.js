t.d(n, { A: () => m });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(815021),
    r = t(939249),
    c = t(297264),
    u = t(834730),
    d = t(320448),
    A = t(660183),
    h = t(906212);
function m(e) {
    let {
            className: n,
            iconContainerClassName: t,
            icon: a,
            title: m,
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
        className: s()(h.kL, n, null != g && { [h.U6]: g }),
        onClick: x,
        children: [
            (0, l.jsx)("div", { className: s()(h.Kk, t), children: a }),
            (0, l.jsxs)("div", {
                className: h.FS,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: m }),
                    (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: h.mG, children: C }),
                    null != p && p > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: h.Om,
                                      children: "\u2022",
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: h.mG,
                                      children: A.intl.format(A.t.NywdIj, { count: p }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != f
                ? (0, l.jsx)("div", { className: h.r, children: (0, l.jsx)(o.J, { size: "xs", onClick: E }) })
                : (0, l.jsx)(d._, { size: "xs", color: "currentColor", className: h.OW }),
        ],
    });
}
