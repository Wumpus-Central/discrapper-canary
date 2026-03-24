n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(688807),
    s = n(311907),
    r = n(397927),
    o = n(178213),
    d = n(86638),
    c = n(287809),
    u = n(788593),
    g = n(742710),
    m = n(463259),
    x = n(18983),
    p = n(330966);
function f(e) {
    let { scrollerRef: t } = e,
        n = (0, o.GG)("user_profile_drag_preview_layer"),
        {
            isDragging: f,
            item: h,
            sourceClientOffset: _,
        } = (0, a.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        A = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        I = (0, r.VUy)(),
        j = l.useMemo(
            () =>
                null == A || null == h
                    ? null
                    : (function (e, t, n) {
                          let { id: l, itemType: a, itemPreviewProps: s } = e;
                          if ("WIDGET" === a && s?.widget != null) {
                              let { widget: e, getWidth: n } = s,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: p.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(m.u, { widget: e, user: t, disableInteraction: !0 }),
                              });
                          }
                          if ("GAME_COVER" === a && s?.gameName != null) {
                              let { imageSrc: e, gameName: n, getWidth: a } = s,
                                  r = a?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: r },
                                  children: (0, i.jsx)(u.A, {
                                      className: p.XJ,
                                      imageSrc: e,
                                      gameName: n,
                                      applicationId: l,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === a && s?.game != null && s?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = s,
                                  a = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: p.xB,
                                  style: { width: a },
                                  children: (0, i.jsx)(g.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WISHLIST_ITEM" === a && s?.item != null) {
                              let { item: e } = s;
                              return (0, i.jsx)("div", {
                                  className: p.Xm,
                                  children: n
                                      ? (0, i.jsx)(d.A, { item: e, wishlistOwner: t, wishlistId: null, isDragging: !0 })
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
            if (!f) {
                v.current = null;
                return;
            }
            null == v.current && E();
        }, [f, E]),
        !0 !== f || null == _ || null == j)
    )
        return null;
    null == v.current && E();
    let { x: T, y: b } = v.current ?? { x: 0, y: 0 },
        N = _.x - T - 60 * !!I,
        y = _.y - b;
    return (0, i.jsx)("div", { className: p.kL, style: { transform: `translate3d(${N}px, ${y}px, 0)` }, children: j });
}
