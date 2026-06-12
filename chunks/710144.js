i.d(n, { A: () => s });
var e = i(627968),
    r = i(64700);
let l = (t) => (n) => {
    n?.stopPropagation(), t();
};
function s(t) {
    let { onClick: n, className: i, children: s } = t,
        a = r.useRef(null);
    return (0, e.jsx)("div", {
        onClick: n,
        ref: a,
        className: i,
        children: s({ areaRef: a, handleStopPropagation: l }),
    });
}
