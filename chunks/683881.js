n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(85707),
    l = n(442837),
    o = n(481060),
    c = n(594174),
    s = n(817053),
    u = n(623132),
    d = n(778414),
    f = n(796483),
    g = n(814855);
function p(e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: p,
            item: b,
            sourceClientOffset: m,
        } = (0, a.f)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        h = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        y = (0, o.zPA)(),
        v = i.useMemo(() => {
            if (null == h || null == b) return null;
            let { id: e, itemType: t, itemPreviewProps: n } = b;
            if ("WIDGET" === t && (null == n ? void 0 : n.widget) != null)
                return (0, r.jsx)("div", {
                    className: g.widgetPreview,
                    children: (0, r.jsx)(d.Z, {
                        widget: n.widget,
                        user: h,
                        disableInteraction: !0,
                    }),
                });
            if ("GAME_COVER" === t && (null == n ? void 0 : n.gameName) != null) {
                let { imageSrc: t, gameName: i } = n;
                return (0, r.jsx)(s.Z, {
                    className: g.gamePreview,
                    imageSrc: t,
                    gameName: i,
                    applicationId: e,
                    userId: null == h ? void 0 : h.id,
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
                    className: g.gameDetailsCardPreview,
                    user: h,
                    widgetType: t,
                    game: e,
                    disableInteraction: !0,
                });
            }
            if ("WISHLIST_ITEM" === t && (null == n ? void 0 : n.item) != null) {
                let { item: e } = n;
                return (0, r.jsx)("div", {
                    className: g.wishlistItemPreview,
                    children: (0, r.jsx)(f.Z, {
                        item: e,
                        profileOwner: h,
                        wishlistId: null,
                        isOwner: !1,
                        showOverlayButton: !1,
                        showIcons: !1,
                        isDragging: !0,
                    }),
                });
            }
            return null;
        }, [b, h]),
        O = i.useRef(null),
        j = i.useCallback(() => {
            if (null == n.current) return;
            let e = n.current.getBoundingClientRect();
            O.current = {
                x: e.left,
                y: e.top,
            };
        }, [n]);
    if (
        (i.useEffect(() => {
            if (!p) {
                O.current = null;
                return;
            }
            null == O.current && j();
        }, [p, j]),
        !0 !== p || null == m || null == v)
    )
        return null;
    null == O.current && j();
    let { x: x, y: P } =
            null != (t = O.current)
                ? t
                : {
                      x: 0,
                      y: 0,
                  },
        I = m.x - x - 60 * !!y,
        w = m.y - P;
    return (0, r.jsx)("div", {
        className: g.container,
        style: { transform: "translate3d(".concat(I, "px, ").concat(w, "px, 0)") },
        children: v,
    });
}
