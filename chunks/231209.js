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
    g = s(954571),
    m = s(440938),
    _ = s(344011),
    h = s(379177),
    p = s(335657),
    f = s(100057),
    E = s(599062),
    C = s(159439),
    b = s(998694),
    A = s(666413),
    x = s(573455),
    S = s(565057),
    v = s(227205),
    L = s(457414),
    T = s(633026),
    I = s(251191),
    O = s(613258),
    y = s(152568),
    j = s(758836),
    N = s(652215),
    k = s(985018),
    R = s(201073);
let B = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: c } = e,
            { noCache: d, includeUnpublished: g } = (0, b.A)(),
            C = (0, h.rR)("CollectiblesFeedShop") && c === j.G2.ORBS,
            O = { ...j.ue, name: k.intl.string(k.t.bfXHLB) },
            [N, B] = r.useState(!1),
            P = (0, m.uM)(),
            M = P?.sessionId ?? "";
        r.useEffect(() => {
            (0, f.z)({
                sessionId: M,
                checkpoint: f.t.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: g,
                cacheDisabled: d,
            });
        }, [c]);
        let {
                isFetchingShopHome: D,
                fetchShopHomeError: w,
                shopBlocks: H,
                refreshShopHome: G,
            } = (0, p.y)(
                c,
                { noCache: d, includeUnpublished: g, includeBundles: !0, logPerf: !0 },
                { sessionId: M, tab: c },
            ),
            U = r.useCallback(() => {
                G();
            }, [G]);
        return (r.useEffect(() => {
            null != w ||
                D ||
                0 === H.length ||
                (0, f.z)({
                    sessionId: M,
                    checkpoint: f.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: g,
                    cacheDisabled: d,
                });
        }, [w, D, H.length, g, d, M, c]),
        null != w)
            ? (0, n.jsx)(E.h, { onRetry: U, errorOrigin: E.A.SHOP_PAGE, errorMessage: w.message })
            : D || 0 === H.length
              ? (0, n.jsxs)("div", {
                    className: a()(R.g4, R.Of),
                    children: [
                        (0, n.jsx)(v.A, { isLoading: D, handleTransition: t, tab: c }),
                        (0, n.jsx)(x.A, { isLoading: D, handleTransition: t, categories: [] }),
                        (0, n.jsx)(S.A, {
                            isLoading: D,
                            title: c === j.G2.ORBS ? k.intl.string(k.t.dFgeuZ) : k.intl.string(k.t.NSv5KV),
                            numVisibleItems: s,
                            tab: c,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: H.map((e, r) =>
                        ((e, r, d) => {
                            if (null == e) return null;
                            let g = null,
                                m = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    g = (0, n.jsx)(
                                        v.A,
                                        { isLoading: D, handleTransition: t, heroBlock: C ? O : e, tab: c },
                                        d,
                                    );
                                    break;
                                case i.g.FEATURED:
                                    g = (0, n.jsx)(
                                        x.A,
                                        { isLoading: D, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let h = e.sortedSkuIds;
                                    g = (0, n.jsx)(
                                        S.A,
                                        {
                                            title:
                                                c === j.G2.ORBS ? k.intl.string(k.t.dFgeuZ) : k.intl.string(k.t.NSv5KV),
                                            isLoading: D || l,
                                            numVisibleItems: s,
                                            sortedSkuIds: h,
                                            buttonContainerClassName: r?.type === i.g.IMMERSIVE_BANNER ? R.w : void 0,
                                            prioritizeUserDiscounts: c === j.G2.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === j.G2.ORBS,
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
                                    g = (0, n.jsx)(y.A, { wideBannerBlock: e, tab: c }, d);
                                    break;
                                case i.g.SHELF:
                                    g = (0, n.jsx)(I.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (g = (0, n.jsx)(A.S, { countdownTimerBlock: e, isVisible: N }, d)), (m = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    g = (0, n.jsx)(
                                        L.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => B(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    g = (0, n.jsx)(T.A, { isLoading: D, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(_.rW, {
                                blockType: e.type,
                                children: (0, n.jsx)(
                                    "div",
                                    { className: a()(R.v1, R.Of, { [R.J1]: 0 === d || m }), children: g },
                                    d,
                                ),
                            });
                        })(e, r > 0 ? H[r - 1] : null, r),
                    ),
                });
    },
    P = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            a = r.useRef(null),
            { handleScroll: i } = (0, d.X)(a, s),
            o = (0, C.U)(),
            u = (0, m.uM)(),
            [_, h] = r.useState(j.md),
            [p, f] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            _ >= 36 ? f(e < 20) : e <= 200 && h((e) => e + j.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, _, h, f]),
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
                                    numVisibleItems: _,
                                    isFetchingCategories: o,
                                    tab: s,
                                }),
                                s !== j.G2.CATALOG &&
                                    _ >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: R.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: k.intl.string(k.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: k.intl.string(k.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        g.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: s,
                                                            page_category: s === j.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(O.A, { peaking: p, transitioning: l === j.Pf.OUT }),
                    ],
                }),
            })
        );
    };
