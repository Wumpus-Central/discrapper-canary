n.d(t, {
    k: () => d,
    m: () => u
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(1561),
    l = n(481060),
    c = n(220087);
let u = {
        RED: c.backgroundRed,
        BACKGROUND_TERTIARY: c.backgroundTertiary,
        BACKGROUND_ACCENT: c.backgroundAccent
    },
    d = i.forwardRef(function (e, t) {
        let { role: n, children: i, className: o, onDismiss: d, backgroundColor: f = u.RED, icon: _ = l.P4T, iconClassName: p } = e;
        return (0, r.jsxs)('div', {
            className: a()(c.error, o, f),
            ref: t,
            children: [
                (0, r.jsx)(_, {
                    className: a()(c.icon, p),
                    color: 'currentColor'
                }),
                (0, r.jsx)('div', {
                    role: n,
                    className: c.text,
                    children: i
                }),
                null != d
                    ? (0, r.jsx)(s.P, {
                          onClick: d,
                          className: c.errorClose,
                          children: (0, r.jsx)(l.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: c.errorCloseIcon
                          })
                      })
                    : null
            ]
        });
    });
