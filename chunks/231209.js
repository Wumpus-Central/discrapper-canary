"use strict";
s.d(t, { A: () => M });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(651162),
    o = s(554146),
    c = s(397927),
    d = s(564322),
    u = s(367727),
    g = s(954571),
    _ = s(440938),
    m = s(344011),
    h = s(335657),
    p = s(100057),
    f = s(599062),
    x = s(159439),
    E = s(998694),
    C = s(666413),
    A = s(573455),
    b = s(565057),
    S = s(227205),
    v = s(457414),
    L = s(761218),
    I = s(633026),
    j = s(251191),
    k = s(613258),
    O = s(152568),
    T = s(758836),
    N = s(652215),
    y = s(985018),
    R = s(201073);
let B = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: r, tab: c } = e,
            { noCache: d, includeUnpublished: g } = (0, E.A)(),
            [x, k] = l.useState(!1),
            N = (0, _.uM)(),
            B = N?.sessionId ?? "";
        l.useEffect(() => {
            (0, p.z)({
                sessionId: B,
                checkpoint: p.t.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: g,
                cacheDisabled: d,
            });
        }, [c]);
        let {
                isFetchingShopHome: M,
                fetchShopHomeError: P,
                shopBlocks: D,
                refreshShopHome: H,
            } = (0, h.y)(
                c,
                { noCache: d, includeUnpublished: g, includeBundles: !0, logPerf: !0 },
                { sessionId: B, tab: c },
            ),
            w = l.useCallback(() => {
                H();
            }, [H]);
        return (l.useEffect(() => {
            null != P ||
                M ||
                0 === D.length ||
                (0, p.z)({
                    sessionId: B,
                    checkpoint: p.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: g,
                    cacheDisabled: d,
                });
        }, [P, M, D.length, g, d, B, c]),
        null != P)
            ? (0, n.jsx)(f.h, { onRetry: w, errorOrigin: f.A.SHOP_PAGE, errorMessage: P.message })
            : M || 0 === D.length
              ? (0, n.jsxs)("div", {
                    className: a()(R.g4, R.Of),
                    children: [
                        (0, n.jsx)(S.A, { isLoading: M, handleTransition: t, tab: c }),
                        (0, n.jsx)(A.A, { isLoading: M, handleTransition: t, categories: [] }),
                        (0, n.jsx)(b.A, {
                            isLoading: M,
                            title: c === T.G2.ORBS ? y.intl.string(y.t.dFgeuZ) : y.intl.string(y.t.NSv5KV),
                            numVisibleItems: s,
                            tab: c,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: D.map((e, l) =>
                        ((e, l, d) => {
                            if (null == e) return null;
                            let g = null,
                                _ = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    g = (0, n.jsx)(S.A, { isLoading: M, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.FEATURED:
                                    g = (0, n.jsx)(
                                        A.A,
                                        { isLoading: M, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let h = e.sortedSkuIds;
                                    g = (0, n.jsx)(
                                        b.A,
                                        {
                                            title:
                                                c === T.G2.ORBS ? y.intl.string(y.t.dFgeuZ) : y.intl.string(y.t.NSv5KV),
                                            isLoading: M || r,
                                            numVisibleItems: s,
                                            sortedSkuIds: h,
                                            buttonContainerClassName: l?.type === i.g.IMMERSIVE_BANNER ? R.w : void 0,
                                            prioritizeUserDiscounts: c === T.G2.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === T.G2.ORBS,
                                        },
                                        d,
                                    );
                                    break;
                                case i.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, u.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    g = (0, n.jsx)(O.A, { wideBannerBlock: e, tab: c }, d);
                                    break;
                                case i.g.SHELF:
                                    g = (0, n.jsx)(j.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (g = (0, n.jsx)(C.S, { countdownTimerBlock: e, isVisible: x }, d)), (_ = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    g = (0, n.jsx)(
                                        v.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => k(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    g = (0, n.jsx)(I.A, { isLoading: M, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.MARVEL_RIVALS_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, u.En)(o.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD);
                                    if (t) return null;
                                    return (0, n.jsx)(m.rW, {
                                        blockType: e.type,
                                        children: (0, n.jsx)(
                                            L.A,
                                            {
                                                onDismiss: () => {
                                                    (0, u.d6)(o.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD, {});
                                                },
                                                skuIds: e.skuIds,
                                                endTime: e.endTime,
                                            },
                                            d,
                                        ),
                                    });
                                }
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(m.rW, {
                                blockType: e.type,
                                children: (0, n.jsx)(
                                    "div",
                                    { className: a()(R.v1, R.Of, { [R.J1]: 0 === d || _ }), children: g },
                                    d,
                                ),
                            });
                        })(e, l > 0 ? D[l - 1] : null, l),
                    ),
                });
    },
    M = (e) => {
        let { handleTransition: t, tab: s, transitionState: r } = e,
            a = l.useRef(null),
            { handleScroll: i } = (0, d.X)(a, s),
            o = (0, x.U)(),
            u = (0, _.uM)(),
            [m, h] = l.useState(T.md),
            [p, f] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            m >= 36 ? f(e < 20) : e <= 200 && h((e) => e + T.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, m, h, f]),
            (0, n.jsx)(c.T7Y, {
                className: R.OW,
                ref: a,
                onScroll: i,
                children: (0, n.jsxs)("div", {
                    className: R.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: R.rb,
                            children: [
                                (0, n.jsx)(B, {
                                    handleTransition: t,
                                    numVisibleItems: m,
                                    isFetchingCategories: o,
                                    tab: s,
                                }),
                                s !== T.G2.CATALOG &&
                                    m >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: R.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: y.intl.string(y.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: y.intl.string(y.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        g.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: s,
                                                            page_category: s === T.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(k.A, { peaking: p, transitioning: r === T.Pf.OUT }),
                    ],
                }),
            })
        );
    };
