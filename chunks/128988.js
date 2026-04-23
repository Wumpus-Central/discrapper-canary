n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    l = n(688807),
    s = n(17928),
    r = n(425763),
    o = n(647924),
    c = n(287809),
    d = n(788593),
    u = n(908683),
    g = n(751162),
    m = n(524063);
function _(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: _,
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
                null == x || null == _
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: a, itemPreviewProps: l } = e;
                          if ("WIDGET" === a && l?.widget != null) {
                              let { widget: e, getWidth: n } = l,
                                  a = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: m.dt,
                                  style: { width: a },
                                  children: (0, i.jsx)(g.u, { widget: e, user: t, disableInteraction: !0 }),
                              });
                          }
                          if ("GAME_COVER" === a && l?.gameName != null) {
                              let { imageSrc: e, gameName: a, getWidth: s } = l,
                                  r = s?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: r },
                                  children: (0, i.jsx)(d.A, {
                                      className: m.XJ,
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
                                  className: m.xB,
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
                                  className: m.Xm,
                                  children: (0, i.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(_, x),
            [_, x],
        ),
        h = a.useRef(null),
        A = a.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            h.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (a.useEffect(() => {
            if (!n) {
                h.current = null;
                return;
            }
            null == h.current && A();
        }, [n, A]),
        !0 !== n || null == f || null == I)
    )
        return null;
    null == h.current && A();
    let { x: E, y: v } = h.current ?? { x: 0, y: 0 },
        j = f.x - E - 60 * !!p,
        N = f.y - v;
    return (0, i.jsx)("div", { className: m.kL, style: { transform: `translate3d(${j}px, ${N}px, 0)` }, children: I });
}
