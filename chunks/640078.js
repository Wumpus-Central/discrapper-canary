n.d(t, { Z: () => c });
var r = n(951288),
    i = n(323946),
    l = n(442837),
    a = n(594174),
    o = n(778414),
    s = n(836717);
let c = function (e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: c,
            item: u,
            sourceClientOffset: d,
        } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        p = (0, l.e7)([a.default], () => a.default.getCurrentUser());
    if (!0 !== c || null == d || null == u.widget) return null;
    let f = null == n || null == (t = n.current) ? void 0 : t.getBoundingClientRect();
    if (null == f || null == p) return null;
    let h = d.x - f.left,
        g = d.y - f.top;
    return (0, r.jsx)("div", {
        className: s.container,
        style: { transform: "translate(".concat(h, "px, ").concat(g, "px)") },
        children: (0, r.jsx)(o.Z, {
            widget: u.widget,
            user: p,
            disableInteraction: !0,
        }),
    });
};
