n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(499033),
    o = n(388032),
    l = n(108457);
function s(e) {
    let { Icon: t, header: n, tip: s, disableStars: c } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsxs)('div', {
                className: l.iconContainer,
                children: [
                    (0, r.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: l.icon,
                        width: 36,
                        height: 36
                    }),
                    c ? null : (0, r.jsx)(a.Z, { className: l.stars })
                ]
            }),
            (0, r.jsx)(i.X6q, {
                className: l.header,
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
                              className: l.protip,
                              variant: 'text-xs/bold',
                              color: 'text-positive',
                              children: [o.NW.string(o.t['8tvIiI']), ':', ' ']
                          }),
                    s
                ]
            })
        ]
    });
}
