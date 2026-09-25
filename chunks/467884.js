t.d(l, { yf: () => eg, Ay: () => ej, s6: () => eh });
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
    p = t(269115),
    x = t(834730),
    _ = t(318254),
    f = t(939249),
    h = t(366010),
    C = t(821609),
    g = t(890856),
    b = t(658675),
    j = t(812993),
    v = t(638916),
    E = t(43990),
    N = t(825484),
    A = t(866665),
    y = t(442433),
    k = t(775602),
    R = t(793574),
    S = t(688810),
    I = t(429913),
    T = t(713517),
    P = t(427209),
    M = t(976860),
    L = t(288106),
    D = t(993046),
    O = t(363195),
    H = t(885386),
    B = t(652165),
    w = t(67480),
    G = t(174459),
    F = t(871123),
    U = t(733391),
    Y = t(439303),
    W = t(353281),
    z = t(832163),
    $ = t(69236),
    K = t(654107),
    q = t(2157),
    V = t(345938),
    J = t(510022),
    Q = t(99161),
    Z = t(381999),
    X = t(263911),
    ee = t(971146),
    el = t(366523),
    et = t(300182),
    er = t(434078);
function en() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(er.Vl, er.Yf), style: { animationDelay: `${e}s` } });
}
function ea() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: er.RC, style: { width: `${e}%` } });
}
var ei = t(533772),
    es = t(821707),
    eo = t(743693),
    ec = t(652215),
    eu = t(731738),
    ed = t(807393),
    em = t(995393),
    ep = t(375708);
let ex = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    e_ = s()("#000000").darken(1.5).alpha(0.9).hex(),
    ef = s()("#000000").alpha(0).hex();
var eh = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let eC = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function eg() {
    return (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: c()(er.Nr, er.ax, er.Yf),
        children: (0, n.jsxs)("div", { className: er.zH, children: [(0, n.jsx)(ea, {}), (0, n.jsx)(ea, {})] }),
    });
}
function eb(e) {
    let {
            guildId: l,
            sku: t,
            isCardHovered: r,
            trackCardClick: i,
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != t &&
                        (i(em.bB.FORWARD_BUTTON),
                        (0, V.d)({
                            sku: t,
                            guildId: l,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [t, l, i, u, o],
        ),
        m = a.useCallback(() => {
            i(em.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(er.o, { [er.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: er.zu,
        children: [
            2 === s &&
                (0, n.jsx)(f.D, {
                    className: c()(p, er.gy),
                    onClick: d,
                    children: (0, n.jsx)(P.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(eo._, {
                sku: t,
                isCardHovered: r,
                trackButtonClick: m,
                className: c()(p, er.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function ej(e) {
    let {
            positionInSection: l,
            skuId: r,
            variant: i = 0,
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            analyticsLocations: f,
            disableMultiSelect: P = !1,
        } = e,
        V = a.useRef(null),
        eo = a.useRef(null),
        eh = (0, m.bG)([w.A], () => w.A.get(r)),
        { guildId: eg } = (0, F.nG)(eh?.applicationId),
        ej = eh?.applicationId,
        ev = (0, m.bG)([O.A], () => (0, h.M)(O.A.theme)),
        eE = (0, m.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eN = H.Q_.useSetting(),
        { isHoveringOrFocusing: eA } = (0, T.A)(V),
        ey = (0, Y.jM)(),
        { analyticsLocations: ek } = (0, S.Ay)(f ?? []),
        eR = a.useRef({ positionInSection: l, analyticsLocations: ek }),
        [eS, eI] = a.useState(!1),
        eT = (0, m.bG)([z.A], () => (null != r ? z.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eP = (function (e, l) {
            let t = (0, m.bG)([w.A], () => w.A.get(e)),
                [r, n] = a.useState(!1),
                [i, s] = a.useState(!1),
                o = a.useMemo(() => (0, F.xf)(t), [t]),
                c = a.useMemo(() => (0, F.fq)(t), [t]);
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
                        (0, K.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, o, l, t?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eS),
        eM = (0, D.JL)({ sku: eh }),
        eL = eM?.amount,
        { display: eD, reward: eO, offers: eH } = (0, q.b)({ surface: "card", applicationId: ej, skuId: r }),
        eB = a.useMemo(() => eH.find((e) => e.type === L.B8.ORB_REDEMPTION) ?? null, [eH]),
        ew = (0, $.oG)({ orbPriceAmount: eL, spendOrbsOffer: eB }),
        eG = (0, I.h)(eh?.applicationId),
        {
            isSelectionActive: eF,
            selected: eU,
            setSelected: eY,
            disabled: eW,
        } = (0, Z.SS)(r, eh?.applicationId, { disabled: P }),
        {
            priceComponent: ez,
            extendedHeight: e$,
            displayPrice: eK,
            shownPriceDetails: eq,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: r, promotion: i, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, D.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: p } = (0, D.j9)(c),
                f = a.useMemo(
                    () =>
                        null == s || s.type !== L.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, n.jsx)("div", {
                                  className: er.pt,
                                  children: (0, n.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ep.intl.format(ep.t.GiVd2Q, {
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
                return null != l && (0, F.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, n.jsx)(es.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: p,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != r && r > 0
                          ? {
                                priceComponent: (0, n.jsx)(ei.O, {
                                    variant: "text-md/bold",
                                    orbPrice: r,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: p,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: r },
                            }
                          : "HIDDEN" !== t && null != r
                            ? {
                                  priceComponent: (0, n.jsx)(ei.A, {
                                      orbsGate: t,
                                      className: er.p6,
                                      orbPrice: r,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: p,
                                  shownPriceDetails: { ...e, orbsAmount: r },
                              }
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: er.p6,
                                                children: [
                                                    null != u &&
                                                        (0, n.jsx)(x.E, {
                                                            className: er.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, n.jsx)(x.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, n.jsxs)(x.E, {
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
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(x.E, {
                                                variant: "text-md/bold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: u,
                                            }),
                                            f,
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
            }, [l, i, d, u, m, o, r, t, f, c, p]);
        })({ sku: eh, orbsGate: ew, orbPriceAmount: eL, promotion: eD, reward: eO, showOrbsOnly: u }),
        eV = 2 !== i && eP ? eq : eC,
        eJ = a.useCallback((e) => {
            eI(e);
        }, []),
        eQ = a.useMemo(() => c()(er.Nr, { [er.ax]: 0 === i, [er.GW]: 1 === i, [er.jz]: 2 === i }), [i]),
        { handleCardHover: eZ, handleCardUnhover: eX } = (function (e) {
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
                                    isUserGuildMember: p,
                                    pageHasLeaderboard: x,
                                } = u.current,
                                { positionInSection: _, analyticsLocations: f, shownPriceDetails: h } = d.current;
                            (G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: l,
                                guild_id: r ?? n,
                                application_id: t ?? a,
                                page_index: i,
                                page_title: s,
                                page_section: o,
                                page_section_title: m,
                                position_in_section: _,
                                is_user_guild_member: p,
                                page_has_leaderboard: x,
                                price: h.price,
                                regular_price: h.regularPrice,
                                currency: h.currency,
                                orbs_amount: h.orbsAmount,
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
            applicationId: ej,
            guildId: eg,
            analyticsContext: ey,
            positionInSection: l,
            analyticsLocations: ek,
            shownPriceDetails: eV,
        }),
        { handleCardVisibilityChange: e0 } = (function (e) {
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
                            isUserGuildMember: p,
                            pageHasLeaderboard: x,
                        } = u.current,
                        { positionInSection: _, analyticsLocations: f, shownPriceDetails: h } = d.current;
                    (G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
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
                        is_user_guild_member: p,
                        page_has_leaderboard: x,
                        price: h.price,
                        regular_price: h.regularPrice,
                        currency: h.currency,
                        orbs_amount: h.orbsAmount,
                        location_stack: f,
                    }),
                        ed.A.increment({
                            name: eu.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
                            tags: [`placement:${e ?? "unknown"}`],
                        }));
                }, [l, t, r]),
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
            skuId: r,
            applicationId: ej,
            guildId: eg,
            analyticsContext: ey,
            positionInSection: l,
            analyticsLocations: ek,
            shownPriceDetails: eV,
        });
    a.useEffect(() => {
        e0(eS);
    }, [eS]);
    let e1 = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eR.current,
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
                    } = ey;
                G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: r,
                    guild_id: eg ?? a,
                    application_id: ej ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: t,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: eV.price,
                    regular_price: eV.regularPrice,
                    currency: eV.currency,
                    orbs_amount: eV.orbsAmount,
                    location_stack: l,
                });
            },
            [r, ej, eg, ey, eV],
        ),
        { primaryIconAsset: e3, primaryIconLabel: e8 } = a.useMemo(() => (0, F.Cv)(eh, ej), [eh, ej]),
        e2 = (0, m.bG)([z.A], () => z.A.getStorefrontState(ej)?.activePage ?? 0),
        e7 = a.useMemo(() => {
            let e = eh?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? ep.intl.format(ep.t.PWw4Vp, { days: t }) : null;
        }, [eh?.tenantMetadata?.socialLayer?.expiresAt]),
        e9 = (0, F.xf)(eh),
        e6 = a.useMemo(() => {
            if (!eP) return "none";
            let [e, l] = ex[i];
            return `linear-gradient(to top, ${e_} ${30 + e}%, ${ef} ${30 + l}%)`;
        }, [i, eP]),
        e5 = a.useCallback(() => {
            null != ej && (0, U.iR)(ej, r);
        }, [ej, r]),
        e4 = a.useCallback(() => {
            (eZ(),
                null != ej &&
                    (eo.current = setTimeout(() => {
                        (0, U.iR)(ej, r);
                    }, 1e3)));
        }, [ej, r, eZ]),
        le = a.useCallback(() => {
            (eX(), null != eo.current && (clearTimeout(eo.current), (eo.current = null)));
        }, [eX]);
    a.useEffect(
        () => () => {
            null != eo.current && clearTimeout(eo.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: ll } = (0, W.H)(),
        lt = a.useCallback(() => {
            null != ej && null != ll && (0, M.bG)(ll(e2, r, eh?.slug));
        }, [ej, r, e2, eh?.slug, ll]),
        lr = a.useCallback(
            (e) => {
                if (eF) {
                    eW || eY(!eU);
                    return;
                }
                (e1(em.bB.CARD), null != s && eh?.applicationId != null)
                    ? s(e, { skuId: r, applicationId: eh.applicationId })
                    : lt();
            },
            [eF, e1, s, eh?.applicationId, lt, eY, eU, r, eW],
        ),
        ln = a.useCallback(
            (e) => {
                eN &&
                    (0, y.L3)(e, async () => {
                        let { default: e } = await t.e("897249").then(t.bind(t, 10680));
                        return (l) => (0, n.jsx)(e, { ...l, skuId: r });
                    });
            },
            [eN, r],
        ),
        la = a.useMemo(() => [...ek, R.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ek]),
        li = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eG &&
                        (e1(em.bB.BUY_WITH_ORBS_BUTTON),
                        (0, B.B4)({
                            skuId: r,
                            applicationId: eG.id,
                            onComplete: () => {
                                null != eG &&
                                    null != eh &&
                                    (0, J.n)({ sku: eh, application: eG, analyticsLocations: la });
                            },
                            analyticsLocations: la,
                        })));
            },
            [eh, eG, r, e1, la],
        ),
        ls = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eh &&
                        (e1(em.bB.BUY_BUTTON), (0, Q.a)(eh, { isGift: !1 }, { analyticsLocations: la, guildId: eg })));
            },
            [eh, eg, e1, la],
        ),
        lo = eh?.exclusive === !0 && 2 !== i,
        lc = a.useMemo(
            () =>
                "CAN_CHECKOUT" === ew
                    ? (0, n.jsx)(C.$, {
                          variant: "primary",
                          onMouseDown: e5,
                          onClick: li,
                          "aria-label": ep.intl.formatToPlainString(ep.t.yi41qQ, { orbPrice: eL }),
                          text: ep.intl.format(ep.t.JC15qj, {
                              orbPrice: eL,
                              orbIconHook: () =>
                                  (0, n.jsx)(_.C, { className: er.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(C.$, {
                          variant: "primary",
                          onMouseDown: e5,
                          onClick: ls,
                          text: null != eK ? ep.intl.format(ep.t.Xp5WTn, { price: eK }) : ep.intl.string(ep.t.boqtTA),
                          fullWidth: !0,
                      }),
            [ew, li, ls, e5, eL, eK],
        );
    if (null == eh) return null;
    let lu = (0, F.fq)(eh),
        ld = lo ? (0, n.jsx)("div", { className: er.mN, "aria-hidden": !0 }) : null,
        lm = (0, n.jsx)(p.L, {
            innerRef: V,
            onChange: eJ,
            threshold: 0,
            children: (0, n.jsxs)(g.s, {
                onClick: lr,
                onContextMenu: ln,
                onMouseEnter: e4,
                onMouseLeave: le,
                className: c()(eQ, { [er.Zl]: !eE && 2 !== i, [er.BN]: ev, [ev ? er.Mn : er.YF]: eA, [er.Rc]: !eP }, o),
                ref: V,
                "aria-label": eh.name,
                children: [
                    eF
                        ? (0, n.jsx)("div", {
                              className: er.HI,
                              children: (0, n.jsx)(b.P, { checked: eU, disabled: eW }),
                          })
                        : eh.exclusive
                          ? (0, n.jsx)("div", { className: er.fC, children: (0, n.jsx)(X.I, {}) })
                          : null != e7 && (0, n.jsx)(j.Lp, { text: e7, disableColor: !0, className: er.qS }),
                    (0, n.jsx)(eb, {
                        sku: eh,
                        guildId: eg,
                        isCardHovered: eA,
                        variant: i,
                        trackCardClick: e1,
                        analyticsLocations: ek,
                        analyticsContext: ey,
                    }),
                    null != lu
                        ? eP
                            ? (0, n.jsx)(el.A, {
                                  containerClassName: er.Vl,
                                  foregroundImageClassName: er.wP,
                                  cardImage: lu,
                                  altText: eh.name,
                                  shape: "custom",
                                  backgroundImageClassName: er.GC,
                                  cardBackgroundImage: e9,
                                  cssPosition: "absolute",
                              })
                            : (0, n.jsx)(en, {})
                        : (0, n.jsx)("div", {
                              className: er.t7,
                              children: (0, n.jsx)(v.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: er.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)("div", { className: er.iZ, style: { background: e6 } }),
                                  (0, n.jsx)(E.N, {
                                      theme: ec.NJ8.DARK,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(er.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(er.gn, { [er.ov]: !(0, F.mC)(eh), [er.w4]: e$ }),
                                                      children: [
                                                          eP &&
                                                              (0, n.jsx)("div", {
                                                                  className: er.S1,
                                                                  children: (0, n.jsx)(ee.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eP
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != e3 &&
                                                                            (0, n.jsx)("img", {
                                                                                src: e3.toString(),
                                                                                alt: e8,
                                                                                className: er.ye,
                                                                            }),
                                                                        (0, n.jsx)(x.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eh.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(ea, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: er.iQ,
                                                      children: eP ? ez : (0, n.jsx)(ea, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: er.li,
                                      children: (0, n.jsxs)(N.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eT
                                                  ? lc
                                                  : (0, n.jsx)(A.m, {
                                                        text: ep.intl.string(ep.t.IqlPbQ),
                                                        children: (0, n.jsx)(C.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                (e.stopPropagation(),
                                                                    e1(em.bB.VIEW_DETAILS_BUTTON),
                                                                    lt());
                                                            },
                                                            text: ep.intl.string(ep.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, n.jsx)(et.A, {
                                                  onGift: (e) => {
                                                      (e.stopPropagation(),
                                                          e1(em.bB.GIFT_BUTTON),
                                                          (0, Q.a)(
                                                              eh,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ek,
                                                                      R.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
    return lo ? (0, n.jsxs)("div", { className: er.ur, children: [ld, lm] }) : lm;
}
