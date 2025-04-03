n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var a = n(481060),
    s = n(499033),
    l = n(665906),
    i = n(388032),
    o = n(268797);
function c(e) {
    let { channel: t, header: n, startThread: c } = e,
        d = (0, l.NE)(t),
        u = (0, l.Xu)(t);
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsxs)('div', {
                className: o.iconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: o.icon,
                        children: (0, r.jsx)(a.or_, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 36,
                            height: 36
                        })
                    }),
                    (0, r.jsx)(s.Z, { className: o.stars })
                ]
            }),
            (0, r.jsx)(a.X6q, {
                className: o.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, r.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-md/normal',
                children: i.NW.string(i.t.jmq9GB)
            }),
            d || u
                ? (0, r.jsx)(a.zxk, {
                      className: o.cta,
                      onClick: c,
                      children: i.NW.string(i.t.rBIGBA)
                  })
                : null
        ]
    });
}
