s.d(n, {
    Z: function () {
        return o;
    }
});
var e = s(200651),
    i = s(192379);
let r = (t) => (n) => {
    null == n || n.stopPropagation(), t();
};
function o(t) {
    let { onClick: n, className: s, children: o } = t,
        c = i.useRef(null);
    return (0, e.jsx)('div', {
        onClick: n,
        ref: c,
        className: s,
        children: o({
            areaRef: c,
            handleStopPropagation: r
        })
    });
}
