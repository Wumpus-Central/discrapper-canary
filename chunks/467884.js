t.d(l, { yf: () => ej, Ay: () => eE, s6: () => eg });
var n,
    r = t(477900),
    a = t(582128),
    i = t(310784),
    o = t.n(i),
    s = t(503698),
    c = t.n(s),
    u = t(536637),
    d = t.n(u),
    m = t(17928),
    p = t(269115),
    _ = t(834730),
    x = t(318254),
    b = t(939249),
    f = t(638495),
    h = t(366010),
    C = t(821609),
    g = t(658675),
    v = t(62010),
    j = t(890856),
    y = t(638916),
    E = t(43990),
    N = t(825484),
    A = t(866665),
    I = t(442433),
    k = t(775602),
    P = t(793574),
    R = t(688810),
    T = t(429913),
    S = t(713517),
    M = t(427209),
    D = t(977445),
    L = t(288106),
    O = t(993046),
    H = t(363195),
    w = t(253932),
    B = t(67480),
    F = t(174459),
    G = t(969724),
    U = t(871123),
    W = t(733391),
    z = t(439303),
    K = t(353281),
    Y = t(832163),
    $ = t(69236),
    V = t(654107),
    q = t(2157),
    J = t(898523),
    Q = t(345938),
    Z = t(510022),
    X = t(82343),
    ee = t(381999),
    el = t(263911),
    et = t(971146),
    en = t(366523),
    er = t(300182),
    ea = t(434078);
function ei() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ea.Vl, ea.Yf), style: { animationDelay: `${e}s` } });
}
function eo() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ea.RC, style: { width: `${e}%` } });
}
var es = t(533772),
    ec = t(821707),
    eu = t(743693),
    ed = t(249434),
    em = t(652215),
    ep = t(731738),
    e_ = t(807393),
    ex = t(995393),
    eb = t(105292);
let ef = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eh = o()("#000000").darken(1.5).alpha(0.9).hex(),
    eC = o()("#000000").alpha(0).hex();
var eg =
    (((n = {})[(n.SMALL = 0)] = "SMALL"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.EMBEDDED = 2)] = "EMBEDDED"),
    (n[(n.FULL_WIDTH = 3)] = "FULL_WIDTH"),
    n);
let ev = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ej() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(ea.Nr, ea.ax, ea.Yf),
        children: (0, r.jsxs)("div", { className: ea.zH, children: [(0, r.jsx)(eo, {}), (0, r.jsx)(eo, {})] }),
    });
}
function ey(e) {
    let {
            guildId: l,
            sku: t,
            isCardHovered: n,
            trackCardClick: i,
            variant: o,
            analyticsLocations: s,
            analyticsContext: u,
            tabIndex: d,
        } = e,
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != t &&
                        (i(ex.bB.FORWARD_BUTTON),
                        (0, Q.d)({
                            sku: t,
                            guildId: l,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [t, l, i, u, s],
        ),
        p = a.useCallback(() => {
            i(ex.bB.WISHLIST_BUTTON);
        }, [i]),
        _ = a.useMemo(() => c()(ea.o, { [ea.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ea.zu,
        children: [
            2 === o &&
                (0, r.jsx)(b.D, {
                    className: c()(_, ea.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, r.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(eu._, {
                sku: t,
                isCardHovered: n,
                trackButtonClick: p,
                className: c()(_, ea.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function eE(e) {
    let {
            positionInSection: l,
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            unavailableLabel: b,
            analyticsLocations: M,
            disableMultiSelect: Q = !1,
            listItemProps: eu,
        } = e,
        eg = (0, f.k)(),
        ej = eu?.tabIndex,
        eE = a.useRef(null),
        eN = a.useRef(null),
        eA = (0, m.bG)([B.A], () => B.A.get(n)),
        eI = 3 === i,
        ek = (0, D.uS)(eA?.applicationId),
        eP = null != eA && !eA.available && !ek,
        eR = eP ? (b ?? eb.intl.string(eb.t.RWouSQ)) : null,
        { guildId: eT } = (0, U.nG)(eA?.applicationId),
        eS = eA?.applicationId,
        eM = (0, m.bG)([H.A], () => (0, h.M)(H.A.theme)),
        eD = (0, m.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eL = w.Q_.useSetting(),
        { isHoveringOrFocusing: eO } = (0, S.A)(eE),
        eH = (0, z.jM)(),
        { analyticsLocations: ew } = (0, R.Ay)(M ?? []),
        eB = a.useRef({ positionInSection: l, analyticsLocations: ew }),
        [eF, eG] = a.useState(!1),
        eU = (0, m.bG)([Y.A], () => (null != n ? Y.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        {
            shouldShowCard: eW,
            cardImage: ez,
            cardBackgroundImage: eK,
        } = (function (e, l, t) {
            let n = (0, m.bG)([B.A], () => B.A.get(e)),
                [r, i] = a.useState(!1),
                [o, s] = a.useState(!1),
                c = a.useMemo(() => (0, U.xf)(n, { size: t ? 2048 : 1024 }), [n, t]),
                u = a.useMemo(() => (0, U.fq)(n, { size: t ? 2048 : 512 }), [n, t]);
            return (
                a.useEffect(() => {
                    if (n?.id == null || r || !l) return;
                    if (null == u) return void i(!0);
                    let e = new Image();
                    return (
                        (e.src = u.toString()),
                        (e.onload = () => {
                            i(!0);
                        }),
                        (e.onerror = () => {
                            i(!0);
                        }),
                        () => {
                            ((e.onerror = null), (e.onload = null), (e.src = ""));
                        }
                    );
                }, [u, l, r, n?.id]),
                a.useEffect(() => {
                    if (n?.id == null || o || !l) return;
                    if (null == c) return void s(!0);
                    let e = !0;
                    return (
                        (0, V.l0)(c.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [o, c, l, n?.id]),
                { shouldShowCard: a.useMemo(() => r && o, [r, o]), cardImage: u, cardBackgroundImage: c }
            );
        })(n, eF, eI),
        eY = (0, O.JL)({ sku: eA }),
        e$ = eY?.amount,
        { display: eV, reward: eq, offers: eJ } = (0, q.b)({ surface: "card", applicationId: eS, skuId: n }),
        eQ = a.useMemo(() => eJ.find((e) => e.type === L.B8.ORB_REDEMPTION) ?? null, [eJ]),
        eZ = (0, $.oG)({ orbPriceAmount: e$, spendOrbsOffer: eQ }),
        eX = (0, T.h)(eA?.applicationId),
        {
            isSelectionActive: e0,
            selected: e1,
            setSelected: e3,
            disabled: e2,
        } = (0, ee.SS)(n, eA?.applicationId, { disabled: Q }),
        {
            priceComponent: e9,
            extendedHeight: e8,
            displayPrice: e7,
            shownPriceDetails: e4,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: n, promotion: i, reward: o, showOrbsOnly: s = !1 } = e,
                c = (0, O.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: p } = (0, O.j9)(c),
                b = a.useMemo(
                    () =>
                        null == o || o.type !== L.Ns.ACTION || o.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: ea.pt,
                                  children: (0, r.jsx)(_.E, {
                                      variant: "body-sm/semibold",
                                      color: "currentColor",
                                      children: eb.intl.format(eb.t.GiVd2Q, {
                                          orbCount: o.amount,
                                          orbIconHook: () =>
                                              (0, r.jsx)(x.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              }),
                    [o],
                );
            return a.useMemo(() => {
                let e = {
                    currency: c.userPrice?.currency ?? c.normalPrice?.currency ?? null,
                    price: c.userPrice?.amount ?? null,
                    regularPrice: c.normalPrice?.amount ?? null,
                };
                return null != l && (0, G.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, r.jsx)(ec.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: p,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : s && null != n && n > 0
                          ? {
                                priceComponent: (0, r.jsx)(es.O, {
                                    variant: "body-md/semibold",
                                    orbPrice: n,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: p,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: n },
                            }
                          : "HIDDEN" !== t && null != n
                            ? {
                                  priceComponent: (0, r.jsx)(es.A, {
                                      orbsGate: t,
                                      className: ea.p6,
                                      orbPrice: n,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: p,
                                  shownPriceDetails: { ...e, orbsAmount: n },
                              }
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: ea.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(_.E, {
                                                            className: ea.of,
                                                            variant: "body-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, r.jsx)(_.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, r.jsxs)(_.E, {
                                                        variant: "body-md/semibold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", m, ")"],
                                                    }),
                                                ],
                                            }),
                                            b,
                                        ],
                                    }),
                                    extendedHeight: null != b,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(_.E, {
                                                variant: "body-md/semibold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: u,
                                            }),
                                            b,
                                        ],
                                    }),
                                    extendedHeight: !1,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                    : {
                          priceComponent: null,
                          extendedHeight: !1,
                          displayPrice: p,
                          shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: null },
                      };
            }, [l, i, d, u, m, s, n, t, b, c, p]);
        })({ sku: eA, orbsGate: eZ, orbPriceAmount: e$, promotion: eV, reward: eq, showOrbsOnly: u }),
        e5 = 2 !== i && eW ? e4 : ev,
        e6 = a.useCallback((e) => {
            eG(e);
        }, []),
        le = a.useMemo(
            () => c()(ea.Nr, { [ea.ax]: 0 === i, [ea.GW]: 1 === i, [ea.jz]: 2 === i, [ea.WB]: 3 === i }),
            [i],
        ),
        { handleCardHover: ll, handleCardUnhover: lt } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(r),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            return (
                a.useEffect(() => {
                    u.current = r;
                }, [r]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: r,
                                    applicationId: a,
                                    pageIndex: i,
                                    pageTitle: o,
                                    pageSection: s,
                                    pageSectionTitle: m,
                                    isUserGuildMember: p,
                                    pageHasLeaderboard: _,
                                } = u.current,
                                { positionInSection: x, analyticsLocations: b, shownPriceDetails: f } = d.current;
                            (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: l,
                                guild_id: n ?? r,
                                application_id: t ?? a,
                                page_index: i,
                                page_title: o,
                                page_section: s,
                                page_section_title: m,
                                position_in_section: x,
                                is_user_guild_member: p,
                                page_has_leaderboard: _,
                                price: f.price,
                                regular_price: f.regularPrice,
                                currency: f.currency,
                                orbs_amount: f.orbsAmount,
                                location_stack: b,
                            }),
                                (c.current = !0));
                        }
                    }, [l, t, n]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: n,
            applicationId: eS,
            guildId: eT,
            analyticsContext: eH,
            positionInSection: l,
            analyticsLocations: ew,
            shownPriceDetails: e5,
        }),
        { handleCardVisibilityChange: ln } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(null),
                u = a.useRef(r),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            (a.useEffect(() => {
                u.current = r;
            }, [r]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]));
            let m = a.useCallback(() => {
                    let {
                            placement: e,
                            sessionId: r,
                            guildId: a,
                            applicationId: i,
                            pageIndex: o,
                            pageTitle: s,
                            pageSection: c,
                            pageSectionTitle: m,
                            isUserGuildMember: p,
                            pageHasLeaderboard: _,
                        } = u.current,
                        { positionInSection: x, analyticsLocations: b, shownPriceDetails: f } = d.current;
                    (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: r,
                        sku_id: l,
                        sku_storefront_promotion_id: (0, J.Z)(l),
                        guild_id: n ?? a,
                        application_id: t ?? i,
                        page_index: o,
                        page_title: s,
                        page_section: c,
                        page_section_title: m,
                        position_in_section: x,
                        is_user_guild_member: p,
                        page_has_leaderboard: _,
                        price: f.price,
                        regular_price: f.regularPrice,
                        currency: f.currency,
                        orbs_amount: f.orbsAmount,
                        location_stack: b,
                    }),
                        e_.A.increment({
                            name: ep.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
                            tags: [`placement:${e ?? "unknown"}`],
                        }));
                }, [l, t, n]),
                p = a.useCallback(
                    (e) => {
                        e
                            ? null === c.current &&
                              (c.current = window.setTimeout(() => {
                                  (m(), (c.current = null));
                              }, 1e3))
                            : null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [m],
                );
            return (
                a.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: p }
            );
        })({
            skuId: n,
            applicationId: eS,
            guildId: eT,
            analyticsContext: eH,
            positionInSection: l,
            analyticsLocations: ew,
            shownPriceDetails: e5,
        });
    a.useEffect(() => {
        ln(eF);
    }, [eF]);
    let lr = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eB.current,
                    {
                        sessionId: r,
                        guildId: a,
                        applicationId: i,
                        pageIndex: o,
                        pageTitle: s,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eH;
                F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: n,
                    sku_storefront_promotion_id: (0, J.Z)(n),
                    guild_id: eT ?? a,
                    application_id: eS ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e5.price,
                    regular_price: e5.regularPrice,
                    currency: e5.currency,
                    orbs_amount: e5.orbsAmount,
                    location_stack: l,
                });
            },
            [n, eS, eT, eH, e5],
        ),
        { primaryIconAsset: la, primaryIconLabel: li } = a.useMemo(() => (0, U.Cv)(eA, eS), [eA, eS]),
        { viewProductDetails: lo } = (0, K.H)(),
        ls = a.useMemo(() => {
            let e = eA?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? eb.intl.formatToPlainString(eb.t.PWw4Vp, { days: t }) : null;
        }, [eA?.tenantMetadata?.socialLayer?.expiresAt]),
        lc = a.useMemo(() => {
            if (!eW) return "none";
            if (3 === i) return;
            let [e, l] = ef[i];
            return `linear-gradient(to top, ${eh} ${30 + e}%, ${eC} ${30 + l}%)`;
        }, [i, eW]),
        lu = a.useCallback(() => {
            null != eS && (0, W.iR)(eS, n);
        }, [eS, n]),
        ld = a.useCallback(() => {
            (ll(),
                null != eS &&
                    (eN.current = setTimeout(() => {
                        (0, W.iR)(eS, n);
                    }, 1e3)));
        }, [eS, n, ll]),
        lm = a.useCallback(() => {
            (lt(), null != eN.current && (clearTimeout(eN.current), (eN.current = null)));
        }, [lt]);
    a.useEffect(
        () => () => {
            null != eN.current && clearTimeout(eN.current);
        },
        [],
    );
    let lp = a.useCallback(() => {
            null != eS && lo?.(n, eS, eA?.slug);
        }, [eS, n, eA?.slug, lo]),
        l_ = a.useCallback(
            (e) => {
                null != o && eA?.applicationId != null ? o(e, { skuId: n, applicationId: eA.applicationId }) : lp();
            },
            [o, eA?.applicationId, n, lp],
        ),
        lx = a.useCallback(
            (e) => {
                if (e0) {
                    e2 || e3(!e1);
                    return;
                }
                (lr(ex.bB.CARD), l_(e));
            },
            [e0, lr, l_, e3, e1, e2],
        ),
        lb = a.useCallback(
            (e) => {
                eL &&
                    (0, I.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("638221"), t.e("897249")]).then(t.bind(t, 10680));
                        return (l) => (0, r.jsx)(e, { ...l, skuId: n });
                    });
            },
            [eL, n],
        ),
        lf = a.useMemo(() => [...ew, P.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ew]),
        lh = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eX &&
                        null != eA &&
                        (lr(ex.bB.BUY_WITH_ORBS_BUTTON),
                        (0, X.n)(eA, {
                            guildId: eT,
                            contextKey: eg,
                            onComplete: () => {
                                (0, Z.n)({ sku: eA, application: eX, analyticsLocations: lf, contextKey: eg });
                            },
                            analyticsLocations: lf,
                        })));
            },
            [eA, eX, eT, lr, lf, eg],
        ),
        lC = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eA &&
                        (lr(ex.bB.BUY_BUTTON),
                        (0, X.a)(eA, { isGift: !1 }, { analyticsLocations: lf, guildId: eT, contextKey: eg })));
            },
            [eA, eT, lr, lf, eg],
        ),
        lg = a.useCallback(
            (e) => {
                (e.stopPropagation(), lr(ex.bB.VIEW_DETAILS_BUTTON), l_(e));
            },
            [lr, l_],
        ),
        lv = eA?.exclusive === !0 && 2 !== i,
        lj = a.useMemo(
            () =>
                null != eR
                    ? (0, r.jsx)(C.$, { variant: "primary", onClick: lg, text: eR, fullWidth: !0, tabIndex: ej })
                    : "CAN_CHECKOUT" === eZ
                      ? (0, r.jsx)(C.$, {
                            variant: "primary",
                            onMouseDown: lu,
                            onClick: lh,
                            "aria-label": eb.intl.formatToPlainString(eb.t.yi41qQ, { orbPrice: e$ }),
                            text: eb.intl.format(eb.t.JC15qj, {
                                orbPrice: e$,
                                orbIconHook: () =>
                                    (0, r.jsx)(
                                        x.C,
                                        { className: ea.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: ej,
                        })
                      : (0, r.jsx)(C.$, {
                            variant: "primary",
                            onMouseDown: lu,
                            onClick: lC,
                            text: null != e7 ? eb.intl.format(eb.t.Xp5WTn, { price: e7 }) : eb.intl.string(eb.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: ej,
                        }),
            [eR, lg, eZ, lh, lC, lu, e$, e7, ej],
        );
    if (null == eA) return null;
    let ly = e9;
    eW ? null != eR && (ly = (0, r.jsx)(ed.l, { label: eR })) : (ly = (0, r.jsx)(eo, {}));
    let lE = null;
    e0
        ? (lE = (0, r.jsx)("div", { className: ea.HI, children: (0, r.jsx)(g.P, { checked: e1, disabled: e2 }) }))
        : null == eR && eA.exclusive
          ? (lE = (0, r.jsx)("div", { className: ea.fC, children: (0, r.jsx)(el.I, {}) }))
          : null == eR &&
            null != ls &&
            (lE = (0, r.jsx)("div", {
                className: ea.qS,
                children: (0, r.jsx)(v.E, { type: { text: ls }, variant: "inverted" }),
            }));
    let lN = lv ? (0, r.jsx)("div", { className: ea.mN, "aria-hidden": !0 }) : null,
        lA = (0, r.jsx)(p.L, {
            innerRef: eE,
            onChange: e6,
            threshold: 0,
            children: (0, r.jsxs)(j.s, {
                onClick: lx,
                onContextMenu: lb,
                onMouseEnter: ld,
                onMouseLeave: lm,
                className: c()(le, { [ea.Zl]: !eD && 2 !== i, [ea.BN]: eM, [eM ? ea.Mn : ea.YF]: eO, [ea.Rc]: !eW }, s),
                ref: eE,
                buttonProps: { ...eu, role: "button" },
                onFocus: () => eu?.onFocus?.(),
                "aria-label": null != eR ? `${eA.name}, ${eR}` : eA.name,
                children: [
                    lE,
                    (0, r.jsx)(ey, {
                        sku: eA,
                        guildId: eT,
                        isCardHovered: eO,
                        variant: i,
                        trackCardClick: lr,
                        analyticsLocations: ew,
                        analyticsContext: eH,
                        tabIndex: ej,
                    }),
                    null != ez
                        ? eW
                            ? (0, r.jsx)(en.A, {
                                  containerClassName: ea.Vl,
                                  foregroundImageClassName: ea.wP,
                                  cardImage: ez,
                                  altText: eA.name,
                                  shape: "custom",
                                  backgroundImageClassName: ea.GC,
                                  cardBackgroundImage: eK,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(ei, {})
                        : (0, r.jsx)("div", {
                              className: ea.t7,
                              children: (0, r.jsx)(y.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ea.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: ea.iZ, style: { background: lc } }),
                                  (0, r.jsx)(E.N, {
                                      theme: em.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(ea.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(ea.gn, {
                                                          [ea.ov]: null == eR && !(0, G.mC)(eA),
                                                          [ea.w4]: null == eR && e8,
                                                      }),
                                                      children: [
                                                          eW &&
                                                              (0, r.jsx)("div", {
                                                                  className: ea.S1,
                                                                  children: (0, r.jsx)(et.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eW
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != la &&
                                                                            (0, r.jsx)("img", {
                                                                                src: la.toString(),
                                                                                alt: li,
                                                                                className: ea.ye,
                                                                            }),
                                                                        (0, r.jsx)(_.E, {
                                                                            className: 3 === i ? ea.TJ : void 0,
                                                                            color: "text-overlay-light",
                                                                            variant: "body-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eA.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(eo, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", { className: ea.iQ, children: ly }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: ea.li,
                                      children: (0, r.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eP || eU
                                                  ? lj
                                                  : (0, r.jsx)(A.m, {
                                                        text: eb.intl.string(eb.t.IqlPbQ),
                                                        children: (0, r.jsx)(C.$, {
                                                            variant: "primary",
                                                            onClick: lg,
                                                            text: eb.intl.string(eb.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: ej,
                                                        }),
                                                    }),
                                              !eP &&
                                                  (0, r.jsx)(er.A, {
                                                      tabIndex: ej,
                                                      tooltipAriaHidden: 3 === i,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              lr(ex.bB.GIFT_BUTTON),
                                                              (0, X.a)(
                                                                  eA,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...ew,
                                                                          P.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
                                                                      contextKey: eg,
                                                                  },
                                                              ));
                                                      },
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        });
    return lv ? (0, r.jsxs)("div", { className: ea.ur, children: [lN, lA] }) : lA;
}
