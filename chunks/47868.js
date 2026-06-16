t.d(n, { A: () => m });
var l = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(815021),
    o = t(939249),
    c = t(534514),
    u = t(834730),
    d = t(320448),
    A = t(375708),
    h = t(11699);
function m(e) {
    let {
            className: n,
            iconContainerClassName: t,
            icon: s,
            title: m,
            description: C,
            userCount: E,
            onClick: p,
            highlight: g,
            onDismiss: x,
        } = e,
        I = i.useCallback(
            (e) => {
                e.stopPropagation(), x?.();
            },
            [x],
        );
    return (0, l.jsxs)(o.D, {
        className: a()(h.kL, n, null != g && { [h.U6]: g }),
        onClick: p,
        children: [
            (0, l.jsx)("div", { className: a()(h.Kk, t), children: s }),
            (0, l.jsxs)("div", {
                className: h.FS,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: m }),
                    (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: h.mG, children: C }),
                    null != E && E > 0
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
                                      children: A.intl.format(A.t.NywdIj, { count: E }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != x
                ? (0, l.jsx)("div", { className: h.r, children: (0, l.jsx)(r.J, { size: "xs", onClick: I }) })
                : (0, l.jsx)(d._, { size: "xs", color: "currentColor", className: h.OW }),
        ],
    });
}
