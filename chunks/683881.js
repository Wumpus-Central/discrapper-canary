n.d(t, { Z: () => f });
var r = n(951288),
    i = n(79116),
    a = n(442837),
    l = n(481060),
    o = n(594174),
    s = n(817053),
    c = n(623132),
    u = n(778414),
    d = n(707804);
function f(e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: f,
            item: g,
            sourceClientOffset: p,
        } = (0, i.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        m = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
        b = (0, l.zPA)();
    if (!0 !== f || null == p || null == g) return null;
    let h = null == n || null == (t = n.current) ? void 0 : t.getBoundingClientRect();
    if (null == h || null == m) return null;
    let v = (function (e, t) {
        let { id: n, itemType: i, itemPreviewProps: a } = e;
        if ("WIDGET" === i && (null == a ? void 0 : a.widget) != null)
            return (0, r.jsx)("div", {
                className: d.widgetPreview,
                children: (0, r.jsx)(u.Z, {
                    widget: a.widget,
                    user: t,
                    disableInteraction: !0,
                }),
            });
        if (
            "GAME_COVER" === i &&
            (null == a ? void 0 : a.imageSrc) != null &&
            (null == a ? void 0 : a.gameName) != null
        ) {
            let { imageSrc: e, gameName: i } = a;
            return (0, r.jsx)(s.Z, {
                className: d.gamePreview,
                imageSrc: e,
                gameName: i,
                applicationId: n,
                userId: null == t ? void 0 : t.id,
                disableInteraction: !0,
            });
        }
        if (
            "GAME_DETAILS_CARD" === i &&
            (null == a ? void 0 : a.game) != null &&
            (null == a ? void 0 : a.widgetType) != null
        ) {
            let { game: e, widgetType: n } = a;
            return (0, r.jsx)(c.Z, {
                className: d.gameDetailsCardPreview,
                user: t,
                widgetType: n,
                game: e,
                disableInteraction: !0,
            });
        }
        return null;
    })(g, m);
    if (null == v) return null;
    let y = p.x - h.left - 60 * !!b,
        j = p.y - h.top;
    return (0, r.jsx)("div", {
        className: d.container,
        style: { transform: "translate(".concat(y, "px, ").concat(j, "px)") },
        children: v,
    });
}
