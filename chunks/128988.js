i.d(t, { A: () => x });
var n = i(477900),
    l = i(582128),
    s = i(686246),
    r = i(17928),
    a = i(425763),
    o = i(724834),
    d = i(287809),
    c = i(788593),
    u = i(249264),
    g = i(353556),
    m = i(998556);
function x(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: i,
            item: x,
            sourceClientOffset: f,
        } = (0, s.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        h = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        p = (0, a.VU)(),
        I = l.useMemo(
            () =>
                null == h || null == x
                    ? null
                    : (function (e, t) {
                          let { id: i, itemType: l, itemPreviewProps: s } = e;
                          if ("WIDGET" === l && s?.widget != null) {
                              let { widget: e, getWidth: i } = s,
                                  l = i?.() ?? 432;
                              return (0, n.jsx)("div", {
                                  className: m.dt,
                                  style: { width: l },
                                  children: (0, n.jsx)(g.u, {
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
                                      className: m.XJ,
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
                                  className: m.xB,
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
                          if ("WISHLIST_ITEM" === l && s?.item != null) {
                              let { item: e } = s;
                              return (0, n.jsx)("div", {
                                  className: m.Xm,
                                  children: (0, n.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(x, h),
            [x, h],
        ),
        j = l.useRef(null),
        v = l.useCallback(() => {
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
            null == j.current && v();
        }, [i, v]),
        !0 !== i || null == f || null == I)
    )
        return null;
    null == j.current && v();
    let { x: A, y: E } = j.current ?? { x: 0, y: 0 },
        S = f.x - A - 60 * !!p,
        C = f.y - E;
    return (0, n.jsx)("div", { className: m.kL, style: { transform: `translate3d(${S}px, ${C}px, 0)` }, children: I });
}
