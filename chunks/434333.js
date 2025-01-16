r.d(n, {
    k: function () {
        return f;
    },
    m: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(1561),
    u = r(481060),
    c = r(195895);
let d = {
        RED: c.backgroundRed,
        BACKGROUND_TERTIARY: c.backgroundTertiary,
        BACKGROUND_ACCENT: c.backgroundAccent
    },
    f = a.forwardRef(function (e, n) {
        let { role: r, children: a, className: s, onDismiss: f, backgroundColor: _ = d.RED, icon: h = u.CircleWarningIcon, iconClassName: p } = e;
        return (0, i.jsxs)('div', {
            className: o()(c.error, s, _),
            ref: n,
            children: [
                (0, i.jsx)(h, {
                    className: o()(c.icon, p),
                    color: 'currentColor'
                }),
                (0, i.jsx)('div', {
                    role: r,
                    className: c.text,
                    children: a
                }),
                null != f
                    ? (0, i.jsx)(l.P, {
                          onClick: f,
                          className: c.errorClose,
                          children: (0, i.jsx)(u.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: c.errorCloseIcon
                          })
                      })
                    : null
            ]
        });
    });
