i.d(t, { A: () => x });
var n = i(477900),
    s = i(582128),
    l = i(686246),
    r = i(17928),
    a = i(425763),
    o = i(248550),
    d = i(287809),
    c = i(788593),
    u = i(249264),
    g = i(133839),
    m = i(120183);
function x(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: i,
            item: x,
            sourceClientOffset: f,
        } = (0, l.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        h = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, a.VU)(),
        p = s.useMemo(
            () =>
                null == h || null == x
                    ? null
                    : (function (e, t) {
                          let { id: i, itemType: s, itemPreviewProps: l } = e;
                          if ("WIDGET" === s && l?.widget != null) {
                              let { widget: e, getWidth: i } = l,
                                  s = i?.() ?? 432;
                              return (0, n.jsx)("div", {
                                  className: m.dt,
                                  style: { width: s },
                                  children: (0, n.jsx)(g.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === s && l?.gameName != null) {
                              let { imageSrc: e, gameName: s, getWidth: r } = l,
                                  a = r?.() ?? 90;
                              return (0, n.jsx)("div", {
                                  style: { width: a },
                                  children: (0, n.jsx)(c.A, {
                                      className: m.XJ,
                                      imageSrc: e,
                                      gameName: s,
                                      applicationId: i,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === s && l?.game != null && l?.widgetType != null) {
                              let { game: e, widgetType: i, getWidth: s } = l,
                                  r = s?.() ?? 400;
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
                          if ("WISHLIST_ITEM" === s && l?.item != null) {
                              let { item: e } = l;
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
        A = s.useRef(null),
        j = s.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            A.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (s.useEffect(() => {
            if (!i) {
                A.current = null;
                return;
            }
            null == A.current && j();
        }, [i, j]),
        !0 !== i || null == f || null == p)
    )
        return null;
    null == A.current && j();
    let { x: E, y: S } = A.current ?? { x: 0, y: 0 },
        T = f.x - E - 60 * !!I,
        v = f.y - S;
    return (0, n.jsx)("div", { className: m.kL, style: { transform: `translate3d(${T}px, ${v}px, 0)` }, children: p });
}
