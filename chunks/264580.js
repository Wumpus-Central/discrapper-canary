s.d(t, { A: () => d, q: () => u });
var n = s(627968),
    l = s(64700),
    a = s(834730),
    r = s(265872),
    i = s(305866),
    o = s(915089),
    c = s(332733);
function u(e) {
    let { children: t, id: s } = e;
    return (0, n.jsx)(a.E, { className: c.g, color: "text-subtle", id: s, variant: "text-sm/semibold", children: t });
}
let d = function (e) {
    let { children: t, renderPopout: s } = e,
        a = (0, o.GV)(),
        u = l.useRef(null);
    return (0, n.jsx)(r.Y, {
        align: "right",
        position: "bottom",
        renderPopout: (e) => (0, n.jsx)(i.l, { className: c.S, "aria-labelledby": a, children: s(e, a) }),
        scrollBehavior: "close",
        targetElementRef: u,
        children: (e) => t(e, u),
    });
};
