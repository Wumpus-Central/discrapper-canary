"use strict";
s.d(t, { A: () => D });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(651162),
    o = s(554146),
    c = s(599319),
    d = s(534514),
    u = s(821609),
    g = s(564322),
    h = s(367727),
    _ = s(954571),
    m = s(440938),
    p = s(344011),
    f = s(558038),
    E = s(100057),
    x = s(599062),
    A = s(159439),
    C = s(998694),
    S = s(666413),
    b = s(573455),
    v = s(565057),
    L = s(227205),
    I = s(457414),
    j = s(633026),
    N = s(251191),
    T = s(700444),
    O = s(613258),
    y = s(152568),
    k = s(758836),
    R = s(652215),
    B = s(985018),
    P = s(941734);
let M = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: r, tab: c } = e,
            { noCache: d, includeUnpublished: u } = (0, C.A)(),
            [g, _] = l.useState(!1),
            A = (0, m.uM)(),
            O = A?.sessionId ?? "";
        l.useEffect(() => {
            (0, E.z)({
                sessionId: O,
                checkpoint: E.t.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: u,
                cacheDisabled: d,
            });
        }, [c]);
        let {
                isFetchingShopHome: R,
                fetchShopHomeError: M,
                shopBlocks: D,
                refreshShopHome: w,
            } = (0, f.y)(c, { noCache: d, includeUnpublished: u, logPerf: !0 }, { sessionId: O, tab: c }),
            H = l.useCallback(() => {
                w();
            }, [w]);
        return (l.useEffect(() => {
            null != M ||
                R ||
                0 === D.length ||
                (0, E.z)({
                    sessionId: O,
                    checkpoint: E.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: d,
                });
        }, [M, R, D.length, u, d, O, c]),
        null != M)
            ? (0, n.jsx)(x.h, { onRetry: H, errorOrigin: x.A.SHOP_PAGE, errorMessage: M.message })
            : R || 0 === D.length
              ? (0, n.jsxs)("div", {
                    className: a()(P.g4, P.Of),
                    children: [
                        (0, n.jsx)(L.A, { isLoading: R, handleTransition: t, tab: c }),
                        (0, n.jsx)(b.A, { isLoading: R, handleTransition: t, categories: [] }),
                        (0, n.jsx)(v.A, {
                            isLoading: R,
                            title: c === k.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                            numVisibleItems: s,
                            tab: c,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: D.map((e, l) =>
                        ((e, l, d) => {
                            if (null == e) return null;
                            let u = null,
                                m = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    u = (0, n.jsx)(L.A, { isLoading: R, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.FEATURED:
                                    u = (0, n.jsx)(
                                        b.A,
                                        { isLoading: R, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let f = e.sortedSkuIds;
                                    u = (0, n.jsx)(
                                        v.A,
                                        {
                                            title:
                                                c === k.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                                            isLoading: r,
                                            numVisibleItems: s,
                                            sortedSkuIds: f,
                                            buttonContainerClassName: l?.type === i.g.IMMERSIVE_BANNER ? P.w : void 0,
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
                                            { isDismissed: s } = (0, h.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    u = (0, n.jsx)(y.A, { wideBannerBlock: e, tab: c }, d);
                                    break;
                                case i.g.SHELF:
                                    u = (0, n.jsx)(N.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (u = (0, n.jsx)(S.S, { countdownTimerBlock: e, isVisible: g }, d)), (m = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    u = (0, n.jsx)(
                                        I.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => _(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    u = (0, n.jsx)(j.A, { isLoading: R, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, h.En)(
                                        o.M.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
                                    );
                                    if (t) return null;
                                    return (0, n.jsx)(
                                        p.rW,
                                        {
                                            blockType: e.type,
                                            children: (0, n.jsx)(T.A, {
                                                onDismiss: () => {
                                                    (0, h.d6)(
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
                                p.rW,
                                {
                                    blockType: e.type,
                                    children: (0, n.jsx)("div", {
                                        className: a()(P.v1, P.Of, { [P.J1]: 0 === d || m }),
                                        children: u,
                                    }),
                                },
                                d,
                            );
                        })(e, l > 0 ? D[l - 1] : null, l),
                    ),
                });
    },
    D = (e) => {
        let { handleTransition: t, tab: s, transitionState: r } = e,
            a = l.useRef(null),
            { handleScroll: i } = (0, g.X)(a, s),
            o = (0, A.U)(),
            h = (0, m.uM)(),
            [p, f] = l.useState(k.md),
            [E, x] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            p >= 36 ? x(e < 20) : e <= 200 && f((e) => e + k.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, p, f, x]),
            (0, n.jsx)(c.Ch, {
                className: P.OW,
                ref: a,
                onScroll: i,
                children: (0, n.jsxs)("div", {
                    className: P.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: P.rb,
                            children: [
                                (0, n.jsx)(M, {
                                    handleTransition: t,
                                    numVisibleItems: p,
                                    isFetchingCategories: o,
                                    tab: s,
                                }),
                                s !== k.G2.CATALOG &&
                                    p >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: P.R$,
                                        children: [
                                            (0, n.jsx)(d.D, {
                                                variant: "heading-md/semibold",
                                                children: B.intl.string(B.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(u.$, {
                                                variant: "primary",
                                                text: B.intl.string(B.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        _.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: h?.sessionId,
                                                            page_type: s,
                                                            page_category: s === k.G2.HOME ? void 0 : h?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(O.A, { peaking: E, transitioning: r === k.Pf.OUT }),
                    ],
                }),
            })
        );
    };
