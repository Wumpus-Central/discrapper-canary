n.d(t, { Z: () => d });
var r = n(951288),
    i = n(79116),
    l = n(442837),
    a = n(481060),
    o = n(594174),
    s = n(817053),
    c = n(778414),
    u = n(707804);
function d(e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: d,
            item: p,
            sourceClientOffset: f,
        } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        h = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        g = (0, a.zPA)();
    if (!0 !== d || null == f || null == p) return null;
    let m = null == n || null == (t = n.current) ? void 0 : t.getBoundingClientRect();
    if (null == m || null == h) return null;
    let b =
        (null == p ? void 0 : p.type) === "WIDGET" && null != p.widget
            ? (0, r.jsx)("div", {
                  className: u.widgetPreview,
                  children: (0, r.jsx)(c.Z, {
                      widget: p.widget,
                      user: h,
                      disableInteraction: !0,
                  }),
              })
            : (null == p ? void 0 : p.itemType) === "GAME_COVER" && null != p.id
              ? (0, r.jsx)(s.Z, {
                    className: u.gamePreview,
                    imageSrc: p.imageSrc,
                    gameName: p.gameName,
                    applicationId: p.id,
                    userId: null == h ? void 0 : h.id,
                    disableInteraction: !0,
                })
              : null;
    if (null == b) return null;
    let _ = f.x - m.left - 60 * !!g,
        O = f.y - m.top;
    return (0, r.jsx)("div", {
        className: u.container,
        style: { transform: "translate(".concat(_, "px, ").concat(O, "px)") },
        children: b,
    });
}
