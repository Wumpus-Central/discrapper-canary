r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(429551),
    s = r(563081);
function l(e) {
    let { start: n, end: r } = e,
        {
            elapsed: l,
            duration: u,
            percentage: c
        } = (0, o.Z)({
            start: n,
            end: r
        });
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.text,
                children: (0, o.m)(l)
            }),
            (0, i.jsx)('div', {
                className: s.bar,
                children: (0, i.jsx)('div', {
                    className: s.progress,
                    style: { width: ''.concat(100 * c, '%') }
                })
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: s.text,
                children: (0, o.m)(u)
            })
        ]
    });
}
