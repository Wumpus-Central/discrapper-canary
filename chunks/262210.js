n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(429551),
    o = n(163646);
function s(e) {
    let { start: t, end: n } = e,
        {
            elapsed: s,
            duration: l,
            percentage: c
        } = (0, a.Z)({
            start: t,
            end: n
        });
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: o.text,
                children: (0, a.m)(s)
            }),
            (0, r.jsx)('div', {
                className: o.bar,
                children: (0, r.jsx)('div', {
                    className: o.progress,
                    style: { width: ''.concat(100 * c, '%') }
                })
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: o.text,
                children: (0, a.m)(l)
            })
        ]
    });
}
