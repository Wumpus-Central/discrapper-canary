r.d(n, {
    Q: function () {
        return i;
    },
    W: function () {
        return f;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(552633);
function c(e) {
    switch (e) {
        case 0:
            return l.CircleWarningIcon;
        case 1:
            return l.CircleInformationIcon;
        case 2:
            return l.CircleXIcon;
        case 3:
            return l.CheckmarkLargeIcon;
    }
}
function d(e) {
    switch (e) {
        case 0:
            return u.warning;
        case 1:
            return u.info;
        case 2:
            return u.error;
        case 3:
            return u.positive;
    }
}
function f(e) {
    let { children: n, messageType: r, className: i, textColor: o = 'text-normal', textVariant: f = 'text-sm/medium' } = e,
        p = c(r),
        h = d(r);
    return (0, a.jsxs)('div', {
        className: s()(u.container, h, i),
        children: [
            (0, a.jsx)('div', {
                className: u.iconDiv,
                children: (0, a.jsx)(p, {
                    className: u.icon,
                    color: 'currentColor'
                })
            }),
            (0, a.jsx)(l.Text, {
                className: u.text,
                color: o,
                variant: f,
                children: n
            })
        ]
    });
}
!(function (e) {
    (e[(e.WARNING = 0)] = 'WARNING'), (e[(e.INFO = 1)] = 'INFO'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.POSITIVE = 3)] = 'POSITIVE');
})(i || (i = {}));
