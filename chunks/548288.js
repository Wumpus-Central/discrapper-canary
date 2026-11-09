l.d(i, { default: () => es });
var a = l(477900),
    s = l(582128),
    t = l(503698),
    n = l.n(t),
    r = l(281445),
    d = l(855986),
    c = l(843282),
    o = l(866665),
    u = l(834730),
    m = l(224640),
    x = l(408278),
    h = l(789645),
    v = l(534514),
    g = l(290136),
    j = l(95477),
    b = l(821609),
    p = l(287809),
    f = l(975571),
    N = l(889558),
    E = l(722178),
    C = l(940456),
    y = l(42957),
    A = l(814201),
    S = l(73825),
    k = l(793574),
    P = l(589078),
    I = l(97352),
    U = l(192308);
async function w(e) {
    let {
            skuId: i,
            gameName: s,
            gameId: t,
            serverName: n = "",
            regionId: r = "",
            activeSubscription: d,
            isPlanUpgrade: c = !1,
            planGroup: o = [],
            onViewServer: u,
            onBack: m,
        } = e,
        x = null != d,
        h = I.A.getForSKU(i)[0]?.id;
    if (null == h) {
        let e = await (0, S.ur)(i);
        h = e[0]?.id;
    }
    x && (await Promise.all(o.filter((e) => e !== i).map((e) => (0, S.ur)(e))));
    let v = o.flatMap((e) => I.A.getForSKU(e).map((e) => e.id));
    return P.UnifiedCheckoutFlowManagerSingletons[P.CL.GAME_SERVER_SUBSCRIPTION_CHECKOUT].get().openCheckoutModal({
        checkoutConfiguration: { skuId: i, activeSubscription: d ?? null },
        sharedCheckoutParams: { planGroup: v, skipConfirm: !0, initialPlanId: h },
        unifiedCheckoutProviderProps: { analyticsLocations: [k.A.GAME_SERVER_SETUP_MODAL] },
        tenantParams: {
            serverName: n,
            regionId: r,
            gameId: t,
            gameName: s,
            isPlanChange: x,
            isPlanUpgrade: c,
            onBack: m,
        },
        checkoutHandlers: {
            onComplete: () => {
                var e;
                let i = x && c && null != d ? d.id : null;
                (null != i && (0, C.hE)(i),
                    (0, C.hU)()
                        .catch(() => {})
                        .then(() => {
                            null != i && (0, C.hE)(i);
                        }),
                    (e = {
                        gameId: t,
                        gameName: s,
                        onViewServer: u ?? (() => {}),
                        isPlanChange: x,
                        isDowngrade: x && !c,
                        renewalDate: d?.currentPeriodEnd,
                    }),
                    (0, U.mM)(async () => {
                        let { default: i } = await Promise.all([l.e(909189), l.e(489541)]).then(l.bind(l, 978084));
                        return (l) => (0, a.jsx)(i, { ...l, ...e });
                    }));
            },
        },
        modalAPIOptions: { modalKey: "game-server-subscription-payment-modal" },
    });
}
var z = l(349085),
    V = l(115815),
    L = l(289444),
    M = l(231513),
    R = l(885574),
    G = l(105518),
    D = l(792996),
    O = l(233658);
function T(e) {
    let { gameName: i, text: l } = e;
    return (0, a.jsxs)("div", {
        className: O.lm,
        children: [
            (0, a.jsx)(R.CircleInformationIcon, {
                className: O.Kk,
                size: "custom",
                width: 24,
                height: 24,
                color: "currentColor",
            }),
            (0, a.jsx)(u.E, {
                className: O.Qq,
                variant: "body-sm/medium",
                color: "text-default",
                tag: "p",
                children: l ?? D.intl.format(G.default.uVpJYf, { gameName: i }),
            }),
        ],
    });
}
var _ = l(403581),
    W = l(939249),
    K = l(778705),
    H = l(580630),
    Z = l(682901),
    F = l(77271);
function B(e) {
    let { nitroPriceAmount: i, priceCurrency: l } = e,
        t = s.useCallback(() => {
            (0, K.A)({ subscriptionTier: Z.pe.TIER_2, analyticsLocations: [k.A.GAME_SERVER_PAGE] });
        }, []),
        n = (0, H.RS)(i, l);
    return (0, a.jsxs)("div", {
        className: F.kL,
        children: [
            (0, a.jsx)(_.NitroWheelIcon, {
                className: F.Kk,
                size: "custom",
                width: 16,
                height: 16,
                color: "currentColor",
            }),
            (0, a.jsx)(u.E, {
                variant: "body-xs/medium",
                tag: "span",
                children: D.intl.format(D.t.Sv8iic, {
                    price: n,
                    subscribeNowHook: (e) => (0, a.jsx)(W.D, { className: F.FS, onClick: t, children: e }),
                }),
            }),
        ],
    });
}
var Q = l(402317),
    Y = l(138804);
function q(e) {
    let { gameName: i, coverUrl: l, plan: s } = e;
    return (0, a.jsxs)("div", {
        className: Y.Nr,
        children: [
            (0, a.jsxs)("div", {
                className: Y.ys,
                "aria-hidden": !0,
                children: [
                    null != l && (0, a.jsx)("img", { className: Y.Fc, src: l, alt: "" }),
                    (0, a.jsx)("div", { className: Y.ex }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: Y.wx,
                children: [
                    (0, a.jsxs)("div", {
                        className: Y.Vs,
                        children: [
                            null != l
                                ? (0, a.jsx)("img", { className: Y.uP, src: l, alt: "" })
                                : (0, a.jsx)("div", {
                                      className: Y.Vj,
                                      children: (0, a.jsx)(u.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-muted",
                                          children: i,
                                      }),
                                  }),
                            (0, a.jsx)("div", { className: Y.tw, "aria-hidden": !0 }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: Y.i8,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: i,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: s.name,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: Y.M1,
                children: [
                    (0, a.jsxs)("div", {
                        className: Y.zu,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: s.playersLabel,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: D.intl.string(G.default.i5lFSU),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: Y.Wc }),
                    (0, a.jsxs)("div", {
                        className: Y.zu,
                        children: [
                            (0, a.jsxs)("div", {
                                className: Y.mi,
                                children: [
                                    (0, a.jsx)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: s.ramValueLabel,
                                    }),
                                    (0, a.jsx)(u.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-default",
                                        tag: "span",
                                        children: s.ramUnitLabel,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: D.intl.string(G.default["3+gt2d"]),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: Y.Wc }),
                    (0, a.jsxs)("div", {
                        className: Y.zu,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                tag: "div",
                                children: s.vcpusLabel,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                tag: "div",
                                children: D.intl.string(G.default["jlz/q6"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: Y.UK, children: (0, a.jsx)(Q.X, {}) }),
        ],
    });
}
var J = l(199781),
    X = l(628049),
    $ = l(652215),
    ee = l(950915);
let ei = [];
function el(e) {
    let { region: i, disabled: l } = e,
        { pingText: s, pingCircleStyle: t } = (0, V.b)(i.pingUrl);
    return (0, a.jsxs)("div", {
        className: ee.wV,
        children: [
            (0, a.jsx)(u.E, { variant: "body-sm/medium", color: "text-default", tag: "span", children: i.name }),
            !0 === l
                ? (0, a.jsx)(u.E, {
                      variant: "body-xs/medium",
                      color: "text-subtle",
                      tag: "span",
                      children: D.intl.string(G.default.aCyHe2),
                  })
                : "" !== i.pingUrl
                  ? (0, a.jsxs)("div", {
                        className: ee.$T,
                        children: [
                            (0, a.jsx)("div", { className: n()(ee.Jg, t) }),
                            (0, a.jsx)(u.E, {
                                variant: "body-xs/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: s,
                            }),
                        ],
                    })
                  : null,
        ],
    });
}
function ea(e) {
    let { plan: i, canUseShopDiscount: l } = e;
    return (0, a.jsxs)("div", {
        className: ee.wV,
        children: [
            (0, a.jsx)(u.E, { variant: "body-sm/medium", color: "text-default", tag: "span", children: i.name }),
            (0, a.jsx)(u.E, {
                variant: "body-xs/medium",
                color: "text-subtle",
                tag: "span",
                children: l && null != i.nitroPriceLabel ? i.nitroPriceLabel : i.standardPriceLabel,
            }),
        ],
    });
}
function es(e) {
    let {
            gameName: i,
            gameId: l,
            coverUrl: t,
            plans: n = ei,
            initialPlanId: S,
            initialRegionId: k,
            initialRegionName: P,
            initialServerName: I,
            activeSubscription: U,
            onViewServer: V,
            ...R
        } = e,
        O = null != U,
        _ = (0, z.A)(l, "cover") ?? t;
    s.useEffect(() => {
        (0, C.dk)();
    }, []);
    let W = (0, d.bG)([y.A], () => y.A.getRegions()),
        K = (0, d.bG)([y.A], () => y.A.getRegionState()),
        H = (0, d.bG)([y.A], () => y.A.isCreationDisabled()),
        Z = (0, d.bG)([A.A], () => A.A.getGameServers().length),
        F = (0, d.bG)([A.A], () => A.A.getMaxServers()),
        Q = !O && Z >= F,
        [Y, es] = s.useState(I ?? ""),
        [et, en] = s.useState(k),
        [er, ed] = s.useState(S ?? n[0]?.id),
        ec = (0, d.bG)([p.default], () => E.Ay.canUseShopDiscounts(p.default.getCurrentUser())),
        { isValid: eo, errors: eu } = (0, L.u)(Y),
        em = n.find((e) => e.id === er) ?? n[0],
        ex =
            !ec &&
            em?.nitroPriceAmount != null &&
            null != em.standardPriceAmount &&
            null != em.priceCurrency &&
            em.nitroPriceAmount < em.standardPriceAmount,
        eh = O ? n.findIndex((e) => e.id === S) : -1,
        ev = null != em ? n.findIndex((e) => e.id === em.id) : -1,
        eg = eh >= 0 && ev > eh,
        ej = O && null != em && em.id !== S,
        eb = O && Y.trim().length > 0 && eo && Y.trim() !== (I ?? "").trim(),
        ep = O
            ? ej
                ? eh >= 0 && ev >= 0 && ev < eh
                    ? D.intl.string(G.default.UGbET9)
                    : D.intl.string(G.default.yUWVlo)
                : D.intl.string(D.t["R3BPH+"])
            : D.intl.string(D.t["3PatSz"]),
        ef = s.useMemo(
            () =>
                [...W]
                    .sort((e, i) => (0, M.A)(e, i, K))
                    .map((e) => ({ value: e, label: e.name, disabled: !0 !== e.enabled })),
            [W, K],
        ),
        eN = s.useMemo(() => n.map((e) => ({ value: e, label: e.name })), [n]),
        eE = O ? (ej && !H) || eb : !H && !Q && Y.trim().length > 0 && eo && null != et,
        eC = s.useCallback(() => {
            (0, J.S)({
                gameName: i,
                gameId: l,
                coverUrl: t,
                plans: n,
                activeSubscription: U,
                initialPlanId: er,
                initialRegionId: et,
                initialRegionName: P,
                initialServerName: Y,
                onViewServer: V,
            });
        }, [i, l, t, n, U, er, et, P, Y, V]),
        ey = s.useCallback(() => {
            if (null != em) {
                if (O) {
                    if (!eE || null == U) return;
                    (eb && (0, C.Ce)(U.id, Y.trim()),
                        ej &&
                            w({
                                skuId: em.id,
                                gameName: i,
                                gameId: l,
                                activeSubscription: U,
                                isPlanUpgrade: eg,
                                planGroup: n.map((e) => e.id),
                                onViewServer: V,
                                onBack: eC,
                            }),
                        R.onClose());
                    return;
                }
                eE &&
                    null != et &&
                    (w({
                        skuId: em.id,
                        gameName: i,
                        gameId: l,
                        serverName: Y,
                        regionId: et,
                        onViewServer: V,
                        onBack: eC,
                    }),
                    R.onClose());
            }
        }, [O, eg, ej, eb, U, eE, em, n, et, i, l, Y, R, eC, V]),
        eA = X.eh[r.X.SHOCKBYTE] ?? "";
    return (0, a.jsxs)(m.d, {
        ...R,
        size: "lg",
        "aria-label": D.intl.string(G.default.RLGW9z),
        children: [
            (0, a.jsx)("div", {
                className: ee.b,
                children: (0, a.jsx)(x.K, {
                    size: "sm",
                    variant: "icon-only",
                    icon: h.XSmallIcon,
                    onClick: R.onClose,
                    "aria-label": D.intl.string(D.t.cpT0Cq),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ee.Qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: D.intl.string(G.default.RLGW9z),
                    }),
                    Q &&
                        (0, a.jsx)(T, {
                            gameName: i,
                            text: D.intl.formatToPlainString(G.default["Yi+FzV"], { maxInstances: F }),
                        }),
                    (0, a.jsxs)("div", {
                        className: ee.nM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ee.OA,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: ee.ZZ,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: ee.bk,
                                                children: [
                                                    (0, a.jsx)(v.D, {
                                                        variant: "heading-xs/semibold",
                                                        color: "text-muted",
                                                        children: D.intl.string(G.default.rOMEZd),
                                                    }),
                                                    (0, a.jsx)(o.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default.THJY1n),
                                                        children: (0, a.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, a.jsx)(g.CircleQuestionIcon, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(j.k, {
                                                value: Y,
                                                onChange: es,
                                                maxLength: 32,
                                                error: eu.name,
                                                disabled: Q,
                                                placeholder: D.intl.string(G.default.ElVYr3),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: ee.ZZ,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: ee.bk,
                                                children: [
                                                    (0, a.jsx)(v.D, {
                                                        variant: "heading-xs/semibold",
                                                        color: "text-muted",
                                                        children: D.intl.string(G.default.nB5OZ4),
                                                    }),
                                                    (0, a.jsx)(o.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default["61N+P6"]),
                                                        children: (0, a.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, a.jsx)(g.CircleQuestionIcon, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            O
                                                ? (0, a.jsx)(j.k, { value: P ?? "", onChange: $.tEg, disabled: !0 })
                                                : (0, a.jsx)(c.Pw, {
                                                      serialize: (e) => e.id,
                                                      isSelected: (e) => e.id === et,
                                                      options: ef,
                                                      select: (e) => en(e.id),
                                                      isDisabled: Q,
                                                      placeholder: D.intl.string(G.default["k+RTIm"]),
                                                      renderOptionLabel: (e) =>
                                                          (0, a.jsx)(el, { region: e.value, disabled: e.disabled }),
                                                      renderOptionValue: (e) =>
                                                          null != e[0]
                                                              ? (0, a.jsx)(el, {
                                                                    region: e[0].value,
                                                                    disabled: e[0].disabled,
                                                                })
                                                              : null,
                                                      "data-migration-pending": !0,
                                                  }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: ee.ZZ,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: ee.bk,
                                                children: [
                                                    (0, a.jsx)(v.D, {
                                                        variant: "heading-xs/semibold",
                                                        color: "text-muted",
                                                        children: D.intl.string(G.default.I143Ml),
                                                    }),
                                                    (0, a.jsx)(o.m, {
                                                        position: "top",
                                                        text: D.intl.string(G.default["/wD5IM"]),
                                                        children: (0, a.jsx)("span", {
                                                            className: ee.WV,
                                                            tabIndex: 0,
                                                            children: (0, a.jsx)(g.CircleQuestionIcon, {
                                                                size: "custom",
                                                                width: 14,
                                                                height: 14,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(c.Pw, {
                                                serialize: (e) => e.id,
                                                isSelected: (e) => e.id === er,
                                                options: eN,
                                                select: (e) => ed(e.id),
                                                isDisabled: Q,
                                                placeholder: D.intl.string(G.default.JdMW0i),
                                                renderOptionLabel: (e) =>
                                                    (0, a.jsx)(ea, { plan: e.value, canUseShopDiscount: ec }),
                                                renderOptionValue: (e) =>
                                                    null != e[0]
                                                        ? (0, a.jsx)(ea, { plan: e[0].value, canUseShopDiscount: ec })
                                                        : null,
                                                "data-migration-pending": !0,
                                            }),
                                            ex &&
                                                em?.nitroPriceAmount != null &&
                                                null != em.priceCurrency &&
                                                (0, a.jsx)(B, {
                                                    nitroPriceAmount: em.nitroPriceAmount,
                                                    priceCurrency: em.priceCurrency,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != em && (0, a.jsx)(q, { gameName: i, coverUrl: _, plan: em }),
                        ],
                    }),
                    (0, a.jsx)(u.E, {
                        className: ee.aL,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        tag: "p",
                        children: D.intl.format(G.default["2zdDw5"], {
                            cta: ep,
                            provider: D.intl.string(G.default.z5lesv),
                            termsOfServiceUrl: () => (0, N.h)({ href: eA }),
                            helpCenterUrl: f.A.getArticleURL($.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                    H && (0, a.jsx)(T, { gameName: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ee.qr,
                children: (0, a.jsx)(b.$, { variant: "primary", size: "md", text: ep, onClick: ey, disabled: !eE }),
            }),
        ],
    });
}
