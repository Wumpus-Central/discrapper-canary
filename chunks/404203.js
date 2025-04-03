s.d(t, { Z: () => o });
var r = s(200651),
    n = s(192379);
let i = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: s, children: o } = e,
        l = n.useRef(null);
    return (0, r.jsx)('div', {
        onClick: t,
        ref: l,
        className: s,
        children: o({
            areaRef: l,
            handleStopPropagation: i
        })
    });
}
