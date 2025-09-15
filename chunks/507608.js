n.d(t, {
    AF: () => G,
    hd: () => q,
    zz: () => z,
}),
    n(388685),
    n(953529),
    n(781311);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(863650),
    s = n(78673),
    u = n(450911),
    a = n(481060),
    c = n(607070),
    d = n(100527),
    p = n(906732),
    b = n(565138),
    m = n(270144),
    v = n(171246),
    j = n(930155),
    f = n(929011),
    g = n(889989),
    y = n(263519),
    O = n(164670),
    h = n(430824),
    x = n(55563),
    P = n(551428),
    I = n(626135),
    k = n(768581),
    S = n(73346),
    w = n(624138),
    N = n(591759),
    Z = n(601911),
    T = n(150414),
    E = n(110742),
    D = n(277941),
    R = n(680005),
    M = n(955335),
    C = n(981631),
    F = n(388032),
    _ = n(163696);
function U(e) {
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
function A(e, t) {
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
let B = new Intl.DateTimeFormat(F.intl.currentLocale, {
    month: "short",
    day: "numeric",
});
function G(e) {
    let { app: t, guildId: n, subscriptions: s, otps: u } = e,
        a = i.useMemo(() => (0, Z.y)(t, 100), [t]),
        { bot: b } = t,
        m = i.useMemo(() => {
            var e;
            if ((null == b ? void 0 : b.banner) == null) return;
            let t = (0, k.aN)({
                id: b.id,
                banner: b.banner,
                size: 1024,
                canAnimate: !1,
            });
            return null != t && null != (e = N.Z.toURLSafe(t)) ? e : void 0;
        }, [b]),
        v = i.useMemo(() => {
            var e;
            if ((null == b ? void 0 : b.banner) == null) return;
            let t = (0, k.aN)({
                id: b.id,
                banner: b.banner,
                size: 1024,
                canAnimate: !0,
            });
            return null != t && null != (e = N.Z.toURLSafe(t)) ? e : void 0;
        }, [b]),
        j = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        f = i.useMemo(() => [...s.map((e) => e.skuId), ...u.map((e) => e.skuId)], [s, u]),
        { analyticsLocations: g } = (0, p.ZP)(d.Z.APP_STOREFRONT);
    return (
        i.useEffect(() => {
            0 !== f.length &&
                I.default.track(C.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: t.id,
                    sku_ids: f,
                    location_stack: g,
                });
        }, [g, t.id, f]),
        (0, r.jsxs)("div", {
            className: _.wrapper,
            children: [
                (0, r.jsx)(o.j, {
                    title: t.name,
                    iconSrc: a,
                    backgroundSrc: m,
                    animatedBackgroundSrc: v,
                    prefersReducedMotion: j,
                }),
                (0, r.jsx)(L, {
                    appId: t.id,
                    subscriptions: s,
                    otps: u,
                    guildId: n,
                }),
            ],
        })
    );
}
function L(e) {
    let { appId: t, subscriptions: n, otps: i, guildId: l } = e;
    return (0, r.jsxs)("div", {
        className: _.productsContainer,
        children: [
            n.length > 0 &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(M.r, { subscriptions: n }),
                        (0, r.jsx)("div", {
                            className: _.productSection,
                            children: n.map((e) =>
                                (0, r.jsx)(
                                    z,
                                    {
                                        appId: t,
                                        guildId: l,
                                        listing: e,
                                        subscriptionType: (0, v.KW)(e.skuFlags) ? "user" : "guild",
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
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-lg/semibold",
                            children: F.intl.string(F.t.yUGTs7),
                        }),
                        (0, r.jsx)("div", {
                            className: _.productSection,
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
    var t, o;
    let { appId: s, guildId: c, listing: d, subscriptionType: p, onDetails: f } = e,
        { data: O } = (0, j.H)(d.skuId),
        P = null == O ? void 0 : O[0],
        I = (0, l.e7)([x.Z], () => x.Z.get(d.skuId), [d.skuId]),
        k = (0, l.e7)([h.Z], () => h.Z.getGuild(c), [c]),
        S = (0, l.e7)([x.Z], () => x.Z.getParentSKU(d.skuId), [d.skuId]),
        w = (0, m.Ev)(S, c),
        N = null == w ? void 0 : w.subscription,
        Z = (0, m.cr)(S, c),
        E = null != N && (0, v.Jf)(N, I),
        D =
            null != Z &&
            (null == w || null == (t = w.subscriptionPlan) ? void 0 : t.id) !==
                (null == Z ? void 0 : Z.subscriptionPlan.id),
        M = !1 === E && (null == Z ? void 0 : Z.subscriptionPlan.skuId) === d.skuId,
        G = (null == w ? void 0 : w.subscriptionPlan.skuId) === d.skuId,
        {
            openModal: L,
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: q,
        } = (0, y.Z)({
            skuId: d.skuId,
            initialSubscribeForGuild: c,
            analyticsLocation: C.Sbl.APP_STOREFRONT,
        }),
        K = i.useMemo(() => {
            var e;
            return null == (e = d.benefits)
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, g.n)(s, e.icon),
                  }));
        }, [s, d.benefits]),
        V = i.useMemo(() => (null != d.thumbnail ? (0, T.q)(s, d.thumbnail, 256) : void 0), [s, d.thumbnail]),
        J = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    R.pV,
                    A(U({}, e), {
                        appId: s,
                        subscriptionType: p,
                        skuId: d.skuId,
                        subscriptionPlan: P,
                        state: z,
                    }),
                ),
            [s, p, d.skuId, P, z],
        ),
        W = i.useMemo(() => {
            if (D && (null == N ? void 0 : N.currentPeriodEnd) != null) {
                let e = B.format(null == N ? void 0 : N.currentPeriodEnd);
                if (G) return F.intl.formatToPlainString(F.t.EV2lZ2, { date: e });
                if (M) return F.intl.formatToPlainString(F.t["2w6+ND"], { date: e });
            }
            if (q)
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != k &&
                            (0, r.jsx)(b.Z, {
                                guild: k,
                                size: b.Z.Sizes.MINI,
                            }),
                        F.intl.string(F.t.l8ufqK),
                    ],
                });
        }, [null == N ? void 0 : N.currentPeriodEnd, k, D, G, q, M]),
        X =
            null != W
                ? (0, r.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: _.subscriptionCardSubtext,
                      children: W,
                  })
                : void 0;
    return (0, r.jsx)(u.Uj, {
        title: d.summary,
        subtitle: X,
        maxBenefits: null != X ? u.ZI - 1 : u.ZI,
        description: null != (o = d.description) ? o : void 0,
        imgSrc: V,
        onPurchase: L,
        renderPurchaseButton: J,
        benefitItems:
            null != K
                ? K.map((e) =>
                      (0, r.jsx)(
                          u.Gm,
                          {
                              description: e.title,
                              icon: e.icon,
                          },
                          e.id,
                      ),
                  )
                : void 0,
        onDetails:
            null != f
                ? f
                : null != K
                  ? () => {
                        (0, a.ZDy)(async () => {
                            let { SubscriptionDetailsModal: e } = await Promise.resolve().then(n.bind(n, 519896));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    U(
                                        {
                                            appId: s,
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
    var t, i, o, u;
    let { skuId: c, appId: b, onDetails: m } = e,
        { analyticsLocations: v } = (0, p.ZP)(d.Z.APP_STOREFRONT),
        j = (0, l.e7)([P.Z], () => P.Z.getForSKU(c), [c]),
        g = (0, l.e7)([x.Z], () => x.Z.get(c), [c]),
        y = (0, E.M)(c);
    if (null == g) return null;
    let h = null != (i = g.name) ? i : "",
        I = null != (o = null == j || null == (t = j.description) ? void 0 : t.trim()) ? o : void 0,
        k =
            (null == j ? void 0 : j.headerBackground) != null &&
            null != (u = N.Z.toURLSafe((0, S._W)(b, j.headerBackground, 256)))
                ? u
                : void 0,
        Z = g.type === C.epS.DURABLE && y,
        T = g.type === C.epS.DURABLE ? (Z ? F.intl.string(F.t.bm82mp) : F.intl.string(F.t["6gprwc"])) : void 0,
        { price: M } = g;
    if (null == M) return null;
    let _ = (e) => {
        e.stopPropagation(),
            (0, f.r)({
                appId: b,
                skuId: g.id,
                analyticsLocations: v,
                isGift: !0,
            });
    };
    return (0, r.jsx)(s.I, {
        title: h,
        description: I,
        headerImage: k,
        availabilityLabel: T,
        PurchaseButton: (e) =>
            (0, r.jsx)(
                R.YG,
                A(U({}, e), {
                    appId: b,
                    sku: g,
                }),
            ),
        GiftButton: (0, O.K)(g)
            ? () =>
                  (0, r.jsx)(D.Z, {
                      onGift: _,
                      tooltipDelay: 250,
                  })
            : void 0,
        onPurchase: () => {
            (0, f.r)({
                appId: b,
                skuId: g.id,
                analyticsLocations: v,
            });
        },
        onDetails:
            null != m
                ? m
                : (0, w.Ew)(I)
                  ? void 0
                  : () => {
                        (0, a.ZDy)(async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(n.bind(n, 147496));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    U(
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
