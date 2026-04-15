n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(688807),
    r = n(311907),
    s = n(397927),
    o = n(86638),
    d = n(287809),
    c = n(788593),
    u = n(742710),
    A = n(463259),
    h = n(563919);
function _(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: _,
            sourceClientOffset: m,
        } = (0, a.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        g = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        p = (0, s.VUy)(),
        E = l.useMemo(
            () =>
                null == g || null == _
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: a } = e;
                          if ("WIDGET" === l && a?.widget != null) {
                              let { widget: e, getWidth: n } = a,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: h.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(A.u, { widget: e, user: t, disableInteraction: !0 }),
                              });
                          }
                          if ("GAME_COVER" === l && a?.gameName != null) {
                              let { imageSrc: e, gameName: l, getWidth: r } = a,
                                  s = r?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: s },
                                  children: (0, i.jsx)(c.A, {
                                      className: h.XJ,
                                      imageSrc: e,
                                      gameName: l,
                                      applicationId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && a?.game != null && a?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = a,
                                  r = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: h.xB,
                                  style: { width: r },
                                  children: (0, i.jsx)(u.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && a?.item != null) {
                              let { item: e } = a;
                              return (0, i.jsx)("div", {
                                  className: h.Xm,
                                  children: (0, i.jsx)(o.A, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(_, g),
            [_, g],
        ),
        I = l.useRef(null),
        f = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            I.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!n) {
                I.current = null;
                return;
            }
            null == I.current && f();
        }, [n, f]),
        !0 !== n || null == m || null == E)
    )
        return null;
    null == I.current && f();
    let { x: C, y: T } = I.current ?? { x: 0, y: 0 },
        N = m.x - C - 60 * !!p,
        S = m.y - T;
    return (0, i.jsx)("div", { className: h.kL, style: { transform: `translate3d(${N}px, ${S}px, 0)` }, children: E });
}
