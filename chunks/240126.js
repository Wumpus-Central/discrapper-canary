n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(499033),
    a = n(388032),
    o = n(243946);
function s(e) {
    let { Icon: t, header: n, tip: s, disableStars: c } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsxs)('div', {
                className: o.iconContainer,
                children: [
                    (0, i.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: o.icon,
                        width: 36,
                        height: 36
                    }),
                    c ? null : (0, i.jsx)(l.Z, { className: o.stars })
                ]
            }),
            (0, i.jsx)(r.Heading, {
                className: o.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsxs)(r.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: [
                    c
                        ? null
                        : (0, i.jsxs)(r.Text, {
                              tag: 'span',
                              className: o.protip,
                              variant: 'text-xs/bold',
                              color: 'text-positive',
                              children: [a.intl.string(a.t['8tvIiI']), ':', ' ']
                          }),
                    s
                ]
            })
        ]
    });
}
