s.d(t, {
    Z: function () {
        return o;
    }
});
var n = s(200651),
    i = s(192379);
let r = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: s, children: o } = e,
        c = i.useRef(null);
    return (0, n.jsx)('div', {
        onClick: t,
        ref: c,
        className: s,
        children: o({
            areaRef: c,
            handleStopPropagation: r
        })
    });
}
