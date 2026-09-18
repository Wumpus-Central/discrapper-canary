l.d(t, { yf: () => eh, Ay: () => eb, s6: () => eg });
var n,
    r = l(477900),
    i = l(582128),
    a = l(310784),
    s = l.n(a),
    o = l(503698),
    c = l.n(o),
    u = l(536637),
    d = l.n(u),
    m = l(318254),
    p = l(939249),
    x = l(366010),
    f = l(821609),
    g = l(658675),
    _ = l(638916),
    h = l(43990),
    C = l(825484),
    b = l(17928),
    j = l(269115),
    v = l(834730),
    y = l(890856),
    N = l(812993),
    A = l(866665),
    k = l(442433),
    S = l(775602),
    I = l(793574),
    E = l(688810),
    T = l(429913),
    M = l(713517),
    R = l(427209),
    P = l(976860),
    D = l(288106),
    w = l(993046),
    H = l(363195),
    L = l(885386),
    O = l(652165),
    B = l(67480),
    G = l(174459),
    F = l(871123),
    U = l(733391),
    z = l(439303),
    W = l(353281),
    Y = l(832163),
    $ = l(69236),
    q = l(654107),
    K = l(2157),
    V = l(345938),
    J = l(510022),
    Q = l(99161),
    Z = l(882035);
let X = (0, l(976245).y)()((e, t) => ({
    config: null,
    selectedIds: new Set(),
    actions: {
        startMultiselect: (l) =>
            null == t().config &&
            (e(() => ({
                config: l,
                selectedIds: null != l.initialSelectedIds ? new Set(l.initialSelectedIds) : new Set(),
            })),
            !0),
        endMultiselect(l) {
            let n = t();
            return (
                (null == n.config || n.config.key === l) && (e(() => ({ config: null, selectedIds: new Set() })), !0)
            );
        },
        setSelectedSkus(t) {
            e(() => ({ selectedIds: new Set(t) }));
        },
        setSkuSelected(l, n) {
            let { selectedIds: r } = t();
            if (r.has(l) === n) return;
            let i = new Set(r);
            (n ? i.add(l) : i.delete(l), e(() => ({ selectedIds: i })));
        },
    },
}));
var ee = l(263911),
    et = l(971146),
    el = l(366523),
    en = l(300182),
    er = l(434078);
function ei() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(er.Vl, er.Yf), style: { animationDelay: `${e}s` } });
}
function ea() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: er.RC, style: { width: `${e}%` } });
}
var es = l(533772),
    eo = l(821707),
    ec = l(743693),
    eu = l(652215),
    ed = l(995393),
    em = l(375708);
let ep = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    ex = s()("#000000").darken(1.5).alpha(0.9).hex(),
    ef = s()("#000000").alpha(0).hex();
var eg = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), (n[(n.EMBEDDED = 2)] = "EMBEDDED"), n);
let e_ = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function eh() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(er.Nr, er.ax, er.Yf),
        children: (0, r.jsxs)("div", { className: er.zH, children: [(0, r.jsx)(ea, {}), (0, r.jsx)(ea, {})] }),
    });
}
function eC(e) {
    let {
            guildId: t,
            sku: l,
            isCardHovered: n,
            trackCardClick: a,
            variant: s,
            analyticsLocations: o,
            analyticsContext: u,
        } = e,
        d = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != l &&
                        (a(ed.bB.FORWARD_BUTTON),
                        (0, V.d)({
                            sku: l,
                            guildId: t,
                            analyticsContext: u,
                            analyticsLocations: o,
                            source: "social-layer-storefront-embed",
                        })));
            },
            [l, t, a, u, o],
        ),
        m = i.useCallback(() => {
            a(ed.bB.WISHLIST_BUTTON);
        }, [a]),
        x = i.useMemo(() => c()(er.o, { [er.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: er.zu,
        children: [
            2 === s &&
                (0, r.jsx)(p.D, {
                    className: c()(x, er.gy),
                    onClick: d,
                    children: (0, r.jsx)(R.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(ec._, {
                sku: l,
                isCardHovered: n,
                trackButtonClick: m,
                className: c()(x, er.ij),
                location: "social_layer_storefront_card",
            }),
        ],
    });
}
function eb(e) {
    var t;
    let {
            positionInSection: n,
            skuId: a,
            variant: s = 0,
            onClick: o,
            className: u,
            showOrbsOnly: p = !1,
            analyticsLocations: R,
        } = e,
        V = i.useRef(null),
        ec = i.useRef(null),
        eg = (0, b.bG)([B.A], () => B.A.get(a)),
        { guildId: eh } = (0, F.nG)(eg?.applicationId),
        eb = eg?.applicationId,
        ej = (0, b.bG)([H.A], () => (0, x.M)(H.A.theme)),
        ev = (0, b.bG)([S.Ay], () => S.Ay.useReducedMotion),
        ey = L.Q_.useSetting(),
        { isHoveringOrFocusing: eN } = (0, M.A)(V),
        eA = (0, z.jM)(),
        { analyticsLocations: ek } = (0, E.Ay)(R ?? []),
        eS = i.useRef({ positionInSection: n, analyticsLocations: ek }),
        [eI, eE] = i.useState(!1),
        eT = (0, b.bG)([Y.A], () => (null != a ? Y.A.getNormalizedSKUEligibility(a) : void 0), [a]),
        eM = (function (e, t) {
            let l = (0, b.bG)([B.A], () => B.A.get(e)),
                [n, r] = i.useState(!1),
                [a, s] = i.useState(!1),
                o = i.useMemo(() => (0, F.xf)(l), [l]),
                c = i.useMemo(() => (0, F.fq)(l), [l]);
            return (
                i.useEffect(() => {
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
                i.useEffect(() => {
                    if (l?.id == null || a || !t) return;
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
                }, [a, o, t, l?.id]),
                i.useMemo(() => n && a, [n, a])
            );
        })(a, eI),
        eR = (0, w.JL)({ sku: eg }),
        eP = eR?.amount,
        { display: eD, reward: ew, offers: eH } = (0, K.b)({ surface: "card", applicationId: eb, skuId: a }),
        eL = i.useMemo(() => eH.find((e) => e.type === D.B8.ORB_REDEMPTION) ?? null, [eH]),
        eO = (0, $.oG)({ orbPriceAmount: eP, spendOrbsOffer: eL }),
        eB = (0, T.h)(eg?.applicationId),
        {
            isSelectionActive: eG,
            selected: eF,
            setSelected: eU,
            disabled: ez,
        } = ((t = eg?.applicationId),
        (0, Z.n)(
            X,
            (e) => {
                let l = null !== e.config && e.config.applicationId === t,
                    n = e.selectedIds.has(a);
                return {
                    isSelectionActive: l,
                    selected: n,
                    setSelected: (t) => e.actions.setSkuSelected(a, t),
                    disabled:
                        l && !n && e.config?.maxSelections != null && e.selectedIds.size >= e.config.maxSelections,
                };
            },
            (e, t) =>
                e.isSelectionActive === t.isSelectionActive && e.selected === t.selected && e.disabled === t.disabled,
        )),
        {
            priceComponent: eW,
            extendedHeight: eY,
            displayPrice: e$,
            shownPriceDetails: eq,
        } = (function (e) {
            let { sku: t, orbsGate: l, orbPriceAmount: n, promotion: a, reward: s, showOrbsOnly: o = !1 } = e,
                c = (0, w.ou)({ sku: t }),
                { normalPrice: u, discountedPrice: d, discountPercent: p, userPrice: x } = (0, w.j9)(c),
                f = i.useMemo(
                    () =>
                        null == s || s.type !== D.Ns.ACTION || s.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: er.pt,
                                  children: (0, r.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: em.intl.format(em.t.GiVd2Q, {
                                          orbCount: s.amount,
                                          orbIconHook: () =>
                                              (0, r.jsx)(m.C, { size: "xs", color: "currentColor" }, "orbs-icon"),
                                      }),
                                  }),
                              }),
                    [s],
                );
            return i.useMemo(() => {
                let e = {
                    currency: c.userPrice?.currency ?? c.normalPrice?.currency ?? null,
                    price: c.userPrice?.amount ?? null,
                    regularPrice: c.normalPrice?.amount ?? null,
                };
                return null != t && (0, F.mC)(t)
                    ? a?.flavor === "nitro" && null != d
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
                          : "HIDDEN" !== l && null != n
                            ? {
                                  priceComponent: (0, r.jsx)(es.A, {
                                      orbsGate: l,
                                      className: er.p6,
                                      orbPrice: n,
                                      fiatPrice: u,
                                      textDefaultColor: "text-overlay-light",
                                  }),
                                  extendedHeight: !1,
                                  displayPrice: x,
                                  shownPriceDetails: { ...e, orbsAmount: n },
                              }
                            : null != p && null != d
                              ? {
                                    priceComponent: (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: er.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(v.E, {
                                                            className: er.of,
                                                            variant: "text-md/medium",
                                                            color: "text-muted",
                                                            lineClamp: 1,
                                                            children: u,
                                                        }),
                                                    (0, r.jsx)(v.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-overlay-light",
                                                        lineClamp: 1,
                                                        children: d,
                                                    }),
                                                    (0, r.jsxs)(v.E, {
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
                                    priceComponent: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.E, {
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
            }, [t, a, d, u, p, o, n, l, f, c, x]);
        })({ sku: eg, orbsGate: eO, orbPriceAmount: eP, promotion: eD, reward: ew, showOrbsOnly: p }),
        eK = 2 !== s && eM ? eq : e_,
        eV = i.useCallback((e) => {
            eE(e);
        }, []),
        eJ = i.useMemo(() => c()(er.Nr, { [er.ax]: 0 === s, [er.GW]: 1 === s, [er.jz]: 2 === s }), [s]),
        { handleCardHover: eQ, handleCardUnhover: eZ } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: a,
                    analyticsLocations: s,
                    shownPriceDetails: o,
                } = e,
                c = i.useRef(!1),
                u = i.useRef(r),
                d = i.useRef({ positionInSection: a, analyticsLocations: s, shownPriceDetails: o });
            return (
                i.useEffect(() => {
                    u.current = r;
                }, [r]),
                i.useEffect(() => {
                    d.current = { positionInSection: a, analyticsLocations: s, shownPriceDetails: o };
                }, [a, s, o]),
                {
                    handleCardHover: i.useCallback(() => {
                        if (!c.current) {
                            let {
                                    sessionId: e,
                                    guildId: r,
                                    applicationId: i,
                                    pageIndex: a,
                                    pageTitle: s,
                                    pageSection: o,
                                    pageSectionTitle: m,
                                    isUserGuildMember: p,
                                    pageHasLeaderboard: x,
                                } = u.current,
                                { positionInSection: f, analyticsLocations: g, shownPriceDetails: _ } = d.current;
                            (G.default.track(eu.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
                                slayer_storefront_session_id: e,
                                sku_id: t,
                                guild_id: n ?? r,
                                application_id: l ?? i,
                                page_index: a,
                                page_title: s,
                                page_section: o,
                                page_section_title: m,
                                position_in_section: f,
                                is_user_guild_member: p,
                                page_has_leaderboard: x,
                                price: _.price,
                                regular_price: _.regularPrice,
                                currency: _.currency,
                                orbs_amount: _.orbsAmount,
                                location_stack: g,
                            }),
                                (c.current = !0));
                        }
                    }, [t, l, n]),
                    handleCardUnhover: i.useCallback(() => {
                        c.current = !1;
                    }, []),
                }
            );
        })({
            skuId: a,
            applicationId: eb,
            guildId: eh,
            analyticsContext: eA,
            positionInSection: n,
            analyticsLocations: ek,
            shownPriceDetails: eK,
        }),
        { handleCardVisibilityChange: eX } = (function (e) {
            let {
                    skuId: t,
                    applicationId: l,
                    guildId: n,
                    analyticsContext: r,
                    positionInSection: a,
                    analyticsLocations: s,
                    shownPriceDetails: o,
                } = e,
                c = i.useRef(null),
                u = i.useRef(r),
                d = i.useRef({ positionInSection: a, analyticsLocations: s, shownPriceDetails: o });
            (i.useEffect(() => {
                u.current = r;
            }, [r]),
                i.useEffect(() => {
                    d.current = { positionInSection: a, analyticsLocations: s, shownPriceDetails: o };
                }, [a, s, o]));
            let m = i.useCallback(() => {
                    let {
                            sessionId: e,
                            guildId: r,
                            applicationId: i,
                            pageIndex: a,
                            pageTitle: s,
                            pageSection: o,
                            pageSectionTitle: c,
                            isUserGuildMember: m,
                            pageHasLeaderboard: p,
                        } = u.current,
                        { positionInSection: x, analyticsLocations: f, shownPriceDetails: g } = d.current;
                    G.default.track(eu.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        slayer_storefront_session_id: e,
                        sku_id: t,
                        guild_id: n ?? r,
                        application_id: l ?? i,
                        page_index: a,
                        page_title: s,
                        page_section: o,
                        page_section_title: c,
                        position_in_section: x,
                        is_user_guild_member: m,
                        page_has_leaderboard: p,
                        price: g.price,
                        regular_price: g.regularPrice,
                        currency: g.currency,
                        orbs_amount: g.orbsAmount,
                        location_stack: f,
                    });
                }, [t, l, n]),
                p = i.useCallback(
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
                i.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { handleCardVisibilityChange: p }
            );
        })({
            skuId: a,
            applicationId: eb,
            guildId: eh,
            analyticsContext: eA,
            positionInSection: n,
            analyticsLocations: ek,
            shownPriceDetails: eK,
        });
    i.useEffect(() => {
        eX(eI);
    }, [eI]);
    let e0 = i.useCallback(
            (e) => {
                let { analyticsLocations: t, positionInSection: l } = eS.current,
                    {
                        sessionId: n,
                        guildId: r,
                        applicationId: i,
                        pageIndex: s,
                        pageTitle: o,
                        pageSection: c,
                        pageSectionTitle: u,
                        isUserGuildMember: d,
                        pageHasLeaderboard: m,
                    } = eA;
                G.default.track(eu.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: n,
                    sku_id: a,
                    guild_id: eh ?? r,
                    application_id: eb ?? i,
                    page_index: s,
                    page_title: o,
                    page_section: c,
                    page_section_title: u,
                    position_in_section: l,
                    is_user_guild_member: d,
                    page_has_leaderboard: m,
                    cta_type: e,
                    price: eK.price,
                    regular_price: eK.regularPrice,
                    currency: eK.currency,
                    orbs_amount: eK.orbsAmount,
                    location_stack: t,
                });
            },
            [a, eb, eh, eA, eK],
        ),
        { primaryIconAsset: e1, primaryIconLabel: e3 } = i.useMemo(() => (0, F.Cv)(eg, eb), [eg, eb]),
        e8 = (0, b.bG)([Y.A], () => Y.A.getStorefrontState(eb)?.activePage ?? 0),
        e2 = i.useMemo(() => {
            let e = eg?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let t = d()(),
                l = Math.max(d()(e).diff(t, "days"), 1);
            return l <= 3 ? em.intl.format(em.t.PWw4Vp, { days: l }) : null;
        }, [eg?.tenantMetadata?.socialLayer?.expiresAt]),
        e7 = (0, F.xf)(eg),
        e9 = i.useMemo(() => {
            if (!eM) return "none";
            let [e, t] = ep[s];
            return `linear-gradient(to top, ${ex} ${30 + e}%, ${ef} ${30 + t}%)`;
        }, [s, eM]),
        e5 = i.useCallback(() => {
            null != eb && (0, U.iR)(eb, a);
        }, [eb, a]),
        e6 = i.useCallback(() => {
            (eQ(),
                null != eb &&
                    (ec.current = setTimeout(() => {
                        (0, U.iR)(eb, a);
                    }, 1e3)));
        }, [eb, a, eQ]),
        e4 = i.useCallback(() => {
            (eZ(), null != ec.current && (clearTimeout(ec.current), (ec.current = null)));
        }, [eZ]);
    i.useEffect(
        () => () => {
            null != ec.current && clearTimeout(ec.current);
        },
        [],
    );
    let { getSocialLayerStorefrontLink: te } = (0, W.H)(),
        tt = i.useCallback(() => {
            null != eb && null != te && (0, P.bG)(te(e8, a, eg?.slug));
        }, [eb, a, e8, eg?.slug, te]),
        tl = i.useCallback(
            (e) => {
                if (eG) {
                    ez || eU(!eF);
                    return;
                }
                (e0(ed.bB.CARD), null != o && eg?.applicationId != null)
                    ? o(e, { skuId: a, applicationId: eg.applicationId })
                    : tt();
            },
            [eG, e0, o, eg?.applicationId, tt, eU, eF, a, ez],
        ),
        tn = i.useCallback(
            (e) => {
                ey &&
                    (0, k.L3)(e, async () => {
                        let { default: e } = await l.e("897249").then(l.bind(l, 10680));
                        return (t) => (0, r.jsx)(e, { ...t, skuId: a });
                    });
            },
            [ey, a],
        ),
        tr = i.useMemo(() => [...ek, I.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [ek]),
        ti = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eB &&
                        (e0(ed.bB.BUY_WITH_ORBS_BUTTON),
                        (0, O.B4)({
                            skuId: a,
                            applicationId: eB.id,
                            onComplete: () => {
                                null != eB &&
                                    null != eg &&
                                    (0, J.n)({ sku: eg, application: eB, analyticsLocations: tr });
                            },
                            analyticsLocations: tr,
                        })));
            },
            [eg, eB, a, e0, tr],
        ),
        ta = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eg &&
                        (e0(ed.bB.BUY_BUTTON), (0, Q.a)(eg, { isGift: !1 }, { analyticsLocations: tr, guildId: eh })));
            },
            [eg, eh, e0, tr],
        ),
        ts = eg?.exclusive === !0 && 2 !== s,
        to = i.useMemo(
            () =>
                "CAN_CHECKOUT" === eO
                    ? (0, r.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: e5,
                          onClick: ti,
                          "aria-label": em.intl.formatToPlainString(em.t.yi41qQ, { orbPrice: eP }),
                          text: em.intl.format(em.t.JC15qj, {
                              orbPrice: eP,
                              orbIconHook: () =>
                                  (0, r.jsx)(m.C, { className: er.fN, size: "sm", color: "currentColor" }, "orbs-icon"),
                          }),
                          fullWidth: !0,
                      })
                    : (0, r.jsx)(f.$, {
                          variant: "primary",
                          onMouseDown: e5,
                          onClick: ta,
                          text: null != e$ ? em.intl.format(em.t.Xp5WTn, { price: e$ }) : em.intl.string(em.t.boqtTA),
                          fullWidth: !0,
                      }),
            [eO, ti, ta, e5, eP, e$],
        );
    if (null == eg) return null;
    let tc = (0, F.fq)(eg),
        tu = ts ? (0, r.jsx)("div", { className: er.mN, "aria-hidden": !0 }) : null,
        td = (0, r.jsx)(j.L, {
            innerRef: V,
            onChange: eV,
            threshold: 0,
            children: (0, r.jsxs)(y.s, {
                onClick: tl,
                onContextMenu: tn,
                onMouseEnter: e6,
                onMouseLeave: e4,
                className: c()(eJ, { [er.Zl]: !ev && 2 !== s, [er.BN]: ej, [ej ? er.Mn : er.YF]: eN, [er.Rc]: !eM }, u),
                ref: V,
                "aria-label": eg.name,
                children: [
                    eG
                        ? (0, r.jsx)("div", {
                              className: er.HI,
                              children: (0, r.jsx)(g.P, { checked: eF, disabled: ez }),
                          })
                        : eg.exclusive
                          ? (0, r.jsx)("div", { className: er.fC, children: (0, r.jsx)(ee.I, {}) })
                          : null != e2 && (0, r.jsx)(N.Lp, { text: e2, disableColor: !0, className: er.qS }),
                    (0, r.jsx)(eC, {
                        sku: eg,
                        guildId: eh,
                        isCardHovered: eN,
                        variant: s,
                        trackCardClick: e0,
                        analyticsLocations: ek,
                        analyticsContext: eA,
                    }),
                    null != tc
                        ? eM
                            ? (0, r.jsx)(el.A, {
                                  containerClassName: er.Vl,
                                  foregroundImageClassName: er.wP,
                                  cardImage: tc,
                                  altText: eg.name,
                                  shape: "custom",
                                  backgroundImageClassName: er.GC,
                                  cardBackgroundImage: e7,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(ei, {})
                        : (0, r.jsx)("div", {
                              className: er.t7,
                              children: (0, r.jsx)(_.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: er.Cw,
                              }),
                          }),
                    2 !== s
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: er.iZ, style: { background: e9 } }),
                                  (0, r.jsx)(h.N, {
                                      theme: eu.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(er.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(er.gn, { [er.ov]: !(0, F.mC)(eg), [er.w4]: eY }),
                                                      children: [
                                                          eM &&
                                                              (0, r.jsx)("div", {
                                                                  className: er.S1,
                                                                  children: (0, r.jsx)(et.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eM
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != e1 &&
                                                                            (0, r.jsx)("img", {
                                                                                src: e1.toString(),
                                                                                alt: e3,
                                                                                className: er.ye,
                                                                            }),
                                                                        (0, r.jsx)(v.E, {
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eg.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(ea, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                      className: er.iQ,
                                                      children: eM ? eW : (0, r.jsx)(ea, {}),
                                                  }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: er.li,
                                      children: (0, r.jsxs)(C.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              eT
                                                  ? to
                                                  : (0, r.jsx)(A.m, {
                                                        text: em.intl.string(em.t.IqlPbQ),
                                                        children: (0, r.jsx)(f.$, {
                                                            variant: "primary",
                                                            onClick: (e) => {
                                                                (e.stopPropagation(),
                                                                    e0(ed.bB.VIEW_DETAILS_BUTTON),
                                                                    tt());
                                                            },
                                                            text: em.intl.string(em.t.KLBTgF),
                                                            fullWidth: !0,
                                                        }),
                                                    }),
                                              (0, r.jsx)(en.A, {
                                                  onGift: (e) => {
                                                      (e.stopPropagation(),
                                                          e0(ed.bB.GIFT_BUTTON),
                                                          (0, Q.a)(
                                                              eg,
                                                              { isGift: !0 },
                                                              {
                                                                  analyticsLocations: [
                                                                      ...ek,
                                                                      I.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
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
    return ts ? (0, r.jsxs)("div", { className: er.ur, children: [tu, td] }) : td;
}
