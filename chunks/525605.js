n.d(t, {
    Q: () => l,
    W: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(45323),
    l = (function (e) {
        return (e[(e.WARNING = 0)] = 'WARNING'), (e[(e.INFO = 1)] = 'INFO'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.POSITIVE = 3)] = 'POSITIVE'), e;
    })({});
function c(e) {
    switch (e) {
        case 0:
            return a.P4T;
        case 1:
            return a.d3s;
        case 2:
            return a.k$p;
        case 3:
            return a.dz2;
    }
}
function u(e) {
    switch (e) {
        case 0:
            return s.warning;
        case 1:
            return s.info;
        case 2:
            return s.error;
        case 3:
            return s.positive;
    }
}
function d(e) {
    let { children: t, messageType: n, className: i, textColor: l = 'text-normal', textVariant: d = 'text-sm/medium' } = e,
        f = c(n),
        p = u(n);
    return (0, r.jsxs)('div', {
        className: o()(s.container, p, i),
        children: [
            (0, r.jsx)('div', {
                className: s.iconDiv,
                children: (0, r.jsx)(f, {
                    className: s.icon,
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(a.Text, {
                className: s.text,
                color: l,
                variant: d,
                children: t
            })
        ]
    });
}
