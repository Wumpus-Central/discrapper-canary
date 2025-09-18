n.d(t, {
    k: () => u,
    m: () => c,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(198551);
let c = {
        RED: l.backgroundRed,
        BACKGROUND_TERTIARY: l.backgroundTertiary,
        BACKGROUND_ACCENT: l.backgroundAccent,
    },
    u = i.forwardRef(function (e, t) {
        let {
            children: n,
            className: i,
            onDismiss: a,
            backgroundColor: u = c.RED,
            icon: d = s.Mgn,
            iconClassName: f,
        } = e;
        return (0, r.jsxs)("div", {
            className: o()(l.error, i, u),
            ref: t,
            children: [
                (0, r.jsx)(d, {
                    className: o()(l.icon, f),
                    color: "currentColor",
                }),
                (0, r.jsx)("div", {
                    className: l.text,
                    children: n,
                }),
                null != a
                    ? (0, r.jsx)(s.P3F, {
                          onClick: a,
                          className: l.errorClose,
                          children: (0, r.jsx)(s.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: l.errorCloseIcon,
                          }),
                      })
                    : null,
            ],
        });
    });
