"use strict";
s.d(t, { A: () => L });
var n = s(627968),
    r = s(64700),
    l = s(989349),
    a = s.n(l),
    i = s(158954),
    o = s(311907),
    c = s(230109),
    d = s(688810),
    u = s(871123),
    _ = s(733391),
    g = s(439303),
    m = s(832163),
    h = s(44724),
    p = s(317560),
    f = s(183802),
    x = s(67480),
    E = s(954571),
    b = s(440938),
    C = s(652215),
    A = s(188275),
    S = s(985018),
    v = s(27112);
let I = { pageSection: "marvel-rivals-promotional-banner" },
    L = (e) => {
        let t,
            { onDismiss: s, skuIds: l, endTime: L, tab: j } = e,
            k =
                (r.useEffect(() => {
                    for (let e of l) (0, _.qf)(A.Kf, e);
                }, [l]),
                (t = (0, o.bG)(
                    [x.A],
                    () => !l.some((e) => x.A.isFetching(e)) && l.some((e) => x.A.didFetchingSkuFail(e)),
                    [l],
                )),
                r.useEffect(() => {
                    t && (0, _.Rw)(A.Kf);
                }, [t]),
                (0, o.yK)([x.A, m.A], () => {
                    if (l.some((e) => x.A.isFetching(e))) return [];
                    let e = l.filter((e) => null != x.A.get(e));
                    if (e.length >= l.length) return l;
                    let t = m.A.getStorefrontData(A.Kf);
                    if (null == t || "loading" === t.state) return e;
                    let s = new Set(l);
                    return [
                        ...e,
                        ...(null != t.storefront
                            ? (0, u.jd)(t.storefront).filter((e) => !s.has(e) && null != x.A.get(e))
                            : []),
                    ].slice(0, l.length);
                }, [l])),
            T = (0, b.uM)(),
            { analyticsLocations: O } = (0, d.Ay)(),
            N = r.useRef(null),
            y = r.useRef(!1),
            R = r.useRef(null),
            B = r.useMemo(() => {
                let e = a()(),
                    t = Math.max(a()(L).diff(e, "days"), 1);
                return S.intl.formatToPlainString(S.t.BXpdIg, { days: t });
            }, [L]),
            M = r.useCallback(
                (e, t) => {
                    E.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: T?.sessionId,
                        page_type: j,
                        page_category: T?.pageCategory,
                        page_section: T?.pageSection,
                        tile_type: "MARVEL_RIVALS_PROMOTIONAL_BANNER",
                        cta_name: e,
                        ...(null != t ? { sku_id: t } : void 0),
                    });
                },
                [T?.sessionId, T?.pageCategory, T?.pageSection, j],
            ),
            P = r.useCallback(() => {
                (0, h.X)({ guildId: A.Kf });
            }, []),
            D = r.useCallback(() => {
                M("go_to_game_shop"), (0, h.default)({ guildId: A.Kf });
            }, [M]),
            w = r.useCallback(
                (e, t) => {
                    let { skuId: s, applicationId: n, guildId: r } = t;
                    M("card_click", s),
                        (0, p.R)({ skuId: s, applicationId: n, guildId: r, isStorefront: !1, analyticsLocations: O });
                },
                [M, O],
            ),
            H = r.useCallback(() => {
                M("dismiss"), s();
            }, [M, s]),
            F = r.useCallback(
                (e) => {
                    y.current ||
                        (e
                            ? null === R.current &&
                              (R.current = setTimeout(() => {
                                  (y.current = !0),
                                      (R.current = null),
                                      E.default.track(C.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                                          collectibles_shop_session_id: T?.sessionId,
                                          page_type: j,
                                          page_category: T?.pageCategory,
                                          page_section: T?.pageSection,
                                          type: "marvel_rivals_promotional_banner",
                                      });
                              }, 1e3))
                            : null !== R.current && (clearTimeout(R.current), (R.current = null)));
                },
                [T?.sessionId, T?.pageCategory, T?.pageSection, j],
            );
        return (r.useEffect(
            () => () => {
                null !== R.current && (clearTimeout(R.current), (R.current = null));
            },
            [],
        ),
        0 === k.length)
            ? null
            : (0, n.jsx)(c.L, {
                  innerRef: N,
                  onChange: F,
                  threshold: 0,
                  children: (0, n.jsx)("div", {
                      ref: N,
                      className: v.YB,
                      children: (0, n.jsxs)("div", {
                          className: v.kL,
                          children: [
                              (0, n.jsx)("div", {
                                  className: v.b,
                                  children: (0, n.jsx)(i.JnF, { size: "sm", variant: "icon-only", onClick: H }),
                              }),
                              (0, n.jsxs)("div", {
                                  className: v.xf,
                                  children: [
                                      null != B &&
                                          (0, n.jsx)("div", {
                                              className: v.qw,
                                              children: (0, n.jsx)(i.Exy, {
                                                  type: { text: `${S.intl.string(S.t.yYEZGi)} (${B})` },
                                                  variant: "brand",
                                              }),
                                          }),
                                      (0, n.jsxs)("div", {
                                          className: v.B5,
                                          children: [
                                              (0, n.jsx)(i.DZT, {
                                                  variant: "heading-xl/semibold",
                                                  color: "always-white",
                                                  children: S.intl.string(S.t["z/QEIP"]),
                                              }),
                                              (0, n.jsx)(i.$nd, {
                                                  variant: "overlay-primary",
                                                  icon: i.I9m,
                                                  iconPosition: "end",
                                                  text: S.intl.string(S.t["kq/75v"]),
                                                  onMouseDown: P,
                                                  onClick: D,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(g.E9, {
                                  newValue: I,
                                  children: (0, n.jsx)("div", {
                                      className: v.$2,
                                      children: k.map((e, t) =>
                                          (0, n.jsx)(f.A, { skuId: e, positionInSection: t, onClick: w }, e),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                  }),
              });
    };
