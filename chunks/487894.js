n.d(t, { Z: () => c });
var a = n(200651);
n(192379);
var l = n(481060),
    s = n(499033),
    r = n(665906),
    i = n(388032),
    o = n(567170);
function c(e) {
    let { channel: t, header: n, startThread: c } = e,
        d = (0, r.NE)(t),
        u = (0, r.Xu)(t);
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            (0, a.jsxs)('div', {
                className: o.iconContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: o.icon,
                        children: (0, a.jsx)(l.or_, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 36,
                            height: 36
                        })
                    }),
                    (0, a.jsx)(s.Z, { className: o.stars })
                ]
            }),
            (0, a.jsx)(l.X6q, {
                className: o.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, a.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-md/normal',
                children: i.intl.string(i.t.jmq9GB)
            }),
            d || u
                ? (0, a.jsx)(l.zxk, {
                      className: o.cta,
                      onClick: c,
                      children: i.intl.string(i.t.rBIGBA)
                  })
                : null
        ]
    });
}
