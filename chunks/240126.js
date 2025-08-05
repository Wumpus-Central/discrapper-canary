n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(499033),
    o = n(388032),
    s = n(35539);
function a(e) {
    let { Icon: t, header: n, tip: a, disableStars: c } = e;
    return (0, r.jsxs)('div', {
        className: s.container,
        children: [
            (0, r.jsxs)('div', {
                className: s.iconContainer,
                children: [
                    (0, r.jsx)(t, {
                        color: 'currentColor',
                        size: 'custom',
                        className: s.icon,
                        width: 36,
                        height: 36
                    }),
                    c ? null : (0, r.jsx)(l.Z, { className: s.stars })
                ]
            }),
            (0, r.jsx)(i.X6q, {
                className: s.header,
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
                              className: s.protip,
                              variant: 'text-xs/bold',
                              color: 'text-feedback-positive',
                              children: [o.intl.string(o.t['8tvIiI']), ':', ' ']
                          }),
                    a
                ]
            })
        ]
    });
}
