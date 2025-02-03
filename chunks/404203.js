s.d(t, { Z: () => o });
var n = s(200651),
    i = s(192379);
let r = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: s, children: o } = e,
        l = i.useRef(null);
    return (0, n.jsx)('div', {
        onClick: t,
        ref: l,
        className: s,
        children: o({
            areaRef: l,
            handleStopPropagation: r
        })
    });
}
