s.d(t, { Z: () => l });
var n = s(200651),
    i = s(192379);
let r = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function l(e) {
    let { onClick: t, className: s, children: l } = e,
        o = i.useRef(null);
    return (0, n.jsx)('div', {
        onClick: t,
        ref: o,
        className: s,
        children: l({
            areaRef: o,
            handleStopPropagation: r
        })
    });
}
