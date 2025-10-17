n.d(t, { Z: () => d });
var r = n(951288),
    i = n(79116),
    a = n(442837),
    l = n(481060),
    o = n(594174),
    s = n(817053),
    c = n(778414),
    u = n(707804);
function d(e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: d,
            item: f,
            sourceClientOffset: g,
        } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        p = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        m = (0, l.zPA)();
    if (!0 !== d || null == g || null == f) return null;
    let b = null == n || null == (t = n.current) ? void 0 : t.getBoundingClientRect();
    if (null == b || null == p) return null;
    let h =
        (null == f ? void 0 : f.type) === "WIDGET" && null != f.widget
            ? (0, r.jsx)("div", {
                  className: u.widgetPreview,
                  children: (0, r.jsx)(c.Z, {
                      widget: f.widget,
                      user: p,
                      disableInteraction: !0,
                  }),
              })
            : (null == f ? void 0 : f.itemType) === "GAME_COVER" && null != f.id
              ? (0, r.jsx)(s.Z, {
                    className: u.gamePreview,
                    imageSrc: f.imageSrc,
                    gameName: f.gameName,
                    applicationId: f.id,
                    userId: null == p ? void 0 : p.id,
                    disableInteraction: !0,
                })
              : null;
    if (null == h) return null;
    let v = g.x - b.left - 60 * !!m,
        y = g.y - b.top;
    return (0, r.jsx)("div", {
        className: u.container,
        style: { transform: "translate(".concat(v, "px, ").concat(y, "px)") },
        children: h,
    });
}
