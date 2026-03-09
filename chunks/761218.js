"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    r = s(64700),
    l = s(989349),
    i = s.n(l),
    a = s(158954),
    o = s(311907),
    c = s(230109),
    d = s(688810),
    u = s(733391),
    _ = s(439303),
    g = s(44724),
    m = s(317560),
    h = s(183802),
    p = s(67480),
    f = s(954571),
    x = s(440938),
    C = s(652215),
    E = s(188275),
    b = s(985018),
    A = s(27112);
let S = { pageSection: "marvel-rivals-promotional-banner" },
    v = (e) => {
        let { onDismiss: t, skuIds: s, endTime: l, tab: v } = e,
            I = (0, o.bG)([p.A], () => s.every((e) => null != p.A.get(e)), [s]),
            L = (0, x.uM)(),
            { analyticsLocations: j } = (0, d.Ay)(),
            k = r.useRef(null),
            T = r.useRef(!1),
            O = r.useRef(null);
        r.useEffect(() => {
            for (let e of s) (0, u.qf)(E.Kf, e);
        }, [s]);
        let y = r.useMemo(() => {
                let e = i()(),
                    t = Math.max(i()(l).diff(e, "days"), 1);
                return b.intl.formatToPlainString(b.t.BXpdIg, { days: t });
            }, [l]),
            N = r.useCallback(
                (e, t) => {
                    f.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: L?.sessionId,
                        page_type: v,
                        page_category: L?.pageCategory,
                        page_section: L?.pageSection,
                        tile_type: "MARVEL_RIVALS_PROMOTIONAL_BANNER",
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [L?.sessionId, L?.pageCategory, L?.pageSection, v],
            ),
            R = r.useCallback(() => {
                (0, g.X)({ guildId: E.Kf });
            }, []),
            B = r.useCallback(() => {
                N("go_to_game_shop"), (0, g.default)({ guildId: E.Kf });
            }, [N]),
            M = r.useCallback(
                (e) => {
                    N("card_click", e),
                        (0, m.R)({
                            skuId: e,
                            applicationId: E.XR,
                            guildId: E.Kf,
                            isStorefront: !1,
                            analyticsLocations: j,
                        });
                },
                [N, j],
            ),
            P = r.useCallback(() => {
                N("dismiss"), t();
            }, [N, t]),
            D = r.useCallback(
                (e) => {
                    T.current ||
                        (e
                            ? null === O.current &&
                              (O.current = setTimeout(() => {
                                  (T.current = !0),
                                      (O.current = null),
                                      f.default.track(C.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: L?.sessionId,
                                          page_type: v,
                                          page_category: L?.pageCategory,
                                          page_section: L?.pageSection,
                                          type: "marvel_rivals_promotional_banner",
                                      });
                              }, 1e3))
                            : null !== O.current && (clearTimeout(O.current), (O.current = null)));
                },
                [L?.sessionId, L?.pageCategory, L?.pageSection, v],
            );
        return (r.useEffect(
            () => () => {
                null !== O.current && (clearTimeout(O.current), (O.current = null));
            },
            [],
        ),
        I)
            ? (0, n.jsx)(c.L, {
                  innerRef: k,
                  onChange: D,
                  threshold: 0,
                  children: (0, n.jsx)("div", {
                      ref: k,
                      className: A.YB,
                      children: (0, n.jsxs)("div", {
                          className: A.kL,
                          children: [
                              (0, n.jsx)("div", {
                                  className: A.b,
                                  children: (0, n.jsx)(a.JnF, { size: "sm", variant: "icon-only", onClick: P }),
                              }),
                              (0, n.jsxs)("div", {
                                  className: A.xf,
                                  children: [
                                      null != y &&
                                          (0, n.jsx)("div", {
                                              className: A.qw,
                                              children: (0, n.jsx)(a.Exy, {
                                                  type: { text: `${b.intl.string(b.t.yYEZGi)} (${y})` },
                                                  variant: "brand",
                                              }),
                                          }),
                                      (0, n.jsxs)("div", {
                                          className: A.B5,
                                          children: [
                                              (0, n.jsx)(a.DZT, {
                                                  variant: "heading-xl/semibold",
                                                  color: "always-white",
                                                  children: b.intl.string(b.t["z/QEIP"]),
                                              }),
                                              (0, n.jsx)(a.$nd, {
                                                  variant: "overlay-primary",
                                                  icon: a.I9m,
                                                  iconPosition: "end",
                                                  text: b.intl.string(b.t["kq/75v"]),
                                                  onMouseDown: R,
                                                  onClick: B,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(_.E9, {
                                  newValue: S,
                                  children: (0, n.jsx)("div", {
                                      className: A.$2,
                                      children: s.map((e, t) =>
                                          (0, n.jsx)(
                                              h.A,
                                              {
                                                  skuId: e,
                                                  applicationId: E.XR,
                                                  guildId: E.Kf,
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
