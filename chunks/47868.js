t.d(n, { A: () => p });
var l = t(627968),
    i = t(64700),
    a = t(503698),
    s = t.n(a),
    r = t(815021),
    o = t(939249),
    c = t(534514),
    u = t(834730),
    d = t(320448),
    A = t(985018),
    h = t(291552);
function p(e) {
    let {
            className: n,
            iconContainerClassName: t,
            icon: a,
            title: p,
            description: m,
            userCount: g,
            onClick: f,
            highlight: C,
            onDismiss: E,
        } = e,
        v = i.useCallback(
            (e) => {
                e.stopPropagation(), E?.();
            },
            [E],
        );
    return (0, l.jsxs)(o.D, {
        className: s()(h.kL, n, null != C && { [h.U6]: C }),
        onClick: f,
        children: [
            (0, l.jsx)("div", { className: s()(h.Kk, t), children: a }),
            (0, l.jsxs)("div", {
                className: h.FS,
                children: [
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: p }),
                    (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-strong", className: h.mG, children: m }),
                    null != g && g > 0
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: h.Om,
                                      children: "•",
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-strong",
                                      className: h.mG,
                                      children: A.intl.format(A.t.NywdIj, { count: g }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != E
                ? (0, l.jsx)("div", { className: h.r, children: (0, l.jsx)(r.J, { size: "xs", onClick: v }) })
                : (0, l.jsx)(d._, { size: "xs", color: "currentColor", className: h.OW }),
        ],
    });
}
