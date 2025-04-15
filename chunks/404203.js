r.d(t, { Z: () => o });
var n = r(200651),
    i = r(192379);
let s = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: r, children: o } = e,
        l = i.useRef(null);
    return (0, n.jsx)('div', {
        onClick: t,
        ref: l,
        className: r,
        children: o({
            areaRef: l,
            handleStopPropagation: s
        })
    });
}
