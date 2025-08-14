n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800);
let l = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function o(e) {
    let { onClick: t, className: n, children: o } = e,
        s = i.useRef(null);
    return (0, r.jsx)("div", {
        onClick: t,
        ref: s,
        className: n,
        children: o({
            areaRef: s,
            handleStopPropagation: l,
        }),
    });
}
