n.d(t, {
    Z: function () {
        return c;
    }
});
var a = n(200651);
n(192379);
var l = n(481060),
    r = n(499033),
    s = n(665906),
    i = n(388032),
    o = n(43069);
function c(e) {
    let { channel: t, header: n, startThread: c } = e,
        d = (0, s.NE)(t),
        u = (0, s.Xu)(t);
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            (0, a.jsxs)('div', {
                className: o.iconContainer,
                children: [
                    (0, a.jsx)('div', {
                        className: o.icon,
                        children: (0, a.jsx)(l.ThreadIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 36,
                            height: 36
                        })
                    }),
                    (0, a.jsx)(r.Z, { className: o.stars })
                ]
            }),
            (0, a.jsx)(l.Heading, {
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
                ? (0, a.jsx)(l.Button, {
                      className: o.cta,
                      onClick: c,
                      children: i.intl.string(i.t.rBIGBA)
                  })
                : null
        ]
    });
}
