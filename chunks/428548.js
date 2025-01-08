r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(331595);
function s(e) {
    let { width: n = 12, height: r = 12, color: s = 'currentColor', foreground: o, ...l } = e;
    return (0, i.jsx)('svg', {
        ...(0, a.Z)(l),
        width: n,
        height: r,
        viewBox: '0 0 12 12',
        children: (0, i.jsx)('polygon', {
            fill: s,
            className: o,
            fillRule: 'evenodd',
            points: '11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1'
        })
    });
}
