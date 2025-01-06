e.d(n, {
    Z: function () {
        return l;
    }
});
var i = e(200651),
    s = e(192379);
let r = (t) => (n) => {
    null == n || n.stopPropagation(), t();
};
function l(t) {
    let { onClick: n, className: e, children: l } = t,
        o = s.useRef(null);
    return (0, i.jsx)('div', {
        onClick: n,
        ref: o,
        className: e,
        children: l({
            areaRef: o,
            handleStopPropagation: r
        })
    });
}
