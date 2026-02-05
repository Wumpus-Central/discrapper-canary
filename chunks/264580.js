n.d(t, { A: () => d, q: () => o });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(915089),
    s = n(850474);
function o(e) {
    let { children: t, id: n } = e;
    return (0, i.jsx)(a.Text, {
        className: s.g,
        color: "text-subtle",
        id: n,
        variant: "text-sm/semibold",
        children: t,
    });
}
let d = function (e) {
    let { children: t, renderPopout: n } = e,
        o = (0, l.GV)(),
        d = r.useRef(null);
    return (0, i.jsx)(a.YNO, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, i.jsx)(a.lGe, { className: s.S, "aria-labelledby": o, children: n(e, o) }),
        scrollBehavior: "close",
        targetElementRef: d,
        children: (e) => t(e, d),
    });
};
