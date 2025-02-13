n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(499033),
    r = n(388032),
    s = n(525882);
function o(e) {
    let { Icon: t, header: n, tip: o, disableStars: c } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsxs)('div', {
                className: s.iconContainer,
                children: [
                    (0, i.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: s.icon,
                        width: 36,
                        height: 36
                    }),
                    c ? null : (0, i.jsx)(a.Z, { className: s.stars })
                ]
            }),
            (0, i.jsx)(l.X6q, {
                className: s.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsxs)(l.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: [
                    c
                        ? null
                        : (0, i.jsxs)(l.Text, {
                              tag: 'span',
                              className: s.protip,
                              variant: 'text-xs/bold',
                              color: 'text-positive',
                              children: [r.intl.string(r.t['8tvIiI']), ':', ' ']
                          }),
                    o
                ]
            })
        ]
    });
}
