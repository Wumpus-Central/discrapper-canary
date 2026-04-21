"use strict";
s.d(t, { A: () => P });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(651162),
    o = s(554146),
    c = s(397927),
    d = s(564322),
    u = s(367727),
    _ = s(954571),
    g = s(440938),
    m = s(344011),
    h = s(335657),
    p = s(100057),
    f = s(599062),
    x = s(159439),
    E = s(998694),
    C = s(666413),
    b = s(573455),
    A = s(565057),
    S = s(227205),
    v = s(457414),
    I = s(633026),
    L = s(251191),
    j = s(700444),
    O = s(613258),
    T = s(152568),
    k = s(758836),
    N = s(652215),
    y = s(985018),
    R = s(941734);
let B = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: c } = e,
            { noCache: d, includeUnpublished: _ } = (0, E.A)(),
            [x, O] = r.useState(!1),
            N = (0, g.uM)(),
            B = N?.sessionId ?? "";
        r.useEffect(() => {
            (0, p.z)({
                sessionId: B,
                checkpoint: p.t.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: _,
                cacheDisabled: d,
            });
        }, [c]);
        let {
                isFetchingShopHome: P,
                fetchShopHomeError: M,
                shopBlocks: H,
                refreshShopHome: D,
            } = (0, h.y)(c, { noCache: d, includeUnpublished: _, logPerf: !0 }, { sessionId: B, tab: c }),
            w = r.useCallback(() => {
                D();
            }, [D]);
        return (r.useEffect(() => {
            null != M ||
                P ||
                0 === H.length ||
                (0, p.z)({
                    sessionId: B,
                    checkpoint: p.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: _,
                    cacheDisabled: d,
                });
        }, [M, P, H.length, _, d, B, c]),
        null != M)
            ? (0, n.jsx)(f.h, { onRetry: w, errorOrigin: f.A.SHOP_PAGE, errorMessage: M.message })
            : P || 0 === H.length
              ? (0, n.jsxs)("div", {
                    className: a()(R.g4, R.Of),
                    children: [
                        (0, n.jsx)(S.A, { isLoading: P, handleTransition: t, tab: c }),
                        (0, n.jsx)(b.A, { isLoading: P, handleTransition: t, categories: [] }),
                        (0, n.jsx)(A.A, {
                            isLoading: P,
                            title: c === k.G2.ORBS ? y.intl.string(y.t.dFgeuZ) : y.intl.string(y.t.NSv5KV),
                            numVisibleItems: s,
                            tab: c,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: H.map((e, r) =>
                        ((e, r, d) => {
                            if (null == e) return null;
                            let _ = null,
                                g = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    _ = (0, n.jsx)(S.A, { isLoading: P, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.FEATURED:
                                    _ = (0, n.jsx)(
                                        b.A,
                                        { isLoading: P, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let h = e.sortedSkuIds;
                                    _ = (0, n.jsx)(
                                        A.A,
                                        {
                                            title:
                                                c === k.G2.ORBS ? y.intl.string(y.t.dFgeuZ) : y.intl.string(y.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: h,
                                            buttonContainerClassName: r?.type === i.g.IMMERSIVE_BANNER ? R.w : void 0,
                                            prioritizeUserDiscounts: c === k.G2.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === k.G2.ORBS,
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
                                    _ = (0, n.jsx)(T.A, { wideBannerBlock: e, tab: c }, d);
                                    break;
                                case i.g.SHELF:
                                    _ = (0, n.jsx)(L.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (_ = (0, n.jsx)(C.S, { countdownTimerBlock: e, isVisible: x }, d)), (g = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    _ = (0, n.jsx)(
                                        v.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => O(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    _ = (0, n.jsx)(I.A, { isLoading: P, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, u.En)(
                                        o.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, n.jsx)(
                                        m.rW,
                                        {
                                            blockType: e.type,
                                            children: (0, n.jsx)(j.A, {
                                                onDismiss: () => {
                                                    (0, u.d6)(
                                                        o.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                                        {},
                                                    );
                                                },
                                                applicationId: e.applicationId,
                                                headerText: e.headerText,
                                                gradientColors: e.gradientColors,
                                                gradientAngle: e.gradientAngle,
                                                skuIds: e.skuIds,
                                                tab: c,
                                            }),
                                        },
                                        d,
                                    );
                                }
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(
                                m.rW,
                                {
                                    blockType: e.type,
                                    children: (0, n.jsx)("div", {
                                        className: a()(R.v1, R.Of, { [R.J1]: 0 === d || g }),
                                        children: _,
                                    }),
                                },
                                d,
                            );
                        })(e, r > 0 ? H[r - 1] : null, r),
                    ),
                });
    },
    P = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            a = r.useRef(null),
            { handleScroll: i } = (0, d.X)(a, s),
            o = (0, x.U)(),
            u = (0, g.uM)(),
            [m, h] = r.useState(k.md),
            [p, f] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            m >= 36 ? f(e < 20) : e <= 200 && h((e) => e + k.md);
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
                                s !== k.G2.CATALOG &&
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
                                                        _.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: s,
                                                            page_category: s === k.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(O.A, { peaking: p, transitioning: l === k.Pf.OUT }),
                    ],
                }),
            })
        );
    };
