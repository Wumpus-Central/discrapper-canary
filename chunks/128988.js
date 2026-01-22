n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    i = n(688807),
    a = n(311907),
    s = n(397927),
    o = n(287809),
    c = n(788593),
    u = n(742710),
    d = n(463259),
    f = n(18983),
    p = n(330966);

function b(e) {
    var t;
    let { scrollerRef: n } = e,
        {
            isDragging: b,
            item: g,
            sourceClientOffset: m,
        } = (0, i.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        y = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        O = (0, s.VUy)(),
        j = l.useMemo(
            () =>
                null == y || null == g
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: i } = e;
                          if ("WIDGET" === l && (null == i ? void 0 : i.widget) != null)
                              return (0, r.jsx)("div", {
                                  className: p.dt,
                                  children: (0, r.jsx)(d.u, {
                                      widget: i.widget,
                                      user: t,
                                      disableInteraction: !0,
                                  }),
                              });
                          if ("GAME_COVER" === l && (null == i ? void 0 : i.gameName) != null) {
                              let { imageSrc: e, gameName: l } = i;
                              return (0, r.jsx)(c.A, {
                                  className: p.XJ,
                                  imageSrc: e,
                                  gameName: l,
                                  applicationId: n,
                                  userId: null == t ? void 0 : t.id,
                                  disableInteraction: !0,
                              });
                          }
                          if (
                              "GAME_DETAILS_CARD" === l &&
                              (null == i ? void 0 : i.game) != null &&
                              (null == i ? void 0 : i.widgetType) != null
                          ) {
                              let { game: e, widgetType: n } = i;
                              return (0, r.jsx)(u.A, {
                                  className: p.xB,
                                  user: t,
                                  widgetType: n,
                                  game: e,
                                  disableInteraction: !0,
                              });
                          }
                          if ("WISHLIST_ITEM" === l && (null == i ? void 0 : i.item) != null) {
                              let { item: e } = i;
                              return (0, r.jsx)("div", {
                                  className: p.Xm,
                                  children: (0, r.jsx)(f.A, {
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
                      })(g, y),
            [g, y],
        ),
        x = l.useRef(null),
        h = l.useCallback(() => {
            if (null == n.current) return;
            let e = n.current.getBoundingClientRect();
            x.current = {
                x: e.left,
                y: e.top,
            };
        }, [n]);
    if (
        (l.useEffect(() => {
            if (!b) {
                x.current = null;
                return;
            }
            null == x.current && h();
        }, [b, h]),
        !0 !== b || null == m || null == j)
    )
        return null;
    null == x.current && h();
    let { x: v, y: A } =
            null != (t = x.current)
                ? t
                : {
                      x: 0,
                      y: 0,
                  },
        w = m.x - v - 60 * !!O,
        I = m.y - A;
    return (0, r.jsx)("div", {
        className: p.kL,
        style: {
            transform: "translate3d(".concat(w, "px, ").concat(I, "px, 0)"),
        },
        children: j,
    });
}
