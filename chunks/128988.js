i.d(t, { A: () => f });
var n = i(627968),
    l = i(64700),
    s = i(688807),
    a = i(17928),
    r = i(425763),
    c = i(248550),
    u = i(287809),
    o = i(788593),
    d = i(908683),
    g = i(598161),
    m = i(524063);
function f(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: i,
            item: f,
            sourceClientOffset: x,
        } = (0, s.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        p = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        I = (0, r.VU)(),
        A = l.useMemo(
            () =>
                null == p || null == f
                    ? null
                    : (function (e, t) {
                          let { id: i, itemType: l, itemPreviewProps: s } = e;
                          if ("WIDGET" === l && s?.widget != null) {
                              let { widget: e, getWidth: i } = s,
                                  l = i?.() ?? 432;
                              return (0, n.jsx)("div", {
                                  className: m.dt,
                                  style: { width: l },
                                  children: (0, n.jsx)(g.u, { widget: e, user: t, disableInteraction: !0 }),
                              });
                          }
                          if ("GAME_COVER" === l && s?.gameName != null) {
                              let { imageSrc: e, gameName: l, getWidth: a } = s,
                                  r = a?.() ?? 90;
                              return (0, n.jsx)("div", {
                                  style: { width: r },
                                  children: (0, n.jsx)(o.A, {
                                      className: m.XJ,
                                      imageSrc: e,
                                      gameName: l,
                                      applicationId: i,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && s?.game != null && s?.widgetType != null) {
                              let { game: e, widgetType: i, getWidth: l } = s,
                                  a = l?.() ?? 400;
                              return (0, n.jsx)("div", {
                                  className: m.xB,
                                  style: { width: a },
                                  children: (0, n.jsx)(d.A, {
                                      user: t,
                                      widgetType: i,
                                      game: e,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && s?.item != null) {
                              let { item: e } = s;
                              return (0, n.jsx)("div", {
                                  className: m.Xm,
                                  children: (0, n.jsx)(c.A, {
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
        E = l.useRef(null),
        h = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            E.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!i) {
                E.current = null;
                return;
            }
            null == E.current && h();
        }, [i, h]),
        !0 !== i || null == x || null == A)
    )
        return null;
    null == E.current && h();
    let { x: j, y: N } = E.current ?? { x: 0, y: 0 },
        T = x.x - j - 60 * !!I,
        v = x.y - N;
    return (0, n.jsx)("div", { className: m.kL, style: { transform: `translate3d(${T}px, ${v}px, 0)` }, children: A });
}
