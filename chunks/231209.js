"use strict";
s.d(t, { A: () => M });
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
    I = s(761218),
    L = s(633026),
    j = s(251191),
    k = s(613258),
    T = s(152568),
    O = s(758836),
    y = s(652215),
    N = s(985018),
    R = s(419447);
let B = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: l, tab: c } = e,
            { noCache: d, includeUnpublished: _ } = (0, E.A)(),
            [x, k] = r.useState(!1),
            y = (0, g.uM)(),
            B = y?.sessionId ?? "";
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
                isFetchingShopHome: M,
                fetchShopHomeError: P,
                shopBlocks: D,
                refreshShopHome: H,
            } = (0, h.y)(c, { noCache: d, includeUnpublished: _, logPerf: !0 }, { sessionId: B, tab: c }),
            w = r.useCallback(() => {
                H();
            }, [H]);
        return (r.useEffect(() => {
            null != P ||
                M ||
                0 === D.length ||
                (0, p.z)({
                    sessionId: B,
                    checkpoint: p.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: _,
                    cacheDisabled: d,
                });
        }, [P, M, D.length, _, d, B, c]),
        null != P)
            ? (0, n.jsx)(f.h, { onRetry: w, errorOrigin: f.A.SHOP_PAGE, errorMessage: P.message })
            : M || 0 === D.length
              ? (0, n.jsxs)("div", {
                    className: a()(R.g4, R.Of),
                    children: [
                        (0, n.jsx)(S.A, { isLoading: M, handleTransition: t, tab: c }),
                        (0, n.jsx)(b.A, { isLoading: M, handleTransition: t, categories: [] }),
                        (0, n.jsx)(A.A, {
                            isLoading: M,
                            title: c === O.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                            numVisibleItems: s,
                            tab: c,
                        }),
                    ],
                })
              : (0, n.jsx)(n.Fragment, {
                    children: D.map((e, r) =>
                        ((e, r, d) => {
                            if (null == e) return null;
                            let _ = null,
                                g = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    _ = (0, n.jsx)(S.A, { isLoading: M, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.FEATURED:
                                    _ = (0, n.jsx)(
                                        b.A,
                                        { isLoading: M, handleTransition: t, featuredBlockRecord: e },
                                        d,
                                    );
                                    break;
                                case i.g.FEED:
                                    let h = e.sortedSkuIds;
                                    _ = (0, n.jsx)(
                                        A.A,
                                        {
                                            title:
                                                c === O.G2.ORBS ? N.intl.string(N.t.dFgeuZ) : N.intl.string(N.t.NSv5KV),
                                            isLoading: l,
                                            numVisibleItems: s,
                                            sortedSkuIds: h,
                                            buttonContainerClassName: r?.type === i.g.IMMERSIVE_BANNER ? R.w : void 0,
                                            prioritizeUserDiscounts: c === O.G2.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === O.G2.ORBS,
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
                                    _ = (0, n.jsx)(j.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (_ = (0, n.jsx)(C.S, { countdownTimerBlock: e, isVisible: x }, d)), (g = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    _ = (0, n.jsx)(
                                        v.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => k(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    _ = (0, n.jsx)(L.A, { isLoading: M, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.MARVEL_RIVALS_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, u.En)(o.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD);
                                    if (t) return null;
                                    return (0, n.jsx)(m.rW, {
                                        blockType: e.type,
                                        children: (0, n.jsx)(
                                            I.A,
                                            {
                                                onDismiss: () => {
                                                    (0, u.d6)(o.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD, {});
                                                },
                                                skuIds: e.skuIds,
                                                endTime: e.endTime,
                                                tab: c,
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
                                    { className: a()(R.v1, R.Of, { [R.J1]: 0 === d || g }), children: _ },
                                    d,
                                ),
                            });
                        })(e, r > 0 ? D[r - 1] : null, r),
                    ),
                });
    },
    M = (e) => {
        let { handleTransition: t, tab: s, transitionState: l } = e,
            a = r.useRef(null),
            { handleScroll: i } = (0, d.X)(a, s),
            o = (0, x.U)(),
            u = (0, g.uM)(),
            [m, h] = r.useState(O.md),
            [p, f] = r.useState(!1);
        return (
            r.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            m >= 36 ? f(e < 20) : e <= 200 && h((e) => e + O.md);
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
                                s !== O.G2.CATALOG &&
                                    m >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: R.R$,
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
                                                        _.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: u?.sessionId,
                                                            page_type: s,
                                                            page_category: s === O.G2.HOME ? void 0 : u?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(k.A, { peaking: p, transitioning: l === O.Pf.OUT }),
                    ],
                }),
            })
        );
    };
