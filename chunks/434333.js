n.d(t, {
    k: () => d,
    m: () => u,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(1561),
    l = n(481060),
    c = n(198551);
let u = {
        RED: c.backgroundRed,
        BACKGROUND_TERTIARY: c.backgroundTertiary,
        BACKGROUND_ACCENT: c.backgroundAccent,
    },
    d = i.forwardRef(function (e, t) {
        let {
            children: n,
            className: i,
            onDismiss: a,
            backgroundColor: d = u.RED,
            icon: f = l.Mgn,
            iconClassName: _,
        } = e;
        return (0, r.jsxs)("div", {
            className: o()(c.error, i, d),
            ref: t,
            children: [
                (0, r.jsx)(f, {
                    className: o()(c.icon, _),
                    color: "currentColor",
                }),
                (0, r.jsx)("div", {
                    className: c.text,
                    children: n,
                }),
                null != a
                    ? (0, r.jsx)(s.P, {
                          onClick: a,
                          className: c.errorClose,
                          children: (0, r.jsx)(l.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: c.errorCloseIcon,
                          }),
                      })
                    : null,
            ],
        });
    });
