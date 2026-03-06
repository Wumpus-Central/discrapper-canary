"use strict";
s.d(t, { A: () => G });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(651162),
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
    C = s(335657),
    E = s(100057),
    b = s(599062),
    A = s(159439),
    S = s(998694),
    v = s(666413),
    I = s(573455),
    L = s(565057),
    j = s(227205),
    k = s(457414),
    T = s(761218),
    O = s(633026),
    y = s(251191),
    N = s(166489),
    R = s(613258),
    B = s(152568),
    M = s(758836),
    P = s(652215),
    D = s(985018),
    H = s(419447);
let w = [M.G2.HOME, M.G2.ORBS],
    U = (e) => {
        let { tab: t } = e,
            s = (0, o.bG)([x.A], () => x.A.getShopLayoutUrlOverride()),
            [l, a] = r.useState(null);
        return (r.useEffect(() => {
            null != s &&
                "" !== s &&
                fetch(s)
                    .then((e) => e.json())
                    .then((e) => a(e))
                    .catch(() => a(null));
        }, [s]),
        t === M.G2.ORBS)
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(N.A, {}),
                      (0, n.jsx)("div", {
                          className: i()(H.YB, H.GS),
                          children: (0, n.jsx)(g.Qs, { tenantId: P.FYj, layoutId: "1478495181551440044" }),
                      }),
                  ],
              })
            : (0, n.jsx)("div", {
                  className: i()(H.YB, H.GS),
                  children:
                      null != s && "" !== s && null != l
                          ? (0, n.jsx)(g.Ay, { layout: l })
                          : (0, n.jsx)(g.Qs, { tenantId: P.FYj, layoutId: "1465939725649973269" }),
              });
    },
    F = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: o } = e,
            { noCache: d, includeUnpublished: u } = (0, S.A)(),
            [_, g] = r.useState(!1),
            h = (0, p.uM)(),
            x = h?.sessionId ?? "";
        r.useEffect(() => {
            (0, E.z)({
                sessionId: x,
                checkpoint: E.t.SHOP_MOUNTED,
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
            } = (0, C.y)(o, { noCache: d, includeUnpublished: u, logPerf: !0 }, { sessionId: x, tab: o }),
            w = r.useCallback(() => {
                P();
            }, [P]);
        return (r.useEffect(() => {
            null != N ||
                A ||
                0 === R.length ||
                (0, E.z)({
                    sessionId: x,
                    checkpoint: E.t.SHOP_RENDERED,
                    tab: o,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: d,
                });
        }, [N, A, R.length, u, d, x, o]),
        null != N)
            ? (0, n.jsx)(b.h, { onRetry: w, errorOrigin: b.A.SHOP_PAGE, errorMessage: N.message })
            : A || 0 === R.length
              ? (0, n.jsxs)("div", {
                    className: i()(H.g4, H.Of),
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
                    children: R.map((e, r) =>
                        ((e, r, d) => {
                            if (null == e) return null;
                            let u = null,
                                h = !1;
                            switch (e.type) {
                                case a.g.HERO:
                                    u = (0, n.jsx)(j.A, { isLoading: A, handleTransition: t, heroBlock: e, tab: o }, d);
                                    break;
                                case a.g.FEATURED:
                                    u = (0, n.jsx)(
                                        I.A,
                                        { isLoading: A, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case a.g.FEED:
                                    let p = e.sortedSkuIds;
                                    u = (0, n.jsx)(
                                        L.A,
                                        {
                                            title:
                                                o === M.G2.ORBS ? D.intl.string(D.t.dFgeuZ) : D.intl.string(D.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: p,
                                            buttonContainerClassName: r?.type === a.g.IMMERSIVE_BANNER ? H.w : void 0,
                                            prioritizeUserDiscounts: o === M.G2.HOME,
                                            tab: o,
                                            orbsSupportedOnly: o === M.G2.ORBS,
                                        },
                                        d,
                                    );
                                    break;
                                case a.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, m.En)(c.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    u = (0, n.jsx)(B.A, { wideBannerBlock: e, tab: o }, d);
                                    break;
                                case a.g.SHELF:
                                    u = (0, n.jsx)(y.A, { handleTransition: t, shelf: e, tab: o }, d);
                                    break;
                                case a.g.COUNTDOWN_TIMER:
                                    (u = (0, n.jsx)(v.S, { countdownTimerBlock: e, isVisible: _ }, d)), (h = !0);
                                    break;
                                case a.g.IMMERSIVE_BANNER:
                                    u = (0, n.jsx)(
                                        k.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => g(!e) },
                                        d,
                                    );
                                    break;
                                case a.g.REWARD_HERO:
                                    u = (0, n.jsx)(O.A, { isLoading: A, handleTransition: t, heroBlock: e, tab: o }, d);
                                    break;
                                case a.g.MARVEL_RIVALS_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, m.En)(c.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD);
                                    if (t) return null;
                                    return (0, n.jsx)(f.rW, {
                                        blockType: e.type,
                                        children: (0, n.jsx)(
                                            T.A,
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
                                    { className: i()(H.v1, H.Of, { [H.J1]: 0 === d || h }), children: u },
                                    d,
                                ),
                            });
                        })(e, r > 0 ? R[r - 1] : null, r),
                    ),
                });
    },
    G = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            i = r.useRef(null),
            { handleScroll: a } = (0, u.X)(i, s),
            o = (0, A.U)(),
            c = (0, _.f)("Shop Home"),
            g = (0, p.uM)(),
            [m, f] = r.useState(M.md),
            [x, C] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != i.current) {
                    let e = () => {
                            if (null == i.current) return;
                            let e = i.current.getDistanceFromBottom();
                            m >= 36 ? C(e < 20) : e <= 200 && f((e) => e + M.md);
                        },
                        t = i.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [i, m, f, C]),
            (0, n.jsx)(d.T7Y, {
                className: H.OW,
                ref: i,
                onScroll: a,
                children: (0, n.jsxs)("div", {
                    className: H.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: H.rb,
                            children: [
                                c && w.includes(s)
                                    ? (0, n.jsx)(U, { tab: s })
                                    : (0, n.jsx)(F, {
                                          handleTransition: t,
                                          numVisibleItems: m,
                                          isFetchingCategories: o,
                                          tab: s,
                                      }),
                                s !== M.G2.CATALOG &&
                                    m >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: H.R$,
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
                        (0, n.jsx)(R.A, { peaking: x, transitioning: l === M.Pf.OUT }),
                    ],
                }),
            })
        );
    };
