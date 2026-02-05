n.d(t, { A: () => l });
var i = n(627968),
    s = n(64700);
let r = (e) => (t) => {
    t?.stopPropagation(), e();
};
function l(e) {
    let { onClick: t, className: n, children: l } = e,
        o = s.useRef(null);
    return (0, i.jsx)("div", {
        onClick: t,
        ref: o,
        className: n,
        children: l({ areaRef: o, handleStopPropagation: r }),
    });
}
