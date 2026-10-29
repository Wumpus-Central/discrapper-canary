t.d(l, { yf: () => eE, Ay: () => ey, s6: () => ev });
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
    x = t(269115),
    p = t(834730),
    _ = t(318254),
    f = t(939249),
    b = t(638495),
    h = t(366010),
    g = t(821609),
    C = t(658675),
    v = t(62010),
    j = t(890856),
    E = t(638916),
    N = t(43990),
    y = t(825484),
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
    B = t(253932),
    w = t(652165),
    F = t(67480),
    G = t(174459),
    U = t(969724),
    W = t(871123),
    K = t(733391),
    Y = t(439303),
    $ = t(353281),
    z = t(832163),
    q = t(69236),
    V = t(654107),
    J = t(2157),
    Q = t(898523),
    Z = t(345938),
    X = t(510022),
    ee = t(99161),
    el = t(381999),
    et = t(263911),
    en = t(971146),
    er = t(366523),
    ea = t(300182),
    ei = t(434078);
function eo() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ei.Vl, ei.Yf), style: { animationDelay: `${e}s` } });
}
function es() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ei.RC, style: { width: `${e}%` } });
}
var ec = t(533772),
    eu = t(821707),
    ed = t(743693),
    em = t(249434),
    ex = t(652215),
    ep = t(731738),
    e_ = t(807393),
    ef = t(995393),
    eb = t(105292);
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
                        (i(ef.bB.FORWARD_BUTTON),
                        (0, Z.d)({
                            sku: t,
                            guildId: l,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [t, l, i, u, s],
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
                sku: t,
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
            positionInSection: l,
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
        ew = a.useRef({ positionInSection: l, analyticsLocations: eB }),
        [eF, eG] = a.useState(!1),
        eU = (0, m.bG)([z.A], () => (null != n ? z.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eW = (function (e, l) {
            let t = (0, m.bG)([F.A], () => F.A.get(e)),
                [n, r] = a.useState(!1),
                [i, o] = a.useState(!1),
                s = a.useMemo(() => (0, W.xf)(t), [t]),
                c = a.useMemo(() => (0, W.fq)(t), [t]);
            return (
                a.useEffect(() => {
                    if (t?.id == null || n || !l) return;
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
                }, [c, l, n, t?.id]),
                a.useEffect(() => {
                    if (t?.id == null || i || !l) return;
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
                }, [i, s, l, t?.id]),
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
        } = (0, el.SS)(n, eI?.applicationId, { disabled: Z }),
        {
            priceComponent: e3,
            extendedHeight: e2,
            displayPrice: e9,
            shownPriceDetails: e8,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: n, promotion: i, reward: o, showOrbsOnly: s = !1 } = e,
                c = (0, O.ou)({ sku: l }),
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
                return null != l && (0, U.mC)(l)
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
                          : "HIDDEN" !== t && null != n
                            ? {
                                  priceComponent: (0, r.jsx)(ec.A, {
                                      orbsGate: t,
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
            }, [l, i, d, u, m, s, n, t, f, c, x]);
        })({ sku: eI, orbsGate: eJ, orbPriceAmount: eY, promotion: e$, reward: ez, showOrbsOnly: u }),
        e7 = 2 !== i && eW ? e8 : ej,
        e5 = a.useCallback((e) => {
            eG(e);
        }, []),
        e6 = a.useMemo(
            () => c()(ei.Nr, { [ei.ax]: 0 === i, [ei.GW]: 1 === i, [ei.jz]: 2 === i, [ei.WB]: 3 === i }),
            [i],
        ),
        { handleCardHover: e4, handleCardUnhover: le } = (function (e) {
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
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = u.current,
                                { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                            (G.default.track(ex.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: l,
                                guild_id: n ?? r,
                                application_id: t ?? a,
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
            analyticsLocations: eB,
            shownPriceDetails: e7,
        }),
        { handleCardVisibilityChange: ll } = (function (e) {
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
                            isUserGuildMember: x,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                    (G.default.track(ex.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: r,
                        sku_id: l,
                        sku_storefront_promotion_id: (0, Q.Z)(l),
                        guild_id: n ?? a,
                        application_id: t ?? i,
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
                }, [l, t, n]),
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
            positionInSection: l,
            analyticsLocations: eB,
            shownPriceDetails: e7,
        });
    a.useEffect(() => {
        ll(eF);
    }, [eF]);
    let lt = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = ew.current,
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
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e7.price,
                    regular_price: e7.regularPrice,
                    currency: e7.currency,
                    orbs_amount: e7.orbsAmount,
                    location_stack: l,
                });
            },
            [n, eS, eT, eH, e7],
        ),
        { primaryIconAsset: ln, primaryIconLabel: lr } = a.useMemo(() => (0, W.Cv)(eI, eS), [eI, eS]),
        { viewProductDetails: la } = (0, $.H)(),
        li = a.useMemo(() => {
            let e = eI?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? eb.intl.formatToPlainString(eb.t.PWw4Vp, { days: t }) : null;
        }, [eI?.tenantMetadata?.socialLayer?.expiresAt]),
        lo = (0, W.xf)(eI),
        ls = a.useMemo(() => {
            if (!eW) return "none";
            if (3 === i) return;
            let [e, l] = eh[i];
            return `linear-gradient(to top, ${eg} ${30 + e}%, ${eC} ${30 + l}%)`;
        }, [i, eW]),
        lc = a.useCallback(() => {
            null != eS && (0, K.iR)(eS, n);
        }, [eS, n]),
        lu = a.useCallback(() => {
            (e4(),
                null != eS &&
                    (eA.current = setTimeout(() => {
                        (0, K.iR)(eS, n);
                    }, 1e3)));
        }, [eS, n, e4]),
        ld = a.useCallback(() => {
            (le(), null != eA.current && (clearTimeout(eA.current), (eA.current = null)));
        }, [le]);
    a.useEffect(
        () => () => {
            null != eA.current && clearTimeout(eA.current);
        },
        [],
    );
    let lm = a.useCallback(() => {
            null != eS && la?.(n, eS, eI?.slug);
        }, [eS, n, eI?.slug, la]),
        lx = a.useCallback(
            (e) => {
                null != o && eI?.applicationId != null ? o(e, { skuId: n, applicationId: eI.applicationId }) : lm();
            },
            [o, eI?.applicationId, n, lm],
        ),
        lp = a.useCallback(
            (e) => {
                if (eZ) {
                    e1 || e0(!eX);
                    return;
                }
                (lt(ef.bB.CARD), lx(e));
            },
            [eZ, lt, lx, e0, eX, e1],
        ),
        l_ = a.useCallback(
            (e) => {
                eL &&
                    (0, I.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("638221"), t.e("897249")]).then(t.bind(t, 10680));
                        return (l) => (0, r.jsx)(e, { ...l, skuId: n });
                    });
            },
            [eL, n],
        ),
        lf = a.useMemo(() => [...eB, P.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eB]),
        lb = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eQ &&
                        (lt(ef.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: n,
                            applicationId: eQ.id,
                            contextKey: ev,
                            onComplete: () => {
                                null != eQ &&
                                    null != eI &&
                                    (0, X.n)({ sku: eI, application: eQ, analyticsLocations: lf, contextKey: ev });
                            },
                            analyticsLocations: lf,
                        })));
            },
            [eI, eQ, n, lt, lf, ev],
        ),
        lh = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eI &&
                        (lt(ef.bB.BUY_BUTTON),
                        (0, ee.a)(eI, { isGift: !1 }, { analyticsLocations: lf, guildId: eT, contextKey: ev })));
            },
            [eI, eT, lt, lf, ev],
        ),
        lg = a.useCallback(
            (e) => {
                (e.stopPropagation(), lt(ef.bB.VIEW_DETAILS_BUTTON), lx(e));
            },
            [lt, lx],
        ),
        lC = eI?.exclusive === !0 && 2 !== i,
        lv = a.useMemo(
            () =>
                null != eR
                    ? (0, r.jsx)(g.$, { variant: "primary", onClick: lg, text: eR, fullWidth: !0, tabIndex: eE })
                    : "CAN_CHECKOUT" === eJ
                      ? (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: lc,
                            onClick: lb,
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
                            onMouseDown: lc,
                            onClick: lh,
                            text: null != e9 ? eb.intl.format(eb.t.Xp5WTn, { price: e9 }) : eb.intl.string(eb.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: eE,
                        }),
            [eR, lg, eJ, lb, lh, lc, eY, e9, eE],
        );
    if (null == eI) return null;
    let lj = (0, W.fq)(eI),
        lE = e3;
    eW ? null != eR && (lE = (0, r.jsx)(em.l, { label: eR })) : (lE = (0, r.jsx)(es, {}));
    let lN = null;
    eZ
        ? (lN = (0, r.jsx)("div", { className: ei.HI, children: (0, r.jsx)(C.P, { checked: eX, disabled: e1 }) }))
        : null == eR && eI.exclusive
          ? (lN = (0, r.jsx)("div", { className: ei.fC, children: (0, r.jsx)(et.I, {}) }))
          : null == eR &&
            null != li &&
            (lN = (0, r.jsx)("div", {
                className: ei.qS,
                children: (0, r.jsx)(v.E, { type: { text: li }, variant: "inverted" }),
            }));
    let ly = lC ? (0, r.jsx)("div", { className: ei.mN, "aria-hidden": !0 }) : null,
        lA = (0, r.jsx)(x.L, {
            innerRef: ey,
            onChange: e5,
            threshold: 0,
            children: (0, r.jsxs)(j.s, {
                onClick: lp,
                onContextMenu: l_,
                onMouseEnter: lu,
                onMouseLeave: ld,
                className: c()(e6, { [ei.Zl]: !eD && 2 !== i, [ei.BN]: eM, [eM ? ei.Mn : ei.YF]: eO, [ei.Rc]: !eW }, s),
                ref: ey,
                buttonProps: { ...ed, role: "button" },
                onFocus: () => ed?.onFocus?.(),
                "aria-label": null != eR ? `${eI.name}, ${eR}` : eI.name,
                children: [
                    lN,
                    (0, r.jsx)(eN, {
                        sku: eI,
                        guildId: eT,
                        isCardHovered: eO,
                        variant: i,
                        trackCardClick: lt,
                        analyticsLocations: eB,
                        analyticsContext: eH,
                        tabIndex: eE,
                    }),
                    null != lj
                        ? eW
                            ? (0, r.jsx)(er.A, {
                                  containerClassName: ei.Vl,
                                  foregroundImageClassName: ei.wP,
                                  cardImage: lj,
                                  altText: eI.name,
                                  shape: "custom",
                                  backgroundImageClassName: ei.GC,
                                  cardBackgroundImage: lo,
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
                                  (0, r.jsx)("div", { className: ei.iZ, style: { background: ls } }),
                                  (0, r.jsx)(N.N, {
                                      theme: ex.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(ei.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(ei.gn, {
                                                          [ei.ov]: null == eR && !(0, U.mC)(eI),
                                                          [ei.w4]: null == eR && e2,
                                                      }),
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
                                                                        null != ln &&
                                                                            (0, r.jsx)("img", {
                                                                                src: ln.toString(),
                                                                                alt: lr,
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
                                                  (0, r.jsx)("div", { className: ei.iQ, children: lE }),
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
                                                  ? lv
                                                  : (0, r.jsx)(A.m, {
                                                        text: eb.intl.string(eb.t.IqlPbQ),
                                                        children: (0, r.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: lg,
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
                                                              lt(ef.bB.GIFT_BUTTON),
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
    return lC ? (0, r.jsxs)("div", { className: ei.ur, children: [ly, lA] }) : lA;
}
