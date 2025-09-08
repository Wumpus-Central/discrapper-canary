n.d(t, { Z: () => u });
var r = n(951288),
    i = n(323946),
    l = n(442837),
    a = n(481060),
    o = n(594174),
    s = n(778414),
    c = n(836717);
let u = function (e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: u,
            item: d,
            sourceClientOffset: p,
        } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        f = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        h = (0, a.zPA)();
    if (!0 !== u || null == p || null == d.widget) return null;
    let g = null == n || null == (t = n.current) ? void 0 : t.getBoundingClientRect();
    if (null == g || null == f) return null;
    let m = p.x - g.left - 60 * !!h,
        b = p.y - g.top;
    return (0, r.jsx)("div", {
        className: c.container,
        style: { transform: "translate(".concat(m, "px, ").concat(b, "px)") },
        children: (0, r.jsx)(s.Z, {
            widget: d.widget,
            user: f,
            disableInteraction: !0,
        }),
    });
};
