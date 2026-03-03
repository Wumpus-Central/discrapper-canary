"use strict";
s.d(t, { A: () => w });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(651162),
    o = s(554146),
    c = s(397927),
    d = s(564322),
    u = s(287344),
    _ = s(785330),
    g = s(367727),
    m = s(954571),
    h = s(440938),
    p = s(344011),
    f = s(335657),
    x = s(100057),
    E = s(599062),
    C = s(159439),
    b = s(998694),
    A = s(666413),
    S = s(573455),
    v = s(565057),
    I = s(227205),
    L = s(457414),
    j = s(761218),
    k = s(633026),
    T = s(251191),
    O = s(613258),
    N = s(152568),
    y = s(758836),
    R = s(652215),
    B = s(985018),
    M = s(201073);
let P = () =>
        (0, n.jsx)("div", {
            className: a()(M.YB, M.GS),
            children: (0, n.jsx)(_.Qs, { tenantId: R.FYj, layoutId: "1465939725649973269" }),
        }),
    D = (e) => {
        let { handleTransition: t, numVisibleItems: s, isFetchingCategories: r, tab: c } = e,
            { noCache: d, includeUnpublished: u } = (0, b.A)(),
            [_, m] = l.useState(!1),
            C = (0, h.uM)(),
            O = C?.sessionId ?? "";
        l.useEffect(() => {
            (0, x.z)({
                sessionId: O,
                checkpoint: x.t.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: u,
                cacheDisabled: d,
            });
        }, [c]);
        let {
                isFetchingShopHome: R,
                fetchShopHomeError: P,
                shopBlocks: D,
                refreshShopHome: w,
            } = (0, f.y)(
                c,
                { noCache: d, includeUnpublished: u, includeBundles: !0, logPerf: !0 },
                { sessionId: O, tab: c },
            ),
            H = l.useCallback(() => {
                w();
            }, [w]);
        return (l.useEffect(() => {
            null != P ||
                R ||
                0 === D.length ||
                (0, x.z)({
                    sessionId: O,
                    checkpoint: x.t.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: u,
                    cacheDisabled: d,
                });
        }, [P, R, D.length, u, d, O, c]),
        null != P)
            ? (0, n.jsx)(E.h, { onRetry: H, errorOrigin: E.A.SHOP_PAGE, errorMessage: P.message })
            : R || 0 === D.length
              ? (0, n.jsxs)("div", {
                    className: a()(M.g4, M.Of),
                    children: [
                        (0, n.jsx)(I.A, { isLoading: R, handleTransition: t, tab: c }),
                        (0, n.jsx)(S.A, { isLoading: R, handleTransition: t, categories: [] }),
                        (0, n.jsx)(v.A, {
                            isLoading: R,
                            title: c === y.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
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
                                h = !1;
                            switch (e.type) {
                                case i.g.HERO:
                                    u = (0, n.jsx)(I.A, { isLoading: R, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.FEATURED:
                                    u = (0, n.jsx)(
                                        S.A,
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
                                                c === y.G2.ORBS ? B.intl.string(B.t.dFgeuZ) : B.intl.string(B.t.NSv5KV),
                                            isLoading: R || r,
                                            numVisibleItems: s,
                                            sortedSkuIds: f,
                                            buttonContainerClassName: l?.type === i.g.IMMERSIVE_BANNER ? M.w : void 0,
                                            prioritizeUserDiscounts: c === y.G2.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === y.G2.ORBS,
                                        },
                                        d,
                                    );
                                    break;
                                case i.g.WIDE_BANNER:
                                    if (e.isDismissible) {
                                        let t = e.dismissibleContentVersion ?? 0,
                                            { isDismissed: s } = (0, g.En)(o.M.COLLECTIBLES_SHOP_WIDE_BANNER, t);
                                        if (s) return null;
                                    }
                                    u = (0, n.jsx)(N.A, { wideBannerBlock: e, tab: c }, d);
                                    break;
                                case i.g.SHELF:
                                    u = (0, n.jsx)(T.A, { handleTransition: t, shelf: e, tab: c }, d);
                                    break;
                                case i.g.COUNTDOWN_TIMER:
                                    (u = (0, n.jsx)(A.S, { countdownTimerBlock: e, isVisible: _ }, d)), (h = !0);
                                    break;
                                case i.g.IMMERSIVE_BANNER:
                                    u = (0, n.jsx)(
                                        L.A,
                                        { immersiveBannerBlock: e, onVisibilityChange: (e) => m(!e) },
                                        d,
                                    );
                                    break;
                                case i.g.REWARD_HERO:
                                    u = (0, n.jsx)(k.A, { isLoading: R, handleTransition: t, heroBlock: e, tab: c }, d);
                                    break;
                                case i.g.MARVEL_RIVALS_PROMOTIONAL_BANNER: {
                                    let { isDismissed: t } = (0, g.En)(o.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD);
                                    if (t) return null;
                                    return (0, n.jsx)(p.rW, {
                                        blockType: e.type,
                                        children: (0, n.jsx)(
                                            j.A,
                                            {
                                                onDismiss: () => {
                                                    (0, g.d6)(o.M.COLLECTIBLES_SHOP_MARVEL_RIVALS_ORBS_REWARD, {});
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
                            return (0, n.jsx)(p.rW, {
                                blockType: e.type,
                                children: (0, n.jsx)(
                                    "div",
                                    { className: a()(M.v1, M.Of, { [M.J1]: 0 === d || h }), children: u },
                                    d,
                                ),
                            });
                        })(e, l > 0 ? D[l - 1] : null, l),
                    ),
                });
    },
    w = (e) => {
        let { handleTransition: t, tab: s, transitionState: r } = e,
            a = l.useRef(null),
            { handleScroll: i } = (0, d.X)(a, s),
            o = (0, C.U)(),
            _ = (0, u.f)("Shop Home"),
            g = (0, h.uM)(),
            [p, f] = l.useState(y.md),
            [x, E] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            p >= 36 ? E(e < 20) : e <= 200 && f((e) => e + y.md);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        t?.addEventListener("scroll", e),
                        () => {
                            t?.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, p, f, E]),
            (0, n.jsx)(c.T7Y, {
                className: M.OW,
                ref: a,
                onScroll: i,
                children: (0, n.jsxs)("div", {
                    className: M.bx,
                    children: [
                        (0, n.jsxs)("div", {
                            className: M.rb,
                            children: [
                                _
                                    ? (0, n.jsx)(P, {})
                                    : (0, n.jsx)(D, {
                                          handleTransition: t,
                                          numVisibleItems: p,
                                          isFetchingCategories: o,
                                          tab: s,
                                      }),
                                s !== y.G2.CATALOG &&
                                    p >= 36 &&
                                    (0, n.jsxs)("div", {
                                        className: M.R$,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-md/semibold",
                                                children: B.intl.string(B.t.Yr70c4),
                                            }),
                                            (0, n.jsx)(c.Button, {
                                                variant: "primary",
                                                text: B.intl.string(B.t.AfrvRD),
                                                onClick: () => {
                                                    t({ sourceButton: "shop all button", shouldAnimate: !0 }),
                                                        m.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id: g?.sessionId,
                                                            page_type: s,
                                                            page_category: s === y.G2.HOME ? void 0 : g?.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, n.jsx)(O.A, { peaking: x, transitioning: r === y.Pf.OUT }),
                    ],
                }),
            })
        );
    };
