n.d(t, {
    k: () => d,
    m: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(481060),
    u = n(195895);
let c = {
        RED: u.backgroundRed,
        BACKGROUND_TERTIARY: u.backgroundTertiary,
        BACKGROUND_ACCENT: u.backgroundAccent
    },
    d = r.forwardRef(function (e, t) {
        let { role: n, children: r, className: a, onDismiss: d, backgroundColor: f = c.RED, icon: _ = l.P4T, iconClassName: p } = e;
        return (0, i.jsxs)('div', {
            className: s()(u.error, a, f),
            ref: t,
            children: [
                (0, i.jsx)(_, {
                    className: s()(u.icon, p),
                    color: 'currentColor'
                }),
                (0, i.jsx)('div', {
                    role: n,
                    className: u.text,
                    children: r
                }),
                null != d
                    ? (0, i.jsx)(o.P, {
                          onClick: d,
                          className: u.errorClose,
                          children: (0, i.jsx)(l.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: u.errorCloseIcon
                          })
                      })
                    : null
            ]
        });
    });
