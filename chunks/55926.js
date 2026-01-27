t.d(n, {
    B4: () => C,
    B8: () => z,
    Mp: () => G,
}),
    t(896048),
    t(228524),
    t(733351);
var l = t(627968),
    r = t(64700),
    i = t(206111),
    s = t(216410),
    u = t(885996),
    o = t(311907),
    a = t(397927),
    c = t(775602),
    d = t(793574),
    p = t(688810),
    m = t(263063),
    b = t(915043),
    j = t(163437),
    v = t(955440),
    g = t(638643),
    f = t(3432),
    h = t(185438),
    x = t(71393),
    y = t(67480),
    O = t(328968),
    P = t(954571),
    k = t(486020),
    I = t(371794),
    A = t(240248),
    S = t(998218),
    E = t(943775),
    N = t(237218),
    w = t(56754),
    T = t(376374),
    R = t(311321),
    D = t(652215),
    M = t(985018),
    _ = t(807128);

function L(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
let F = new Intl.DateTimeFormat(M.intl.currentLocale, {
    month: "short",
    day: "numeric",
});

function G(e) {
    let { app: n, guildId: t, subscriptions: s, otps: u } = e,
        a = r.useMemo(() => (0, E.A)(n, 100), [n]),
        { bot: m } = n,
        b = r.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, k.z)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !1,
            });
            return null != n && null != (e = S.A.toURLSafe(n)) ? e : void 0;
        }, [m]),
        j = r.useMemo(() => {
            var e;
            if ((null == m ? void 0 : m.banner) == null) return;
            let n = (0, k.z)({
                id: m.id,
                banner: m.banner,
                size: 1024,
                canAnimate: !0,
            });
            return null != n && null != (e = S.A.toURLSafe(n)) ? e : void 0;
        }, [m]),
        v = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        g = r.useMemo(() => [...s.map((e) => e.skuId), ...u.map((e) => e.skuId)], [s, u]),
        { analyticsLocations: f } = (0, p.Ay)(d.A.APP_STOREFRONT);
    return (
        r.useEffect(() => {
            0 !== g.length &&
                P.default.track(D.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: n.id,
                    sku_ids: g,
                    location_stack: f,
                });
        }, [f, n.id, g]),
        (0, l.jsxs)("div", {
            className: _.iE,
            children: [
                (0, l.jsx)(i.l, {
                    title: n.name,
                    iconSrc: a,
                    backgroundSrc: b,
                    animatedBackgroundSrc: j,
                    prefersReducedMotion: v,
                }),
                (0, l.jsx)(B, {
                    appId: n.id,
                    subscriptions: s,
                    otps: u,
                    guildId: t,
                }),
            ],
        })
    );
}

function B(e) {
    let { appId: n, subscriptions: t, otps: r, guildId: i } = e;
    return (0, l.jsxs)("div", {
        className: _.q4,
        children: [
            t.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(R.A, {
                            subscriptions: t,
                        }),
                        (0, l.jsx)("div", {
                            className: _.dD,
                            children: t.map((e) =>
                                (0, l.jsx)(
                                    C,
                                    {
                                        appId: n,
                                        guildId: i,
                                        listing: e,
                                        subscriptionType: (0, j.bg)(e.skuFlags) ? "user" : "guild",
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            r.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: M.intl.string(M.t.yUGTs8),
                        }),
                        (0, l.jsx)("div", {
                            className: _.dD,
                            children: r.map((e) =>
                                (0, l.jsx)(
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

function C(e) {
    var n, i;
    let { appId: s, guildId: c, listing: d, subscriptionType: p, onDetails: g } = e,
        { data: O } = (0, v.A)(d.skuId),
        P = null == O ? void 0 : O[0],
        k = (0, o.bG)([y.A], () => y.A.get(d.skuId), [d.skuId]),
        I = (0, o.bG)([x.A], () => x.A.getGuild(c), [c]),
        A = (0, o.bG)([y.A], () => y.A.getParentSKU(d.skuId), [d.skuId]),
        S = (0, b.GD)(A, c),
        E = null == S ? void 0 : S.subscription,
        w = (0, b.Ko)(A, c),
        R = null != E && (0, j.Uo)(E, k),
        G =
            null != w &&
            (null == S || null == (i = S.subscriptionPlan) ? void 0 : i.id) !==
                (null == w ? void 0 : w.subscriptionPlan.id),
        B = !1 === R && (null == w ? void 0 : w.subscriptionPlan.skuId) === d.skuId,
        C = (null == S ? void 0 : S.subscriptionPlan.skuId) === d.skuId,
        {
            openModal: z,
            subscriptionPurchaseButtonState: Y,
            isGuildSubscribed: K,
        } = (0, h.A)({
            skuId: d.skuId,
            initialSubscribeForGuild: c,
            analyticsLocation: D.ThZ.APP_STOREFRONT,
        }),
        q = r.useMemo(() => {
            var e;
            return null == (e = d.benefits)
                ? void 0
                : e.map((e) => ({
                      id: e.id,
                      title: e.name,
                      description: e.description,
                      icon: (0, f.N)(s, e.icon),
                  }));
        }, [s, d.benefits]),
        H = r.useMemo(() => (null != d.thumbnail ? (0, N.t)(s, d.thumbnail, 256) : void 0), [s, d.thumbnail]),
        V = r.useCallback(
            (e) =>
                (0, l.jsx)(
                    T.rc,
                    U(L({}, e), {
                        appId: s,
                        subscriptionType: p,
                        skuId: d.skuId,
                        subscriptionPlan: P,
                        state: Y,
                    }),
                ),
            [s, p, d.skuId, P, Y],
        ),
        Z = r.useMemo(() => {
            if (G && (null == E ? void 0 : E.currentPeriodEnd) != null) {
                let e = F.format(null == E ? void 0 : E.currentPeriodEnd);
                if (C)
                    return M.intl.formatToPlainString(M.t.EV2lZz, {
                        date: e,
                    });
                if (B)
                    return M.intl.formatToPlainString(M.t["2w6+NN"], {
                        date: e,
                    });
            }
            if (K)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        null != I &&
                            (0, l.jsx)(m.A, {
                                guild: I,
                                size: m.A.Sizes.MINI,
                            }),
                        M.intl.string(M.t.l8ufqL),
                    ],
                });
        }, [null == E ? void 0 : E.currentPeriodEnd, I, G, C, K, B]),
        J =
            null != Z
                ? (0, l.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-sm/normal",
                      className: _.BJ,
                      children: Z,
                  })
                : void 0;
    return (0, l.jsx)(u.OP, {
        title: d.summary,
        subtitle: J,
        maxBenefits: null != J ? u.GS - 1 : u.GS,
        description: null != (n = d.description) ? n : void 0,
        imgSrc: H,
        onPurchase: z,
        renderPurchaseButton: V,
        benefitItems:
            null != q
                ? q.map((e) =>
                      (0, l.jsx)(
                          u.FY,
                          {
                              description: e.title,
                              icon: e.icon,
                          },
                          e.id,
                      ),
                  )
                : void 0,
        onDetails:
            null != g
                ? g
                : null != q
                  ? () => {
                        (0, a.mMO)(async () => {
                            let { SubscriptionDetailsModal: e } = await t.e("64850").then(t.bind(t, 168393));
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    L(
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
    var n, r, i, u;
    let { skuId: c, appId: m, onDetails: b } = e,
        { analyticsLocations: j } = (0, p.Ay)(d.A.APP_STOREFRONT),
        v = (0, o.bG)([O.A], () => O.A.getForSKU(c), [c]),
        f = (0, o.bG)([y.A], () => y.A.get(c), [c]),
        h = (0, w.L)(c);
    if (null == f) return null;
    let x = null != (n = f.name) ? n : "",
        P = null != (r = null == v || null == (u = v.description) ? void 0 : u.trim()) ? r : void 0,
        k =
            (null == v ? void 0 : v.headerBackground) != null &&
            null != (i = S.A.toURLSafe((0, I.YE)(m, v.headerBackground, 256)))
                ? i
                : void 0,
        E = f.type === D.Puh.DURABLE && h,
        N = f.type === D.Puh.DURABLE ? (E ? M.intl.string(M.t.bm82mm) : M.intl.string(M.t["6gprwf"])) : void 0,
        { price: R } = f;
    return null == R
        ? null
        : (0, l.jsx)(s.A, {
              title: x,
              description: P,
              headerImage: k,
              availabilityLabel: N,
              PurchaseButton: (e) =>
                  (0, l.jsx)(
                      T.$P,
                      U(L({}, e), {
                          appId: m,
                          sku: f,
                      }),
                  ),
              onPurchase: () => {
                  (0, g.k)({
                      appId: m,
                      skuId: f.id,
                      analyticsLocations: j,
                  });
              },
              onDetails:
                  null != b
                      ? b
                      : (0, A.uJ)(P)
                        ? void 0
                        : () => {
                              (0, a.mMO)(async () => {
                                  let { ItemDetailsModal: e } = await t.e("70104").then(t.bind(t, 963179));
                                  return (n) =>
                                      (0, l.jsx)(
                                          e,
                                          L(
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
