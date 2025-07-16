n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800);
let s = (e) => (t) => {
    (null == t || t.stopPropagation(), e());
};
function l(e) {
    let { onClick: t, className: n, children: l } = e,
        o = i.useRef(null);
    return (0, r.jsx)('div', {
        onClick: t,
        ref: o,
        className: n,
        children: l({
            areaRef: o,
            handleStopPropagation: s
        })
    });
}
