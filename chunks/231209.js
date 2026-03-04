"use strict";
s.d(t, { A: () => F });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(651162),
    o = s(311907),
    c = s(554146),
    d = s(397927),
    u = s(564322),
    _ = s(287344),
    g = s(785330),
    m = s(367727),
    h = s(954571),
    p = s(440938),
    f = s(344011),
    x = s(295811),
    E = s(335657),
    C = s(100057),
    b = s(599062),
    A = s(159439),
    S = s(998694),
    v = s(666413),
    I = s(573455),
    L = s(565057),
    j = s(227205),
    k = s(457414),
    O = s(761218),
    T = s(633026),
    y = s(251191),
    N = s(166489),
    R = s(613258),
    B = s(152568),
    M = s(758836),
    P = s(652215),
    D = s(985018),
    w = s(201073);
let H = [M.G2.HOME, M.G2.ORBS],
    U = (e) => {
        let { tab: t } = e,
            s = (0, o.bG)([x.A], () => x.A.getShopLayoutUrlOverride()),
            [r, i] = l.useState(null);
        return (l.useEffect(() => {
            null != s &&
                "" !== s &&
                fetch(s)
                    .then((e) => e.json())
                    .then((e) => i(e))
                    .catch(() => i(null));
        }, [s]),
        t === M.G2.ORBS)
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(N.A, {}),
                      (0, n.jsx)("div", {
                          className: a()(w.YB, w.GS),
                          children: (0, n.jsx)(g.Qs, { tenantId: P.FYj, layoutId: "1478495181551440044" }),
                      }),
                  ],
              })
            : (0, n.jsx)("div", {
                  className: a()(w.YB, w.GS),
                  children:
                      null != s && "" !== s && null != r
                          ? (0, n.jsx)(g.Ay, { layout: r })
                          : (0, n.jsx)(g.Qs, { tenantId: P.FYj, layoutId: "1465939725649973269" }),
              });
    },
    G = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: r, tab: o } = e,
            { noCache: d, includeUnpublished: u } = (0, S.A)(),
            [_, g] = l.useState(!1),
            h = (0, p.uM)(),
            x = h?.sessionId ?? "";
        l.useEffect(() => {
            (0, C.z)({
                sessionId: x,
                checkpoint: C.t.SHOP_MOUNTED,
                tab: o,
                unpublishedCategoriesShown: u,
                cacheDisabled: d,
            });
        }, [o]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: N,
                shopBlocks: R,
                refreshShopHome: P,
            } = (0, E.y)(
                o,
                { noCache: d, includeUnpublished: u, includeBundles: !0, logPerf: !0 },
                { sessionId: x, tab: o },
            ),
            H = l.useCallback(() => {
                P();
            }, [P]);
        return (l.useEffect(() => {
            null != N ||
                A ||
                0 === R.length ||
                (0, C.z)({
                    sessionId: x,
                    checkpoint: C.t.SHOP_RENDERED,
                    tab: o,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: d,
                });
        }, [N, A, R.length, u, d, x, o]),
        null != N)
            ? (0, n.jsx)(b.h, { onRetry: H, errorOrigin: b.A.SHOP_PAGE, errorMessage: N.message })
            : A || 0 === R.length
              ? (0, n.jsxs)("div", {
                    className: a()(w.g4, w.Of),
                    children: [
                        (0, n.jsx)(j.A, { isLoading: A, handleTransition: t, tab: o }),
                        (0, n.jsx)(I.A, { isLoading: A, handleTransition: t, categories: [] }),
                        (0, n.jsx)(L.A, {
                            isLoading: A,
                            title: o === M.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                            numVisibleItems: s,
                            tab: o,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: R.map((e, l) =>
                        ((e, l, d) => {
                            if (null == e) return null;
                            let u = null,
                                h = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    u = (0, n.jsx)(j.A, { isLoading: A, handleTransition: t, heroBlock: e, tab: o }, d);
                                    break;
                                case i.g.FEATURED:
                                    u = (0, n.jsx)(
                                        I.A,
                                        { isLoading: A, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let p = e.sortedSkuIds;
                                    u = (0, n.jsx)(
                                        L.A,
                                        {
                                            title:
                                                o === M.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                                            isLoading: A || r,
                                            numVisibleItems: s,
                                            sortedSkuIds: p,
                                            buttonContainerClassName: l?.type === i.g.IMMERSIVE_BANNER ? w.w : void 0,
                                            prioritizeUserDiscounts: o === M.G2.HOME,
                                            tab: o,
                                            orbsSupportedOnly: o === M.G2.ORBS,
                                        },
                                        d,
                                    );
                                    break;
                                case i.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, m.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    u = (0, n.jsx)(B.A, { wideBannerBlock: e, tab: o }, d);
                                    break;
                                case i.g.SHELF:
                                    u = (0, n.jsx)(y.A, { handleTransition: t, shelf: e, tab: o }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (u = (0, n.jsx)(v.S, { countdownTimerBlock: e, isVisible: _ }, d)), (h = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    u = (0, n.jsx)(
                                        k.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => g(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    u = (0, n.jsx)(T.A, { isLoading: A, handleTransition: t, heroBlock: e, tab: o }, d);
                                    break;
                                case i.g.MARVEL_RIVALS_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, m.En)(c.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD);
                                    if (t) return null;
                                    return (0, n.jsx)(f.rW, {
                                        blockType: e.type,
                                        children: (0, n.jsx)(
                                            O.A,
                                            {
                                                onDismiss: () => {
                                                    (0, m.d6)(c.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD, {});
                                                },
                                                skuIds: e.skuIds,
                                                endTime: e.endTime,
                                                tab: o,
                                            },
                                            d,
                                        ),
                                    });
                                }
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(f.rW, {
                                blockType: e.type,
                                children: (0, n.jsx)(
                                    "div",
                                    { className: a()(w.v1, w.Of, { [w.J1]: 0 === d || h }), children: u },
                                    d,
                                ),
                            });
                        })(e, l > 0 ? R[l - 1] : null, l),
                    ),
                });
    },
    F = (e) => {
        let { handleTransition: t, tab: s, transitionState: r } = e,
            a = l.useRef(null),
            { handleScroll: i } = (0, u.X)(a, s),
            o = (0, A.U)(),
            c = (0, _.f)("Shop Home"),
            g = (0, p.uM)(),
            [m, f] = l.useState(M.md),
            [x, E] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            m >= 36 ? E(e < 20) : e <= 200 && f((e) => e + M.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, m, f, E]),
            (0, n.jsx)(d.T7Y, {
                className: w.OW,
                ref: a,
                onScroll: i,
                children: (0, n.jsxs)("div", {
                    className: w.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: w.rb,
                            children: [
                                c && H.includes(s)
                                    ? (0, n.jsx)(U, { tab: s })
                                    : (0, n.jsx)(G, {
                                          handleTransition: t,
                                          numVisibleItems: m,
                                          isFetchingCategories: o,
                                          tab: s,
                                      }),
                                s !== M.G2.CATALOG &&
                                    m >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: w.R$,
                                        children: [
                                            (0, n.jsx)(d.Heading, {
                                                variant: "heading-md/semibold",
                                                children: D.intl.string(D.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(d.Button, {
                                                variant: "primary",
                                                text: D.intl.string(D.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        h.default.track(P.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: g?.sessionId,
                                                            page_type: s,
                                                            page_category: s === M.G2.HOME ? void 0 : g?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(R.A, { peaking: x, transitioning: r === M.Pf.OUT }),
                    ],
                }),
            })
        );
    };
