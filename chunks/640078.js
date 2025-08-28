r.d(t, { Z: () => s });
var n = r(951288),
    i = r(323946),
    l = r(442837),
    a = r(594174),
    o = r(778414),
    c = r(836717);
let s = function (e) {
    var t;
    let { scrollerRef: r } = e,
        {
            isDragging: s,
            item: u,
            sourceClientOffset: d,
        } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        f = (0, l.e7)([a.default], () => a.default.getCurrentUser());
    if (!0 !== s || null == d || null == u.widget) return null;
    let g = null == r || null == (t = r.current) ? void 0 : t.getBoundingClientRect();
    if (null == g || null == f) return null;
    let p = d.x - g.left,
        b = d.y - g.top;
    return (0, n.jsx)("div", {
        className: c.container,
        style: { transform: "translate(".concat(p, "px, ").concat(b, "px)") },
        children: (0, n.jsx)(o.Z, {
            widget: u.widget,
            user: f,
            isGameFetching: () => !1,
            disableInteraction: !0,
        }),
    });
};
