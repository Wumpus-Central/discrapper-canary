t.d(n, {
    AF: () => U,
    hd: () => z,
    zz: () => B
}),
    t(388685),
    t(953529),
    t(781311);
var r = t(200651),
    i = t(192379),
    l = t(905322),
    s = t(83998),
    o = t(269210),
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
    h = t(263519),
    x = t(430824),
    y = t(55563),
    O = t(551428),
    I = t(626135),
    P = t(768581),
    k = t(73346),
    S = t(624138),
    w = t(591759),
    N = t(601911),
    Z = t(150414),
    E = t(110742),
    T = t(680005),
    R = t(955335),
    M = t(981631),
    D = t(388032),
    _ = t(695025);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function C(e, n) {
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
let F = new Intl.DateTimeFormat(D.intl.currentLocale, {
    month: 'short',
    day: 'numeric'
});
function U(e) {
    let { app: n, guildId: t, subscriptions: s, otps: o } = e,
        a = i.useMemo(() => (0, N.y)(n, 100), [n]),
        { bot: m } = n,
        b = i.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, P.aN)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0;
        }, [m]),
        v = i.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, P.aN)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0;
        }, [m]),
        g = (0, u.e7)([c.Z], () => c.Z.useReducedMotion),
        j = i.useMemo(() => [...s.map((e) => e.skuId), ...o.map((e) => e.skuId)], [s, o]),
        { analyticsLocations: f } = (0, p.ZP)(d.Z.APP_STOREFRONT);
    return (
        i.useEffect(() => {
            0 !== j.length &&
                I.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: j,
                    location_stack: f
                });
        }, [f, n.id, j]),
        (0, r.jsxs)('div', {
            className: _.wrapper,
            children: [
                (0, r.jsx)(l.j, {
                    title: n.name,
                    iconSrc: a,
                    backgroundSrc: b,
                    animatedBackgroundSrc: v,
                    prefersReducedMotion: g
                }),
                (0, r.jsx)(L, {
                    appId: n.id,
                    subscriptions: s,
                    otps: o,
                    guildId: t
                })
            ]
        })
    );
}
function L(e) {
    let { appId: n, subscriptions: t, otps: i, guildId: l } = e;
    return (0, r.jsxs)('div', {
        className: _.productsContainer,
        children: [
            t.length > 0 &&
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(R.r, { subscriptions: t }),
                        (0, r.jsx)('div', {
                            className: _.productSection,
                            children: t.map((e) =>
                                (0, r.jsx)(
                                    B,
                                    {
                                        appId: n,
                                        guildId: l,
                                        listing: e,
                                        subscriptionType: (0, v.KW)(e.skuFlags) ? 'user' : 'guild'
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            i.length > 0 &&
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: 'heading-lg/semibold',
                            children: D.intl.string(D.t.yUGTs7)
                        }),
                        (0, r.jsx)('div', {
                            className: _.productSection,
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    z,
                                    {
                                        skuId: e.skuId,
                                        appId: n
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                })
        ]
    });
}
function B(e) {
    var n, l;
    let { appId: s, guildId: c, listing: d, subscriptionType: p, onDetails: j } = e,
        { data: O } = (0, g.H)(d.skuId),
        I = null == O ? void 0 : O[0],
        P = (0, u.e7)([y.Z], () => y.Z.get(d.skuId), [d.skuId]),
        k = (0, u.e7)([x.Z], () => x.Z.getGuild(c), [c]),
        S = (0, u.e7)([y.Z], () => y.Z.getParentSKU(d.skuId), [d.skuId]),
        w = (0, b.Ev)(S, c),
        N = null == w ? void 0 : w.subscription,
        E = (0, b.cr)(S, c),
        R = null != N && (0, v.Jf)(N, P),
        U = null != E && (null == w || null == (n = w.subscriptionPlan) ? void 0 : n.id) !== (null == E ? void 0 : E.subscriptionPlan.id),
        L = !1 === R && (null == E ? void 0 : E.subscriptionPlan.skuId) === d.skuId,
        B = (null == w ? void 0 : w.subscriptionPlan.skuId) === d.skuId,
        {
            openModal: z,
            subscriptionPurchaseButtonState: G,
            isGuildSubscribed: q
        } = (0, h.Z)({
            skuId: d.skuId,
            initialSubscribeForGuild: c,
            analyticsLocation: M.Sbl.APP_STOREFRONT
        }),
        V = i.useMemo(() => {
            var e;
            return null == (e = d.benefits)
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, f.n)(s, e.icon)
                  }));
        }, [s, d.benefits]),
        K = i.useMemo(() => (null != d.thumbnail ? (0, Z.q)(s, d.thumbnail, 256) : void 0), [s, d.thumbnail]),
        W = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    T.pV,
                    C(A({}, e), {
                        appId: s,
                        subscriptionType: p,
                        skuId: d.skuId,
                        subscriptionPlan: I,
                        state: G
                    })
                ),
            [s, p, d.skuId, I, G]
        ),
        X = i.useMemo(() => {
            if (U && (null == N ? void 0 : N.currentPeriodEnd) != null) {
                let e = F.format(null == N ? void 0 : N.currentPeriodEnd);
                if (B) return D.intl.formatToPlainString(D.t.EV2lZ2, { date: e });
                if (L) return D.intl.formatToPlainString(D.t['2w6+ND'], { date: e });
            }
            if (q)
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != k &&
                            (0, r.jsx)(m.Z, {
                                guild: k,
                                size: m.Z.Sizes.MINI
                            }),
                        D.intl.string(D.t.l8ufqK)
                    ]
                });
        }, [null == N ? void 0 : N.currentPeriodEnd, k, U, B, q, L]),
        H =
            null != X
                ? (0, r.jsx)(a.Text, {
                      color: 'header-secondary',
                      variant: 'text-sm/normal',
                      className: _.subscriptionCardSubtext,
                      children: X
                  })
                : void 0;
    return (0, r.jsx)(o.Uj, {
        title: d.summary,
        subtitle: H,
        maxBenefits: null != H ? o.ZI - 1 : o.ZI,
        description: null != (l = d.description) ? l : void 0,
        imgSrc: K,
        onPurchase: z,
        renderPurchaseButton: W,
        benefitItems:
            null != V
                ? V.map((e) =>
                      (0, r.jsx)(
                          o.Gm,
                          {
                              description: e.title,
                              icon: e.icon
                          },
                          e.id
                      )
                  )
                : void 0,
        onDetails:
            null != j
                ? j
                : null != V
                  ? () => {
                        (0, a.ZDy)(async () => {
                            let { SubscriptionDetailsModal: e } = await Promise.all([t.e('86282'), t.e('93287')]).then(t.bind(t, 519896));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    A(
                                        {
                                            appId: s,
                                            subscriptionType: p,
                                            skuId: d.skuId,
                                            guildId: c
                                        },
                                        n
                                    )
                                );
                        });
                    }
                  : void 0
    });
}
function z(e) {
    var n, i, l, o;
    let { skuId: c, appId: m, onDetails: b } = e,
        { analyticsLocations: v } = (0, p.ZP)(d.Z.APP_STOREFRONT),
        g = (0, u.e7)([O.Z], () => O.Z.getForSKU(c), [c]),
        f = (0, u.e7)([y.Z], () => y.Z.get(c), [c]),
        h = (0, E.M)(c);
    if (null == f) return null;
    let x = null != (i = f.name) ? i : '',
        I = null != (l = null == g || null == (n = g.description) ? void 0 : n.trim()) ? l : void 0,
        P = (null == g ? void 0 : g.headerBackground) != null && null != (o = w.Z.toURLSafe((0, k._W)(m, g.headerBackground, 256))) ? o : void 0,
        N = f.type === M.epS.DURABLE && h,
        Z = f.type === M.epS.DURABLE ? (N ? D.intl.string(D.t.bm82mp) : D.intl.string(D.t['6gprwc'])) : void 0,
        { price: R } = f;
    return null == R
        ? null
        : (0, r.jsx)(s.I, {
              title: x,
              description: I,
              headerImage: P,
              availabilityLabel: Z,
              onDetails:
                  null != b
                      ? b
                      : (0, S.Ew)(I)
                        ? void 0
                        : () => {
                              (0, a.ZDy)(async () => {
                                  let { ItemDetailsModal: e } = await t.e('69796').then(t.bind(t, 147496));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          A(
                                              {
                                                  appId: m,
                                                  skuId: c
                                              },
                                              n
                                          )
                                      );
                              });
                          },
              PurchaseButton: (e) =>
                  (0, r.jsx)(
                      T.YG,
                      C(A({}, e), {
                          appId: m,
                          sku: f
                      })
                  ),
              onPurchase: () => {
                  (0, j.r)({
                      appId: m,
                      skuId: f.id,
                      analyticsLocations: v
                  });
              }
          });
}
