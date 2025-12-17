t.d(n, {
    AF: () => C,
    hd: () => z,
    zz: () => B,
}),
    t(388685),
    t(953529),
    t(781311);
var r = t(54381),
    l = t(473749),
    i = t(683074),
    s = t(214805),
    o = t(621082),
    u = t(442837),
    a = t(481060),
    c = t(607070),
    d = t(100527),
    p = t(906732),
    m = t(565138),
    b = t(270144),
    v = t(171246),
    g = t(930155),
    j = t(929011),
    f = t(889989),
    x = t(263519),
    h = t(430824),
    y = t(55563),
    P = t(551428),
    I = t(626135),
    O = t(768581),
    k = t(73346),
    S = t(624138),
    w = t(591759),
    T = t(601911),
    N = t(150414),
    Z = t(110742),
    E = t(680005),
    R = t(955335),
    D = t(981631),
    M = t(388032),
    _ = t(989947);
function F(e) {
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
function U(e, n) {
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
let A = new Intl.DateTimeFormat(M.intl.currentLocale, {
    month: "short",
    day: "numeric",
});
function C(e) {
    let { app: n, guildId: t, subscriptions: s, otps: o } = e,
        a = l.useMemo(() => (0, T.y)(n, 100), [n]),
        { bot: m } = n,
        b = l.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, O.aN)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !1,
            });
            return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0;
        }, [m]),
        v = l.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, O.aN)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !0,
            });
            return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0;
        }, [m]),
        g = (0, u.e7)([c.Z], () => c.Z.useReducedMotion),
        j = l.useMemo(() => [...s.map((e) => e.skuId), ...o.map((e) => e.skuId)], [s, o]),
        { analyticsLocations: f } = (0, p.ZP)(d.Z.APP_STOREFRONT);
    return (
        l.useEffect(() => {
            0 !== j.length &&
                I.default.track(D.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: j,
                    location_stack: f,
                });
        }, [f, n.id, j]),
        (0, r.jsxs)("div", {
            className: _.wrapper,
            children: [
                (0, r.jsx)(i.j, {
                    title: n.name,
                    iconSrc: a,
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
    let { appId: n, subscriptions: t, otps: l, guildId: i } = e;
    return (0, r.jsxs)("div", {
        className: _.productsContainer,
        children: [
            t.length > 0 &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(R.r, { subscriptions: t }),
                        (0, r.jsx)("div", {
                            className: _.productSection,
                            children: t.map((e) =>
                                (0, r.jsx)(
                                    B,
                                    {
                                        appId: n,
                                        guildId: i,
                                        listing: e,
                                        subscriptionType: (0, v.KW)(e.skuFlags) ? "user" : "guild",
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            l.length > 0 &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: M.intl.string(M.t.yUGTs8),
                        }),
                        (0, r.jsx)("div", {
                            className: _.productSection,
                            children: l.map((e) =>
                                (0, r.jsx)(
                                    z,
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
function B(e) {
    var n, i;
    let { appId: s, guildId: c, listing: d, subscriptionType: p, onDetails: j } = e,
        { data: P } = (0, g.H)(d.skuId),
        I = null == P ? void 0 : P[0],
        O = (0, u.e7)([y.Z], () => y.Z.get(d.skuId), [d.skuId]),
        k = (0, u.e7)([h.Z], () => h.Z.getGuild(c), [c]),
        S = (0, u.e7)([y.Z], () => y.Z.getParentSKU(d.skuId), [d.skuId]),
        w = (0, b.Ev)(S, c),
        T = null == w ? void 0 : w.subscription,
        Z = (0, b.cr)(S, c),
        R = null != T && (0, v.Jf)(T, O),
        C =
            null != Z &&
            (null == w || null == (n = w.subscriptionPlan) ? void 0 : n.id) !==
                (null == Z ? void 0 : Z.subscriptionPlan.id),
        L = !1 === R && (null == Z ? void 0 : Z.subscriptionPlan.skuId) === d.skuId,
        B = (null == w ? void 0 : w.subscriptionPlan.skuId) === d.skuId,
        {
            openModal: z,
            subscriptionPurchaseButtonState: G,
            isGuildSubscribed: V,
        } = (0, x.Z)({
            skuId: d.skuId,
            initialSubscribeForGuild: c,
            analyticsLocation: D.Sbl.APP_STOREFRONT,
        }),
        H = l.useMemo(() => {
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
        K = l.useMemo(() => (null != d.thumbnail ? (0, N.q)(s, d.thumbnail, 256) : void 0), [s, d.thumbnail]),
        q = l.useCallback(
            (e) =>
                (0, r.jsx)(
                    E.pV,
                    U(F({}, e), {
                        appId: s,
                        subscriptionType: p,
                        skuId: d.skuId,
                        subscriptionPlan: I,
                        state: G,
                    }),
                ),
            [s, p, d.skuId, I, G],
        ),
        W = l.useMemo(() => {
            if (C && (null == T ? void 0 : T.currentPeriodEnd) != null) {
                let e = A.format(null == T ? void 0 : T.currentPeriodEnd);
                if (B) return M.intl.formatToPlainString(M.t.EV2lZz, { date: e });
                if (L) return M.intl.formatToPlainString(M.t["2w6+NN"], { date: e });
            }
            if (V)
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != k &&
                            (0, r.jsx)(m.Z, {
                                guild: k,
                                size: m.Z.Sizes.MINI,
                            }),
                        M.intl.string(M.t.l8ufqL),
                    ],
                });
        }, [null == T ? void 0 : T.currentPeriodEnd, k, C, B, V, L]),
        X =
            null != W
                ? (0, r.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-sm/normal",
                      className: _.subscriptionCardSubtext,
                      children: W,
                  })
                : void 0;
    return (0, r.jsx)(o.Uj, {
        title: d.summary,
        subtitle: X,
        maxBenefits: null != X ? o.ZI - 1 : o.ZI,
        description: null != (i = d.description) ? i : void 0,
        imgSrc: K,
        onPurchase: z,
        renderPurchaseButton: q,
        benefitItems:
            null != H
                ? H.map((e) =>
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
                : null != H
                  ? () => {
                        (0, a.ZDy)(async () => {
                            let { SubscriptionDetailsModal: e } = await Promise.resolve().then(t.bind(t, 519896));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    F(
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
function z(e) {
    var n, l, i, o;
    let { skuId: c, appId: m, onDetails: b } = e,
        { analyticsLocations: v } = (0, p.ZP)(d.Z.APP_STOREFRONT),
        g = (0, u.e7)([P.Z], () => P.Z.getForSKU(c), [c]),
        f = (0, u.e7)([y.Z], () => y.Z.get(c), [c]),
        x = (0, Z.M)(c);
    if (null == f) return null;
    let h = null != (l = f.name) ? l : "",
        I = null != (i = null == g || null == (n = g.description) ? void 0 : n.trim()) ? i : void 0,
        O =
            (null == g ? void 0 : g.headerBackground) != null &&
            null != (o = w.Z.toURLSafe((0, k._W)(m, g.headerBackground, 256)))
                ? o
                : void 0,
        T = f.type === D.epS.DURABLE && x,
        N = f.type === D.epS.DURABLE ? (T ? M.intl.string(M.t.bm82mm) : M.intl.string(M.t["6gprwf"])) : void 0,
        { price: R } = f;
    return null == R
        ? null
        : (0, r.jsx)(s.I, {
              title: h,
              description: I,
              headerImage: O,
              availabilityLabel: N,
              PurchaseButton: (e) =>
                  (0, r.jsx)(
                      E.YG,
                      U(F({}, e), {
                          appId: m,
                          sku: f,
                      }),
                  ),
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
                      : (0, S.Ew)(I)
                        ? void 0
                        : () => {
                              (0, a.ZDy)(async () => {
                                  let { ItemDetailsModal: e } = await Promise.resolve().then(t.bind(t, 147496));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          F(
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
