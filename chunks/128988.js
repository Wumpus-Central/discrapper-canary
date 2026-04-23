n.d(t, { A: () => m });
var i = n(627968),
    a = n(64700),
    l = n(688807),
    s = n(17928),
    r = n(425763),
    o = n(647924),
    c = n(287809),
    d = n(788593),
    u = n(908683),
    _ = n(751162),
    g = n(524063);
function m(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: m,
            sourceClientOffset: f,
        } = (0, l.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        x = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        p = (0, r.VU)(),
        I = a.useMemo(
            () =>
                null == x || null == m
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: a, itemPreviewProps: l } = e;
                          if ("WIDGET" === a && l?.widget != null) {
                              let { widget: e, getWidth: n } = l,
                                  a = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: g.dt,
                                  style: { width: a },
                                  children: (0, i.jsx)(_.u, { widget: e, user: t, disableInteraction: !0 }),
                              });
                          }
                          if ("GAME_COVER" === a && l?.gameName != null) {
                              let { imageSrc: e, gameName: a, getWidth: s } = l,
                                  r = s?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: r },
                                  children: (0, i.jsx)(d.A, {
                                      className: g.XJ,
                                      imageSrc: e,
                                      gameName: a,
                                      applicationId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === a && l?.game != null && l?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: a } = l,
                                  s = a?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: g.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(u.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WISHLIST_ITEM" === a && l?.item != null) {
                              let { item: e } = l;
                              return (0, i.jsx)("div", {
                                  className: g.Xm,
                                  children: (0, i.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(m, x),
            [m, x],
        ),
        A = a.useRef(null),
        h = a.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            A.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (a.useEffect(() => {
            if (!n) {
                A.current = null;
                return;
            }
            null == A.current && h();
        }, [n, h]),
        !0 !== n || null == f || null == I)
    )
        return null;
    null == A.current && h();
    let { x: E, y: v } = A.current ?? { x: 0, y: 0 },
        j = f.x - E - 60 * !!p,
        b = f.y - v;
    return (0, i.jsx)("div", { className: g.kL, style: { transform: `translate3d(${j}px, ${b}px, 0)` }, children: I });
}
