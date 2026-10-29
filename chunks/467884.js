l.d(t, { yf: () => eE, Ay: () => ey, s6: () => ev });
var n,
    r = l(477900),
    a = l(582128),
    i = l(310784),
    o = l.n(i),
    s = l(503698),
    c = l.n(s),
    u = l(536637),
    d = l.n(u),
    m = l(17928),
    x = l(269115),
    p = l(834730),
    _ = l(318254),
    f = l(939249),
    b = l(638495),
    h = l(366010),
    g = l(821609),
    C = l(658675),
    v = l(62010),
    j = l(890856),
    E = l(638916),
    N = l(43990),
    y = l(825484),
    A = l(866665),
    I = l(442433),
    k = l(775602),
    P = l(793574),
    R = l(688810),
    T = l(429913),
    S = l(713517),
    M = l(427209),
    D = l(977445),
    L = l(288106),
    O = l(993046),
    H = l(363195),
    B = l(253932),
    w = l(652165),
    F = l(67480),
    G = l(174459),
    U = l(969724),
    W = l(871123),
    K = l(733391),
    Y = l(439303),
    $ = l(353281),
    z = l(832163),
    q = l(69236),
    V = l(654107),
    J = l(2157),
    Q = l(898523),
    Z = l(345938),
    X = l(510022),
    ee = l(99161),
    et = l(381999),
    el = l(263911),
    en = l(971146),
    er = l(366523),
    ea = l(300182),
    ei = l(434078);
function eo() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ei.Vl, ei.Yf), style: { animationDelay: `${e}s` } });
}
function es() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ei.RC, style: { width: `${e}%` } });
}
var ec = l(533772),
    eu = l(821707),
    ed = l(743693),
    em = l(15061),
    ex = l(652215),
    ep = l(731738),
    e_ = l(807393),
    ef = l(995393),
    eb = l(105292);
let eh = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eg = o()("#000000").darken(1.5).alpha(0.9).hex(),
    eC = o()("#000000").alpha(0).hex();
var ev =
    (((n = {})[(n.SMALL = 0)] = "SMALL"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.EMBEDDED = 2)] = "EMBEDDED"),
    (n[(n.FULL_WIDTH = 3)] = "FULL_WIDTH"),
    n);
let ej = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function eE() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(ei.Nr, ei.ax, ei.Yf),
        children: (0, r.jsxs)("div", { className: ei.zH, children: [(0, r.jsx)(es, {}), (0, r.jsx)(es, {})] }),
    });
}
function eN(e) {
    let {
            guildId: t,
            sku: l,
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
                    null != l &&
                        (i(ef.bB.FORWARD_BUTTON),
                        (0, Z.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [l, t, i, u, s],
        ),
        x = a.useCallback(() => {
            i(ef.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(ei.o, { [ei.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ei.zu,
        children: [
            2 === o &&
                (0, r.jsx)(f.D, {
                    className: c()(p, ei.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, r.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(ed._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: x,
                className: c()(p, ei.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function ey(e) {
    let {
            positionInSection: t,
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            unavailableLabel: f,
            analyticsLocations: M,
            disableMultiSelect: Z = !1,
            listItemProps: ed,
        } = e,
        ev = (0, b.k)(),
        eE = ed?.tabIndex,
        ey = a.useRef(null),
        eA = a.useRef(null),
        eI = (0, m.bG)([F.A], () => F.A.get(n)),
        ek = (0, D.uS)(eI?.applicationId),
        eP = null != eI && !eI.available && !ek,
        eR = eP ? (f ?? eb.intl.string(eb.t.RWouSQ)) : null,
        { guildId: eT } = (0, W.nG)(eI?.applicationId),
        eS = eI?.applicationId,
        eM = (0, m.bG)([H.A], () => (0, h.M)(H.A.theme)),
        eD = (0, m.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eL = B.Q_.useSetting(),
        { isHoveringOrFocusing: eO } = (0, S.A)(ey),
        eH = (0, Y.jM)(),
        { analyticsLocations: eB } = (0, R.Ay)(M ?? []),
        ew = a.useRef({ positionInSection: t, analyticsLocations: eB }),
        [eF, eG] = a.useState(!1),
        eU = (0, m.bG)([z.A], () => (null != n ? z.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eW = (function (e, t) {
            let l = (0, m.bG)([F.A], () => F.A.get(e)),
                [n, r] = a.useState(!1),
                [i, o] = a.useState(!1),
                s = a.useMemo(() => (0, W.xf)(l), [l]),
                c = a.useMemo(() => (0, W.fq)(l), [l]);
            return (
                a.useEffect(() => {
                    if (l?.id == null || n || !t) return;
                    if (null == c) return void r(!0);
                    let e = new Image();
                    return (
                        (e.src = c.toString()),
                        (e.onload = () => {
                            r(!0);
                        }),
                        (e.onerror = () => {
                            r(!0);
                        }),
                        () => {
                            ((e.onerror = null), (e.onload = null), (e.src = ""));
                        }
                    );
                }, [c, t, n, l?.id]),
                a.useEffect(() => {
                    if (l?.id == null || i || !t) return;
                    if (null == s) return void o(!0);
                    let e = !0;
                    return (
                        (0, V.l0)(s.toString()).finally(() => {
                            e && o(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, s, t, l?.id]),
                a.useMemo(() => n && i, [n, i])
            );
        })(n, eF),
        eK = (0, O.JL)({ sku: eI }),
        eY = eK?.amount,
        { display: e$, reward: ez, offers: eq } = (0, J.b)({ surface: "card", applicationId: eS, skuId: n }),
        eV = a.useMemo(() => eq.find((e) => e.type === L.B8.ORB_REDEMPTION) ?? null, [eq]),
        eJ = (0, q.oG)({ orbPriceAmount: eY, spendOrbsOffer: eV }),
        eQ = (0, T.h)(eI?.applicationId),
        {
            isSelectionActive: eZ,
            selected: eX,
            setSelected: e0,
            disabled: e1,
        } = (0, et.SS)(n, eI?.applicationId, { disabled: Z }),
        {
            priceComponent: e3,
            extendedHeight: e2,
            displayPrice: e9,
            shownPriceDetails: e8,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: n, promotion: i, reward: o, showOrbsOnly: s = !1 } = e,
                c = (0, O.ou)({ sku: t }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: x } = (0, O.j9)(c),
                f = a.useMemo(
                    () =>
                        null == o || o.type !== L.Ns.ACTION || o.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: ei.pt,
                                  children: (0, r.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: eb.intl.format(eb.t.GiVd2Q, {
                                          orbCount: o.amount,
                                          orbIconHook: () =>
                                              (0, r.jsx)(_.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
                return null != t && (0, U.mC)(t)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, r.jsx)(eu.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: x,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : s && null != n && n > 0
                          ? {
                                priceComponent: (0, r.jsx)(ec.O, {
                                    variant: "text-md/bold",
                                    orbPrice: n,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: x,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: n },
                            }
                          : "HIDDEN" !== l && null != n
                            ? {
                                  priceComponent: (0, r.jsx)(ec.A, {
                                      orbsGate: l,
                                      className: ei.p6,
                                      orbPrice: n,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: x,
                                  shownPriceDetails: { ...e, orbsAmount: n },
                              }
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: ei.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(p.E, {
                                                            className: ei.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, r.jsxs)(p.E, {
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
                                    priceComponent: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(p.E, {
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
            }, [t, i, d, u, m, s, n, l, f, c, x]);
        })({ sku: eI, orbsGate: eJ, orbPriceAmount: eY, promotion: e$, reward: ez, showOrbsOnly: u }),
        e5 = 2 !== i && eW ? e8 : ej,
        e6 = a.useCallback((e) => {
            eG(e);
        }, []),
        e7 = a.useMemo(
            () => c()(ei.Nr, { [ei.ax]: 0 === i, [ei.GW]: 1 === i, [ei.jz]: 2 === i, [ei.WB]: 3 === i }),
            [i],
        ),
        { handleCardHover: e4, handleCardUnhover: te } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
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
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = u.current,
                                { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                            (G.default.track(ex.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: n ?? r,
                                application_id: l ?? a,
                                page_index: i,
                                page_title: o,
                                page_section: s,
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
                    }, [t, l, n]),
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
            positionInSection: t,
            analyticsLocations: eB,
            shownPriceDetails: e5,
        }),
        { handleCardVisibilityChange: tt } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
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
                            isUserGuildMember: x,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                    (G.default.track(ex.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: r,
                        sku_id: t,
                        sku_storefront_promotion_id: (0, Q.Z)(t),
                        guild_id: n ?? a,
                        application_id: l ?? i,
                        page_index: o,
                        page_title: s,
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
                        e_.A.increment({
                            name: ep.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
                            tags: [`placement:${e ?? "unknown"}`],
                        }));
                }, [t, l, n]),
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
            skuId: n,
            applicationId: eS,
            guildId: eT,
            analyticsContext: eH,
            positionInSection: t,
            analyticsLocations: eB,
            shownPriceDetails: e5,
        });
    a.useEffect(() => {
        tt(eF);
    }, [eF]);
    let tl = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ew.current,
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
                G.default.track(ex.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: n,
                    sku_storefront_promotion_id: (0, Q.Z)(n),
                    guild_id: eT ?? a,
                    application_id: eS ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e5.price,
                    regular_price: e5.regularPrice,
                    currency: e5.currency,
                    orbs_amount: e5.orbsAmount,
                    location_stack: t,
                });
            },
            [n, eS, eT, eH, e5],
        ),
        { primaryIconAsset: tn, primaryIconLabel: tr } = a.useMemo(() => (0, W.Cv)(eI, eS), [eI, eS]),
        { viewProductDetails: ta } = (0, $.H)(),
        ti = a.useMemo(() => {
            let e = eI?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? eb.intl.formatToPlainString(eb.t.PWw4Vp, { days: l }) : null;
        }, [eI?.tenantMetadata?.socialLayer?.expiresAt]),
        to = (0, W.xf)(eI),
        ts = a.useMemo(() => {
            if (!eW) return "none";
            if (3 === i) return;
            let [e, t] = eh[i];
            return `linear-gradient(to top, ${eg} ${30 + e}%, ${eC} ${30 + t}%)`;
        }, [i, eW]),
        tc = a.useCallback(() => {
            null != eS && (0, K.iR)(eS, n);
        }, [eS, n]),
        tu = a.useCallback(() => {
            (e4(),
                null != eS &&
                    (eA.current = setTimeout(() => {
                        (0, K.iR)(eS, n);
                    }, 1e3)));
        }, [eS, n, e4]),
        td = a.useCallback(() => {
            (te(), null != eA.current && (clearTimeout(eA.current), (eA.current = null)));
        }, [te]);
    a.useEffect(
        () => () => {
            null != eA.current && clearTimeout(eA.current);
        },
        [],
    );
    let tm = a.useCallback(() => {
            null != eS && ta?.(n, eS, eI?.slug);
        }, [eS, n, eI?.slug, ta]),
        tx = a.useCallback(
            (e) => {
                null != o && eI?.applicationId != null ? o(e, { skuId: n, applicationId: eI.applicationId }) : tm();
            },
            [o, eI?.applicationId, n, tm],
        ),
        tp = a.useCallback(
            (e) => {
                if (eZ) {
                    e1 || e0(!eX);
                    return;
                }
                (tl(ef.bB.CARD), tx(e));
            },
            [eZ, tl, tx, e0, eX, e1],
        ),
        t_ = a.useCallback(
            (e) => {
                eL &&
                    (0, I.L3)(e, async () => {
                        let { default: e } = await Promise.all([l.e("638221"), l.e("897249")]).then(l.bind(l, 10680));
                        return (t) => (0, r.jsx)(e, { ...t, skuId: n });
                    });
            },
            [eL, n],
        ),
        tf = a.useMemo(() => [...eB, P.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eB]),
        tb = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eQ &&
                        (tl(ef.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: n,
                            applicationId: eQ.id,
                            contextKey: ev,
                            onComplete: () => {
                                null != eQ &&
                                    null != eI &&
                                    (0, X.n)({ sku: eI, application: eQ, analyticsLocations: tf, contextKey: ev });
                            },
                            analyticsLocations: tf,
                        })));
            },
            [eI, eQ, n, tl, tf, ev],
        ),
        th = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eI &&
                        (tl(ef.bB.BUY_BUTTON),
                        (0, ee.a)(eI, { isGift: !1 }, { analyticsLocations: tf, guildId: eT, contextKey: ev })));
            },
            [eI, eT, tl, tf, ev],
        ),
        tg = a.useCallback(
            (e) => {
                (e.stopPropagation(), tl(ef.bB.VIEW_DETAILS_BUTTON), tx(e));
            },
            [tl, tx],
        ),
        tC = eI?.exclusive === !0 && 2 !== i,
        tv = a.useMemo(
            () =>
                null != eR
                    ? (0, r.jsx)(g.$, { variant: "primary", onClick: tg, text: eR, fullWidth: !0, tabIndex: eE })
                    : "CAN_CHECKOUT" === eJ
                      ? (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: tc,
                            onClick: tb,
                            "aria-label": eb.intl.formatToPlainString(eb.t.yi41qQ, { orbPrice: eY }),
                            text: eb.intl.format(eb.t.JC15qj, {
                                orbPrice: eY,
                                orbIconHook: () =>
                                    (0, r.jsx)(
                                        _.C,
                                        { className: ei.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: eE,
                        })
                      : (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: tc,
                            onClick: th,
                            text: null != e9 ? eb.intl.format(eb.t.Xp5WTn, { price: e9 }) : eb.intl.string(eb.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: eE,
                        }),
            [eR, tg, eJ, tb, th, tc, eY, e9, eE],
        );
    if (null == eI) return null;
    let tj = (0, W.fq)(eI),
        tE = null;
    eZ
        ? (tE = (0, r.jsx)("div", { className: ei.HI, children: (0, r.jsx)(C.P, { checked: eX, disabled: e1 }) }))
        : null != eR
          ? (tE = (0, r.jsx)("div", { className: ei.fC, children: (0, r.jsx)(em.G, { label: eR }) }))
          : eI.exclusive
            ? (tE = (0, r.jsx)("div", { className: ei.fC, children: (0, r.jsx)(el.I, {}) }))
            : null != ti &&
              (tE = (0, r.jsx)("div", {
                  className: ei.qS,
                  children: (0, r.jsx)(v.E, { type: { text: ti }, variant: "inverted" }),
              }));
    let tN = tC ? (0, r.jsx)("div", { className: ei.mN, "aria-hidden": !0 }) : null,
        ty = (0, r.jsx)(x.L, {
            innerRef: ey,
            onChange: e6,
            threshold: 0,
            children: (0, r.jsxs)(j.s, {
                onClick: tp,
                onContextMenu: t_,
                onMouseEnter: tu,
                onMouseLeave: td,
                className: c()(e7, { [ei.Zl]: !eD && 2 !== i, [ei.BN]: eM, [eM ? ei.Mn : ei.YF]: eO, [ei.Rc]: !eW }, s),
                ref: ey,
                buttonProps: { ...ed, role: "button" },
                onFocus: () => ed?.onFocus?.(),
                "aria-label": null != eR ? `${eI.name}, ${eR}` : eI.name,
                children: [
                    tE,
                    (0, r.jsx)(eN, {
                        sku: eI,
                        guildId: eT,
                        isCardHovered: eO,
                        variant: i,
                        trackCardClick: tl,
                        analyticsLocations: eB,
                        analyticsContext: eH,
                        tabIndex: eE,
                    }),
                    null != tj
                        ? eW
                            ? (0, r.jsx)(er.A, {
                                  containerClassName: ei.Vl,
                                  foregroundImageClassName: ei.wP,
                                  cardImage: tj,
                                  altText: eI.name,
                                  shape: "custom",
                                  backgroundImageClassName: ei.GC,
                                  cardBackgroundImage: to,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(eo, {})
                        : (0, r.jsx)("div", {
                              className: ei.t7,
                              children: (0, r.jsx)(E.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ei.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: ei.iZ, style: { background: ts } }),
                                  (0, r.jsx)(N.N, {
                                      theme: ex.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(ei.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(ei.gn, { [ei.ov]: !(0, U.mC)(eI), [ei.w4]: e2 }),
                                                      children: [
                                                          eW &&
                                                              (0, r.jsx)("div", {
                                                                  className: ei.S1,
                                                                  children: (0, r.jsx)(en.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eW
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != tn &&
                                                                            (0, r.jsx)("img", {
                                                                                src: tn.toString(),
                                                                                alt: tr,
                                                                                className: ei.ye,
                                                                            }),
                                                                        (0, r.jsx)(p.E, {
                                                                            className: 3 === i ? ei.TJ : void 0,
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eI.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(es, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: ei.iQ,
                                                      children: eW ? e3 : (0, r.jsx)(es, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: ei.li,
                                      children: (0, r.jsxs)(y.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eP || eU
                                                  ? tv
                                                  : (0, r.jsx)(A.m, {
                                                        text: eb.intl.string(eb.t.IqlPbQ),
                                                        children: (0, r.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: tg,
                                                            text: eb.intl.string(eb.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: eE,
                                                        }),
                                                    }),
                                              !eP &&
                                                  (0, r.jsx)(ea.A, {
                                                      tabIndex: eE,
                                                      tooltipAriaHidden: 3 === i,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              tl(ef.bB.GIFT_BUTTON),
                                                              (0, ee.a)(
                                                                  eI,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eB,
                                                                          P.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
                                                                      contextKey: ev,
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
    return tC ? (0, r.jsxs)("div", { className: ei.ur, children: [tN, ty] }) : ty;
}
