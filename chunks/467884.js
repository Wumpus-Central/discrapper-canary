l.d(t, { yf: () => eh, Ay: () => eC, s6: () => ef });
var r,
    n = l(477900),
    a = l(582128),
    i = l(310784),
    s = l.n(i),
    o = l(503698),
    c = l.n(o),
    u = l(536637),
    d = l.n(u),
    m = l(318254),
    p = l(939249),
    x = l(366010),
    f = l(821609),
    _ = l(658675),
    h = l(638916),
    g = l(43990),
    C = l(825484),
    b = l(17928),
    j = l(269115),
    v = l(834730),
    N = l(890856),
    y = l(812993),
    A = l(866665),
    k = l(442433),
    E = l(775602),
    T = l(793574),
    I = l(688810),
    R = l(429913),
    P = l(713517),
    M = l(427209),
    S = l(976860),
    D = l(288106),
    H = l(993046),
    L = l(363195),
    O = l(885386),
    w = l(652165),
    B = l(67480),
    G = l(174459),
    F = l(871123),
    U = l(733391),
    W = l(439303),
    z = l(353281),
    Y = l(832163),
    $ = l(69236),
    q = l(654107),
    K = l(2157),
    V = l(345938),
    J = l(510022),
    Q = l(99161),
    Z = l(381999),
    X = l(263911),
    ee = l(971146),
    et = l(366523),
    el = l(300182),
    er = l(434078);
function en() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, n.jsx)("div", { className: c()(er.Vl, er.Yf), style: { animationDelay: `${e}s` } });
}
function ea() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, n.jsx)("div", { className: er.RC, style: { width: `${e}%` } });
}
var ei = l(533772),
    es = l(821707),
    eo = l(743693),
    ec = l(652215),
    eu = l(995393),
    ed = l(375708);
let em = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ep = s()("#000000").darken(1.5).alpha(0.9).hex(),
    ex = s()("#000000").alpha(0).hex();
var ef = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let e_ = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function eh() {
    return (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: c()(er.Nr, er.ax, er.Yf),
        children: (0, n.jsxs)("div", { className: er.zH, children: [(0, n.jsx)(ea, {}), (0, n.jsx)(ea, {})] }),
    });
}
function eg(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: r,
            trackCardClick: i,
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != l &&
                        (i(eu.bB.FORWARD_BUTTON),
                        (0, V.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [l, t, i, u, o],
        ),
        m = a.useCallback(() => {
            i(eu.bB.WISHLIST_BUTTON);
        }, [i]),
        x = a.useMemo(() => c()(er.o, { [er.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: er.zu,
        children: [
            2 === s &&
                (0, n.jsx)(p.D, {
                    className: c()(x, er.gy),
                    onClick: d,
                    children: (0, n.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(eo._, {
                sku: l,
                isCardHovered: r,
                trackButtonClick: m,
                className: c()(x, er.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eC(e) {
    let {
            positionInSection: t,
            skuId: r,
            variant: i = 0,
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            analyticsLocations: p,
            disableMultiSelect: M = !1,
        } = e,
        V = a.useRef(null),
        eo = a.useRef(null),
        ef = (0, b.bG)([B.A], () => B.A.get(r)),
        { guildId: eh } = (0, F.nG)(ef?.applicationId),
        eC = ef?.applicationId,
        eb = (0, b.bG)([L.A], () => (0, x.M)(L.A.theme)),
        ej = (0, b.bG)([E.Ay], () => E.Ay.useReducedMotion),
        ev = O.Q_.useSetting(),
        { isHoveringOrFocusing: eN } = (0, P.A)(V),
        ey = (0, W.jM)(),
        { analyticsLocations: eA } = (0, I.Ay)(p ?? []),
        ek = a.useRef({ positionInSection: t, analyticsLocations: eA }),
        [eE, eT] = a.useState(!1),
        eI = (0, b.bG)([Y.A], () => (null != r ? Y.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eR = (function (e, t) {
            let l = (0, b.bG)([B.A], () => B.A.get(e)),
                [r, n] = a.useState(!1),
                [i, s] = a.useState(!1),
                o = a.useMemo(() => (0, F.xf)(l), [l]),
                c = a.useMemo(() => (0, F.fq)(l), [l]);
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
                            ((e.onerror = null), (e.onload = null), (e.src = ""));
                        }
                    );
                }, [c, t, r, l?.id]),
                a.useEffect(() => {
                    if (l?.id == null || i || !t) return;
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
                }, [i, o, t, l?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eE),
        eP = (0, H.JL)({ sku: ef }),
        eM = eP?.amount,
        { display: eS, reward: eD, offers: eH } = (0, K.b)({ surface: "card", applicationId: eC, skuId: r }),
        eL = a.useMemo(() => eH.find((e) => e.type === D.B8.ORB_REDEMPTION) ?? null, [eH]),
        eO = (0, $.oG)({ orbPriceAmount: eM, spendOrbsOffer: eL }),
        ew = (0, R.h)(ef?.applicationId),
        {
            isSelectionActive: eB,
            selected: eG,
            setSelected: eF,
            disabled: eU,
        } = (0, Z.SS)(r, ef?.applicationId, { disabled: M }),
        {
            priceComponent: eW,
            extendedHeight: ez,
            displayPrice: eY,
            shownPriceDetails: e$,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: r, promotion: i, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, H.ou)({ sku: t }),
                { normalPrice: u, discountedPrice: d, discountPercent: p, userPrice: x } = (0, H.j9)(c),
                f = a.useMemo(
                    () =>
                        null == s || s.type !== D.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, n.jsx)("div", {
                                  className: er.pt,
                                  children: (0, n.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ed.intl.format(ed.t.GiVd2Q, {
                                          orbCount: s.amount,
                                          orbIconHook: () =>
                                              (0, n.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
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
                return null != t && (0, F.mC)(t)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, n.jsx)(es.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: x,
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
                                displayPrice: x,
                                shownPriceDetails: { currency: null, price: null, regularPrice: null, orbsAmount: r },
                            }
                          : "HIDDEN" !== l && null != r
                            ? {
                                  priceComponent: (0, n.jsx)(ei.A, {
                                      orbsGate: l,
                                      className: er.p6,
                                      orbPrice: r,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: x,
                                  shownPriceDetails: { ...e, orbsAmount: r },
                              }
                            : null != p && null != d
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: er.p6,
                                                children: [
                                                    null != u &&
                                                        (0, n.jsx)(v.E, {
                                                            className: er.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, n.jsxs)(v.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-positive",
                                                        lineClamp: 1,
                                                        children: ["(", p, ")"],
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
                                            (0, n.jsx)(v.E, {
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
            }, [t, i, d, u, p, o, r, l, f, c, x]);
        })({ sku: ef, orbsGate: eO, orbPriceAmount: eM, promotion: eS, reward: eD, showOrbsOnly: u }),
        eq = 2 !== i && eR ? e$ : e_,
        eK = a.useCallback((e) => {
            eT(e);
        }, []),
        eV = a.useMemo(() => c()(er.Nr, { [er.ax]: 0 === i, [er.GW]: 1 === i, [er.jz]: 2 === i }), [i]),
        { handleCardHover: eJ, handleCardUnhover: eQ } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
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
                                { positionInSection: f, analyticsLocations: _, shownPriceDetails: h } = d.current;
                            (G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: r ?? n,
                                application_id: l ?? a,
                                page_index: i,
                                page_title: s,
                                page_section: o,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: p,
                                page_has_leaderboard: x,
                                price: h.price,
                                regular_price: h.regularPrice,
                                currency: h.currency,
                                orbs_amount: h.orbsAmount,
                                location_stack: _,
                            }),
                                (c.current = !0));
                        }
                    }, [t, l, r]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: r,
            applicationId: eC,
            guildId: eh,
            analyticsContext: ey,
            positionInSection: t,
            analyticsLocations: eA,
            shownPriceDetails: eq,
        }),
        { handleCardVisibilityChange: eZ } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
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
                            sessionId: e,
                            guildId: n,
                            applicationId: a,
                            pageIndex: i,
                            pageTitle: s,
                            pageSection: o,
                            pageSectionTitle: c,
                            isUserGuildMember: m,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: x, analyticsLocations: f, shownPriceDetails: _ } = d.current;
                    G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: r ?? n,
                        application_id: l ?? a,
                        page_index: i,
                        page_title: s,
                        page_section: o,
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
            applicationId: eC,
            guildId: eh,
            analyticsContext: ey,
            positionInSection: t,
            analyticsLocations: eA,
            shownPriceDetails: eq,
        });
    a.useEffect(() => {
        eZ(eE);
    }, [eE]);
    let eX = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = ek.current,
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
                    guild_id: eh ?? a,
                    application_id: eC ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: eq.price,
                    regular_price: eq.regularPrice,
                    currency: eq.currency,
                    orbs_amount: eq.orbsAmount,
                    location_stack: t,
                });
            },
            [r, eC, eh, ey, eq],
        ),
        { primaryIconAsset: e0, primaryIconLabel: e1 } = a.useMemo(() => (0, F.Cv)(ef, eC), [ef, eC]),
        e3 = (0, b.bG)([Y.A], () => Y.A.getStorefrontState(eC)?.activePage ?? 0),
        e8 = a.useMemo(() => {
            let e = ef?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? ed.intl.format(ed.t.PWw4Vp, { days: l }) : null;
        }, [ef?.tenantMetadata?.socialLayer?.expiresAt]),
        e2 = (0, F.xf)(ef),
        e9 = a.useMemo(() => {
            if (!eR) return "none";
            let [e, t] = em[i];
            return `linear-gradient(to top, ${ep} ${30 + e}%, ${ex} ${30 + t}%)`;
        }, [i, eR]),
        e7 = a.useCallback(() => {
            null != eC && (0, U.iR)(eC, r);
        }, [eC, r]),
        e6 = a.useCallback(() => {
            (eJ(),
                null != eC &&
                    (eo.current = setTimeout(() => {
                        (0, U.iR)(eC, r);
                    }, 1e3)));
        }, [eC, r, eJ]),
        e5 = a.useCallback(() => {
            (eQ(), null != eo.current && (clearTimeout(eo.current), (eo.current = null)));
        }, [eQ]);
    a.useEffect(
        () => () => {
            null != eo.current && clearTimeout(eo.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: e4 } = (0, z.H)(),
        te = a.useCallback(() => {
            null != eC && null != e4 && (0, S.bG)(e4(e3, r, ef?.slug));
        }, [eC, r, e3, ef?.slug, e4]),
        tt = a.useCallback(
            (e) => {
                if (eB) {
                    eU || eF(!eG);
                    return;
                }
                (eX(eu.bB.CARD), null != s && ef?.applicationId != null)
                    ? s(e, { skuId: r, applicationId: ef.applicationId })
                    : te();
            },
            [eB, eX, s, ef?.applicationId, te, eF, eG, r, eU],
        ),
        tl = a.useCallback(
            (e) => {
                ev &&
                    (0, k.L3)(e, async () => {
                        let { default: e } = await l.e("897249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: r });
                    });
            },
            [ev, r],
        ),
        tr = a.useMemo(() => [...eA, T.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eA]),
        tn = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != ew &&
                        (eX(eu.bB.BUY_WITH_ORBS_BUTTON),
                        (0, w.B4)({
                            skuId: r,
                            applicationId: ew.id,
                            onComplete: () => {
                                null != ew &&
                                    null != ef &&
                                    (0, J.n)({ sku: ef, application: ew, analyticsLocations: tr });
                            },
                            analyticsLocations: tr,
                        })));
            },
            [ef, ew, r, eX, tr],
        ),
        ta = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != ef &&
                        (eX(eu.bB.BUY_BUTTON), (0, Q.a)(ef, { isGift: !1 }, { analyticsLocations: tr, guildId: eh })));
            },
            [ef, eh, eX, tr],
        ),
        ti = ef?.exclusive === !0 && 2 !== i,
        ts = a.useMemo(
            () =>
                "CAN_CHECKOUT" === eO
                    ? (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: e7,
                          onClick: tn,
                          "aria-label": ed.intl.formatToPlainString(ed.t.yi41qQ, { orbPrice: eM }),
                          text: ed.intl.format(ed.t.JC15qj, {
                              orbPrice: eM,
                              orbIconHook: () =>
                                  (0, n.jsx)(m.C, { className: er.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, n.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: e7,
                          onClick: ta,
                          text: null != eY ? ed.intl.format(ed.t.Xp5WTn, { price: eY }) : ed.intl.string(ed.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eO, tn, ta, e7, eM, eY],
        );
    if (null == ef) return null;
    let to = (0, F.fq)(ef),
        tc = ti ? (0, n.jsx)("div", { className: er.mN, "aria-hidden": !0 }) : null,
        tu = (0, n.jsx)(j.L, {
            innerRef: V,
            onChange: eK,
            threshold: 0,
            children: (0, n.jsxs)(N.s, {
                onClick: tt,
                onContextMenu: tl,
                onMouseEnter: e6,
                onMouseLeave: e5,
                className: c()(eV, { [er.Zl]: !ej && 2 !== i, [er.BN]: eb, [eb ? er.Mn : er.YF]: eN, [er.Rc]: !eR }, o),
                ref: V,
                "aria-label": ef.name,
                children: [
                    eB
                        ? (0, n.jsx)("div", {
                              className: er.HI,
                              children: (0, n.jsx)(_.P, { checked: eG, disabled: eU }),
                          })
                        : ef.exclusive
                          ? (0, n.jsx)("div", { className: er.fC, children: (0, n.jsx)(X.I, {}) })
                          : null != e8 && (0, n.jsx)(y.Lp, { text: e8, disableColor: !0, className: er.qS }),
                    (0, n.jsx)(eg, {
                        sku: ef,
                        guildId: eh,
                        isCardHovered: eN,
                        variant: i,
                        trackCardClick: eX,
                        analyticsLocations: eA,
                        analyticsContext: ey,
                    }),
                    null != to
                        ? eR
                            ? (0, n.jsx)(et.A, {
                                  containerClassName: er.Vl,
                                  foregroundImageClassName: er.wP,
                                  cardImage: to,
                                  altText: ef.name,
                                  shape: "custom",
                                  backgroundImageClassName: er.GC,
                                  cardBackgroundImage: e2,
                                  cssPosition: "absolute",
                              })
                            : (0, n.jsx)(en, {})
                        : (0, n.jsx)("div", {
                              className: er.t7,
                              children: (0, n.jsx)(h.q, {
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
                                  (0, n.jsx)("div", { className: er.iZ, style: { background: e9 } }),
                                  (0, n.jsx)(g.N, {
                                      theme: ec.NJ8.DARK,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(er.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(er.gn, { [er.ov]: !(0, F.mC)(ef), [er.w4]: ez }),
                                                      children: [
                                                          eR &&
                                                              (0, n.jsx)("div", {
                                                                  className: er.S1,
                                                                  children: (0, n.jsx)(ee.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eR
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != e0 &&
                                                                            (0, n.jsx)("img", {
                                                                                src: e0.toString(),
                                                                                alt: e1,
                                                                                className: er.ye,
                                                                            }),
                                                                        (0, n.jsx)(v.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: ef.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(ea, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: er.iQ,
                                                      children: eR ? eW : (0, n.jsx)(ea, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: er.li,
                                      children: (0, n.jsxs)(C.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eI
                                                  ? ts
                                                  : (0, n.jsx)(A.m, {
                                                        text: ed.intl.string(ed.t.IqlPbQ),
                                                        children: (0, n.jsx)(f.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                (e.stopPropagation(),
                                                                    eX(eu.bB.VIEW_DETAILS_BUTTON),
                                                                    te());
                                                            },
                                                            text: ed.intl.string(ed.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, n.jsx)(el.A, {
                                                  onGift: (e) => {
                                                      (e.stopPropagation(),
                                                          eX(eu.bB.GIFT_BUTTON),
                                                          (0, Q.a)(
                                                              ef,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...eA,
                                                                      T.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
    return ti ? (0, n.jsxs)("div", { className: er.ur, children: [tc, tu] }) : tu;
}
