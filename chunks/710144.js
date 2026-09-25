n.d(e, { A: () => o });
var r = n(477900),
    i = n(582128);
function s(t) {
    return (e) => {
        (e?.stopPropagation(), t());
    };
}
function o(t) {
    let { onClick: e, className: n, children: o } = t,
        a = i.useRef(null);
    return (0, r.jsx)("div", {
        onClick: e,
        ref: a,
        className: n,
        children: o({ areaRef: a, handleStopPropagation: s }),
    });
}
