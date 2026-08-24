i.d(t, { A: () => f });
var n = i(477900),
    l = i(582128),
    s = i(686246),
    r = i(17928),
    a = i(425763),
    o = i(724834),
    d = i(287809),
    c = i(788593),
    u = i(249264),
    g = i(314531),
    m = i(967729),
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
        p = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, a.VU)(),
        j = l.useMemo(
            () =>
                null == p || null == f
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
                              let { imageSrc: e, gameName: l, getWidth: r } = s,
                                  a = r?.() ?? 90;
                              return (0, n.jsx)("div", {
                                  style: { width: a },
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
                                  r = l?.() ?? 400;
                              return (0, n.jsx)("div", {
                                  className: x.xB,
                                  style: { width: r },
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
                      })(f, p),
            [f, p],
        ),
        A = l.useRef(null),
        v = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            A.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!i) {
                A.current = null;
                return;
            }
            null == A.current && v();
        }, [i, v]),
        !0 !== i || null == h || null == j)
    )
        return null;
    null == A.current && v();
    let { x: E, y: S } = A.current ?? { x: 0, y: 0 },
        C = h.x - E - 60 * !!I,
        b = h.y - S;
    return (0, n.jsx)("div", { className: x.kL, style: { transform: `translate3d(${C}px, ${b}px, 0)` }, children: j });
}
