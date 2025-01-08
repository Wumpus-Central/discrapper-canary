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
        children: (0, i.jsx)('rect', {
            width: '9',
            height: '9',
            x: '1.5',
            y: '1.5',
            fill: 'none',
            stroke: s,
            className: o
        })
    });
}
