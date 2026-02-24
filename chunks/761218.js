"use strict";
n.d(t, { A: () => v });
var s = n(627968),
    l = n(64700),
    r = n(989349),
    a = n.n(r),
    i = n(158954),
    o = n(311907),
    c = n(230109),
    d = n(688810),
    u = n(733391),
    g = n(439303),
    _ = n(44724),
    m = n(317560),
    h = n(183802),
    p = n(67480),
    f = n(954571),
    x = n(440938),
    E = n(652215),
    C = n(188275),
    A = n(985018),
    b = n(413194);
let S = { pageSection: "marvel-rivals-promotional-banner" },
    v = (e) => {
        let { onDismiss: t, skuIds: n, endTime: r, tab: v } = e,
            L = (0, o.bG)([p.A], () => n.every((e) => null != p.A.get(e)), [n]),
            I = (0, x.uM)(),
            { analyticsLocations: j } = (0, d.Ay)(),
            k = l.useRef(null),
            T = l.useRef(!1),
            O = l.useRef(null);
        l.useEffect(() => {
            for (let e of n) (0, u.qf)(C.Kf, e);
        }, [n]);
        let N = l.useMemo(() => {
                let e = a()(),
                    t = Math.max(a()(r).diff(e, "days"), 1);
                return A.intl.formatToPlainString(A.t.BXpdIg, { days: t });
            }, [r]),
            y = l.useCallback(
                (e, t) => {
                    f.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: I?.sessionId,
                        page_type: v,
                        page_category: I?.pageCategory,
                        page_section: I?.pageSection,
                        tile_type: "MARVEL_RIVALS_PROMOTIONAL_BANNER",
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [I?.sessionId, I?.pageCategory, I?.pageSection, v],
            ),
            R = l.useCallback(() => {
                (0, _.X)({ guildId: C.Kf });
            }, []),
            B = l.useCallback(() => {
                y("go_to_game_shop"), (0, _.default)({ guildId: C.Kf });
            }, [y]),
            M = l.useCallback(
                (e) => {
                    y("card_click", e),
                        (0, m.R)({
                            skuId: e,
                            applicationId: C.XR,
                            guildId: C.Kf,
                            isStorefront: !1,
                            analyticsLocations: j,
                        });
                },
                [y, j],
            ),
            P = l.useCallback(() => {
                y("dismiss"), t();
            }, [y, t]),
            D = l.useCallback(
                (e) => {
                    T.current ||
                        (e
                            ? null === O.current &&
                              (O.current = setTimeout(() => {
                                  (T.current = !0),
                                      (O.current = null),
                                      f.default.track(E.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: I?.sessionId,
                                          page_type: v,
                                          page_category: I?.pageCategory,
                                          page_section: I?.pageSection,
                                          type: "marvel_rivals_promotional_banner",
                                      });
                              }, 1e3))
                            : null !== O.current && (clearTimeout(O.current), (O.current = null)));
                },
                [I?.sessionId, I?.pageCategory, I?.pageSection, v],
            );
        return (l.useEffect(
            () => () => {
                null !== O.current && (clearTimeout(O.current), (O.current = null));
            },
            [],
        ),
        L)
            ? (0, s.jsx)(c.L, {
                  innerRef: k,
                  onChange: D,
                  threshold: 0,
                  children: (0, s.jsx)("div", {
                      ref: k,
                      className: b.YB,
                      children: (0, s.jsxs)("div", {
                          className: b.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: b.b,
                                  children: (0, s.jsx)(i.JnF, { size: "sm", variant: "icon-only", onClick: P }),
                              }),
                              (0, s.jsxs)("div", {
                                  className: b.xf,
                                  children: [
                                      null != N &&
                                          (0, s.jsx)("div", {
                                              className: b.qw,
                                              children: (0, s.jsx)(i.Exy, {
                                                  type: { text: `${A.intl.string(A.t.yYEZGi)} (${N})` },
                                                  variant: "brand",
                                              }),
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: b.B5,
                                          children: [
                                              (0, s.jsx)(i.DZT, {
                                                  variant: "heading-xl/semibold",
                                                  color: "always-white",
                                                  children: A.intl.string(A.t["b3+OH1"]),
                                              }),
                                              (0, s.jsx)(i.$nd, {
                                                  variant: "overlay-primary",
                                                  icon: i.I9m,
                                                  iconPosition: "end",
                                                  text: A.intl.string(A.t["kq/75v"]),
                                                  onMouseDown: R,
                                                  onClick: B,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, s.jsx)(g.E9, {
                                  newValue: S,
                                  children: (0, s.jsx)("div", {
                                      className: b.$2,
                                      children: n.map((e, t) =>
                                          (0, s.jsx)(
                                              h.A,
                                              {
                                                  skuId: e,
                                                  applicationId: C.XR,
                                                  guildId: C.Kf,
                                                  positionInSection: t,
                                                  onClick: () => M(e),
                                              },
                                              e,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                  }),
              })
            : null;
    };
