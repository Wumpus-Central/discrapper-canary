l.d(t, { yf: () => eC, Ay: () => ej, s6: () => eb });
var r,
    n = l(477900),
    a = l(582128),
    i = l(310784),
    s = l.n(i),
    o = l(503698),
    c = l.n(o),
    u = l(536637),
    d = l.n(u),
    m = l(17928),
    x = l(269115),
    p = l(834730),
    _ = l(318254),
    f = l(939249),
    b = l(366010),
    h = l(821609),
    C = l(890856),
    g = l(658675),
    j = l(812993),
    v = l(638916),
    E = l(43990),
    N = l(825484),
    A = l(866665),
    y = l(442433),
    I = l(775602),
    k = l(793574),
    R = l(688810),
    S = l(429913),
    T = l(713517),
    P = l(427209),
    M = l(976860),
    L = l(288106),
    D = l(993046),
    O = l(363195),
    H = l(885386),
    B = l(652165),
    w = l(67480),
    G = l(174459),
    F = l(871123),
    U = l(733391),
    Y = l(439303),
    W = l(353281),
    z = l(832163),
    $ = l(69236),
    K = l(654107),
    q = l(2157),
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
    eu = l(731738),
    ed = l(807393),
    em = l(995393),
    ex = l(375708);
let ep = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    e_ = s()("#000000").darken(1.5).alpha(0.9).hex(),
    ef = s()("#000000").alpha(0).hex();
var eb = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), (r[(r.EMBEDDED = 2)] = "EMBEDDED"), r);
let eh = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function eC() {
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
            tabIndex: d,
        } = e,
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != l &&
                        (i(em.bB.FORWARD_BUTTON),
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
        x = a.useCallback(() => {
            i(em.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(er.o, { [er.H5]: r }), [r]);
    return (0, n.jsxs)("div", {
        className: er.zu,
        children: [
            2 === s &&
                (0, n.jsx)(f.D, {
                    className: c()(p, er.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, n.jsx)(P.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, n.jsx)(eo._, {
                sku: l,
                isCardHovered: r,
                trackButtonClick: x,
                className: c()(p, er.ij),
                location: "social_layer_storefront_card",
                tabIndex: d,
            }),
        ],
    });
}
function ej(e) {
    let {
            positionInSection: t,
            skuId: r,
            variant: i = 0,
            onClick: s,
            className: o,
            showOrbsOnly: u = !1,
            analyticsLocations: f,
            disableMultiSelect: P = !1,
            listItemProps: V,
        } = e,
        eo = V?.tabIndex,
        eb = a.useRef(null),
        eC = a.useRef(null),
        ej = (0, m.bG)([w.A], () => w.A.get(r)),
        { guildId: ev } = (0, F.nG)(ej?.applicationId),
        eE = ej?.applicationId,
        eN = (0, m.bG)([O.A], () => (0, b.M)(O.A.theme)),
        eA = (0, m.bG)([I.Ay], () => I.Ay.useReducedMotion),
        ey = H.Q_.useSetting(),
        { isHoveringOrFocusing: eI } = (0, T.A)(eb),
        ek = (0, Y.jM)(),
        { analyticsLocations: eR } = (0, R.Ay)(f ?? []),
        eS = a.useRef({ positionInSection: t, analyticsLocations: eR }),
        [eT, eP] = a.useState(!1),
        eM = (0, m.bG)([z.A], () => (null != r ? z.A.getNormalizedSKUEligibility(r) : void 0), [r]),
        eL = (function (e, t) {
            let l = (0, m.bG)([w.A], () => w.A.get(e)),
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
                        (0, K.l0)(o.toString()).finally(() => {
                            e && s(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, o, t, l?.id]),
                a.useMemo(() => r && i, [r, i])
            );
        })(r, eT),
        eD = (0, D.JL)({ sku: ej }),
        eO = eD?.amount,
        { display: eH, reward: eB, offers: ew } = (0, q.b)({ surface: "card", applicationId: eE, skuId: r }),
        eG = a.useMemo(() => ew.find((e) => e.type === L.B8.ORB_REDEMPTION) ?? null, [ew]),
        eF = (0, $.oG)({ orbPriceAmount: eO, spendOrbsOffer: eG }),
        eU = (0, S.h)(ej?.applicationId),
        {
            isSelectionActive: eY,
            selected: eW,
            setSelected: ez,
            disabled: e$,
        } = (0, Z.SS)(r, ej?.applicationId, { disabled: P }),
        {
            priceComponent: eK,
            extendedHeight: eq,
            displayPrice: eV,
            shownPriceDetails: eJ,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: r, promotion: i, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, D.ou)({ sku: t }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: x } = (0, D.j9)(c),
                f = a.useMemo(
                    () =>
                        null == s || s.type !== L.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, n.jsx)("div", {
                                  className: er.pt,
                                  children: (0, n.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ex.intl.format(ex.t.GiVd2Q, {
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
                            : null != m && null != d
                              ? {
                                    priceComponent: (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: er.p6,
                                                children: [
                                                    null != u &&
                                                        (0, n.jsx)(p.E, {
                                                            className: er.of,
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
            }, [t, i, d, u, m, o, r, l, f, c, x]);
        })({ sku: ej, orbsGate: eF, orbPriceAmount: eO, promotion: eH, reward: eB, showOrbsOnly: u }),
        eQ = 2 !== i && eL ? eJ : eh,
        eZ = a.useCallback((e) => {
            eP(e);
        }, []),
        eX = a.useMemo(() => c()(er.Nr, { [er.ax]: 0 === i, [er.GW]: 1 === i, [er.jz]: 2 === i }), [i]),
        { handleCardHover: e0, handleCardUnhover: e1 } = (function (e) {
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
                                    isUserGuildMember: x,
                                    pageHasLeaderboard: p,
                                } = u.current,
                                { positionInSection: _, analyticsLocations: f, shownPriceDetails: b } = d.current;
                            (G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: r ?? n,
                                application_id: l ?? a,
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
                    }, [t, l, r]),
                    handleCardUnhover: a.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: r,
            applicationId: eE,
            guildId: ev,
            analyticsContext: ek,
            positionInSection: t,
            analyticsLocations: eR,
            shownPriceDetails: eQ,
        }),
        { handleCardVisibilityChange: e3 } = (function (e) {
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
                    (G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: n,
                        sku_id: t,
                        guild_id: r ?? a,
                        application_id: l ?? i,
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
                        ed.A.increment({
                            name: eu.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
                            tags: [`placement:${e ?? "unknown"}`],
                        }));
                }, [t, l, r]),
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
            applicationId: eE,
            guildId: ev,
            analyticsContext: ek,
            positionInSection: t,
            analyticsLocations: eR,
            shownPriceDetails: eQ,
        });
    a.useEffect(() => {
        e3(eT);
    }, [eT]);
    let e8 = a.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = eS.current,
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
                    } = ek;
                G.default.track(ec.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: r,
                    guild_id: ev ?? a,
                    application_id: eE ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: eQ.price,
                    regular_price: eQ.regularPrice,
                    currency: eQ.currency,
                    orbs_amount: eQ.orbsAmount,
                    location_stack: t,
                });
            },
            [r, eE, ev, ek, eQ],
        ),
        { primaryIconAsset: e2, primaryIconLabel: e7 } = a.useMemo(() => (0, F.Cv)(ej, eE), [ej, eE]),
        e9 = (0, m.bG)([z.A], () => z.A.getStorefrontState(eE)?.activePage ?? 0),
        e6 = a.useMemo(() => {
            let e = ej?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? ex.intl.format(ex.t.PWw4Vp, { days: l }) : null;
        }, [ej?.tenantMetadata?.socialLayer?.expiresAt]),
        e5 = (0, F.xf)(ej),
        e4 = a.useMemo(() => {
            if (!eL) return "none";
            let [e, t] = ep[i];
            return `linear-gradient(to top, ${e_} ${30 + e}%, ${ef} ${30 + t}%)`;
        }, [i, eL]),
        te = a.useCallback(() => {
            null != eE && (0, U.iR)(eE, r);
        }, [eE, r]),
        tt = a.useCallback(() => {
            (e0(),
                null != eE &&
                    (eC.current = setTimeout(() => {
                        (0, U.iR)(eE, r);
                    }, 1e3)));
        }, [eE, r, e0]),
        tl = a.useCallback(() => {
            (e1(), null != eC.current && (clearTimeout(eC.current), (eC.current = null)));
        }, [e1]);
    a.useEffect(
        () => () => {
            null != eC.current && clearTimeout(eC.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: tr } = (0, W.H)(),
        tn = a.useCallback(() => {
            null != eE && null != tr && (0, M.bG)(tr(e9, r, ej?.slug));
        }, [eE, r, e9, ej?.slug, tr]),
        ta = a.useCallback(
            (e) => {
                if (eY) {
                    e$ || ez(!eW);
                    return;
                }
                (e8(em.bB.CARD), null != s && ej?.applicationId != null)
                    ? s(e, { skuId: r, applicationId: ej.applicationId })
                    : tn();
            },
            [eY, e8, s, ej?.applicationId, tn, ez, eW, r, e$],
        ),
        ti = a.useCallback(
            (e) => {
                ey &&
                    (0, y.L3)(e, async () => {
                        let { default: e } = await l.e("897249").then(l.bind(l, 10680));
                        return (t) => (0, n.jsx)(e, { ...t, skuId: r });
                    });
            },
            [ey, r],
        ),
        ts = a.useMemo(() => [...eR, k.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eR]),
        to = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eU &&
                        (e8(em.bB.BUY_WITH_ORBS_BUTTON),
                        (0, B.B4)({
                            skuId: r,
                            applicationId: eU.id,
                            onComplete: () => {
                                null != eU &&
                                    null != ej &&
                                    (0, J.n)({ sku: ej, application: eU, analyticsLocations: ts });
                            },
                            analyticsLocations: ts,
                        })));
            },
            [ej, eU, r, e8, ts],
        ),
        tc = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != ej &&
                        (e8(em.bB.BUY_BUTTON), (0, Q.a)(ej, { isGift: !1 }, { analyticsLocations: ts, guildId: ev })));
            },
            [ej, ev, e8, ts],
        ),
        tu = ej?.exclusive === !0 && 2 !== i,
        td = a.useMemo(
            () =>
                "CAN_CHECKOUT" === eF
                    ? (0, n.jsx)(h.$, {
                          variant: "primary",
                          onMouseDown: te,
                          onClick: to,
                          "aria-label": ex.intl.formatToPlainString(ex.t.yi41qQ, { orbPrice: eO }),
                          text: ex.intl.format(ex.t.JC15qj, {
                              orbPrice: eO,
                              orbIconHook: () =>
                                  (0, n.jsx)(_.C, { className: er.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                          tabIndex: eo,
                      })
                    : (0, n.jsx)(h.$, {
                          variant: "primary",
                          onMouseDown: te,
                          onClick: tc,
                          text: null != eV ? ex.intl.format(ex.t.Xp5WTn, { price: eV }) : ex.intl.string(ex.t.boqtTA),
                          fullWidth: !0,
                          tabIndex: eo,
                      }),
            [eF, to, tc, te, eO, eV, eo],
        );
    if (null == ej) return null;
    let tm = (0, F.fq)(ej),
        tx = tu ? (0, n.jsx)("div", { className: er.mN, "aria-hidden": !0 }) : null,
        tp = (0, n.jsx)(x.L, {
            innerRef: eb,
            onChange: eZ,
            threshold: 0,
            children: (0, n.jsxs)(C.s, {
                onClick: ta,
                onContextMenu: ti,
                onMouseEnter: tt,
                onMouseLeave: tl,
                className: c()(eX, { [er.Zl]: !eA && 2 !== i, [er.BN]: eN, [eN ? er.Mn : er.YF]: eI, [er.Rc]: !eL }, o),
                ref: eb,
                buttonProps: { ...V, role: "button" },
                onFocus: () => V?.onFocus?.(),
                "aria-label": ej.name,
                children: [
                    eY
                        ? (0, n.jsx)("div", {
                              className: er.HI,
                              children: (0, n.jsx)(g.P, { checked: eW, disabled: e$ }),
                          })
                        : ej.exclusive
                          ? (0, n.jsx)("div", { className: er.fC, children: (0, n.jsx)(X.I, {}) })
                          : null != e6 && (0, n.jsx)(j.Lp, { text: e6, disableColor: !0, className: er.qS }),
                    (0, n.jsx)(eg, {
                        sku: ej,
                        guildId: ev,
                        isCardHovered: eI,
                        variant: i,
                        trackCardClick: e8,
                        analyticsLocations: eR,
                        analyticsContext: ek,
                        tabIndex: eo,
                    }),
                    null != tm
                        ? eL
                            ? (0, n.jsx)(et.A, {
                                  containerClassName: er.Vl,
                                  foregroundImageClassName: er.wP,
                                  cardImage: tm,
                                  altText: ej.name,
                                  shape: "custom",
                                  backgroundImageClassName: er.GC,
                                  cardBackgroundImage: e5,
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
                                  (0, n.jsx)("div", { className: er.iZ, style: { background: e4 } }),
                                  (0, n.jsx)(E.N, {
                                      theme: ec.NJ8.DARK,
                                      children: (e) =>
                                          (0, n.jsxs)("div", {
                                              className: c()(er.zH, e),
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: c()(er.gn, { [er.ov]: !(0, F.mC)(ej), [er.w4]: eq }),
                                                      children: [
                                                          eL &&
                                                              (0, n.jsx)("div", {
                                                                  className: er.S1,
                                                                  children: (0, n.jsx)(ee.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eL
                                                              ? (0, n.jsxs)(n.Fragment, {
                                                                    children: [
                                                                        null != e2 &&
                                                                            (0, n.jsx)("img", {
                                                                                src: e2.toString(),
                                                                                alt: e7,
                                                                                className: er.ye,
                                                                            }),
                                                                        (0, n.jsx)(p.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: ej.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, n.jsx)(ea, {}),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: er.iQ,
                                                      children: eL ? eK : (0, n.jsx)(ea, {}),
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
                                              eM
                                                  ? td
                                                  : (0, n.jsx)(A.m, {
                                                        text: ex.intl.string(ex.t.IqlPbQ),
                                                        children: (0, n.jsx)(h.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                (e.stopPropagation(),
                                                                    e8(em.bB.VIEW_DETAILS_BUTTON),
                                                                    tn());
                                                            },
                                                            text: ex.intl.string(ex.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: eo,
                                                        }),
                                                    }),
                                              (0, n.jsx)(el.A, {
                                                  tabIndex: eo,
                                                  onGift: (e) => {
                                                      (e.stopPropagation(),
                                                          e8(em.bB.GIFT_BUTTON),
                                                          (0, Q.a)(
                                                              ej,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...eR,
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
    return tu ? (0, n.jsxs)("div", { className: er.ur, children: [tx, tp] }) : tp;
}
