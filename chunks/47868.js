n.d(t, { A: () => m });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(815021),
    o = n(939249),
    c = n(534514),
    u = n(834730),
    d = n(320448),
    A = n(985018),
    E = n(11699);
function m(e) {
    let {
            className: t,
            iconContainerClassName: n,
            icon: s,
            title: m,
            description: h,
            userCount: C,
            onClick: g,
            highlight: I,
            onDismiss: p,
        } = e,
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), p?.();
            },
            [p],
        );
    return (0, l.jsxs)(o.D, {
        className: a()(E.kL, t, null != I && { [E.U6]: I }),
        onClick: g,
        children: [
            (0, l.jsx)("div", { className: a()(E.Kk, n), children: s }),
            (0, l.jsxs)("div", {
                className: E.FS,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: m }),
                    (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: E.mG, children: h }),
                    null != C && C > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: E.Om,
                                      children: "•",
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: E.mG,
                                      children: A.intl.format(A.t.NywdIj, { count: C }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != p
                ? (0, l.jsx)("div", { className: E.r, children: (0, l.jsx)(r.J, { size: "xs", onClick: x }) })
                : (0, l.jsx)(d._, { size: "xs", color: "currentColor", className: E.OW }),
        ],
    });
}
