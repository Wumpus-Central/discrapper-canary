t.d(n, { A: () => m });
var i = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(815021),
    o = t(939249),
    c = t(297264),
    u = t(834730),
    d = t(320448),
    A = t(105292),
    h = t(906212);
function m(e) {
    let {
            className: n,
            iconContainerClassName: t,
            icon: s,
            title: m,
            description: g,
            userCount: x,
            onClick: C,
            highlight: f,
            onDismiss: p,
        } = e,
        E = l.useCallback(
            (e) => {
                (e.stopPropagation(), p?.());
            },
            [p],
        );
    return (0, i.jsxs)(o.D, {
        className: a()(h.kL, n, null != f && { [h.U6]: f }),
        onClick: C,
        children: [
            (0, i.jsx)("div", { className: a()(h.Kk, t), children: s }),
            (0, i.jsxs)("div", {
                className: h.FS,
                children: [
                    (0, i.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: m }),
                    (0, i.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: h.mG, children: g }),
                    null != x && x > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: h.Om,
                                      children: "\u2022",
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: h.mG,
                                      children: A.intl.format(A.t.NywdIj, { count: x }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != p
                ? (0, i.jsx)("div", { className: h.r, children: (0, i.jsx)(r.J, { size: "xs", onClick: E }) })
                : (0, i.jsx)(d._, { size: "xs", color: "currentColor", className: h.OW }),
        ],
    });
}
