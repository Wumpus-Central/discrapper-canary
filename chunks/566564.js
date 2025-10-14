n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(685816),
    a = n(481060),
    c = n(702486),
    u = n(626135),
    d = n(381585),
    g = n(501678),
    f = n(364111),
    p = n(303952),
    C = n(752053),
    h = n(258939),
    _ = n(81136),
    m = n(302933),
    b = n(953655),
    E = n(548685),
    v = n(580914),
    O = n(92589),
    x = n(963278),
    S = n(531864),
    y = n(384067),
    k = n(215023),
    j = n(981631),
    T = n(388032),
    L = n(310582);
let I = (e) => {
        var t;
        let { handleTransition: n, numVisibleItems: i, isFetchingCategories: a, tab: c } = e,
            { noCache: u, includeUnpublished: h } = (0, _.Z)(),
            [S, j] = l.useState(!1),
            I = (0, d.sp)(),
            B = null != (t = null == I ? void 0 : I.sessionId) ? t : "";
        l.useEffect(() => {
            (0, p.n)({
                sessionId: B,
                checkpoint: p.a.SHOP_MOUNTED,
                tab: c,
                unpublishedCategoriesShown: h,
                cacheDisabled: u,
            });
        }, [c]);
        let {
                isFetchingShopHome: A,
                fetchShopHomeError: N,
                shopBlocks: P,
                refreshShopHome: R,
            } = (0, f.E)(
                c,
                {
                    noCache: u,
                    includeUnpublished: h,
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
            null != N ||
                A ||
                0 === P.length ||
                (0, p.n)({
                    sessionId: B,
                    checkpoint: p.a.SHOP_RENDERED,
                    tab: c,
                    unpublishedCategoriesShown: h,
                    cacheDisabled: u,
                });
        }, [N, A, P.length, h, u, B, c]),
        null != N)
            ? (0, r.jsx)(C.Z, {
                  onRetry: Z,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: N.message,
              })
            : A || 0 === P.length
              ? (0, r.jsxs)("div", {
                    className: o()(L.loadingContainer, L.feedContent),
                    children: [
                        (0, r.jsx)(v.Z, {
                            isLoading: A,
                            handleTransition: n,
                            tab: c,
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: A,
                            handleTransition: n,
                            categories: [],
                        }),
                        (0, r.jsx)(E.Z, {
                            isLoading: A,
                            title: c === k.AW.ORBS ? T.intl.string(T.t.dFgeub) : T.intl.string(T.t.NSv5KS),
                            numVisibleItems: i,
                            tab: c,
                        }),
                    ],
                })
              : (0, r.jsx)(r.Fragment, {
                    children: P.map((e, t) =>
                        ((e, t, l) => {
                            if (null == e) return null;
                            let u = null,
                                d = !1;
                            switch (e.type) {
                                case s.z.HERO:
                                    u = (0, r.jsx)(
                                        v.Z,
                                        {
                                            isLoading: A,
                                            handleTransition: n,
                                            heroBlock: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.FEATURED:
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
                                case s.z.FEED:
                                    let f = e.sortedSkuIds;
                                    u = (0, r.jsx)(
                                        E.Z,
                                        {
                                            title:
                                                c === k.AW.ORBS ? T.intl.string(T.t.dFgeub) : T.intl.string(T.t.NSv5KS),
                                            isLoading: A || a,
                                            numVisibleItems: i,
                                            sortedSkuIds: f,
                                            buttonContainerClassName:
                                                (null == t ? void 0 : t.type) === s.z.IMMERSIVE_BANNER
                                                    ? L.feedblockInteractiveBackground
                                                    : void 0,
                                            prioritizeUserDiscounts: c === k.AW.HOME,
                                            tab: c,
                                            orbsSupportedOnly: c === k.AW.ORBS,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.WIDE_BANNER:
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
                                case s.z.SHELF:
                                    u = (0, r.jsx)(
                                        x.Z,
                                        {
                                            handleTransition: n,
                                            shelf: e,
                                            tab: c,
                                        },
                                        l,
                                    );
                                    break;
                                case s.z.COUNTDOWN_TIMER:
                                    (u = (0, r.jsx)(
                                        m.J,
                                        {
                                            countdownTimerBlock: e,
                                            isVisible: S,
                                        },
                                        l,
                                    )),
                                        (d = !0);
                                    break;
                                case s.z.IMMERSIVE_BANNER:
                                    u = (0, r.jsx)(
                                        O.Z,
                                        {
                                            immersiveBannerBlock: e,
                                            onVisibilityChange: (e) => j(!e),
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
                                        className: o()(L.blockContainer, L.feedContent, {
                                            [L.skipPadding]: 0 === l || d,
                                        }),
                                        children: u,
                                    },
                                    l,
                                ),
                            });
                        })(e, t > 0 ? P[t - 1] : null, t),
                    ),
                });
    },
    B = (e) => {
        let { handleTransition: t, tab: n, transitionState: i } = e,
            o = l.useRef(null),
            { handleScroll: s } = (0, c.z)(o, n),
            g = (0, h.R)(),
            f = (0, d.sp)(),
            [p, C] = l.useState(k.IV),
            [_, m] = l.useState(!1);
        return (
            l.useEffect(() => {
                if (null != o.current) {
                    let e = () => {
                            if (null == o.current) return;
                            let e = o.current.getDistanceFromBottom();
                            p >= 36 ? m(e < 20) : e <= 200 && C((e) => e + k.IV);
                        },
                        t = o.current.getScrollerNode();
                    return (
                        null == t || t.addEventListener("scroll", e),
                        () => {
                            null == t || t.removeEventListener("scroll", e);
                        }
                    );
                }
            }, [o, p, C, m]),
            (0, r.jsx)(a.Den, {
                className: L.shopScroll,
                ref: o,
                onScroll: s,
                children: (0, r.jsxs)("div", {
                    className: L.shop,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.mainContent,
                            children: [
                                (0, r.jsx)(I, {
                                    handleTransition: t,
                                    numVisibleItems: p,
                                    isFetchingCategories: g,
                                    tab: n,
                                }),
                                n !== k.AW.CATALOG &&
                                    p >= 36 &&
                                    (0, r.jsxs)("div", {
                                        className: L.endOfFeed,
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                variant: "heading-md/semibold",
                                                children: T.intl.string(T.t.Yr70c3),
                                            }),
                                            (0, r.jsx)(a.Button, {
                                                variant: "primary",
                                                text: T.intl.string(T.t.AfrvRE),
                                                onClick: () => {
                                                    t("shop all button", void 0, !0),
                                                        u.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                            collectibles_shop_session_id:
                                                                null == f ? void 0 : f.sessionId,
                                                            page_type: n,
                                                            page_category:
                                                                n === k.AW.HOME || null == f ? void 0 : f.pageCategory,
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
                            peaking: _,
                            transitioning: i === k.f7.OUT,
                        }),
                        (0, r.jsx)(S.Z, {
                            style: { left: 1850 },
                            peaking: _,
                            transitioning: i === k.f7.OUT,
                        }),
                    ],
                }),
            })
        );
    };
