n.d(t, { Z: () => l });
var i = n(951288),
    r = n(647438);
let s = (e) => (t) => {
    null == t || t.stopPropagation(), e();
};
function l(e) {
    let { onClick: t, className: n, children: l } = e,
        o = r.useRef(null);
    return (0, i.jsx)("div", {
        onClick: t,
        ref: o,
        className: n,
        children: l({
            areaRef: o,
            handleStopPropagation: s,
        }),
    });
}
