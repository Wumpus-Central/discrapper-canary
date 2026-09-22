i.d(t, { A: () => f });
var n = i(477900),
    l = i(582128),
    s = i(686246),
    a = i(17928),
    r = i(425763),
    o = i(248550),
    d = i(287809),
    c = i(788593),
    u = i(943793),
    g = i(314531),
    m = i(360322),
    x = i(998556);
function f(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: i,
            item: f,
            sourceClientOffset: h,
        } = (0, s.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        I = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        p = (0, r.VU)(),
        A = l.useMemo(
            () =>
                null == I || null == f
                    ? null
                    : (function (e, t) {
                          let { id: i, itemType: l, itemPreviewProps: s } = e;
                          if ("WIDGET" === l && s?.widget != null) {
                              let { widget: e, getWidth: i } = s,
                                  l = i?.() ?? 432;
                              return (0, n.jsx)("div", {
                                  className: x.dt,
                                  style: { width: l },
                                  children: (0, n.jsx)(m.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && s?.gameName != null) {
                              let { imageSrc: e, gameName: l, getWidth: a } = s,
                                  r = a?.() ?? 90;
                              return (0, n.jsx)("div", {
                                  style: { width: r },
                                  children: (0, n.jsx)(c.A, {
                                      className: x.XJ,
                                      imageSrc: e,
                                      gameName: l,
                                      gameId: i,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && s?.game != null && s?.widgetType != null) {
                              let { game: e, widgetType: i, getWidth: l } = s,
                                  a = l?.() ?? 400;
                              return (0, n.jsx)("div", {
                                  className: x.xB,
                                  style: { width: a },
                                  children: (0, n.jsx)(u.A, {
                                      user: t,
                                      widgetType: i,
                                      game: e,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WIDGET_CLIP" === l && s?.item != null) {
                              let { item: e, getWidth: t } = s,
                                  i = t?.() ?? 96;
                              return (0, n.jsx)("div", {
                                  className: x.Zo,
                                  style: { width: i },
                                  children: (0, n.jsx)(g.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && s?.item != null) {
                              let { item: e } = s;
                              return (0, n.jsx)("div", {
                                  className: x.Xm,
                                  children: (0, n.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(f, I),
            [f, I],
        ),
        j = l.useRef(null),
        E = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            j.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!i) {
                j.current = null;
                return;
            }
            null == j.current && E();
        }, [i, E]),
        !0 !== i || null == h || null == A)
    )
        return null;
    null == j.current && E();
    let { x: C, y: v } = j.current ?? { x: 0, y: 0 },
        S = h.x - C - 60 * !!p,
        b = h.y - v;
    return (0, n.jsx)("div", { className: x.kL, style: { transform: `translate3d(${S}px, ${b}px, 0)` }, children: A });
}
