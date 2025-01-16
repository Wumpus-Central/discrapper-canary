r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(429551),
    o = r(563081);
function l(e) {
    let { start: n, end: r } = e,
        {
            elapsed: l,
            duration: u,
            percentage: c
        } = (0, s.Z)({
            start: n,
            end: r
        });
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: o.text,
                children: (0, s.m)(l)
            }),
            (0, i.jsx)('div', {
                className: o.bar,
                children: (0, i.jsx)('div', {
                    className: o.progress,
                    style: { width: ''.concat(100 * c, '%') }
                })
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-normal',
                className: o.text,
                children: (0, s.m)(u)
            })
        ]
    });
}
