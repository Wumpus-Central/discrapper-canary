"use strict";
s.d(t, { A: () => B });
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
    L = s(633026),
    I = s(251191),
    j = s(613258),
    k = s(152568),
    T = s(758836),
    O = s(652215),
    N = s(985018),
    y = s(201073);
let R = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: c } = e,
            { noCache: d, includeUnpublished: g } = (0, E.A)(),
            [x, j] = r.useState(!1),
            O = (0, _.uM)(),
            R = O?.sessionId ?? "";
        r.useEffect(() => {
            (0, p.z)({
                sessionId: R,
                checkpoint: p.t.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: g,
                cacheDisabled: d,
            });
        }, [c]);
        let {
                isFetchingShopHome: B,
                fetchShopHomeError: M,
                shopBlocks: P,
                refreshShopHome: D,
            } = (0, h.y)(
                c,
                { noCache: d, includeUnpublished: g, includeBundles: !0, logPerf: !0 },
                { sessionId: R, tab: c },
            ),
            H = r.useCallback(() => {
                D();
            }, [D]);
        return (r.useEffect(() => {
            null != M ||
                B ||
                0 === P.length ||
                (0, p.z)({
                    sessionId: R,
                    checkpoint: p.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: g,
                    cacheDisabled: d,
                });
        }, [M, B, P.length, g, d, R, c]),
        null != M)
            ? (0, n.jsx)(f.h, { onRetry: H, errorOrigin: f.A.SHOP_PAGE, errorMessage: M.message })
            : B || 0 === P.length
              ? (0, n.jsxs)("div", {
                    className: a()(y.g4, y.Of),
                    children: [
                        (0, n.jsx)(S.A, { isLoading: B, handleTransition: t, tab: c }),
                        (0, n.jsx)(A.A, { isLoading: B, handleTransition: t, categories: [] }),
                        (0, n.jsx)(b.A, {
                            isLoading: B,
                            title: c === T.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                            numVisibleItems: s,
                            tab: c,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: P.map((e, r) =>
                        ((e, r, d) => {
                            if (null == e) return null;
                            let g = null,
                                _ = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    g = (0, n.jsx)(S.A, { isLoading: B, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.FEATURED:
                                    g = (0, n.jsx)(
                                        A.A,
                                        { isLoading: B, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let h = e.sortedSkuIds;
                                    g = (0, n.jsx)(
                                        b.A,
                                        {
                                            title:
                                                c === T.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                                            isLoading: B || l,
                                            numVisibleItems: s,
                                            sortedSkuIds: h,
                                            buttonContainerClassName: r?.type === i.g.IMMERSIVE_BANNER ? y.w : void 0,
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
                                    g = (0, n.jsx)(k.A, { wideBannerBlock: e, tab: c }, d);
                                    break;
                                case i.g.SHELF:
                                    g = (0, n.jsx)(I.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (g = (0, n.jsx)(C.S, { countdownTimerBlock: e, isVisible: x }, d)), (_ = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    g = (0, n.jsx)(
                                        v.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => j(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    g = (0, n.jsx)(L.A, { isLoading: B, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(m.rW, {
                                blockType: e.type,
                                children: (0, n.jsx)(
                                    "div",
                                    { className: a()(y.v1, y.Of, { [y.J1]: 0 === d || _ }), children: g },
                                    d,
                                ),
                            });
                        })(e, r > 0 ? P[r - 1] : null, r),
                    ),
                });
    },
    B = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            a = r.useRef(null),
            { handleScroll: i } = (0, d.X)(a, s),
            o = (0, x.U)(),
            u = (0, _.uM)(),
            [m, h] = r.useState(T.md),
            [p, f] = r.useState(!1);
        return (
            r.useEffect(() => {
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
                className: y.OW,
                ref: a,
                onScroll: i,
                children: (0, n.jsxs)("div", {
                    className: y.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y.rb,
                            children: [
                                (0, n.jsx)(R, {
                                    handleTransition: t,
                                    numVisibleItems: m,
                                    isFetchingCategories: o,
                                    tab: s,
                                }),
                                s !== T.G2.CATALOG &&
                                    m >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: y.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: N.intl.string(N.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: N.intl.string(N.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        g.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                        (0, n.jsx)(j.A, { peaking: p, transitioning: l === T.Pf.OUT }),
                    ],
                }),
            })
        );
    };
