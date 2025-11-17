n.d(t, { Z: () => o });
var r = n(54381),
    i = n(473749);
let a = (e) => (t) => {
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
            handleStopPropagation: a,
        }),
    });
}
