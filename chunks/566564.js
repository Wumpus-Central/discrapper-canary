n.d(t, { Z: () => P }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(685816),
    s = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(501678),
    p = n(364111),
    f = n(303952),
    h = n(752053),
    C = n(258939),
    m = n(81136),
    _ = n(302933),
    b = n(953655),
    v = n(548685),
    x = n(580914),
    E = n(92589),
    S = n(548257),
    O = n(963278),
    y = n(531864),
    j = n(384067),
    k = n(215023),
    I = n(981631),
    T = n(388032),
    L = n(310582);
let B = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: s, tab: c } = e,
            { noCache: u, includeUnpublished: C } = (0, m.Z)(),
            [y, I] = l.useState(!1),
            B = (0, d.sp)(),
            P = null != (t = null == B ? void 0 : B.sessionId) ? t : "";
        l.useEffect(() => {
            (0, f.n)({
                sessionId: P,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: C,
                cacheDisabled: u,
            });
        }, [c]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: N,
                shopBlocks: R,
                refreshShopHome: Z,
            } = (0, p.E)(
                c,
                {
                    noCache: u,
                    includeUnpublished: C,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: P,
                    tab: c,
                },
            ),
            w = l.useCallback(() => {
                Z();
            }, [Z]);
        return (l.useEffect(() => {
            null != N ||
                A ||
                0 === R.length ||
                (0, f.n)({
                    sessionId: P,
                    checkpoint: f.a.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: C,
                    cacheDisabled: u,
                });
        }, [N, A, R.length, C, u, P, c]),
        null != N)
            ? (0, r.jsx)(h.Z, {
                  onRetry: w,
                  errorOrigin: h.i.SHOP_PAGE,
                  errorMessage: N.message,
              })
            : A || 0 === R.length
              ? (0, r.jsxs)("div", {
                    className: a()(L.loadingContainer, L.feedContent),
                    children: [
                        (0, r.jsx)(x.Z, {
                            isLoading: A,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: A,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(v.Z, {
                            isLoading: A,
                            title: c === k.AW.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
                            numVisibleItems: i,
                            tab: c,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: R.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let u = null,
                                d = !1;
                            switch (e.type) {
                                case o.z.HERO:
                                    u = (0, r.jsx)(
                                        x.Z,
                                        {
                                            isLoading: A,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.FEATURED:
                                    u = (0, r.jsx)(
                                        b.Z,
                                        {
                                            isLoading: A,
                                            handleTransition: n,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.FEED:
                                    let p = e.sortedSkuIds;
                                    u = (0, r.jsx)(
                                        v.Z,
                                        {
                                            title:
                                                c === k.AW.ORBS ? T.intl.string(T.t.dFgeuZ) : T.intl.string(T.t.NSv5KV),
                                            isLoading: A || s,
                                            numVisibleItems: i,
                                            sortedSkuIds: p,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === o.z.IMMERSIVE_BANNER
                                                    ? L.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: c === k.AW.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === k.AW.ORBS,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.WIDE_BANNER:
                                    u = (0, r.jsx)(
                                        j.Z,
                                        {
                                            handleTransition: n,
                                            wideBannerBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.SHELF:
                                    u = (0, r.jsx)(
                                        O.Z,
                                        {
                                            handleTransition: n,
                                            shelf: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.COUNTDOWN_TIMER:
                                    (u = (0, r.jsx)(
                                        _.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: y,
                                        },
                                        l,
                                    )),
                                        (d = !0);
                                    break;
                                case o.z.IMMERSIVE_BANNER:
                                    u = (0, r.jsx)(
                                        E.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => I(!e),
                                        },
                                        l,
                                    );
                                    break;
                                case o.z.REWARD_HERO:
                                    u = (0, r.jsx)(
                                        S.Z,
                                        {
                                            isLoading: A,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(g.g6, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: a()(L.blockContainer, L.feedContent, {
                                            [L.skipPadding]: 0 === l || d,
                                        }),
                                        children: u,
                                    },
                                    l,
                                ),
                            });
                        })(e, t > 0 ? R[t - 1] : null, t),
                    ),
                });
    },
    P = (e) => {
        let { handleTransition: t, tab: n, transitionState: i } = e,
            a = l.useRef(null),
            { handleScroll: o } = (0, c.z)(a, n),
            g = (0, C.R)(),
            p = (0, d.sp)(),
            [f, h] = l.useState(k.IV),
            [m, _] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != a.current) {
                    let e = () => {
                            if (null == a.current) return;
                            let e = a.current.getDistanceFromBottom();
                            f >= 36 ? _(e < 20) : e <= 200 && h((e) => e + k.IV);
                        },
                        t = a.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [a, f, h, _]),
            (0, r.jsx)(s.Den, {
                className: L.shopScroll,
                ref: a,
                onScroll: o,
                children: (0, r.jsxs)("div", {
                    className: L.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.mainContent,
                            children: [
                                (0, r.jsx)(B, {
                                    handleTransition: t,
                                    numVisibleItems: f,
                                    isFetchingCategories: g,
                                    tab: n,
                                }),
                                n !== k.AW.CATALOG &&
                                    f >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: L.endOfFeed,
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-md/semibold",
                                                children: T.intl.string(T.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(s.Button, {
                                                variant: "primary",
                                                text: T.intl.string(T.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        u.default.track(I.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == p ? void 0 : p.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === k.AW.HOME || null == p ? void 0 : p.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(y.Z, {
                            peaking: m,
                            transitioning: i === k.f7.OUT,
                        }),
                        (0, r.jsx)(y.Z, {
                            style: { left: 1850 },
                            peaking: m,
                            transitioning: i === k.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
