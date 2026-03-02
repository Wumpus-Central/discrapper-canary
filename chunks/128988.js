n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(688807),
    s = n(311907),
    r = n(397927),
    o = n(178213),
    c = n(86638),
    d = n(287809),
    u = n(788593),
    m = n(742710),
    g = n(463259),
    x = n(18983),
    f = n(330966);
function p(e) {
    let { scrollerRef: t } = e,
        n = (0, o.G)("user_profile_drag_preview_layer"),
        {
            isDragging: p,
            item: h,
            sourceClientOffset: _,
        } = (0, a.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        A = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, r.VUy)(),
        j = l.useMemo(
            () =>
                null == A || null == h
                    ? null
                    : (function (e, t, n) {
                          let { id: l, itemType: a, itemPreviewProps: s } = e;
                          if ("WIDGET" === a && s?.widget != null)
                              return (0, i.jsx)("div", {
                                  className: f.dt,
                                  children: (0, i.jsx)(g.u, { widget: s.widget, user: t, disableInteraction: !0 }),
                              });
                          if ("GAME_COVER" === a && s?.gameName != null) {
                              let { imageSrc: e, gameName: n } = s;
                              return (0, i.jsx)(u.A, {
                                  className: f.XJ,
                                  imageSrc: e,
                                  gameName: n,
                                  applicationId: l,
                                  userId: t?.id,
                                  disableInteraction: !0,
                              });
                          }
                          if ("GAME_DETAILS_CARD" === a && s?.game != null && s?.widgetType != null) {
                              let { game: e, widgetType: n } = s;
                              return (0, i.jsx)(m.A, {
                                  className: f.xB,
                                  user: t,
                                  widgetType: n,
                                  game: e,
                                  disableInteraction: !0,
                              });
                          }
                          if ("WISHLIST_ITEM" === a && s?.item != null) {
                              let { item: e } = s;
                              return (0, i.jsx)("div", {
                                  className: f.Xm,
                                  children: n
                                      ? (0, i.jsx)(c.A, { item: e, wishlistOwner: t, wishlistId: null, isDragging: !0 })
                                      : (0, i.jsx)(x.A, {
                                            item: e,
                                            profileOwner: t,
                                            wishlistId: null,
                                            isOwner: !1,
                                            showOverlayButton: !1,
                                            showIcons: !1,
                                            isDragging: !0,
                                        }),
                              });
                          }
                          return null;
                      })(h, A, n),
            [h, A, n],
        ),
        v = l.useRef(null),
        E = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            v.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!p) {
                v.current = null;
                return;
            }
            null == v.current && E();
        }, [p, E]),
        !0 !== p || null == _ || null == j)
    )
        return null;
    null == v.current && E();
    let { x: T, y: b } = v.current ?? { x: 0, y: 0 },
        y = _.x - T - 60 * !!I,
        N = _.y - b;
    return (0, i.jsx)("div", { className: f.kL, style: { transform: `translate3d(${y}px, ${N}px, 0)` }, children: j });
}
