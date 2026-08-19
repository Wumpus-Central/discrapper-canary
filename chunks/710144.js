n.d(e, { A: () => s });
var r = n(477900),
    i = n(582128);
function o(t) {
    return (e) => {
        e?.stopPropagation(), t();
    };
}
function s(t) {
    let { onClick: e, className: n, children: s } = t,
        a = i.useRef(null);
    return (0, r.jsx)("div", {
        onClick: e,
        ref: a,
        className: n,
        children: s({ areaRef: a, handleStopPropagation: o }),
    });
}
