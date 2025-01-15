n.d(t, {
    Z: function () {
        return o;
    }
});
var s = n(200651),
    i = n(192379);
let r = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: n, children: o } = e,
        c = i.useRef(null);
    return (0, s.jsx)('div', {
        onClick: t,
        ref: c,
        className: n,
        children: o({
            areaRef: c,
            handleStopPropagation: r
        })
    });
}
