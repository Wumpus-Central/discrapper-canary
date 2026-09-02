l.d(t, { s: () => ep, A: () => e_ });
var r,
    n = l(477900),
    a = l(582128),
    i = l(310784),
    o = l.n(i),
    s = l(503698),
    c = l.n(s),
    u = l(536637),
    d = l.n(u),
    m = l(318254),
    p = l(939249),
    x = l(366010),
    f = l(821609),
    _ = l(638916),
    g = l(43990),
    h = l(825484),
    C = l(17928),
    b = l(269115),
    j = l(834730),
    v = l(890856),
    y = l(812993),
    A = l(866665),
    N = l(442433),
    k = l(775602),
    E = l(793574),
    T = l(688810),
    R = l(429913),
    I = l(713517),
    P = l(427209),
    M = l(976860),
    S = l(288106),
    D = l(993046),
    H = l(363195),
    L = l(885386),
    w = l(652165),
    O = l(67480),
    B = l(174459),
    G = l(871123),
    F = l(733391),
    U = l(439303),
    W = l(353281),
    z = l(832163),
    Y = l(69236),
    $ = l(654107),
    q = l(31969),
    K = l(345938),
    V = l(510022),
    J = l(99161),
    Q = l(263911),
    Z = l(971146),
    X = l(366523),
    ee = l(300182),
    et = l(434078);
function el() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(et.Vl, et.Yf), style: { animationDelay: `${e}s` } });
}
function er() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: et.RC, style: { width: `${e}%` } });
}
var en = l(533772),
    ea = l(821707),
    ei = l(743693),
    eo = l(652215),
    es = l(995393),
    ec = l(375708);
let eu = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ed = o()("#000000").darken(1.5).alpha(0.9).hex(),
    em = o()("#000000").alpha(0).hex();
var ep = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let ex = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ef(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: r,
            trackCardClick: i,
            variant: o,
            analyticsLocations: s,
            analyticsContext: u,
        } = e,
        d = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != l &&
                        (i(es.bB.FORWARD_BUTTON),
                        (0, K.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: s,
                            source: "social-layer-storefront-embed",
                        }));
            },
            [l, t, i, u, s],
        ),
        m = a.useCallback(() => {
            i(es.bB.WISHLIST_BUTTON);
        }, [i]),
        x = a.useMemo(() => c()(et.o, { [et.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: et.zu,
        children: [
            2 === o &&
                (0, n.jsx)(p.D, {
                    className: c()(x, et.gy),
                    onClick: d,
                    children: (0, n.jsx)(P.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(ei._, {
                sku: l,
                isCardHovered: r,
                trackButtonClick: m,
                className: c()(x, et.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function e_(e) {
    let {
            positionInSection: t,
            skuId: r,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            analyticsLocations: p,
        } = e,
        P = a.useRef(null),
        K = a.useRef(null),
        ei = (0, C.bG)([O.A], () => O.A.get(r)),
        { guildId: ep } = (0, G.nG)(ei?.applicationId),
        e_ = ei?.applicationId,
        eg = (0, C.bG)([H.A], () => (0, x.M)(H.A.theme)),
        eh = (0, C.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eC = L.Q_.useSetting(),
        { isHoveringOrFocusing: eb } = (0, I.A)(P),
        ej = (0, U.jM)(),
        { analyticsLocations: ev } = (0, T.Ay)(p ?? []),
        ey = a.useRef({ positionInSection: t, analyticsLocations: ev }),
        [eA, eN] = a.useState(!1),
        ek = (0, C.bG)([z.A], () => (null != r ? z.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eE = (function (e, t) {
            let l = (0, C.bG)([O.A], () => O.A.get(e)),
                [r, n] = a.useState(!1),
                [i, o] = a.useState(!1),
                s = a.useMemo(() => (0, G.xf)(l), [l]),
                c = a.useMemo(() => (0, G.fq)(l), [l]);
            return (
                a.useEffect(() => {
                    if (l?.id == null || r || !t) return;
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
                            (e.onerror = null), (e.onload = null), (e.src = "");
                        }
                    );
                }, [c, t, r, l?.id]),
                a.useEffect(() => {
                    if (l?.id == null || i || !t) return;
                    if (null == s) return void o(!0);
                    let e = !0;
                    return (
                        (0, $.l0)(s.toString()).finally(() => {
                            e && o(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, s, t, l?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eA),
        eT = (0, D.JL)({ sku: ei }),
        eR = eT?.amount,
        eI = (0, Y.oG)({ orbPriceAmount: eR, applicationId: e_, location: "social_layer_storefront_card" }),
        eP = (0, R.h)(ei?.applicationId),
        {
            priceComponent: eM,
            extendedHeight: eS,
            displayPrice: eD,
            shownPriceDetails: eH,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: r, promotion: i, showOrbsOnly: o = !1 } = e,
                s = (0, D.ou)({ sku: t }),
                { normalPrice: c, discountedPrice: u, discountPercent: d, userPrice: p } = (0, D.j9)(s),
                x = a.useMemo(() => {
                    let e = i?.reward;
                    return null == e || e.type !== S.Ns.ACTION || e.amount <= 0
                        ? null
                        : (0, n.jsx)("div", {
                              className: et.pt,
                              children: (0, n.jsx)(j.E, {
                                  variant: "text-sm/semibold",
                                  color: "currentColor",
                                  children: ec.intl.format(ec.t.GiVd2Q, {
                                      orbCount: e.amount,
                                      orbIconHook: () =>
                                          (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                  }),
                              }),
                          });
                }, [i]);
            return a.useMemo(() => {
                let e = {
                    currency: s.userPrice?.currency ?? s.normalPrice?.currency ?? null,
                    price: s.userPrice?.amount ?? null,
                    regularPrice: s.normalPrice?.amount ?? null,
                };
                return null != t && (0, G.mC)(t)
                    ? i?.flavor === "nitro" && null != u
                        ? {
                              priceComponent: (0, n.jsx)(ea.A, { discountedPrice: u, normalPrice: c }),
                              extendedHeight: !1,
                              displayPrice: p,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : o && null != r && r > 0
                          ? {
                                priceComponent: (0, n.jsx)(en.O, {
                                    variant: "text-md/bold",
                                    orbPrice: r,
                                    color: "text-overlay-light",
                                }),
                                extendedHeight: !1,
                                displayPrice: p,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: r },
                            }
                          : "HIDDEN" !== l && null != r
                            ? {
                                  priceComponent: (0, n.jsx)(en.A, {
                                      orbsGate: l,
                                      className: et.p6,
                                      orbPrice: r,
                                      fiatPrice: c,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: p,
                                  shownPriceDetails: { ...e, orbsAmount: r },
                              }
                            : null != d && null != u
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: et.p6,
                                                children: [
                                                    null != c &&
                                                        (0, n.jsx)(j.E, {
                                                            className: et.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: c,
                                                        }),
                                                    (0, n.jsx)(j.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: u,
                                                    }),
                                                    (0, n.jsxs)(j.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", d, ")"],
                                                    }),
                                                ],
                                            }),
                                            x,
                                        ],
                                    }),
                                    extendedHeight: null != x,
                                    displayPrice: p,
                                    shownPriceDetails: { ...e, orbsAmount: null },
                                }
                              : {
                                    priceComponent: (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(j.E, {
                                                variant: "text-md/bold",
                                                color: "text-overlay-light",
                                                lineClamp: 1,
                                                children: c,
                                            }),
                                            x,
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
            }, [t, i, u, c, d, o, r, l, x, s, p]);
        })({
            sku: ei,
            orbsGate: eI,
            orbPriceAmount: eR,
            promotion: (0, q.F)("card", { applicationId: e_, skuId: r }),
            showOrbsOnly: u,
        }),
        eL = 2 !== i && eE ? eH : ex,
        ew = a.useCallback((e) => {
            eN(e);
        }, []),
        eO = a.useMemo(() => c()(et.Nr, { [et.ax]: 0 === i, [et.GW]: 1 === i, [et.jz]: 2 === i }), [i]),
        { handleCardHover: eB, handleCardUnhover: eG } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: r,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(!1),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            return (
                a.useEffect(() => {
                    u.current = n;
                }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]),
                {
                    handleCardHover: a.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: n,
                                    applicationId: a,
                                    pageIndex: i,
                                    pageTitle: o,
                                    pageSection: s,
                                    pageSectionTitle: m,
                                    isUserGuildMember: p,
                                    pageHasLeaderboard: x,
                                } = u.current,
                                { positionInSection: f, analyticsLocations: _, shownPriceDetails: g } = d.current;
                            B.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: r ?? n,
                                application_id: l ?? a,
                                page_index: i,
                                page_title: o,
                                page_section: s,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: p,
                                page_has_leaderboard: x,
                                price: g.price,
                                regular_price: g.regularPrice,
                                currency: g.currency,
                                orbs_amount: g.orbsAmount,
                                location_stack: _,
                            }),
                                (c.current = !0);
                        }
                    }, [t, l, r]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: r,
            applicationId: e_,
            guildId: ep,
            analyticsContext: ej,
            positionInSection: t,
            analyticsLocations: ev,
            shownPriceDetails: eL,
        }),
        { handleCardVisibilityChange: eF } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: r,
                    analyticsContext: n,
                    positionInSection: i,
                    analyticsLocations: o,
                    shownPriceDetails: s,
                } = e,
                c = a.useRef(null),
                u = a.useRef(n),
                d = a.useRef({ positionInSection: i, analyticsLocations: o, shownPriceDetails: s });
            a.useEffect(() => {
                u.current = n;
            }, [n]),
                a.useEffect(() => {
                    d.current = { positionInSection: i, analyticsLocations: o, shownPriceDetails: s };
                }, [i, o, s]);
            let m = a.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: n,
                            applicationId: a,
                            pageIndex: i,
                            pageTitle: o,
                            pageSection: s,
                            pageSectionTitle: c,
                            isUserGuildMember: m,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: x, analyticsLocations: f, shownPriceDetails: _ } = d.current;
                    B.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: r ?? n,
                        application_id: l ?? a,
                        page_index: i,
                        page_title: o,
                        page_section: s,
                        page_section_title: c,
                        position_in_section: x,
                        is_user_guild_member: m,
                        page_has_leaderboard: p,
                        price: _.price,
                        regular_price: _.regularPrice,
                        currency: _.currency,
                        orbs_amount: _.orbsAmount,
                        location_stack: f,
                    });
                }, [t, l, r]),
                p = a.useCallback(
                    (e) => {
                        e
                            ? null === c.current &&
                              (c.current = window.setTimeout(() => {
                                  m(), (c.current = null);
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
            applicationId: e_,
            guildId: ep,
            analyticsContext: ej,
            positionInSection: t,
            analyticsLocations: ev,
            shownPriceDetails: eL,
        });
    a.useEffect(() => {
        eF(eA);
    }, [eA]);
    let eU = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ey.current,
                    {
                        sessionId: n,
                        guildId: a,
                        applicationId: i,
                        pageIndex: o,
                        pageTitle: s,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = ej;
                B.default.track(eo.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: r,
                    guild_id: ep ?? a,
                    application_id: e_ ?? i,
                    page_index: o,
                    page_title: s,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: eL.price,
                    regular_price: eL.regularPrice,
                    currency: eL.currency,
                    orbs_amount: eL.orbsAmount,
                    location_stack: t,
                });
            },
            [r, e_, ep, ej, eL],
        ),
        { primaryIconAsset: eW, primaryIconLabel: ez } = a.useMemo(() => (0, G.Cv)(ei, e_), [ei, e_]),
        eY = (0, C.bG)([z.A], () => z.A.getStorefrontState(e_)?.activePage ?? 0),
        e$ = a.useMemo(() => {
            let e = ei?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? ec.intl.format(ec.t.PWw4Vp, { days: l }) : null;
        }, [ei?.tenantMetadata?.socialLayer?.expiresAt]),
        eq = (0, G.xf)(ei),
        eK = a.useMemo(() => {
            if (!eE) return "none";
            let [e, t] = eu[i];
            return `linear-gradient(to top, ${ed} ${30 + e}%, ${em} ${30 + t}%)`;
        }, [i, eE]),
        eV = a.useCallback(() => {
            null != e_ && (0, F.iR)(e_, r);
        }, [e_, r]),
        eJ = a.useCallback(() => {
            eB(),
                null != e_ &&
                    (K.current = setTimeout(() => {
                        (0, F.iR)(e_, r);
                    }, 1e3));
        }, [e_, r, eB]),
        eQ = a.useCallback(() => {
            eG(), null != K.current && (clearTimeout(K.current), (K.current = null));
        }, [eG]);
    a.useEffect(
        () => () => {
            null != K.current && clearTimeout(K.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: eZ } = (0, W.H)(),
        eX = a.useCallback(() => {
            null != e_ && null != eZ && (0, M.bG)(eZ(eY, r, ei?.slug));
        }, [e_, r, eY, ei?.slug, eZ]),
        e0 = a.useCallback(
            (e) => {
                (eU(es.bB.CARD), null != o && ei?.applicationId != null)
                    ? o(e, { skuId: r, applicationId: ei.applicationId })
                    : eX();
            },
            [eU, o, eX, r, ei?.applicationId],
        ),
        e1 = a.useCallback(
            (e) => {
                eC &&
                    (0, N.L3)(e, async () => {
                        let { default: e } = await l.e("897249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: r });
                    });
            },
            [eC, r],
        ),
        e3 = a.useMemo(() => [...ev, E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ev]),
        e8 = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != eP &&
                        (eU(es.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: r,
                            applicationId: eP.id,
                            onComplete: () => {
                                null != eP &&
                                    null != ei &&
                                    (0, V.n)({ sku: ei, application: eP, analyticsLocations: e3 });
                            },
                            analyticsLocations: e3,
                        }));
            },
            [ei, eP, r, eU, e3],
        ),
        e2 = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    null != ei &&
                        (eU(es.bB.BUY_BUTTON), (0, J.a)(ei, { isGift: !1 }, { analyticsLocations: e3, guildId: ep }));
            },
            [ei, ep, eU, e3],
        ),
        e9 = ei?.exclusive === !0 && 2 !== i,
        e7 = a.useMemo(
            () =>
                "CAN_CHECKOUT" === eI
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: e8,
                          "aria-label": ec.intl.formatToPlainString(ec.t.yi41qQ, { orbPrice: eR }),
                          text: ec.intl.format(ec.t.JC15qj, {
                              orbPrice: eR,
                              orbIconHook: () =>
                                  (0, n.jsx)(m.C, { className: et.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: eV,
                          onClick: e2,
                          text: null != eD ? ec.intl.format(ec.t.Xp5WTn, { price: eD }) : ec.intl.string(ec.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eI, e8, e2, eV, eR, eD],
        );
    if (null == ei) return null;
    let e6 = (0, G.fq)(ei),
        e5 = e9 ? (0, n.jsx)("div", { className: et.mN, "aria-hidden": !0 }) : null,
        e4 = (0, n.jsx)(b.L, {
            innerRef: P,
            onChange: ew,
            threshold: 0,
            children: (0, n.jsxs)(v.s, {
                onClick: e0,
                onContextMenu: e1,
                onMouseEnter: eJ,
                onMouseLeave: eQ,
                className: c()(eO, { [et.Zl]: !eh && 2 !== i, [et.BN]: eg, [eg ? et.Mn : et.YF]: eb, [et.Rc]: !eE }, s),
                ref: P,
                "aria-label": ei.name,
                children: [
                    ei.exclusive
                        ? (0, n.jsx)("div", { className: et.fC, children: (0, n.jsx)(Q.I, {}) })
                        : null != e$ && (0, n.jsx)(y.Lp, { text: e$, disableColor: !0, className: et.qS }),
                    (0, n.jsx)(ef, {
                        sku: ei,
                        guildId: ep,
                        isCardHovered: eb,
                        variant: i,
                        trackCardClick: eU,
                        analyticsLocations: ev,
                        analyticsContext: ej,
                    }),
                    null != e6
                        ? eE
                            ? (0, n.jsx)(X.A, {
                                  containerClassName: et.Vl,
                                  foregroundImageClassName: et.wP,
                                  cardImage: e6,
                                  altText: ei.name,
                                  shape: "custom",
                                  backgroundImageClassName: et.GC,
                                  cardBackgroundImage: eq,
                                  cssPosition: "absolute",
                              })
                            : (0, n.jsx)(el, {})
                        : (0, n.jsx)("div", {
                              className: et.t7,
                              children: (0, n.jsx)(_.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: et.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)("div", { className: et.iZ, style: { background: eK } }),
                                  (0, n.jsx)(g.N, {
                                      theme: eo.NJ8.DARKER,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(et.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(et.gn, { [et.ov]: !(0, G.mC)(ei), [et.w4]: eS }),
                                                      children: [
                                                          eE &&
                                                              (0, n.jsx)("div", {
                                                                  className: et.S1,
                                                                  children: (0, n.jsx)(Z.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eE
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != eW &&
                                                                            (0, n.jsx)("img", {
                                                                                src: eW.toString(),
                                                                                alt: ez,
                                                                                className: et.ye,
                                                                            }),
                                                                        (0, n.jsx)(j.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: ei.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(er, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: et.iQ,
                                                      children: eE ? eM : (0, n.jsx)(er, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: et.li,
                                      children: (0, n.jsxs)(h.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              ek
                                                  ? e7
                                                  : (0, n.jsx)(A.m, {
                                                        text: ec.intl.string(ec.t.IqlPbQ),
                                                        children: (0, n.jsx)(f.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                e.stopPropagation(),
                                                                    eU(es.bB.VIEW_DETAILS_BUTTON),
                                                                    eX();
                                                            },
                                                            text: ec.intl.string(ec.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, n.jsx)(ee.A, {
                                                  onGift: (e) => {
                                                      e.stopPropagation(),
                                                          eU(es.bB.GIFT_BUTTON),
                                                          (0, J.a)(
                                                              ei,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ev,
                                                                      E.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                  ],
                                                              },
                                                          );
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
    return e9 ? (0, n.jsxs)("div", { className: et.ur, children: [e5, e4] }) : e4;
}
