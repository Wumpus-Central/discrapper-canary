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
    o = r(120356),
    s = r.n(o),
    l = r(1561),
    u = r(481060),
    c = r(195895);
let d = {
        RED: c.backgroundRed,
        BACKGROUND_TERTIARY: c.backgroundTertiary,
        BACKGROUND_ACCENT: c.backgroundAccent
    },
    f = a.forwardRef(function (e, n) {
        let { role: r, children: a, className: o, onDismiss: f, backgroundColor: p = d.RED, icon: h = u.CircleWarningIcon, iconClassName: _ } = e;
        return (0, i.jsxs)('div', {
            className: s()(c.error, o, p),
            ref: n,
            children: [
                (0, i.jsx)(h, {
                    className: s()(c.icon, _),
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
