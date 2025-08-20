n.d(t, {
    AF: () => G,
    hd: () => q,
    zz: () => z,
}),
    n(388685),
    n(953529),
    n(781311),
    n(997841);
var r = n(951288),
    i = n(647438),
    l = n(905322),
    o = n(200207),
    s = n(269210),
    a = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(100527),
    p = n(906732),
    b = n(565138),
    m = n(270144),
    f = n(171246),
    j = n(930155),
    v = n(929011),
    g = n(889989),
    y = n(263519),
    O = n(430824),
    h = n(55563),
    x = n(551428),
    P = n(626135),
    I = n(768581),
    k = n(630388),
    S = n(73346),
    w = n(624138),
    N = n(591759),
    Z = n(601911),
    E = n(150414),
    T = n(110742),
    D = n(277941),
    R = n(680005),
    A = n(955335),
    M = n(981631),
    _ = n(388032),
    C = n(163696);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = new Intl.DateTimeFormat(_.intl.currentLocale, {
    month: "short",
    day: "numeric",
});
function G(e) {
    let { app: t, guildId: n, subscriptions: o, otps: s } = e,
        u = i.useMemo(() => (0, Z.y)(t, 100), [t]),
        { bot: b } = t,
        m = i.useMemo(() => {
            var e;
            if ((null == b ? void 0 : b.banner) == null) return;
            let t = (0, I.aN)({
                id: b.id,
                banner: b.banner,
                size: 1024,
                canAnimate: !1,
            });
            return null != t && null != (e = N.Z.toURLSafe(t)) ? e : void 0;
        }, [b]),
        f = i.useMemo(() => {
            var e;
            if ((null == b ? void 0 : b.banner) == null) return;
            let t = (0, I.aN)({
                id: b.id,
                banner: b.banner,
                size: 1024,
                canAnimate: !0,
            });
            return null != t && null != (e = N.Z.toURLSafe(t)) ? e : void 0;
        }, [b]),
        j = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        v = i.useMemo(() => [...o.map((e) => e.skuId), ...s.map((e) => e.skuId)], [o, s]),
        { analyticsLocations: g } = (0, p.ZP)(d.Z.APP_STOREFRONT);
    return (
        i.useEffect(() => {
            0 !== v.length &&
                P.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: t.id,
                    sku_ids: v,
                    location_stack: g,
                });
        }, [g, t.id, v]),
        (0, r.jsxs)("div", {
            className: C.wrapper,
            children: [
                (0, r.jsx)(l.j, {
                    title: t.name,
                    iconSrc: u,
                    backgroundSrc: m,
                    animatedBackgroundSrc: f,
                    prefersReducedMotion: j,
                }),
                (0, r.jsx)(B, {
                    appId: t.id,
                    subscriptions: o,
                    otps: s,
                    guildId: n,
                }),
            ],
        })
    );
}
function B(e) {
    let { appId: t, subscriptions: n, otps: i, guildId: l } = e;
    return (0, r.jsxs)("div", {
        className: C.productsContainer,
        children: [
            n.length > 0 &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.r, { subscriptions: n }),
                        (0, r.jsx)("div", {
                            className: C.productSection,
                            children: n.map((e) =>
                                (0, r.jsx)(
                                    z,
                                    {
                                        appId: t,
                                        guildId: l,
                                        listing: e,
                                        subscriptionType: (0, f.KW)(e.skuFlags) ? "user" : "guild",
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            i.length > 0 &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: "heading-lg/semibold",
                            children: _.intl.string(_.t.yUGTs7),
                        }),
                        (0, r.jsx)("div", {
                            className: C.productSection,
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    q,
                                    {
                                        skuId: e.skuId,
                                        appId: t,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
        ],
    });
}
function z(e) {
    var t, l;
    let { appId: o, guildId: c, listing: d, subscriptionType: p, onDetails: v } = e,
        { data: x } = (0, j.H)(d.skuId),
        P = null == x ? void 0 : x[0],
        I = (0, a.e7)([h.Z], () => h.Z.get(d.skuId), [d.skuId]),
        k = (0, a.e7)([O.Z], () => O.Z.getGuild(c), [c]),
        S = (0, a.e7)([h.Z], () => h.Z.getParentSKU(d.skuId), [d.skuId]),
        w = (0, m.Ev)(S, c),
        N = null == w ? void 0 : w.subscription,
        Z = (0, m.cr)(S, c),
        T = null != N && (0, f.Jf)(N, I),
        D =
            null != Z &&
            (null == w || null == (t = w.subscriptionPlan) ? void 0 : t.id) !==
                (null == Z ? void 0 : Z.subscriptionPlan.id),
        A = !1 === T && (null == Z ? void 0 : Z.subscriptionPlan.skuId) === d.skuId,
        G = (null == w ? void 0 : w.subscriptionPlan.skuId) === d.skuId,
        {
            openModal: B,
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: q,
        } = (0, y.Z)({
            skuId: d.skuId,
            initialSubscribeForGuild: c,
            analyticsLocation: M.Sbl.APP_STOREFRONT,
        }),
        V = i.useMemo(() => {
            var e;
            return null == (e = d.benefits)
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, g.n)(o, e.icon),
                  }));
        }, [o, d.benefits]),
        K = i.useMemo(() => (null != d.thumbnail ? (0, E.q)(o, d.thumbnail, 256) : void 0), [o, d.thumbnail]),
        J = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    R.pV,
                    L(F({}, e), {
                        appId: o,
                        subscriptionType: p,
                        skuId: d.skuId,
                        subscriptionPlan: P,
                        state: z,
                    }),
                ),
            [o, p, d.skuId, P, z],
        ),
        W = i.useMemo(() => {
            if (D && (null == N ? void 0 : N.currentPeriodEnd) != null) {
                let e = U.format(null == N ? void 0 : N.currentPeriodEnd);
                if (G) return _.intl.formatToPlainString(_.t.EV2lZ2, { date: e });
                if (A) return _.intl.formatToPlainString(_.t["2w6+ND"], { date: e });
            }
            if (q)
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != k &&
                            (0, r.jsx)(b.Z, {
                                guild: k,
                                size: b.Z.Sizes.MINI,
                            }),
                        _.intl.string(_.t.l8ufqK),
                    ],
                });
        }, [null == N ? void 0 : N.currentPeriodEnd, k, D, G, q, A]),
        X =
            null != W
                ? (0, r.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: C.subscriptionCardSubtext,
                      children: W,
                  })
                : void 0;
    return (0, r.jsx)(s.Uj, {
        title: d.summary,
        subtitle: X,
        maxBenefits: null != X ? s.ZI - 1 : s.ZI,
        description: null != (l = d.description) ? l : void 0,
        imgSrc: K,
        onPurchase: B,
        renderPurchaseButton: J,
        benefitItems:
            null != V
                ? V.map((e) =>
                      (0, r.jsx)(
                          s.Gm,
                          {
                              description: e.title,
                              icon: e.icon,
                          },
                          e.id,
                      ),
                  )
                : void 0,
        onDetails:
            null != v
                ? v
                : null != V
                  ? () => {
                        (0, u.ZDy)(async () => {
                            let { SubscriptionDetailsModal: e } = await Promise.resolve().then(n.bind(n, 519896));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    F(
                                        {
                                            appId: o,
                                            subscriptionType: p,
                                            skuId: d.skuId,
                                            guildId: c,
                                        },
                                        t,
                                    ),
                                );
                        });
                    }
                  : void 0,
    });
}
function q(e) {
    var t, i, l, s;
    let { skuId: c, appId: b, onDetails: m } = e,
        { analyticsLocations: f } = (0, p.ZP)(d.Z.APP_STOREFRONT),
        j = (0, a.e7)([x.Z], () => x.Z.getForSKU(c), [c]),
        g = (0, a.e7)([h.Z], () => h.Z.get(c), [c]),
        y = (0, T.M)(c);
    if (null == g) return null;
    let O = null != (i = g.name) ? i : "",
        P = null != (l = null == j || null == (t = j.description) ? void 0 : t.trim()) ? l : void 0,
        I =
            (null == j ? void 0 : j.headerBackground) != null &&
            null != (s = N.Z.toURLSafe((0, S._W)(b, j.headerBackground, 256)))
                ? s
                : void 0,
        Z = g.type === M.epS.DURABLE && y,
        E = g.type === M.epS.DURABLE ? (Z ? _.intl.string(_.t.bm82mp) : _.intl.string(_.t["6gprwc"])) : void 0,
        { price: A } = g;
    if (null == A) return null;
    let C = (e) => {
        e.stopPropagation(),
            (0, v.r)({
                appId: b,
                skuId: g.id,
                analyticsLocations: f,
                isGift: !0,
            });
    };
    return (0, r.jsx)(o.I, {
        title: O,
        description: P,
        headerImage: I,
        availabilityLabel: E,
        PurchaseButton: (e) =>
            (0, r.jsx)(
                R.YG,
                L(F({}, e), {
                    appId: b,
                    sku: g,
                }),
            ),
        GiftButton: (0, k.yE)(g.flags, M.l4R.AVAILABLE_FOR_APPLICATION_GIFTING)
            ? () =>
                  (0, r.jsx)(D.Z, {
                      onGift: C,
                      tooltipDelay: 250,
                  })
            : void 0,
        onPurchase: () => {
            (0, v.r)({
                appId: b,
                skuId: g.id,
                analyticsLocations: f,
            });
        },
        onDetails:
            null != m
                ? m
                : (0, w.Ew)(P)
                  ? void 0
                  : () => {
                        (0, u.ZDy)(async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(n.bind(n, 147496));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    F(
                                        {
                                            appId: b,
                                            skuId: c,
                                        },
                                        t,
                                    ),
                                );
                        });
                    },
    });
}
