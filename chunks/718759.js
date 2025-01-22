r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(331595);
function o(e) {
    let { width: n = 12, height: r = 12, color: o = 'currentColor', foreground: s, ...l } = e;
    return (0, i.jsx)('svg', {
        ...(0, a.Z)(l),
        width: n,
        height: r,
        viewBox: '0 0 12 12',
        children: (0, i.jsx)('path', {
            stroke: o,
            className: s,
            fill: 'none',
            d: 'M8.5,3.5 L6,6 L3.5,3.5 L6,6 L3.5,8.5 L6,6 L8.5,8.5 L6,6 L8.5,3.5 Z'
        })
    });
}
