n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(499033),
    l = n(388032),
    o = n(35539);
function s(e) {
    let { Icon: t, header: n, tip: s, disableStars: c } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsxs)('div', {
                className: o.iconContainer,
                children: [
                    (0, r.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: o.icon,
                        width: 36,
                        height: 36
                    }),
                    c ? null : (0, r.jsx)(a.Z, { className: o.stars })
                ]
            }),
            (0, r.jsx)(i.X6q, {
                className: o.header,
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, r.jsxs)(i.Text, {
                color: 'header-secondary',
                variant: 'text-xs/normal',
                children: [
                    c
                        ? null
                        : (0, r.jsxs)(i.Text, {
                              tag: 'span',
                              className: o.protip,
                              variant: 'text-xs/bold',
                              color: 'text-positive',
                              children: [l.NW.string(l.t['8tvIiI']), ':', ' ']
                          }),
                    s
                ]
            })
        ]
    });
}
