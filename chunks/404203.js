s.d(t, { Z: () => a });
var n = s(200651),
    i = s(192379);
let r = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function a(e) {
    let { onClick: t, className: s, children: a } = e,
        o = i.useRef(null);
    return (0, n.jsx)('div', {
        onClick: t,
        ref: o,
        className: s,
        children: a({
            areaRef: o,
            handleStopPropagation: r
        })
    });
}
