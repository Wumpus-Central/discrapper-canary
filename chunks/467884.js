t.d(l, { yf: () => ej, Ay: () => eE, s6: () => eC });
var r,
    n = t(477900),
    a = t(582128),
    i = t(310784),
    s = t.n(i),
    o = t(503698),
    c = t.n(o),
    u = t(536637),
    d = t.n(u),
    m = t(17928),
    x = t(269115),
    p = t(834730),
    _ = t(318254),
    f = t(939249),
    b = t(366010),
    h = t(821609),
    C = t(658675),
    g = t(812993),
    j = t(890856),
    v = t(638916),
    E = t(43990),
    N = t(825484),
    A = t(866665),
    y = t(442433),
    I = t(775602),
    k = t(793574),
    R = t(688810),
    S = t(429913),
    T = t(713517),
    P = t(427209),
    M = t(977445),
    L = t(976860),
    D = t(288106),
    O = t(993046),
    H = t(363195),
    B = t(885386),
    w = t(652165),
    G = t(67480),
    F = t(174459),
    U = t(871123),
    W = t(733391),
    Y = t(439303),
    $ = t(353281),
    z = t(832163),
    K = t(69236),
    q = t(654107),
    V = t(2157),
    Q = t(345938),
    J = t(510022),
    Z = t(99161),
    X = t(381999),
    ee = t(263911),
    el = t(971146),
    et = t(366523),
    er = t(300182),
    en = t(434078);
function ea() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(en.Vl, en.Yf), style: { animationDelay: `${e}s` } });
}
function ei() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: en.RC, style: { width: `${e}%` } });
}
var es = t(533772),
    eo = t(821707),
    ec = t(743693),
    eu = t(15061),
    ed = t(652215),
    em = t(731738),
    ex = t(807393),
    ep = t(995393),
    e_ = t(375708);
let ef = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eb = s()("#000000").darken(1.5).alpha(0.9).hex(),
    eh = s()("#000000").alpha(0).hex();
var eC = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let eg = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ej() {
    return (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: c()(en.Nr, en.ax, en.Yf),
        children: (0, n.jsxs)("div", { className: en.zH, children: [(0, n.jsx)(ei, {}), (0, n.jsx)(ei, {})] }),
    });
}
function ev(e) {
    let {
            guildId: l,
            sku: t,
            isCardHovered: r,
            trackCardClick: i,
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
            tabIndex: d,
        } = e,
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != t &&
                        (i(ep.bB.FORWARD_BUTTON),
                        (0, Q.d)({
                            sku: t,
                            guildId: l,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [t, l, i, u, o],
        ),
        x = a.useCallback(() => {
            i(ep.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(en.o, { [en.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: en.zu,
        children: [
            2 === s &&
                (0, n.jsx)(f.D, {
                    className: c()(p, en.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, n.jsx)(P.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(ec._, {
                sku: t,
                isCardHovered: r,
                trackButtonClick: x,
                className: c()(p, en.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function eE(e) {
    let {
            positionInSection: l,
            skuId: r,
            variant: i = 0,
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            unavailableLabel: f,
            analyticsLocations: P,
            disableMultiSelect: Q = !1,
            listItemProps: ec,
        } = e,
        eC = ec?.tabIndex,
        ej = a.useRef(null),
        eE = a.useRef(null),
        eN = (0, m.bG)([G.A], () => G.A.get(r)),
        eA = (0, M.uS)(eN?.applicationId),
        ey = null != eN && !eN.available && !eA,
        eI = ey ? (f ?? e_.intl.string(e_.t.RWouSQ)) : null,
        { guildId: ek } = (0, U.nG)(eN?.applicationId),
        eR = eN?.applicationId,
        eS = (0, m.bG)([H.A], () => (0, b.M)(H.A.theme)),
        eT = (0, m.bG)([I.Ay], () => I.Ay.useReducedMotion),
        eP = B.Q_.useSetting(),
        { isHoveringOrFocusing: eM } = (0, T.A)(ej),
        eL = (0, Y.jM)(),
        { analyticsLocations: eD } = (0, R.Ay)(P ?? []),
        eO = a.useRef({ positionInSection: l, analyticsLocations: eD }),
        [eH, eB] = a.useState(!1),
        ew = (0, m.bG)([z.A], () => (null != r ? z.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eG = (function (e, l) {
            let t = (0, m.bG)([G.A], () => G.A.get(e)),
                [r, n] = a.useState(!1),
                [i, s] = a.useState(!1),
                o = a.useMemo(() => (0, U.xf)(t), [t]),
                c = a.useMemo(() => (0, U.fq)(t), [t]);
            return (
                a.useEffect(() => {
                    if (t?.id == null || r || !l) return;
                    if (null == c) return void n(!0);
                    let e = new Image();
                    return (
                        (e.src = c.toString()),
                        (e.onload = () => {
                            n(!0);
                        }),
                        (e.onerror = () => {
                            n(!0);
                        }),
                        () => {
                            ((e.onerror = null), (e.onload = null), (e.src = ""));
                        }
                    );
                }, [c, l, r, t?.id]),
                a.useEffect(() => {
                    if (t?.id == null || i || !l) return;
                    if (null == o) return void s(!0);
                    let e = !0;
                    return (
                        (0, q.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, o, l, t?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eH),
        eF = (0, O.JL)({ sku: eN }),
        eU = eF?.amount,
        { display: eW, reward: eY, offers: e$ } = (0, V.b)({ surface: "card", applicationId: eR, skuId: r }),
        ez = a.useMemo(() => e$.find((e) => e.type === D.B8.ORB_REDEMPTION) ?? null, [e$]),
        eK = (0, K.oG)({ orbPriceAmount: eU, spendOrbsOffer: ez }),
        eq = (0, S.h)(eN?.applicationId),
        {
            isSelectionActive: eV,
            selected: eQ,
            setSelected: eJ,
            disabled: eZ,
        } = (0, X.SS)(r, eN?.applicationId, { disabled: Q }),
        {
            priceComponent: eX,
            extendedHeight: e0,
            displayPrice: e1,
            shownPriceDetails: e3,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: r, promotion: i, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, O.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: x } = (0, O.j9)(c),
                f = a.useMemo(
                    () =>
                        null == s || s.type !== D.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, n.jsx)("div", {
                                  className: en.pt,
                                  children: (0, n.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: e_.intl.format(e_.t.GiVd2Q, {
                                          orbCount: s.amount,
                                          orbIconHook: () =>
                                              (0, n.jsx)(_.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              }),
                    [s],
                );
            return a.useMemo(() => {
                let e = {
                    currency: c.userPrice?.currency ?? c.normalPrice?.currency ?? null,
                    price: c.userPrice?.amount ?? null,
                    regularPrice: c.normalPrice?.amount ?? null,
                };
                return null != l && (0, U.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, n.jsx)(eo.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: x,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != r && r > 0
                          ? {
                                priceComponent: (0, n.jsx)(es.O, {
                                    variant: "text-md/bold",
                                    orbPrice: r,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: x,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: r },
                            }
                          : "HIDDEN" !== t && null != r
                            ? {
                                  priceComponent: (0, n.jsx)(es.A, {
                                      orbsGate: t,
                                      className: en.p6,
                                      orbPrice: r,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: x,
                                  shownPriceDetails: { ...e, orbsAmount: r },
                              }
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: en.p6,
                                                children: [
                                                    null != u &&
                                                        (0, n.jsx)(p.E, {
                                                            className: en.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, n.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, n.jsxs)(p.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", m, ")"],
                                                    }),
                                                ],
                                            }),
                                            f,
                                        ],
                                    }),
                                    extendedHeight: null != f,
                                    displayPrice: x,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: u,
                                            }),
                                            f,
                                        ],
                                    }),
                                    extendedHeight: !1,
                                    displayPrice: x,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                    : {
                          priceComponent: null,
                          extendedHeight: !1,
                          displayPrice: x,
                          shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: null },
                      };
            }, [l, i, d, u, m, o, r, t, f, c, x]);
        })({ sku: eN, orbsGate: eK, orbPriceAmount: eU, promotion: eW, reward: eY, showOrbsOnly: u }),
        e8 = 2 !== i && eG ? e3 : eg,
        e7 = a.useCallback((e) => {
            eB(e);
        }, []),
        e2 = a.useMemo(() => c()(en.Nr, { [en.ax]: 0 === i, [en.GW]: 1 === i, [en.jz]: 2 === i }), [i]),
        { handleCardHover: e9, handleCardUnhover: e6 } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: r,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: s,
                    shownPriceDetails: o,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: s, shownPriceDetails: o });
            return (
                a.useEffect(() => {
                    u.current = n;
                }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: s, shownPriceDetails: o };
                }, [i, s, o]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: n,
                                    applicationId: a,
                                    pageIndex: i,
                                    pageTitle: s,
                                    pageSection: o,
                                    pageSectionTitle: m,
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = u.current,
                                { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                            (F.default.track(ed.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: l,
                                guild_id: r ?? n,
                                application_id: t ?? a,
                                page_index: i,
                                page_title: s,
                                page_section: o,
                                page_section_title: m,
                                position_in_section: _,
                                is_user_guild_member: x,
                                page_has_leaderboard: p,
                                price: b.price,
                                regular_price: b.regularPrice,
                                currency: b.currency,
                                orbs_amount: b.orbsAmount,
                                location_stack: f,
                            }),
                                (c.current = !0));
                        }
                    }, [l, t, r]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: r,
            applicationId: eR,
            guildId: ek,
            analyticsContext: eL,
            positionInSection: l,
            analyticsLocations: eD,
            shownPriceDetails: e8,
        }),
        { handleCardVisibilityChange: e5 } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: r,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: s,
                    shownPriceDetails: o,
                } = e,
                c = a.useRef(null),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: s, shownPriceDetails: o });
            (a.useEffect(() => {
                u.current = n;
            }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: s, shownPriceDetails: o };
                }, [i, s, o]));
            let m = a.useCallback(() => {
                    let {
                            placement: e,
                            sessionId: n,
                            guildId: a,
                            applicationId: i,
                            pageIndex: s,
                            pageTitle: o,
                            pageSection: c,
                            pageSectionTitle: m,
                            isUserGuildMember: x,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                    (F.default.track(ed.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: n,
                        sku_id: l,
                        guild_id: r ?? a,
                        application_id: t ?? i,
                        page_index: s,
                        page_title: o,
                        page_section: c,
                        page_section_title: m,
                        position_in_section: _,
                        is_user_guild_member: x,
                        page_has_leaderboard: p,
                        price: b.price,
                        regular_price: b.regularPrice,
                        currency: b.currency,
                        orbs_amount: b.orbsAmount,
                        location_stack: f,
                    }),
                        ex.A.increment({
                            name: em.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
                            tags: [`placement:${e ?? "unknown"}`],
                        }));
                }, [l, t, r]),
                x = a.useCallback(
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
                { handleCardVisibilityChange: x }
            );
        })({
            skuId: r,
            applicationId: eR,
            guildId: ek,
            analyticsContext: eL,
            positionInSection: l,
            analyticsLocations: eD,
            shownPriceDetails: e8,
        });
    a.useEffect(() => {
        e5(eH);
    }, [eH]);
    let e4 = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eO.current,
                    {
                        sessionId: n,
                        guildId: a,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eL;
                F.default.track(ed.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: r,
                    guild_id: ek ?? a,
                    application_id: eR ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e8.price,
                    regular_price: e8.regularPrice,
                    currency: e8.currency,
                    orbs_amount: e8.orbsAmount,
                    location_stack: l,
                });
            },
            [r, eR, ek, eL, e8],
        ),
        { primaryIconAsset: le, primaryIconLabel: ll } = a.useMemo(() => (0, U.Cv)(eN, eR), [eN, eR]),
        lt = (0, m.bG)([z.A], () => z.A.getStorefrontState(eR)?.activePage ?? 0),
        lr = a.useMemo(() => {
            let e = eN?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? e_.intl.format(e_.t.PWw4Vp, { days: t }) : null;
        }, [eN?.tenantMetadata?.socialLayer?.expiresAt]),
        ln = (0, U.xf)(eN),
        la = a.useMemo(() => {
            if (!eG) return "none";
            let [e, l] = ef[i];
            return `linear-gradient(to top, ${eb} ${30 + e}%, ${eh} ${30 + l}%)`;
        }, [i, eG]),
        li = a.useCallback(() => {
            null != eR && (0, W.iR)(eR, r);
        }, [eR, r]),
        ls = a.useCallback(() => {
            (e9(),
                null != eR &&
                    (eE.current = setTimeout(() => {
                        (0, W.iR)(eR, r);
                    }, 1e3)));
        }, [eR, r, e9]),
        lo = a.useCallback(() => {
            (e6(), null != eE.current && (clearTimeout(eE.current), (eE.current = null)));
        }, [e6]);
    a.useEffect(
        () => () => {
            null != eE.current && clearTimeout(eE.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: lc } = (0, $.H)(),
        lu = a.useCallback(() => {
            null != eR && null != lc && (0, L.bG)(lc(lt, r, eN?.slug));
        }, [eR, r, lt, eN?.slug, lc]),
        ld = a.useCallback(
            (e) => {
                null != s && eN?.applicationId != null ? s(e, { skuId: r, applicationId: eN.applicationId }) : lu();
            },
            [s, eN?.applicationId, r, lu],
        ),
        lm = a.useCallback(
            (e) => {
                if (eV) {
                    eZ || eJ(!eQ);
                    return;
                }
                (e4(ep.bB.CARD), ld(e));
            },
            [eV, e4, ld, eJ, eQ, eZ],
        ),
        lx = a.useCallback(
            (e) => {
                eP &&
                    (0, y.L3)(e, async () => {
                        let { default: e } = await t.e("897249").then(t.bind(t, 10680));
                        return (l) => (0, n.jsx)(e, { ...l, skuId: r });
                    });
            },
            [eP, r],
        ),
        lp = a.useMemo(() => [...eD, k.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eD]),
        l_ = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eq &&
                        (e4(ep.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: r,
                            applicationId: eq.id,
                            onComplete: () => {
                                null != eq &&
                                    null != eN &&
                                    (0, J.n)({ sku: eN, application: eq, analyticsLocations: lp });
                            },
                            analyticsLocations: lp,
                        })));
            },
            [eN, eq, r, e4, lp],
        ),
        lf = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eN &&
                        (e4(ep.bB.BUY_BUTTON), (0, Z.a)(eN, { isGift: !1 }, { analyticsLocations: lp, guildId: ek })));
            },
            [eN, ek, e4, lp],
        ),
        lb = a.useCallback(
            (e) => {
                (e.stopPropagation(), e4(ep.bB.VIEW_DETAILS_BUTTON), ld(e));
            },
            [e4, ld],
        ),
        lh = eN?.exclusive === !0 && 2 !== i,
        lC = a.useMemo(
            () =>
                null != eI
                    ? (0, n.jsx)(h.$, { variant: "primary", onClick: lb, text: eI, fullWidth: !0, tabIndex: eC })
                    : "CAN_CHECKOUT" === eK
                      ? (0, n.jsx)(h.$, {
                            variant: "primary",
                            onMouseDown: li,
                            onClick: l_,
                            "aria-label": e_.intl.formatToPlainString(e_.t.yi41qQ, { orbPrice: eU }),
                            text: e_.intl.format(e_.t.JC15qj, {
                                orbPrice: eU,
                                orbIconHook: () =>
                                    (0, n.jsx)(
                                        _.C,
                                        { className: en.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: eC,
                        })
                      : (0, n.jsx)(h.$, {
                            variant: "primary",
                            onMouseDown: li,
                            onClick: lf,
                            text: null != e1 ? e_.intl.format(e_.t.Xp5WTn, { price: e1 }) : e_.intl.string(e_.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: eC,
                        }),
            [eI, lb, eK, l_, lf, li, eU, e1, eC],
        );
    if (null == eN) return null;
    let lg = (0, U.fq)(eN),
        lj = null;
    eV
        ? (lj = (0, n.jsx)("div", { className: en.HI, children: (0, n.jsx)(C.P, { checked: eQ, disabled: eZ }) }))
        : null != eI
          ? (lj = (0, n.jsx)("div", { className: en.fC, children: (0, n.jsx)(eu.G, { label: eI }) }))
          : eN.exclusive
            ? (lj = (0, n.jsx)("div", { className: en.fC, children: (0, n.jsx)(ee.I, {}) }))
            : null != lr && (lj = (0, n.jsx)(g.Lp, { text: lr, disableColor: !0, className: en.qS }));
    let lv = lh ? (0, n.jsx)("div", { className: en.mN, "aria-hidden": !0 }) : null,
        lE = (0, n.jsx)(x.L, {
            innerRef: ej,
            onChange: e7,
            threshold: 0,
            children: (0, n.jsxs)(j.s, {
                onClick: lm,
                onContextMenu: lx,
                onMouseEnter: ls,
                onMouseLeave: lo,
                className: c()(e2, { [en.Zl]: !eT && 2 !== i, [en.BN]: eS, [eS ? en.Mn : en.YF]: eM, [en.Rc]: !eG }, o),
                ref: ej,
                buttonProps: { ...ec, role: "button" },
                onFocus: () => ec?.onFocus?.(),
                "aria-label": null != eI ? `${eN.name}, ${eI}` : eN.name,
                children: [
                    lj,
                    (0, n.jsx)(ev, {
                        sku: eN,
                        guildId: ek,
                        isCardHovered: eM,
                        variant: i,
                        trackCardClick: e4,
                        analyticsLocations: eD,
                        analyticsContext: eL,
                        tabIndex: eC,
                    }),
                    null != lg
                        ? eG
                            ? (0, n.jsx)(et.A, {
                                  containerClassName: en.Vl,
                                  foregroundImageClassName: en.wP,
                                  cardImage: lg,
                                  altText: eN.name,
                                  shape: "custom",
                                  backgroundImageClassName: en.GC,
                                  cardBackgroundImage: ln,
                                  cssPosition: "absolute",
                              })
                            : (0, n.jsx)(ea, {})
                        : (0, n.jsx)("div", {
                              className: en.t7,
                              children: (0, n.jsx)(v.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: en.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)("div", { className: en.iZ, style: { background: la } }),
                                  (0, n.jsx)(E.N, {
                                      theme: ed.NJ8.DARK,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(en.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(en.gn, { [en.ov]: !(0, U.mC)(eN), [en.w4]: e0 }),
                                                      children: [
                                                          eG &&
                                                              (0, n.jsx)("div", {
                                                                  className: en.S1,
                                                                  children: (0, n.jsx)(el.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eG
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != le &&
                                                                            (0, n.jsx)("img", {
                                                                                src: le.toString(),
                                                                                alt: ll,
                                                                                className: en.ye,
                                                                            }),
                                                                        (0, n.jsx)(p.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eN.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(ei, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: en.iQ,
                                                      children: eG ? eX : (0, n.jsx)(ei, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: en.li,
                                      children: (0, n.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              ey || ew
                                                  ? lC
                                                  : (0, n.jsx)(A.m, {
                                                        text: e_.intl.string(e_.t.IqlPbQ),
                                                        children: (0, n.jsx)(h.$, {
                                                            variant: "primary",
                                                            onClick: lb,
                                                            text: e_.intl.string(e_.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: eC,
                                                        }),
                                                    }),
                                              !ey &&
                                                  (0, n.jsx)(er.A, {
                                                      tabIndex: eC,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              e4(ep.bB.GIFT_BUTTON),
                                                              (0, Z.a)(
                                                                  eN,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eD,
                                                                          k.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
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
    return lh ? (0, n.jsxs)("div", { className: en.ur, children: [lv, lE] }) : lE;
}
