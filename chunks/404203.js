n.d(t, { Z: () => o });
var s = n(200651),
    r = n(192379);
let i = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: n, children: o } = e,
        c = r.useRef(null);
    return (0, s.jsx)('div', {
        onClick: t,
        ref: c,
        className: n,
        children: o({
            areaRef: c,
            handleStopPropagation: i
        })
    });
}
