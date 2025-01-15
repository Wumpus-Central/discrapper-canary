n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(331595);
function r(e) {
    let { width: t = 80, height: n = 20, color: r = 'currentColor', foreground: a, ...l } = e;
    return (0, i.jsxs)('svg', {
        ...(0, s.Z)(l),
        width: t,
        height: n,
        viewBox: '0 0 '.concat(t, ' ').concat(n),
        children: [
            (0, i.jsx)('pattern', {
                id: 'pill-frame-pattern',
                width: 8 / t,
                height: '1',
                children: (0, i.jsx)('path', {
                    d: 'm0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z',
                    fillRule: 'evenodd',
                    fill: r,
                    className: a
                })
            }),
            (0, i.jsx)('rect', {
                fill: 'url(#pill-frame-pattern)',
                height: '100%',
                width: '100%'
            })
        ]
    });
}
