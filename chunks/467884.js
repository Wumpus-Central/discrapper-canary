t.d(l, { yf: () => ej, Ay: () => eN, s6: () => eC });
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
    w = t(67480),
    F = t(174459),
    G = t(969724),
    U = t(871123),
    W = t(733391),
    K = t(439303),
    Y = t(353281),
    $ = t(832163),
    z = t(69236),
    q = t(654107),
    V = t(2157),
    J = t(898523),
    Q = t(345938),
    Z = t(510022),
    X = t(82343),
    ee = t(381999),
    el = t(263911),
    et = t(971146),
    en = t(366523),
    er = t(300182),
    ea = t(434078);
function ei() {
    let [e] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", { className: c()(ea.Vl, ea.Yf), style: { animationDelay: `${e}s` } });
}
function eo() {
    let [e] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", { className: ea.RC, style: { width: `${e}%` } });
}
var es = t(533772),
    ec = t(821707),
    eu = t(743693),
    ed = t(249434),
    em = t(652215),
    ex = t(731738),
    ep = t(807393),
    e_ = t(995393),
    ef = t(105292);
let eb = [
        [0, 50],
        [0, 50],
        [0, 40],
    ],
    eh = o()("#000000").darken(1.5).alpha(0.9).hex(),
    eg = o()("#000000").alpha(0).hex();
var eC =
    (((n = {})[(n.SMALL = 0)] = "SMALL"),
    (n[(n.MEDIUM = 1)] = "MEDIUM"),
    (n[(n.EMBEDDED = 2)] = "EMBEDDED"),
    (n[(n.FULL_WIDTH = 3)] = "FULL_WIDTH"),
    n);
let ev = { currency: null, price: null, regularPrice: null, orbsAmount: null };
function ej() {
    return (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: c()(ea.Nr, ea.ax, ea.Yf),
        children: (0, r.jsxs)("div", { className: ea.zH, children: [(0, r.jsx)(eo, {}), (0, r.jsx)(eo, {})] }),
    });
}
function eE(e) {
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
                        (i(e_.bB.FORWARD_BUTTON),
                        (0, Q.d)({
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
            i(e_.bB.WISHLIST_BUTTON);
        }, [i]),
        p = a.useMemo(() => c()(ea.o, { [ea.H5]: n }), [n]);
    return (0, r.jsxs)("div", {
        className: ea.zu,
        children: [
            2 === o &&
                (0, r.jsx)(f.D, {
                    className: c()(p, ea.gy),
                    onClick: m,
                    tabIndex: d,
                    children: (0, r.jsx)(M.A, { size: "refresh_sm", color: "currentColor" }),
                }),
            (0, r.jsx)(eu._, {
                sku: t,
                isCardHovered: n,
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
            skuId: n,
            variant: i = 0,
            onClick: o,
            className: s,
            showOrbsOnly: u = !1,
            unavailableLabel: f,
            analyticsLocations: M,
            disableMultiSelect: Q = !1,
            listItemProps: eu,
        } = e,
        eC = (0, b.k)(),
        ej = eu?.tabIndex,
        eN = a.useRef(null),
        ey = a.useRef(null),
        eA = (0, m.bG)([w.A], () => w.A.get(n)),
        eI = (0, D.uS)(eA?.applicationId),
        ek = null != eA && !eA.available && !eI,
        eP = ek ? (f ?? ef.intl.string(ef.t.RWouSQ)) : null,
        { guildId: eR } = (0, U.nG)(eA?.applicationId),
        eT = eA?.applicationId,
        eS = (0, m.bG)([H.A], () => (0, h.M)(H.A.theme)),
        eM = (0, m.bG)([k.Ay], () => k.Ay.useReducedMotion),
        eD = B.Q_.useSetting(),
        { isHoveringOrFocusing: eL } = (0, S.A)(eN),
        eO = (0, K.jM)(),
        { analyticsLocations: eH } = (0, R.Ay)(M ?? []),
        eB = a.useRef({ positionInSection: l, analyticsLocations: eH }),
        [ew, eF] = a.useState(!1),
        eG = (0, m.bG)([$.A], () => (null != n ? $.A.getNormalizedSKUEligibility(n) : void 0), [n]),
        eU = (function (e, l) {
            let t = (0, m.bG)([w.A], () => w.A.get(e)),
                [n, r] = a.useState(!1),
                [i, o] = a.useState(!1),
                s = a.useMemo(() => (0, U.xf)(t), [t]),
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
                    if (null == s) return void o(!0);
                    let e = !0;
                    return (
                        (0, q.l0)(s.toString()).finally(() => {
                            e && o(!0);
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, [i, s, l, t?.id]),
                a.useMemo(() => n && i, [n, i])
            );
        })(n, ew),
        eW = (0, O.JL)({ sku: eA }),
        eK = eW?.amount,
        { display: eY, reward: e$, offers: ez } = (0, V.b)({ surface: "card", applicationId: eT, skuId: n }),
        eq = a.useMemo(() => ez.find((e) => e.type === L.B8.ORB_REDEMPTION) ?? null, [ez]),
        eV = (0, z.oG)({ orbPriceAmount: eK, spendOrbsOffer: eq }),
        eJ = (0, T.h)(eA?.applicationId),
        {
            isSelectionActive: eQ,
            selected: eZ,
            setSelected: eX,
            disabled: e0,
        } = (0, ee.SS)(n, eA?.applicationId, { disabled: Q }),
        {
            priceComponent: e1,
            extendedHeight: e3,
            displayPrice: e2,
            shownPriceDetails: e9,
        } = (function (e) {
            let { sku: l, orbsGate: t, orbPriceAmount: n, promotion: i, reward: o, showOrbsOnly: s = !1 } = e,
                c = (0, O.ou)({ sku: l }),
                { normalPrice: u, discountedPrice: d, discountPercent: m, userPrice: x } = (0, O.j9)(c),
                f = a.useMemo(
                    () =>
                        null == o || o.type !== L.Ns.ACTION || o.amount <= 0
                            ? null
                            : (0, r.jsx)("div", {
                                  className: ea.pt,
                                  children: (0, r.jsx)(p.E, {
                                      variant: "text-sm/semibold",
                                      color: "currentColor",
                                      children: ef.intl.format(ef.t.GiVd2Q, {
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
                return null != l && (0, G.mC)(l)
                    ? i?.flavor === "nitro" && null != d
                        ? {
                              priceComponent: (0, r.jsx)(ec.A, { discountedPrice: d, normalPrice: u }),
                              extendedHeight: !1,
                              displayPrice: x,
                              shownPriceDetails: { ...e, orbsAmount: null },
                          }
                        : s && null != n && n > 0
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
                                      className: ea.p6,
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
                                                className: ea.p6,
                                                children: [
                                                    null != u &&
                                                        (0, r.jsx)(p.E, {
                                                            className: ea.of,
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
        })({ sku: eA, orbsGate: eV, orbPriceAmount: eK, promotion: eY, reward: e$, showOrbsOnly: u }),
        e8 = 2 !== i && eU ? e9 : ev,
        e7 = a.useCallback((e) => {
            eF(e);
        }, []),
        e4 = a.useMemo(
            () => c()(ea.Nr, { [ea.ax]: 0 === i, [ea.GW]: 1 === i, [ea.jz]: 2 === i, [ea.WB]: 3 === i }),
            [i],
        ),
        { handleCardHover: e5, handleCardUnhover: e6 } = (function (e) {
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
                            (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
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
            applicationId: eT,
            guildId: eR,
            analyticsContext: eO,
            positionInSection: l,
            analyticsLocations: eH,
            shownPriceDetails: e8,
        }),
        { handleCardVisibilityChange: le } = (function (e) {
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
                    (F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
                        placement: e,
                        slayer_storefront_session_id: r,
                        sku_id: l,
                        sku_storefront_promotion_id: (0, J.Z)(l),
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
                        ep.A.increment({
                            name: ex.K.SLAYER_STOREFRONT_CARD_IMPRESSION,
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
            applicationId: eT,
            guildId: eR,
            analyticsContext: eO,
            positionInSection: l,
            analyticsLocations: eH,
            shownPriceDetails: e8,
        });
    a.useEffect(() => {
        le(ew);
    }, [ew]);
    let ll = a.useCallback(
            (e) => {
                let { analyticsLocations: l, positionInSection: t } = eB.current,
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
                    } = eO;
                F.default.track(em.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                    slayer_storefront_session_id: r,
                    sku_id: n,
                    sku_storefront_promotion_id: (0, J.Z)(n),
                    guild_id: eR ?? a,
                    application_id: eT ?? i,
                    page_index: o,
                    page_title: s,
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
            [n, eT, eR, eO, e8],
        ),
        { primaryIconAsset: lt, primaryIconLabel: ln } = a.useMemo(() => (0, U.Cv)(eA, eT), [eA, eT]),
        { viewProductDetails: lr } = (0, Y.H)(),
        la = a.useMemo(() => {
            let e = eA?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == e) return null;
            let l = d()(),
                t = Math.max(d()(e).diff(l, "days"), 1);
            return t <= 3 ? ef.intl.formatToPlainString(ef.t.PWw4Vp, { days: t }) : null;
        }, [eA?.tenantMetadata?.socialLayer?.expiresAt]),
        li = (0, U.xf)(eA),
        lo = a.useMemo(() => {
            if (!eU) return "none";
            if (3 === i) return;
            let [e, l] = eb[i];
            return `linear-gradient(to top, ${eh} ${30 + e}%, ${eg} ${30 + l}%)`;
        }, [i, eU]),
        ls = a.useCallback(() => {
            null != eT && (0, W.iR)(eT, n);
        }, [eT, n]),
        lc = a.useCallback(() => {
            (e5(),
                null != eT &&
                    (ey.current = setTimeout(() => {
                        (0, W.iR)(eT, n);
                    }, 1e3)));
        }, [eT, n, e5]),
        lu = a.useCallback(() => {
            (e6(), null != ey.current && (clearTimeout(ey.current), (ey.current = null)));
        }, [e6]);
    a.useEffect(
        () => () => {
            null != ey.current && clearTimeout(ey.current);
        },
        [],
    );
    let ld = a.useCallback(() => {
            null != eT && lr?.(n, eT, eA?.slug);
        }, [eT, n, eA?.slug, lr]),
        lm = a.useCallback(
            (e) => {
                null != o && eA?.applicationId != null ? o(e, { skuId: n, applicationId: eA.applicationId }) : ld();
            },
            [o, eA?.applicationId, n, ld],
        ),
        lx = a.useCallback(
            (e) => {
                if (eQ) {
                    e0 || eX(!eZ);
                    return;
                }
                (ll(e_.bB.CARD), lm(e));
            },
            [eQ, ll, lm, eX, eZ, e0],
        ),
        lp = a.useCallback(
            (e) => {
                eD &&
                    (0, I.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("638221"), t.e("897249")]).then(t.bind(t, 10680));
                        return (l) => (0, r.jsx)(e, { ...l, skuId: n });
                    });
            },
            [eD, n],
        ),
        l_ = a.useMemo(() => [...eH, P.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON], [eH]),
        lf = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eJ &&
                        null != eA &&
                        (ll(e_.bB.BUY_WITH_ORBS_BUTTON),
                        (0, X.n)(eA, {
                            guildId: eR,
                            contextKey: eC,
                            onComplete: () => {
                                (0, Z.n)({ sku: eA, application: eJ, analyticsLocations: l_, contextKey: eC });
                            },
                            analyticsLocations: l_,
                        })));
            },
            [eA, eJ, eR, ll, l_, eC],
        ),
        lb = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    null != eA &&
                        (ll(e_.bB.BUY_BUTTON),
                        (0, X.a)(eA, { isGift: !1 }, { analyticsLocations: l_, guildId: eR, contextKey: eC })));
            },
            [eA, eR, ll, l_, eC],
        ),
        lh = a.useCallback(
            (e) => {
                (e.stopPropagation(), ll(e_.bB.VIEW_DETAILS_BUTTON), lm(e));
            },
            [ll, lm],
        ),
        lg = eA?.exclusive === !0 && 2 !== i,
        lC = a.useMemo(
            () =>
                null != eP
                    ? (0, r.jsx)(g.$, { variant: "primary", onClick: lh, text: eP, fullWidth: !0, tabIndex: ej })
                    : "CAN_CHECKOUT" === eV
                      ? (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: ls,
                            onClick: lf,
                            "aria-label": ef.intl.formatToPlainString(ef.t.yi41qQ, { orbPrice: eK }),
                            text: ef.intl.format(ef.t.JC15qj, {
                                orbPrice: eK,
                                orbIconHook: () =>
                                    (0, r.jsx)(
                                        _.C,
                                        { className: ea.fN, size: "sm", color: "currentColor" },
                                        "orbs-icon",
                                    ),
                            }),
                            fullWidth: !0,
                            tabIndex: ej,
                        })
                      : (0, r.jsx)(g.$, {
                            variant: "primary",
                            onMouseDown: ls,
                            onClick: lb,
                            text: null != e2 ? ef.intl.format(ef.t.Xp5WTn, { price: e2 }) : ef.intl.string(ef.t.boqtTA),
                            fullWidth: !0,
                            tabIndex: ej,
                        }),
            [eP, lh, eV, lf, lb, ls, eK, e2, ej],
        );
    if (null == eA) return null;
    let lv = (0, U.fq)(eA),
        lj = e1;
    eU ? null != eP && (lj = (0, r.jsx)(ed.l, { label: eP })) : (lj = (0, r.jsx)(eo, {}));
    let lE = null;
    eQ
        ? (lE = (0, r.jsx)("div", { className: ea.HI, children: (0, r.jsx)(C.P, { checked: eZ, disabled: e0 }) }))
        : null == eP && eA.exclusive
          ? (lE = (0, r.jsx)("div", { className: ea.fC, children: (0, r.jsx)(el.I, {}) }))
          : null == eP &&
            null != la &&
            (lE = (0, r.jsx)("div", {
                className: ea.qS,
                children: (0, r.jsx)(v.E, { type: { text: la }, variant: "inverted" }),
            }));
    let lN = lg ? (0, r.jsx)("div", { className: ea.mN, "aria-hidden": !0 }) : null,
        ly = (0, r.jsx)(x.L, {
            innerRef: eN,
            onChange: e7,
            threshold: 0,
            children: (0, r.jsxs)(j.s, {
                onClick: lx,
                onContextMenu: lp,
                onMouseEnter: lc,
                onMouseLeave: lu,
                className: c()(e4, { [ea.Zl]: !eM && 2 !== i, [ea.BN]: eS, [eS ? ea.Mn : ea.YF]: eL, [ea.Rc]: !eU }, s),
                ref: eN,
                buttonProps: { ...eu, role: "button" },
                onFocus: () => eu?.onFocus?.(),
                "aria-label": null != eP ? `${eA.name}, ${eP}` : eA.name,
                children: [
                    lE,
                    (0, r.jsx)(eE, {
                        sku: eA,
                        guildId: eR,
                        isCardHovered: eL,
                        variant: i,
                        trackCardClick: ll,
                        analyticsLocations: eH,
                        analyticsContext: eO,
                        tabIndex: ej,
                    }),
                    null != lv
                        ? eU
                            ? (0, r.jsx)(en.A, {
                                  containerClassName: ea.Vl,
                                  foregroundImageClassName: ea.wP,
                                  cardImage: lv,
                                  altText: eA.name,
                                  shape: "custom",
                                  backgroundImageClassName: ea.GC,
                                  cardBackgroundImage: li,
                                  cssPosition: "absolute",
                              })
                            : (0, r.jsx)(ei, {})
                        : (0, r.jsx)("div", {
                              className: ea.t7,
                              children: (0, r.jsx)(E.q, {
                                  color: "white",
                                  size: "custom",
                                  height: 80,
                                  width: 80,
                                  className: ea.Cw,
                              }),
                          }),
                    2 !== i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("div", { className: ea.iZ, style: { background: lo } }),
                                  (0, r.jsx)(N.N, {
                                      theme: em.NJ8.DARK,
                                      children: (e) =>
                                          (0, r.jsxs)("div", {
                                              className: c()(ea.zH, e),
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: c()(ea.gn, {
                                                          [ea.ov]: null == eP && !(0, G.mC)(eA),
                                                          [ea.w4]: null == eP && e3,
                                                      }),
                                                      children: [
                                                          eU &&
                                                              (0, r.jsx)("div", {
                                                                  className: ea.S1,
                                                                  children: (0, r.jsx)(et.V, {
                                                                      textColor: "text-overlay-light",
                                                                  }),
                                                              }),
                                                          eU
                                                              ? (0, r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        null != lt &&
                                                                            (0, r.jsx)("img", {
                                                                                src: lt.toString(),
                                                                                alt: ln,
                                                                                className: ea.ye,
                                                                            }),
                                                                        (0, r.jsx)(p.E, {
                                                                            className: 3 === i ? ea.TJ : void 0,
                                                                            color: "text-overlay-light",
                                                                            variant: "text-md/medium",
                                                                            lineClamp: 1,
                                                                            children: eA.name,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, r.jsx)(eo, {}),
                                                      ],
                                                  }),
                                                  (0, r.jsx)("div", { className: ea.iQ, children: lj }),
                                              ],
                                          }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: ea.li,
                                      children: (0, r.jsxs)(y.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              ek || eG
                                                  ? lC
                                                  : (0, r.jsx)(A.m, {
                                                        text: ef.intl.string(ef.t.IqlPbQ),
                                                        children: (0, r.jsx)(g.$, {
                                                            variant: "primary",
                                                            onClick: lh,
                                                            text: ef.intl.string(ef.t.KLBTgF),
                                                            fullWidth: !0,
                                                            tabIndex: ej,
                                                        }),
                                                    }),
                                              !ek &&
                                                  (0, r.jsx)(er.A, {
                                                      tabIndex: ej,
                                                      tooltipAriaHidden: 3 === i,
                                                      onGift: (e) => {
                                                          (e.stopPropagation(),
                                                              ll(e_.bB.GIFT_BUTTON),
                                                              (0, X.a)(
                                                                  eA,
                                                                  { isGift: !0 },
                                                                  {
                                                                      analyticsLocations: [
                                                                          ...eH,
                                                                          P.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON,
                                                                      ],
                                                                      contextKey: eC,
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
    return lg ? (0, r.jsxs)("div", { className: ea.ur, children: [lN, ly] }) : ly;
}
