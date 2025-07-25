n.d(t, { Z: () => s });
var r = n(255367),
    i = n(73800);
let l = (e) => (t) => {
    (null == t || t.stopPropagation(), e());
};
function s(e) {
    let { onClick: t, className: n, children: s } = e,
        o = i.useRef(null);
    return (0, r.jsx)('div', {
        onClick: t,
        ref: o,
        className: n,
        children: s({
            areaRef: o,
            handleStopPropagation: l
        })
    });
}
