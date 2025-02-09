n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(429551),
    s = n(253513);
function o(e) {
    let { start: t, end: n } = e,
        {
            elapsed: o,
            duration: l,
            percentage: u
        } = (0, a.Z)({
            start: t,
            end: n
        });
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.text,
                children: (0, a.m)(o)
            }),
            (0, i.jsx)('div', {
                className: s.bar,
                children: (0, i.jsx)('div', {
                    className: s.progress,
                    style: { width: ''.concat(100 * u, '%') }
                })
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.text,
                children: (0, a.m)(l)
            })
        ]
    });
}
