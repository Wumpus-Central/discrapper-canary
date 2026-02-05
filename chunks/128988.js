n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(688807),
    r = n(311907),
    s = n(397927),
    o = n(287809),
    d = n(788593),
    c = n(742710),
    u = n(463259),
    g = n(18983),
    m = n(330966);
function x(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: x,
            sourceClientOffset: f,
        } = (0, a.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        h = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
        p = (0, s.VUy)(),
        _ = l.useMemo(
            () =>
                null == h || null == x
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: a } = e;
                          if ("WIDGET" === l && a?.widget != null)
                              return (0, i.jsx)("div", {
                                  className: m.dt,
                                  children: (0, i.jsx)(u.u, { widget: a.widget, user: t, disableInteraction: !0 }),
                              });
                          if ("GAME_COVER" === l && a?.gameName != null) {
                              let { imageSrc: e, gameName: l } = a;
                              return (0, i.jsx)(d.A, {
                                  className: m.XJ,
                                  imageSrc: e,
                                  gameName: l,
                                  applicationId: n,
                                  userId: t?.id,
                                  disableInteraction: !0,
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && a?.game != null && a?.widgetType != null) {
                              let { game: e, widgetType: n } = a;
                              return (0, i.jsx)(c.A, {
                                  className: m.xB,
                                  user: t,
                                  widgetType: n,
                                  game: e,
                                  disableInteraction: !0,
                              });
                          }
                          if ("WISHLIST_ITEM" === l && a?.item != null) {
                              let { item: e } = a;
                              return (0, i.jsx)("div", {
                                  className: m.Xm,
                                  children: (0, i.jsx)(g.A, {
                                      item: e,
                                      profileOwner: t,
                                      wishlistId: null,
                                      isOwner: !1,
                                      showOverlayButton: !1,
                                      showIcons: !1,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(x, h),
            [x, h],
        ),
        A = l.useRef(null),
        I = l.useCallback(() => {
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
            null == A.current && I();
        }, [n, I]),
        !0 !== n || null == f || null == _)
    )
        return null;
    null == A.current && I();
    let { x: j, y: v } = A.current ?? { x: 0, y: 0 },
        T = f.x - j - 60 * !!p,
        E = f.y - v;
    return (0, i.jsx)("div", { className: m.kL, style: { transform: `translate3d(${T}px, ${E}px, 0)` }, children: _ });
}
