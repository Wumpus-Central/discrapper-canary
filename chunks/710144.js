n.d(t, { A: () => s });
var r = n(627968),
    i = n(64700);
let a = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function s(e) {
    let { onClick: t, className: n, children: s } = e,
        o = i.useRef(null);
    return (0, r.jsx)("div", {
        onClick: t,
        ref: o,
        className: n,
        children: s({
            areaRef: o,
            handleStopPropagation: a,
        }),
    });
}
