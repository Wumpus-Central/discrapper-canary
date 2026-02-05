"use strict";
n.d(t, { A: () => l });
var s = n(627968),
    i = n(64700);
let r = (e) => (t) => {
    t?.stopPropagation(), e();
};
function l(e) {
    let { onClick: t, className: n, children: l } = e,
        a = i.useRef(null);
    return (0, s.jsx)("div", {
        onClick: t,
        ref: a,
        className: n,
        children: l({ areaRef: a, handleStopPropagation: r }),
    });
}
