n.d(t, { A: () => f });
var i = n(477900),
    l = n(582128),
    s = n(686246),
    r = n(17928),
    a = n(425763),
    o = n(724834),
    c = n(287809),
    d = n(788593),
    u = n(249264),
    g = n(314531),
    m = n(47426),
    x = n(998556);
function f(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: f,
            sourceClientOffset: h,
        } = (0, s.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        p = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        I = (0, a.VU)(),
        j = l.useMemo(
            () =>
                null == p || null == f
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: s } = e;
                          if ("WIDGET" === l && s?.widget != null) {
                              let { widget: e, getWidth: n } = s,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: x.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(m.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && s?.gameName != null) {
                              let { imageSrc: e, gameName: l, getWidth: r } = s,
                                  a = r?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: a },
                                  children: (0, i.jsx)(d.A, {
                                      className: x.XJ,
                                      imageSrc: e,
                                      gameName: l,
                                      gameId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && s?.game != null && s?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = s,
                                  r = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: x.xB,
                                  style: { width: r },
                                  children: (0, i.jsx)(u.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WIDGET_CLIP" === l && s?.item != null) {
                              let { item: e, getWidth: t } = s,
                                  n = t?.() ?? 96;
                              return (0, i.jsx)("div", {
                                  className: x.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(g.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && s?.item != null) {
                              let { item: e } = s;
                              return (0, i.jsx)("div", {
                                  className: x.Xm,
                                  children: (0, i.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(f, p),
            [f, p],
        ),
        A = l.useRef(null),
        E = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            A.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!n) {
                A.current = null;
                return;
            }
            null == A.current && E();
        }, [n, E]),
        !0 !== n || null == h || null == j)
    )
        return null;
    null == A.current && E();
    let { x: v, y: C } = A.current ?? { x: 0, y: 0 },
        S = h.x - v - 60 * !!I,
        b = h.y - C;
    return (0, i.jsx)("div", { className: x.kL, style: { transform: `translate3d(${S}px, ${b}px, 0)` }, children: j });
}
