n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800);
let s = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: n, children: o } = e,
        l = i.useRef(null);
    return (0, r.jsx)('div', {
        onClick: t,
        ref: l,
        className: n,
        children: o({
            areaRef: l,
            handleStopPropagation: s
        })
    });
}
