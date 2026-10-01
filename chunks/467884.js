t.d(l, { yf: () => ev, Ay: () => eN, s6: () => eg });
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
    P = t(713517),
    T = t(427209),
    M = t(977445),
    L = t(976860),
    D = t(288106),
    O = t(993046),
    H = t(363195),
    B = t(885386),
    w = t(652165),
    G = t(67480),
    F = t(174459),
    U = t(969724),
    W = t(871123),
    Y = t(733391),
    $ = t(439303),
    z = t(353281),
    K = t(832163),
    q = t(69236),
    V = t(654107),
    Q = t(2157),
    J = t(345938),
    Z = t(510022),
    X = t(99161),
    ee = t(381999),
    el = t(263911),
    et = t(971146),
    er = t(366523),
    en = t(300182),
    ea = t(434078);
function ei() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(ea.Vl, ea.Yf), style: { animationDelay: `${e}s` } });
}
function es() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: ea.RC, style: { width: `${e}%` } });
}
var eo = t(533772),
    ec = t(821707),
    eu = t(743693),
    ed = t(15061),
    em = t(652215),
    ex = t(731738),
    ep = t(807393),
    e_ = t(995393),
    ef = t(375708);
let eb = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eh = s()("#000000").darken(1.5).alpha(0.9).hex(),
    eC = s()("#000000").alpha(0).hex();
var eg = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let ej = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ev() {
    return (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: c()(ea.Nr, ea.ax, ea.Yf),
        children: (0, n.jsxs)("div", { className: ea.zH, children: [(0, n.jsx)(es, {}), (0, n.jsx)(es, {})] }),
    });
}
function eE(e) {
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
                        (i(e_.bB.FORWARD_BUTTON),
                        (0, J.d)({
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
            i(e_.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(ea.o, { [ea.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: ea.zu,
        children: [
            2 === s &&
                (0, n.jsx)(f.D, {
                    className: c()(p, ea.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, n.jsx)(T.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(eu._, {
                sku: t,
                isCardHovered: r,
                trackButtonClick: x,
                className: c()(p, ea.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function eN(e) {
    let {
            positionInSection: l,
            skuId: r,
            variant: i = 0,
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            unavailableLabel: f,
            analyticsLocations: T,
            disableMultiSelect: J = !1,
            listItemProps: eu,
        } = e,
        eg = eu?.tabIndex,
        ev = a.useRef(null),
        eN = a.useRef(null),
        eA = (0, m.bG)([G.A], () => G.A.get(r)),
        ey = (0, M.uS)(eA?.applicationId),
        eI = null != eA && !eA.available && !ey,
        ek = eI ? (f ?? ef.intl.string(ef.t.RWouSQ)) : null,
        { guildId: eR } = (0, W.nG)(eA?.applicationId),
        eS = eA?.applicationId,
        eP = (0, m.bG)([H.A], () => (0, b.M)(H.A.theme)),
        eT = (0, m.bG)([I.Ay], () => I.Ay.useReducedMotion),
        eM = B.Q_.useSetting(),
        { isHoveringOrFocusing: eL } = (0, P.A)(ev),
        eD = (0, $.jM)(),
        { analyticsLocations: eO } = (0, R.Ay)(T ?? []),
        eH = a.useRef({ positionInSection: l, analyticsLocations: eO }),
        [eB, ew] = a.useState(!1),
        eG = (0, m.bG)([K.A], () => (null != r ? K.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eF = (function (e, l) {
            let t = (0, m.bG)([G.A], () => G.A.get(e)),
                [r, n] = a.useState(!1),
                [i, s] = a.useState(!1),
                o = a.useMemo(() => (0, W.xf)(t), [t]),
                c = a.useMemo(() => (0, W.fq)(t), [t]);
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
                        (0, V.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, o, l, t?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eB),
        eU = (0, O.JL)({ sku: eA }),
        eW = eU?.amount,
        { display: eY, reward: e$, offers: ez } = (0, Q.b)({ surface: "card", applicationId: eS, skuId: r }),
        eK = a.useMemo(() => ez.find((e) => e.type === D.B8.ORB_REDEMPTION) ?? null, [ez]),
        eq = (0, q.oG)({ orbPriceAmount: eW, spendOrbsOffer: eK }),
        eV = (0, S.h)(eA?.applicationId),
        {
            isSelectionActive: eQ,
            selected: eJ,
            setSelected: eZ,
            disabled: eX,
        } = (0, ee.SS)(r, eA?.applicationId, { disabled: J }),
        {
            priceComponent: e0,
            extendedHeight: e1,
            displayPrice: e3,
            shownPriceDetails: e8,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: r, promotion: i, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, O.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: x } = (0, O.j9)(c),
                f = a.useMemo(
                    () =>
                        null == s || s.type !== D.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ea.pt,
                                  children: (0, n.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ef.intl.format(ef.t.GiVd2Q, {
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
                              priceComponent: (0, n.jsx)(ec.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: x,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != r && r > 0
                          ? {
                                priceComponent: (0, n.jsx)(eo.O, {
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
                                  priceComponent: (0, n.jsx)(eo.A, {
                                      orbsGate: t,
                                      className: ea.p6,
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
                                                className: ea.p6,
                                                children: [
                                                    null != u &&
                                                        (0, n.jsx)(p.E, {
                                                            className: ea.of,
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
        })({ sku: eA, orbsGate: eq, orbPriceAmount: eW, promotion: eY, reward: e$, showOrbsOnly: u }),
        e2 = 2 !== i && eF ? e8 : ej,
        e7 = a.useCallback((e) => {
            ew(e);
        }, []),
        e9 = a.useMemo(() => c()(ea.Nr, { [ea.ax]: 0 === i, [ea.GW]: 1 === i, [ea.jz]: 2 === i }), [i]),
        { handleCardHover: e6, handleCardUnhover: e5 } = (function (e) {
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
                            (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
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
            applicationId: eS,
            guildId: eR,
            analyticsContext: eD,
            positionInSection: l,
            analyticsLocations: eO,
            shownPriceDetails: e2,
        }),
        { handleCardVisibilityChange: e4 } = (function (e) {
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
                    (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
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
                        ep.A.increment({
                            name: ex.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
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
            applicationId: eS,
            guildId: eR,
            analyticsContext: eD,
            positionInSection: l,
            analyticsLocations: eO,
            shownPriceDetails: e2,
        });
    a.useEffect(() => {
        e4(eB);
    }, [eB]);
    let le = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eH.current,
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
                    } = eD;
                F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: r,
                    guild_id: eR ?? a,
                    application_id: eS ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: e2.price,
                    regular_price: e2.regularPrice,
                    currency: e2.currency,
                    orbs_amount: e2.orbsAmount,
                    location_stack: l,
                });
            },
            [r, eS, eR, eD, e2],
        ),
        { primaryIconAsset: ll, primaryIconLabel: lt } = a.useMemo(() => (0, W.Cv)(eA, eS), [eA, eS]),
        lr = (0, m.bG)([K.A], () => K.A.getStorefrontState(eS)?.activePage ?? 0),
        ln = a.useMemo(() => {
            let e = eA?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? ef.intl.format(ef.t.PWw4Vp, { days: t }) : null;
        }, [eA?.tenantMetadata?.socialLayer?.expiresAt]),
        la = (0, W.xf)(eA),
        li = a.useMemo(() => {
            if (!eF) return "none";
            let [e, l] = eb[i];
            return `linear-gradient(to top, ${eh} ${30 + e}%, ${eC} ${30 + l}%)`;
        }, [i, eF]),
        ls = a.useCallback(() => {
            null != eS && (0, Y.iR)(eS, r);
        }, [eS, r]),
        lo = a.useCallback(() => {
            (e6(),
                null != eS &&
                    (eN.current = setTimeout(() => {
                        (0, Y.iR)(eS, r);
                    }, 1e3)));
        }, [eS, r, e6]),
        lc = a.useCallback(() => {
            (e5(), null != eN.current && (clearTimeout(eN.current), (eN.current = null)));
        }, [e5]);
    a.useEffect(
        () => () => {
            null != eN.current && clearTimeout(eN.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: lu } = (0, z.H)(),
        ld = a.useCallback(() => {
            null != eS && null != lu && (0, L.bG)(lu(lr, r, eA?.slug));
        }, [eS, r, lr, eA?.slug, lu]),
        lm = a.useCallback(
            (e) => {
                null != s && eA?.applicationId != null ? s(e, { skuId: r, applicationId: eA.applicationId }) : ld();
            },
            [s, eA?.applicationId, r, ld],
        ),
        lx = a.useCallback(
            (e) => {
                if (eQ) {
                    eX || eZ(!eJ);
                    return;
                }
                (le(e_.bB.CARD), lm(e));
            },
            [eQ, le, lm, eZ, eJ, eX],
        ),
        lp = a.useCallback(
            (e) => {
                eM &&
                    (0, y.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("638221"), t.e("897249")]).then(t.bind(t, 10680));
                        return (l) => (0, n.jsx)(e, { ...l, skuId: r });
                    });
            },
            [eM, r],
        ),
        l_ = a.useMemo(() => [...eO, k.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eO]),
        lf = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eV &&
                        (le(e_.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: r,
                            applicationId: eV.id,
                            onComplete: () => {
                                null != eV &&
                                    null != eA &&
                                    (0, Z.n)({ sku: eA, application: eV, analyticsLocations: l_ });
                            },
                            analyticsLocations: l_,
                        })));
            },
            [eA, eV, r, le, l_],
        ),
        lb = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eA &&
                        (le(e_.bB.BUY_BUTTON), (0, X.a)(eA, { isGift: !1 }, { analyticsLocations: l_, guildId: eR })));
            },
            [eA, eR, le, l_],
        ),
        lh = a.useCallback(
            (e) => {
                (e.stopPropagation(), le(e_.bB.VIEW_DETAILS_BUTTON), lm(e));
            },
            [le, lm],
        ),
        lC = eA?.exclusive === !0 && 2 !== i,
        lg = a.useMemo(
            () =>
                null != ek
                    ? (0, n.jsx)(h.$, { variant: "primary", onClick: lh, text: ek, fullWidth: !0, tabIndex: eg })
                    : "CAN_CHECKOUT" === eq
                      ? (0, n.jsx)(h.$, {
                            variant: "primary",
                            onMouseDown: ls,
                            onClick: lf,
                            "aria-label": ef.intl.formatToPlainString(ef.t.yi41qQ, { orbPrice: eW }),
                            text: ef.intl.format(ef.t.JC15qj, {
                                orbPrice: eW,
                                orbIconHook: () =>
                                    (0, n.jsx)(
                                        _.C,
                                        { className: ea.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: eg,
                        })
                      : (0, n.jsx)(h.$, {
                            variant: "primary",
                            onMouseDown: ls,
                            onClick: lb,
                            text: null != e3 ? ef.intl.format(ef.t.Xp5WTn, { price: e3 }) : ef.intl.string(ef.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: eg,
                        }),
            [ek, lh, eq, lf, lb, ls, eW, e3, eg],
        );
    if (null == eA) return null;
    let lj = (0, W.fq)(eA),
        lv = null;
    eQ
        ? (lv = (0, n.jsx)("div", { className: ea.HI, children: (0, n.jsx)(C.P, { checked: eJ, disabled: eX }) }))
        : null != ek
          ? (lv = (0, n.jsx)("div", { className: ea.fC, children: (0, n.jsx)(ed.G, { label: ek }) }))
          : eA.exclusive
            ? (lv = (0, n.jsx)("div", { className: ea.fC, children: (0, n.jsx)(el.I, {}) }))
            : null != ln && (lv = (0, n.jsx)(g.Lp, { text: ln, disableColor: !0, className: ea.qS }));
    let lE = lC ? (0, n.jsx)("div", { className: ea.mN, "aria-hidden": !0 }) : null,
        lN = (0, n.jsx)(x.L, {
            innerRef: ev,
            onChange: e7,
            threshold: 0,
            children: (0, n.jsxs)(j.s, {
                onClick: lx,
                onContextMenu: lp,
                onMouseEnter: lo,
                onMouseLeave: lc,
                className: c()(e9, { [ea.Zl]: !eT && 2 !== i, [ea.BN]: eP, [eP ? ea.Mn : ea.YF]: eL, [ea.Rc]: !eF }, o),
                ref: ev,
                buttonProps: { ...eu, role: "button" },
                onFocus: () => eu?.onFocus?.(),
                "aria-label": null != ek ? `${eA.name}, ${ek}` : eA.name,
                children: [
                    lv,
                    (0, n.jsx)(eE, {
                        sku: eA,
                        guildId: eR,
                        isCardHovered: eL,
                        variant: i,
                        trackCardClick: le,
                        analyticsLocations: eO,
                        analyticsContext: eD,
                        tabIndex: eg,
                    }),
                    null != lj
                        ? eF
                            ? (0, n.jsx)(er.A, {
                                  containerClassName: ea.Vl,
                                  foregroundImageClassName: ea.wP,
                                  cardImage: lj,
                                  altText: eA.name,
                                  shape: "custom",
                                  backgroundImageClassName: ea.GC,
                                  cardBackgroundImage: la,
                                  cssPosition: "absolute",
                              })
                            : (0, n.jsx)(ei, {})
                        : (0, n.jsx)("div", {
                              className: ea.t7,
                              children: (0, n.jsx)(v.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ea.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)("div", { className: ea.iZ, style: { background: li } }),
                                  (0, n.jsx)(E.N, {
                                      theme: em.NJ8.DARK,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(ea.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(ea.gn, { [ea.ov]: !(0, U.mC)(eA), [ea.w4]: e1 }),
                                                      children: [
                                                          eF &&
                                                              (0, n.jsx)("div", {
                                                                  className: ea.S1,
                                                                  children: (0, n.jsx)(et.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eF
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != ll &&
                                                                            (0, n.jsx)("img", {
                                                                                src: ll.toString(),
                                                                                alt: lt,
                                                                                className: ea.ye,
                                                                            }),
                                                                        (0, n.jsx)(p.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eA.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(es, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ea.iQ,
                                                      children: eF ? e0 : (0, n.jsx)(es, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: ea.li,
                                      children: (0, n.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eI || eG
                                                  ? lg
                                                  : (0, n.jsx)(A.m, {
                                                        text: ef.intl.string(ef.t.IqlPbQ),
                                                        children: (0, n.jsx)(h.$, {
                                                            variant: "primary",
                                                            onClick: lh,
                                                            text: ef.intl.string(ef.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: eg,
                                                        }),
                                                    }),
                                              !eI &&
                                                  (0, n.jsx)(en.A, {
                                                      tabIndex: eg,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              le(e_.bB.GIFT_BUTTON),
                                                              (0, X.a)(
                                                                  eA,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eO,
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
    return lC ? (0, n.jsxs)("div", { className: ea.ur, children: [lE, lN] }) : lN;
}
