n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(685816),
    o = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    p = n(501678),
    g = n(364111),
    f = n(303952),
    h = n(752053),
    C = n(258939),
    m = n(81136),
    _ = n(302933),
    b = n(953655),
    v = n(548685),
    E = n(580914),
    x = n(92589),
    O = n(963278),
    S = n(531864),
    y = n(384067),
    j = n(215023),
    k = n(981631),
    I = n(388032),
    T = n(310582);
let L = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: o, tab: c } = e,
            { noCache: u, includeUnpublished: C } = (0, m.Z)(),
            [S, k] = l.useState(!1),
            L = (0, d.sp)(),
            B = null != (t = null == L ? void 0 : L.sessionId) ? t : "";
        l.useEffect(() => {
            (0, f.n)({
                sessionId: B,
                checkpoint: f.a.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: C,
                cacheDisabled: u,
            });
        }, [c]);
        let {
                isFetchingShopHome: P,
                fetchShopHomeError: A,
                shopBlocks: N,
                refreshShopHome: R,
            } = (0, g.E)(
                c,
                {
                    noCache: u,
                    includeUnpublished: C,
                    includeBundles: !0,
                    logPerf: !0,
                },
                {
                    sessionId: B,
                    tab: c,
                },
            ),
            Z = l.useCallback(() => {
                R();
            }, [R]);
        return (l.useEffect(() => {
            null != A ||
                P ||
                0 === N.length ||
                (0, f.n)({
                    sessionId: B,
                    checkpoint: f.a.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: C,
                    cacheDisabled: u,
                });
        }, [A, P, N.length, C, u, B, c]),
        null != A)
            ? (0, r.jsx)(h.Z, {
                  onRetry: Z,
                  errorOrigin: h.i.SHOP_PAGE,
                  errorMessage: A.message,
              })
            : P || 0 === N.length
              ? (0, r.jsxs)("div", {
                    className: s()(T.loadingContainer, T.feedContent),
                    children: [
                        (0, r.jsx)(E.Z, {
                            isLoading: P,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: P,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(v.Z, {
                            isLoading: P,
                            title: c === j.AW.ORBS ? I.intl.string(I.t.dFgeuZ) : I.intl.string(I.t.NSv5KV),
                            numVisibleItems: i,
                            tab: c,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: N.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let u = null,
                                d = !1;
                            switch (e.type) {
                                case a.z.HERO:
                                    u = (0, r.jsx)(
                                        E.Z,
                                        {
                                            isLoading: P,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case a.z.FEATURED:
                                    u = (0, r.jsx)(
                                        b.Z,
                                        {
                                            isLoading: P,
                                            handleTransition: n,
                                            featuredBlockRecord: e,
                                        },
                                        l,
                                    );
                                    break;
                                case a.z.FEED:
                                    let g = e.sortedSkuIds;
                                    u = (0, r.jsx)(
                                        v.Z,
                                        {
                                            title:
                                                c === j.AW.ORBS ? I.intl.string(I.t.dFgeuZ) : I.intl.string(I.t.NSv5KV),
                                            isLoading: P || o,
                                            numVisibleItems: i,
                                            sortedSkuIds: g,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === a.z.IMMERSIVE_BANNER
                                                    ? T.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: c === j.AW.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === j.AW.ORBS,
                                        },
                                        l,
                                    );
                                    break;
                                case a.z.WIDE_BANNER:
                                    u = (0, r.jsx)(
                                        y.Z,
                                        {
                                            handleTransition: n,
                                            wideBannerBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case a.z.SHELF:
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
                                case a.z.COUNTDOWN_TIMER:
                                    (u = (0, r.jsx)(
                                        _.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: S,
                                        },
                                        l,
                                    )),
                                        (d = !0);
                                    break;
                                case a.z.IMMERSIVE_BANNER:
                                    u = (0, r.jsx)(
                                        x.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => k(!e),
                                        },
                                        l,
                                    );
                                    break;
                                default:
                                    return null;
                            }
                            return (0, r.jsx)(p.g6, {
                                blockType: e.type,
                                children: (0, r.jsx)(
                                    "div",
                                    {
                                        className: s()(T.blockContainer, T.feedContent, {
                                            [T.skipPadding]: 0 === l || d,
                                        }),
                                        children: u,
                                    },
                                    l,
                                ),
                            });
                        })(e, t > 0 ? N[t - 1] : null, t),
                    ),
                });
    },
    B = (e) => {
        let { handleTransition: t, tab: n, transitionState: i } = e,
            s = l.useRef(null),
            { handleScroll: a } = (0, c.z)(s, n),
            p = (0, C.R)(),
            g = (0, d.sp)(),
            [f, h] = l.useState(j.IV),
            [m, _] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != s.current) {
                    let e = () => {
                            if (null == s.current) return;
                            let e = s.current.getDistanceFromBottom();
                            f >= 36 ? _(e < 20) : e <= 200 && h((e) => e + j.IV);
                        },
                        t = s.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [s, f, h, _]),
            (0, r.jsx)(o.Den, {
                className: T.shopScroll,
                ref: s,
                onScroll: a,
                children: (0, r.jsxs)("div", {
                    className: T.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.mainContent,
                            children: [
                                (0, r.jsx)(L, {
                                    handleTransition: t,
                                    numVisibleItems: f,
                                    isFetchingCategories: p,
                                    tab: n,
                                }),
                                n !== j.AW.CATALOG &&
                                    f >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: T.endOfFeed,
                                        children: [
                                            (0, r.jsx)(o.Heading, {
                                                variant: "heading-md/semibold",
                                                children: I.intl.string(I.t.Yr70c4),
                                            }),
                                            (0, r.jsx)(o.Button, {
                                                variant: "primary",
                                                text: I.intl.string(I.t.AfrvRD),
                                                onClick: () => {
                                                    t({
                                                        sourceButton: "shop all button",
                                                        shouldAnimate: !0,
                                                    }),
                                                        u.default.track(k.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == g ? void 0 : g.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === j.AW.HOME || null == g ? void 0 : g.pageCategory,
                                                            cta_name: "browse the shop button",
                                                        });
                                                },
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, r.jsx)(S.Z, {
                            peaking: m,
                            transitioning: i === j.f7.OUT,
                        }),
                        (0, r.jsx)(S.Z, {
                            style: { left: 1850 },
                            peaking: m,
                            transitioning: i === j.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
