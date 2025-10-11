t.d(n, {
    AF: () => G,
    hd: () => K,
    zz: () => z,
}),
    t(388685),
    t(953529),
    t(781311);
var r = t(951288),
    i = t(647438),
    l = t(683074),
    s = t(214805),
    o = t(621082),
    a = t(442837),
    u = t(481060),
    c = t(607070),
    d = t(100527),
    p = t(906732),
    m = t(565138),
    b = t(270144),
    v = t(171246),
    g = t(930155),
    j = t(929011),
    f = t(889989),
    h = t(263519),
    x = t(164670),
    y = t(430824),
    P = t(55563),
    O = t(551428),
    I = t(626135),
    k = t(768581),
    S = t(73346),
    N = t(624138),
    w = t(591759),
    Z = t(601911),
    T = t(150414),
    E = t(110742),
    R = t(277941),
    D = t(680005),
    M = t(955335),
    C = t(981631),
    F = t(388032),
    _ = t(163696);
function U(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function A(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let B = new Intl.DateTimeFormat(F.intl.currentLocale, {
    month: "short",
    day: "numeric",
});
function G(e) {
    let { app: n, guildId: t, subscriptions: s, otps: o } = e,
        u = i.useMemo(() => (0, Z.y)(n, 100), [n]),
        { bot: m } = n,
        b = i.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, k.aN)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !1,
            });
            return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0;
        }, [m]),
        v = i.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, k.aN)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !0,
            });
            return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0;
        }, [m]),
        g = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        j = i.useMemo(() => [...s.map((e) => e.skuId), ...o.map((e) => e.skuId)], [s, o]),
        { analyticsLocations: f } = (0, p.ZP)(d.Z.APP_STOREFRONT);
    return (
        i.useEffect(() => {
            0 !== j.length &&
                I.default.track(C.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: j,
                    location_stack: f,
                });
        }, [f, n.id, j]),
        (0, r.jsxs)("div", {
            className: _.wrapper,
            children: [
                (0, r.jsx)(l.j, {
                    title: n.name,
                    iconSrc: u,
                    backgroundSrc: b,
                    animatedBackgroundSrc: v,
                    prefersReducedMotion: g,
                }),
                (0, r.jsx)(L, {
                    appId: n.id,
                    subscriptions: s,
                    otps: o,
                    guildId: t,
                }),
            ],
        })
    );
}
function L(e) {
    let { appId: n, subscriptions: t, otps: i, guildId: l } = e;
    return (0, r.jsxs)("div", {
        className: _.productsContainer,
        children: [
            t.length > 0 &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(M.r, { subscriptions: t }),
                        (0, r.jsx)("div", {
                            className: _.productSection,
                            children: t.map((e) =>
                                (0, r.jsx)(
                                    z,
                                    {
                                        appId: n,
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
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: F.intl.string(F.t.yUGTs7),
                        }),
                        (0, r.jsx)("div", {
                            className: _.productSection,
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    K,
                                    {
                                        skuId: e.skuId,
                                        appId: n,
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
    var n, l;
    let { appId: s, guildId: c, listing: d, subscriptionType: p, onDetails: j } = e,
        { data: x } = (0, g.H)(d.skuId),
        O = null == x ? void 0 : x[0],
        I = (0, a.e7)([P.Z], () => P.Z.get(d.skuId), [d.skuId]),
        k = (0, a.e7)([y.Z], () => y.Z.getGuild(c), [c]),
        S = (0, a.e7)([P.Z], () => P.Z.getParentSKU(d.skuId), [d.skuId]),
        N = (0, b.Ev)(S, c),
        w = null == N ? void 0 : N.subscription,
        Z = (0, b.cr)(S, c),
        E = null != w && (0, v.Jf)(w, I),
        R =
            null != Z &&
            (null == N || null == (n = N.subscriptionPlan) ? void 0 : n.id) !==
                (null == Z ? void 0 : Z.subscriptionPlan.id),
        M = !1 === E && (null == Z ? void 0 : Z.subscriptionPlan.skuId) === d.skuId,
        G = (null == N ? void 0 : N.subscriptionPlan.skuId) === d.skuId,
        {
            openModal: L,
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: K,
        } = (0, h.Z)({
            skuId: d.skuId,
            initialSubscribeForGuild: c,
            analyticsLocation: C.Sbl.APP_STOREFRONT,
        }),
        q = i.useMemo(() => {
            var e;
            return null == (e = d.benefits)
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, f.n)(s, e.icon),
                  }));
        }, [s, d.benefits]),
        V = i.useMemo(() => (null != d.thumbnail ? (0, T.q)(s, d.thumbnail, 256) : void 0), [s, d.thumbnail]),
        H = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    D.pV,
                    A(U({}, e), {
                        appId: s,
                        subscriptionType: p,
                        skuId: d.skuId,
                        subscriptionPlan: O,
                        state: z,
                    }),
                ),
            [s, p, d.skuId, O, z],
        ),
        J = i.useMemo(() => {
            if (R && (null == w ? void 0 : w.currentPeriodEnd) != null) {
                let e = B.format(null == w ? void 0 : w.currentPeriodEnd);
                if (G) return F.intl.formatToPlainString(F.t.EV2lZ2, { date: e });
                if (M) return F.intl.formatToPlainString(F.t["2w6+ND"], { date: e });
            }
            if (K)
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != k &&
                            (0, r.jsx)(m.Z, {
                                guild: k,
                                size: m.Z.Sizes.MINI,
                            }),
                        F.intl.string(F.t.l8ufqK),
                    ],
                });
        }, [null == w ? void 0 : w.currentPeriodEnd, k, R, G, K, M]),
        W =
            null != J
                ? (0, r.jsx)(u.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: _.subscriptionCardSubtext,
                      children: J,
                  })
                : void 0;
    return (0, r.jsx)(o.Uj, {
        title: d.summary,
        subtitle: W,
        maxBenefits: null != W ? o.ZI - 1 : o.ZI,
        description: null != (l = d.description) ? l : void 0,
        imgSrc: V,
        onPurchase: L,
        renderPurchaseButton: H,
        benefitItems:
            null != q
                ? q.map((e) =>
                      (0, r.jsx)(
                          o.Gm,
                          {
                              description: e.title,
                              icon: e.icon,
                          },
                          e.id,
                      ),
                  )
                : void 0,
        onDetails:
            null != j
                ? j
                : null != q
                  ? () => {
                        (0, u.ZDy)(async () => {
                            let { SubscriptionDetailsModal: e } = await Promise.resolve().then(t.bind(t, 519896));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    U(
                                        {
                                            appId: s,
                                            subscriptionType: p,
                                            skuId: d.skuId,
                                            guildId: c,
                                        },
                                        n,
                                    ),
                                );
                        });
                    }
                  : void 0,
    });
}
function K(e) {
    var n, i, l, o;
    let { skuId: c, appId: m, onDetails: b } = e,
        { analyticsLocations: v } = (0, p.ZP)(d.Z.APP_STOREFRONT),
        g = (0, a.e7)([O.Z], () => O.Z.getForSKU(c), [c]),
        f = (0, a.e7)([P.Z], () => P.Z.get(c), [c]),
        h = (0, E.M)(c);
    if (null == f) return null;
    let y = null != (i = f.name) ? i : "",
        I = null != (l = null == g || null == (n = g.description) ? void 0 : n.trim()) ? l : void 0,
        k =
            (null == g ? void 0 : g.headerBackground) != null &&
            null != (o = w.Z.toURLSafe((0, S._W)(m, g.headerBackground, 256)))
                ? o
                : void 0,
        Z = f.type === C.epS.DURABLE && h,
        T = f.type === C.epS.DURABLE ? (Z ? F.intl.string(F.t.bm82mp) : F.intl.string(F.t["6gprwc"])) : void 0,
        { price: M } = f;
    if (null == M) return null;
    let _ = (e) => {
        e.stopPropagation(),
            (0, j.r)({
                appId: m,
                skuId: f.id,
                analyticsLocations: v,
                isGift: !0,
            });
    };
    return (0, r.jsx)(s.I, {
        title: y,
        description: I,
        headerImage: k,
        availabilityLabel: T,
        PurchaseButton: (e) =>
            (0, r.jsx)(
                D.YG,
                A(U({}, e), {
                    appId: m,
                    sku: f,
                }),
            ),
        GiftButton: (0, x.K$)(f)
            ? () =>
                  (0, r.jsx)(R.Z, {
                      onGift: _,
                      tooltipDelay: 250,
                  })
            : void 0,
        onPurchase: () => {
            (0, j.r)({
                appId: m,
                skuId: f.id,
                analyticsLocations: v,
            });
        },
        onDetails:
            null != b
                ? b
                : (0, N.Ew)(I)
                  ? void 0
                  : () => {
                        (0, u.ZDy)(async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(t.bind(t, 147496));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    U(
                                        {
                                            appId: m,
                                            skuId: c,
                                        },
                                        n,
                                    ),
                                );
                        });
                    },
    });
}
