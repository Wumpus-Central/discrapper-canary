n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(429551),
    a = n(163646);
function s(e) {
    let { start: t, end: n } = e,
        {
            elapsed: s,
            duration: l,
            percentage: c
        } = (0, o.Z)({
            start: t,
            end: n
        });
    return (0, r.jsxs)('div', {
        className: a.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: a.text,
                children: (0, o.m)(s)
            }),
            (0, r.jsx)('div', {
                className: a.bar,
                children: (0, r.jsx)('div', {
                    className: a.progress,
                    style: { width: ''.concat(100 * c, '%') }
                })
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: a.text,
                children: (0, o.m)(l)
            })
        ]
    });
}
