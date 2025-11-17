n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(85707),
    l = n(442837),
    o = n(481060),
    c = n(594174),
    s = n(817053),
    u = n(623132),
    d = n(778414),
    f = n(707804);
function g(e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: g,
            item: p,
            sourceClientOffset: m,
        } = (0, a.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        b = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        h = (0, o.zPA)(),
        y = i.useMemo(() => {
            if (null == b || null == p) return null;
            let { id: e, itemType: t, itemPreviewProps: n } = p;
            if ("WIDGET" === t && (null == n ? void 0 : n.widget) != null)
                return (0, r.jsx)("div", {
                    className: f.widgetPreview,
                    children: (0, r.jsx)(d.Z, {
                        widget: n.widget,
                        user: b,
                        disableInteraction: !0,
                    }),
                });
            if ("GAME_COVER" === t && (null == n ? void 0 : n.gameName) != null) {
                let { imageSrc: t, gameName: i } = n;
                return (0, r.jsx)(s.Z, {
                    className: f.gamePreview,
                    imageSrc: t,
                    gameName: i,
                    applicationId: e,
                    userId: null == b ? void 0 : b.id,
                    disableInteraction: !0,
                });
            }
            if (
                "GAME_DETAILS_CARD" === t &&
                (null == n ? void 0 : n.game) != null &&
                (null == n ? void 0 : n.widgetType) != null
            ) {
                let { game: e, widgetType: t } = n;
                return (0, r.jsx)(u.Z, {
                    className: f.gameDetailsCardPreview,
                    user: b,
                    widgetType: t,
                    game: e,
                    disableInteraction: !0,
                });
            }
            return null;
        }, [p, b]),
        O = i.useRef(null),
        v = i.useCallback(() => {
            if (null == n.current) return;
            let e = n.current.getBoundingClientRect();
            O.current = {
                x: e.left,
                y: e.top,
            };
        }, [n]);
    if (
        (i.useEffect(() => {
            if (!g) {
                O.current = null;
                return;
            }
            null == O.current && v();
        }, [g, v]),
        !0 !== g || null == m || null == y)
    )
        return null;
    null == O.current && v();
    let { x: j, y: x } =
            null != (t = O.current)
                ? t
                : {
                      x: 0,
                      y: 0,
                  },
        _ = m.x - j - 60 * !!h,
        P = m.y - x;
    return (0, r.jsx)("div", {
        className: f.container,
        style: { transform: "translate3d(".concat(_, "px, ").concat(P, "px, 0)") },
        children: y,
    });
}
