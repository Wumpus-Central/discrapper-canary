t.d(l, { yf: () => ev, Ay: () => eE, s6: () => eC });
var n,
    r = t(477900),
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
    v = t(890856),
    j = t(638916),
    E = t(43990),
    N = t(825484),
    A = t(866665),
    y = t(442433),
    I = t(775602),
    k = t(793574),
    R = t(688810),
    P = t(429913),
    T = t(713517),
    S = t(427209),
    M = t(977445),
    D = t(288106),
    L = t(993046),
    O = t(363195),
    H = t(885386),
    B = t(652165),
    w = t(67480),
    F = t(174459),
    G = t(969724),
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
    en = t(300182),
    er = t(434078);
function ea() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(er.Vl, er.Yf), style: { animationDelay: `${e}s` } });
}
function ei() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: er.RC, style: { width: `${e}%` } });
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
var eC = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), (n[(n.EMBEDDED = 2)] = "EMBEDDED"), n);
let eg = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ev() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(er.Nr, er.ax, er.Yf),
        children: (0, r.jsxs)("div", { className: er.zH, children: [(0, r.jsx)(ei, {}), (0, r.jsx)(ei, {})] }),
    });
}
function ej(e) {
    let {
            guildId: l,
            sku: t,
            isCardHovered: n,
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
        p = a.useMemo(() => c()(er.o, { [er.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: er.zu,
        children: [
            2 === s &&
                (0, r.jsx)(f.D, {
                    className: c()(p, er.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, r.jsx)(S.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(ec._, {
                sku: t,
                isCardHovered: n,
                trackButtonClick: x,
                className: c()(p, er.ij),
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
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            unavailableLabel: f,
            analyticsLocations: S,
            disableMultiSelect: Q = !1,
            listItemProps: ec,
        } = e,
        eC = ec?.tabIndex,
        ev = a.useRef(null),
        eE = a.useRef(null),
        eN = (0, m.bG)([w.A], () => w.A.get(n)),
        eA = (0, M.uS)(eN?.applicationId),
        ey = null != eN && !eN.available && !eA,
        eI = ey ? (f ?? e_.intl.string(e_.t.RWouSQ)) : null,
        { guildId: ek } = (0, U.nG)(eN?.applicationId),
        eR = eN?.applicationId,
        eP = (0, m.bG)([O.A], () => (0, b.M)(O.A.theme)),
        eT = (0, m.bG)([I.Ay], () => I.Ay.useReducedMotion),
        eS = H.Q_.useSetting(),
        { isHoveringOrFocusing: eM } = (0, T.A)(ev),
        eD = (0, Y.jM)(),
        { analyticsLocations: eL } = (0, R.Ay)(S ?? []),
        eO = a.useRef({ positionInSection: l, analyticsLocations: eL }),
        [eH, eB] = a.useState(!1),
        ew = (0, m.bG)([z.A], () => (null != n ? z.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eF = (function (e, l) {
            let t = (0, m.bG)([w.A], () => w.A.get(e)),
                [n, r] = a.useState(!1),
                [i, s] = a.useState(!1),
                o = a.useMemo(() => (0, U.xf)(t), [t]),
                c = a.useMemo(() => (0, U.fq)(t), [t]);
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
                a.useMemo(() => n && i, [n, i])
            );
        })(n, eH),
        eG = (0, L.JL)({ sku: eN }),
        eU = eG?.amount,
        { display: eW, reward: eY, offers: e$ } = (0, V.b)({ surface: "card", applicationId: eR, skuId: n }),
        ez = a.useMemo(() => e$.find((e) => e.type === D.B8.ORB_REDEMPTION) ?? null, [e$]),
        eK = (0, K.oG)({ orbPriceAmount: eU, spendOrbsOffer: ez }),
        eq = (0, P.h)(eN?.applicationId),
        {
            isSelectionActive: eV,
            selected: eQ,
            setSelected: eJ,
            disabled: eZ,
        } = (0, X.SS)(n, eN?.applicationId, { disabled: Q }),
        {
            priceComponent: eX,
            extendedHeight: e0,
            displayPrice: e1,
            shownPriceDetails: e3,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: n, promotion: i, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, L.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: x } = (0, L.j9)(c),
                f = a.useMemo(
                    () =>
                        null == s || s.type !== D.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: er.pt,
                                  children: (0, r.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: e_.intl.format(e_.t.GiVd2Q, {
                                          orbCount: s.amount,
                                          orbIconHook: () =>
                                              (0, r.jsx)(_.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
                return null != l && (0, G.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, r.jsx)(eo.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: x,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != n && n > 0
                          ? {
                                priceComponent: (0, r.jsx)(es.O, {
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
                                  priceComponent: (0, r.jsx)(es.A, {
                                      orbsGate: t,
                                      className: er.p6,
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
                                                className: er.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(p.E, {
                                                            className: er.of,
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
            }, [l, i, d, u, m, o, n, t, f, c, x]);
        })({ sku: eN, orbsGate: eK, orbPriceAmount: eU, promotion: eW, reward: eY, showOrbsOnly: u }),
        e8 = 2 !== i && eF ? e3 : eg,
        e2 = a.useCallback((e) => {
            eB(e);
        }, []),
        e7 = a.useMemo(() => c()(er.Nr, { [er.ax]: 0 === i, [er.GW]: 1 === i, [er.jz]: 2 === i }), [i]),
        { handleCardHover: e9, handleCardUnhover: e6 } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: i,
                    analyticsLocations: s,
                    shownPriceDetails: o,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(r),
                d = a.useRef({ positionInSection: i, analyticsLocations: s, shownPriceDetails: o });
            return (
                a.useEffect(() => {
                    u.current = r;
                }, [r]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: s, shownPriceDetails: o };
                }, [i, s, o]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: r,
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
                                guild_id: n ?? r,
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
                    }, [l, t, n]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: n,
            applicationId: eR,
            guildId: ek,
            analyticsContext: eD,
            positionInSection: l,
            analyticsLocations: eL,
            shownPriceDetails: e8,
        }),
        { handleCardVisibilityChange: e5 } = (function (e) {
            let {
                    skuId: l,
                    applicationId: t,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: i,
                    analyticsLocations: s,
                    shownPriceDetails: o,
                } = e,
                c = a.useRef(null),
                u = a.useRef(r),
                d = a.useRef({ positionInSection: i, analyticsLocations: s, shownPriceDetails: o });
            (a.useEffect(() => {
                u.current = r;
            }, [r]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: s, shownPriceDetails: o };
                }, [i, s, o]));
            let m = a.useCallback(() => {
                    let {
                            placement: e,
                            sessionId: r,
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
                        slayer_storefront_session_id: r,
                        sku_id: l,
                        guild_id: n ?? a,
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
            applicationId: eR,
            guildId: ek,
            analyticsContext: eD,
            positionInSection: l,
            analyticsLocations: eL,
            shownPriceDetails: e8,
        });
    a.useEffect(() => {
        e5(eH);
    }, [eH]);
    let e4 = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eO.current,
                    {
                        sessionId: r,
                        guildId: a,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eD;
                F.default.track(ed.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: n,
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
            [n, eR, ek, eD, e8],
        ),
        { primaryIconAsset: le, primaryIconLabel: ll } = a.useMemo(() => (0, U.Cv)(eN, eR), [eN, eR]),
        { viewProductDetails: lt } = (0, $.H)(),
        ln = a.useMemo(() => {
            let e = eN?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? e_.intl.format(e_.t.PWw4Vp, { days: t }) : null;
        }, [eN?.tenantMetadata?.socialLayer?.expiresAt]),
        lr = (0, U.xf)(eN),
        la = a.useMemo(() => {
            if (!eF) return "none";
            let [e, l] = ef[i];
            return `linear-gradient(to top, ${eb} ${30 + e}%, ${eh} ${30 + l}%)`;
        }, [i, eF]),
        li = a.useCallback(() => {
            null != eR && (0, W.iR)(eR, n);
        }, [eR, n]),
        ls = a.useCallback(() => {
            (e9(),
                null != eR &&
                    (eE.current = setTimeout(() => {
                        (0, W.iR)(eR, n);
                    }, 1e3)));
        }, [eR, n, e9]),
        lo = a.useCallback(() => {
            (e6(), null != eE.current && (clearTimeout(eE.current), (eE.current = null)));
        }, [e6]);
    a.useEffect(
        () => () => {
            null != eE.current && clearTimeout(eE.current);
        },
        [],
    );
    let lc = a.useCallback(() => {
            null != eR && lt?.(n, eR, eN?.slug);
        }, [eR, n, eN?.slug, lt]),
        lu = a.useCallback(
            (e) => {
                null != s && eN?.applicationId != null ? s(e, { skuId: n, applicationId: eN.applicationId }) : lc();
            },
            [s, eN?.applicationId, n, lc],
        ),
        ld = a.useCallback(
            (e) => {
                if (eV) {
                    eZ || eJ(!eQ);
                    return;
                }
                (e4(ep.bB.CARD), lu(e));
            },
            [eV, e4, lu, eJ, eQ, eZ],
        ),
        lm = a.useCallback(
            (e) => {
                eS &&
                    (0, y.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("638221"), t.e("897249")]).then(t.bind(t, 10680));
                        return (l) => (0, r.jsx)(e, { ...l, skuId: n });
                    });
            },
            [eS, n],
        ),
        lx = a.useMemo(() => [...eL, k.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eL]),
        lp = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eq &&
                        (e4(ep.bB.BUY_WITH_ORBS_BUTTON),
                        (0, B.B4)({
                            skuId: n,
                            applicationId: eq.id,
                            onComplete: () => {
                                null != eq &&
                                    null != eN &&
                                    (0, J.n)({ sku: eN, application: eq, analyticsLocations: lx });
                            },
                            analyticsLocations: lx,
                        })));
            },
            [eN, eq, n, e4, lx],
        ),
        l_ = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eN &&
                        (e4(ep.bB.BUY_BUTTON), (0, Z.a)(eN, { isGift: !1 }, { analyticsLocations: lx, guildId: ek })));
            },
            [eN, ek, e4, lx],
        ),
        lf = a.useCallback(
            (e) => {
                (e.stopPropagation(), e4(ep.bB.VIEW_DETAILS_BUTTON), lu(e));
            },
            [e4, lu],
        ),
        lb = eN?.exclusive === !0 && 2 !== i,
        lh = a.useMemo(
            () =>
                null != eI
                    ? (0, r.jsx)(h.$, { variant: "primary", onClick: lf, text: eI, fullWidth: !0, tabIndex: eC })
                    : "CAN_CHECKOUT" === eK
                      ? (0, r.jsx)(h.$, {
                            variant: "primary",
                            onMouseDown: li,
                            onClick: lp,
                            "aria-label": e_.intl.formatToPlainString(e_.t.yi41qQ, { orbPrice: eU }),
                            text: e_.intl.format(e_.t.JC15qj, {
                                orbPrice: eU,
                                orbIconHook: () =>
                                    (0, r.jsx)(
                                        _.C,
                                        { className: er.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: eC,
                        })
                      : (0, r.jsx)(h.$, {
                            variant: "primary",
                            onMouseDown: li,
                            onClick: l_,
                            text: null != e1 ? e_.intl.format(e_.t.Xp5WTn, { price: e1 }) : e_.intl.string(e_.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: eC,
                        }),
            [eI, lf, eK, lp, l_, li, eU, e1, eC],
        );
    if (null == eN) return null;
    let lC = (0, U.fq)(eN),
        lg = null;
    eV
        ? (lg = (0, r.jsx)("div", { className: er.HI, children: (0, r.jsx)(C.P, { checked: eQ, disabled: eZ }) }))
        : null != eI
          ? (lg = (0, r.jsx)("div", { className: er.fC, children: (0, r.jsx)(eu.G, { label: eI }) }))
          : eN.exclusive
            ? (lg = (0, r.jsx)("div", { className: er.fC, children: (0, r.jsx)(ee.I, {}) }))
            : null != ln && (lg = (0, r.jsx)(g.Lp, { text: ln, disableColor: !0, className: er.qS }));
    let lv = lb ? (0, r.jsx)("div", { className: er.mN, "aria-hidden": !0 }) : null,
        lj = (0, r.jsx)(x.L, {
            innerRef: ev,
            onChange: e2,
            threshold: 0,
            children: (0, r.jsxs)(v.s, {
                onClick: ld,
                onContextMenu: lm,
                onMouseEnter: ls,
                onMouseLeave: lo,
                className: c()(e7, { [er.Zl]: !eT && 2 !== i, [er.BN]: eP, [eP ? er.Mn : er.YF]: eM, [er.Rc]: !eF }, o),
                ref: ev,
                buttonProps: { ...ec, role: "button" },
                onFocus: () => ec?.onFocus?.(),
                "aria-label": null != eI ? `${eN.name}, ${eI}` : eN.name,
                children: [
                    lg,
                    (0, r.jsx)(ej, {
                        sku: eN,
                        guildId: ek,
                        isCardHovered: eM,
                        variant: i,
                        trackCardClick: e4,
                        analyticsLocations: eL,
                        analyticsContext: eD,
                        tabIndex: eC,
                    }),
                    null != lC
                        ? eF
                            ? (0, r.jsx)(et.A, {
                                  containerClassName: er.Vl,
                                  foregroundImageClassName: er.wP,
                                  cardImage: lC,
                                  altText: eN.name,
                                  shape: "custom",
                                  backgroundImageClassName: er.GC,
                                  cardBackgroundImage: lr,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(ea, {})
                        : (0, r.jsx)("div", {
                              className: er.t7,
                              children: (0, r.jsx)(j.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: er.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: er.iZ, style: { background: la } }),
                                  (0, r.jsx)(E.N, {
                                      theme: ed.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(er.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(er.gn, { [er.ov]: !(0, G.mC)(eN), [er.w4]: e0 }),
                                                      children: [
                                                          eF &&
                                                              (0, r.jsx)("div", {
                                                                  className: er.S1,
                                                                  children: (0, r.jsx)(el.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eF
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != le &&
                                                                            (0, r.jsx)("img", {
                                                                                src: le.toString(),
                                                                                alt: ll,
                                                                                className: er.ye,
                                                                            }),
                                                                        (0, r.jsx)(p.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eN.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(ei, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: er.iQ,
                                                      children: eF ? eX : (0, r.jsx)(ei, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: er.li,
                                      children: (0, r.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              ey || ew
                                                  ? lh
                                                  : (0, r.jsx)(A.m, {
                                                        text: e_.intl.string(e_.t.IqlPbQ),
                                                        children: (0, r.jsx)(h.$, {
                                                            variant: "primary",
                                                            onClick: lf,
                                                            text: e_.intl.string(e_.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: eC,
                                                        }),
                                                    }),
                                              !ey &&
                                                  (0, r.jsx)(en.A, {
                                                      tabIndex: eC,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              e4(ep.bB.GIFT_BUTTON),
                                                              (0, Z.a)(
                                                                  eN,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eL,
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
    return lb ? (0, r.jsxs)("div", { className: er.ur, children: [lv, lj] }) : lj;
}
