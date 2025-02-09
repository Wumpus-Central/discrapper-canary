e.d(s, { Z: () => a });
var n = e(200651),
    i = e(192379);
let r = (t) => (s) => {
    null == s || s.stopPropagation(), t();
};
function a(t) {
    let { onClick: s, className: e, children: a } = t,
        c = i.useRef(null);
    return (0, n.jsx)('div', {
        onClick: s,
        ref: c,
        className: e,
        children: a({
            areaRef: c,
            handleStopPropagation: r
        })
    });
}
