n.d(t, {
    Q: () => l,
    W: () => d
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(552633),
    l = (function (e) {
        return (e[(e.WARNING = 0)] = 'WARNING'), (e[(e.INFO = 1)] = 'INFO'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.POSITIVE = 3)] = 'POSITIVE'), e;
    })({});
function u(e) {
    switch (e) {
        case 0:
            return s.P4T;
        case 1:
            return s.d3s;
        case 2:
            return s.k$p;
        case 3:
            return s.dz2;
    }
}
function c(e) {
    switch (e) {
        case 0:
            return o.warning;
        case 1:
            return o.info;
        case 2:
            return o.error;
        case 3:
            return o.positive;
    }
}
function d(e) {
    let { children: t, messageType: n, className: r, textColor: l = 'text-normal', textVariant: d = 'text-sm/medium' } = e,
        f = u(n),
        _ = c(n);
    return (0, i.jsxs)('div', {
        className: a()(o.container, _, r),
        children: [
            (0, i.jsx)('div', {
                className: o.iconDiv,
                children: (0, i.jsx)(f, {
                    className: o.icon,
                    color: 'currentColor'
                })
            }),
            (0, i.jsx)(s.Text, {
                className: o.text,
                color: l,
                variant: d,
                children: t
            })
        ]
    });
}
