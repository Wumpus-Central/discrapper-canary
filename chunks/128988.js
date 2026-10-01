n.d(t, { A: () => x });
var i = n(477900),
    l = n(582128),
    s = n(675816),
    a = n(17928),
    r = n(425763),
    o = n(248550),
    d = n(287809),
    c = n(788593),
    u = n(943793),
    g = n(314531),
    m = n(763432),
    f = n(998556);
function x(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: x,
            sourceClientOffset: h,
        } = (0, s.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        p = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, r.VU)(),
        E = l.useMemo(
            () =>
                null == p || null == x
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: s } = e;
                          if ("WIDGET" === l && s?.widget != null) {
                              let { widget: e, getWidth: n } = s,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: f.dt,
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
                              let { imageSrc: e, gameName: l, getWidth: a } = s,
                                  r = a?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: r },
                                  children: (0, i.jsx)(c.A, {
                                      className: f.XJ,
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
                                  a = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: f.xB,
                                  style: { width: a },
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
                                  className: f.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(g.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && s?.item != null) {
                              let { item: e } = s;
                              return (0, i.jsx)("div", {
                                  className: f.Xm,
                                  children: (0, i.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(x, p),
            [x, p],
        ),
        A = l.useRef(null),
        j = l.useCallback(() => {
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
            null == A.current && j();
        }, [n, j]),
        !0 !== n || null == h || null == E)
    )
        return null;
    null == A.current && j();
    let { x: v, y: C } = A.current ?? { x: 0, y: 0 },
        b = h.x - v - 60 * !!I,
        k = h.y - C;
    return (0, i.jsx)("div", { className: f.kL, style: { transform: `translate3d(${b}px, ${k}px, 0)` }, children: E });
}
