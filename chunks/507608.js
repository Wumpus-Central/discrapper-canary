l.d(i, {
    AF: () => U,
    hd: () => B,
    zz: () => O
}),
    l(47120);
var e = l(200651),
    t = l(192379),
    r = l(905322),
    s = l(83998),
    d = l(269210),
    a = l(442837),
    u = l(481060),
    o = l(607070),
    c = l(100527),
    m = l(906732),
    v = l(565138),
    p = l(270144),
    x = l(171246),
    h = l(930155),
    g = l(929011),
    I = l(889989),
    j = l(263519),
    b = l(430824),
    k = l(55563),
    f = l(551428),
    P = l(626135),
    S = l(768581),
    N = l(73346),
    Z = l(624138),
    T = l(591759),
    y = l(601911),
    R = l(150414),
    E = l(110742),
    M = l(680005),
    _ = l(955335),
    w = l(981631),
    A = l(388032),
    C = l(816574);
let F = new Intl.DateTimeFormat(A.intl.currentLocale, {
    month: 'short',
    day: 'numeric'
});
function U(n) {
    let { app: i, guildId: l, subscriptions: s, otps: d } = n,
        u = t.useMemo(() => (0, y.y)(i, 100), [i]),
        { bot: v } = i,
        p = t.useMemo(() => {
            var n;
            if ((null == v ? void 0 : v.banner) == null) return;
            let i = (0, S.aN)({
                id: v.id,
                banner: v.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != i && null !== (n = T.Z.toURLSafe(i)) && void 0 !== n ? n : void 0;
        }, [v]),
        x = t.useMemo(() => {
            var n;
            if ((null == v ? void 0 : v.banner) == null) return;
            let i = (0, S.aN)({
                id: v.id,
                banner: v.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != i && null !== (n = T.Z.toURLSafe(i)) && void 0 !== n ? n : void 0;
        }, [v]),
        h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        g = t.useMemo(() => [...s.map((n) => n.skuId), ...d.map((n) => n.skuId)], [s, d]),
        { analyticsLocations: I } = (0, m.ZP)(c.Z.APP_STOREFRONT);
    return (
        t.useEffect(() => {
            0 !== g.length &&
                P.default.track(w.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: i.id,
                    sku_ids: g,
                    location_stack: I
                });
        }, [I, i.id, g]),
        (0, e.jsxs)('div', {
            className: C.wrapper,
            children: [
                (0, e.jsx)(r.j, {
                    title: i.name,
                    iconSrc: u,
                    backgroundSrc: p,
                    animatedBackgroundSrc: x,
                    prefersReducedMotion: h
                }),
                (0, e.jsx)(L, {
                    appId: i.id,
                    subscriptions: s,
                    otps: d,
                    guildId: l
                })
            ]
        })
    );
}
function L(n) {
    let { appId: i, subscriptions: l, otps: t, guildId: r } = n;
    return (0, e.jsxs)('div', {
        className: C.productsContainer,
        children: [
            l.length > 0 &&
                (0, e.jsxs)('div', {
                    children: [
                        (0, e.jsx)(_.r, { subscriptions: l }),
                        (0, e.jsx)('div', {
                            className: C.productSection,
                            children: l.map((n) =>
                                (0, e.jsx)(
                                    O,
                                    {
                                        appId: i,
                                        guildId: r,
                                        listing: n,
                                        subscriptionType: (0, x.KW)(n.skuFlags) ? 'user' : 'guild'
                                    },
                                    n.id
                                )
                            )
                        })
                    ]
                }),
            t.length > 0 &&
                (0, e.jsxs)('div', {
                    children: [
                        (0, e.jsx)(u.X6q, {
                            variant: 'heading-lg/semibold',
                            children: A.intl.string(A.t.yUGTs7)
                        }),
                        (0, e.jsx)('div', {
                            className: C.productSection,
                            children: t.map((n) =>
                                (0, e.jsx)(
                                    B,
                                    {
                                        skuId: n.skuId,
                                        appId: i
                                    },
                                    n.id
                                )
                            )
                        })
                    ]
                })
        ]
    });
}
function O(n) {
    var i, r;
    let { appId: s, guildId: o, listing: c, subscriptionType: m, onDetails: g } = n,
        { data: f } = (0, h.H)(c.skuId),
        P = null == f ? void 0 : f[0],
        S = (0, a.e7)([k.Z], () => k.Z.get(c.skuId), [c.skuId]),
        N = (0, a.e7)([b.Z], () => b.Z.getGuild(o), [o]),
        Z = (0, a.e7)([k.Z], () => k.Z.getParentSKU(c.skuId), [c.skuId]),
        T = (0, p.Ev)(Z, o),
        y = null == T ? void 0 : T.subscription,
        E = (0, p.cr)(Z, o),
        _ = null != y && (0, x.Jf)(y, S),
        U = null != E && (null == T ? void 0 : null === (i = T.subscriptionPlan) || void 0 === i ? void 0 : i.id) !== (null == E ? void 0 : E.subscriptionPlan.id),
        L = !1 === _ && (null == E ? void 0 : E.subscriptionPlan.skuId) === c.skuId,
        O = (null == T ? void 0 : T.subscriptionPlan.skuId) === c.skuId,
        {
            openModal: B,
            subscriptionPurchaseButtonState: D,
            isGuildSubscribed: z
        } = (0, j.Z)({
            skuId: c.skuId,
            initialSubscribeForGuild: o,
            analyticsLocation: w.Sbl.APP_STOREFRONT
        }),
        G = t.useMemo(() => {
            var n;
            return null === (n = c.benefits) || void 0 === n
                ? void 0
                : n.map((n) => ({
                      id: n.id,
                      title: n.name,
                      description: n.description,
                      icon: (0, I.n)(s, n.icon)
                  }));
        }, [s, c.benefits]),
        q = t.useMemo(() => (null != c.thumbnail ? (0, R.q)(s, c.thumbnail, 256) : void 0), [s, c.thumbnail]),
        V = t.useCallback(
            (n) =>
                (0, e.jsx)(M.pV, {
                    ...n,
                    appId: s,
                    subscriptionType: m,
                    skuId: c.skuId,
                    subscriptionPlan: P,
                    state: D
                }),
            [s, m, c.skuId, P, D]
        ),
        K = t.useMemo(() => {
            if (U && (null == y ? void 0 : y.currentPeriodEnd) != null) {
                let n = F.format(null == y ? void 0 : y.currentPeriodEnd);
                if (O) return A.intl.formatToPlainString(A.t.EV2lZ2, { date: n });
                if (L) return A.intl.formatToPlainString(A.t['2w6+ND'], { date: n });
            }
            if (z)
                return (0, e.jsxs)(e.Fragment, {
                    children: [
                        null != N &&
                            (0, e.jsx)(v.Z, {
                                guild: N,
                                size: v.Z.Sizes.MINI
                            }),
                        A.intl.string(A.t.l8ufqK)
                    ]
                });
        }, [null == y ? void 0 : y.currentPeriodEnd, N, U, O, z, L]),
        W =
            null != K
                ? (0, e.jsx)(u.Text, {
                      color: 'header-secondary',
                      variant: 'text-sm/normal',
                      className: C.subscriptionCardSubtext,
                      children: K
                  })
                : void 0;
    return (0, e.jsx)(d.Uj, {
        title: c.summary,
        subtitle: W,
        maxBenefits: null != W ? d.ZI - 1 : d.ZI,
        description: null !== (r = c.description) && void 0 !== r ? r : void 0,
        imgSrc: q,
        onPurchase: B,
        renderPurchaseButton: V,
        benefitItems:
            null != G
                ? G.map((n) =>
                      (0, e.jsx)(
                          d.Gm,
                          {
                              description: n.title,
                              icon: n.icon
                          },
                          n.id
                      )
                  )
                : void 0,
        onDetails:
            null != g
                ? g
                : null != G
                  ? () => {
                        (0, u.ZDy)(async () => {
                            let { SubscriptionDetailsModal: n } = await Promise.all([l.e('86282'), l.e('53065')]).then(l.bind(l, 519896));
                            return (i) =>
                                (0, e.jsx)(n, {
                                    appId: s,
                                    subscriptionType: m,
                                    skuId: c.skuId,
                                    guildId: o,
                                    ...i
                                });
                        });
                    }
                  : void 0
    });
}
function B(n) {
    var i, t, r, d;
    let { skuId: o, appId: v, onDetails: p } = n,
        { analyticsLocations: x } = (0, m.ZP)(c.Z.APP_STOREFRONT),
        h = (0, a.e7)([f.Z], () => f.Z.getForSKU(o), [o]),
        I = (0, a.e7)([k.Z], () => k.Z.get(o), [o]),
        j = (0, E.M)(o);
    if (null == I) return null;
    let b = null !== (t = I.name) && void 0 !== t ? t : '',
        P = null !== (r = null == h ? void 0 : null === (i = h.description) || void 0 === i ? void 0 : i.trim()) && void 0 !== r ? r : void 0,
        S = (null == h ? void 0 : h.headerBackground) != null && null !== (d = T.Z.toURLSafe((0, N._W)(v, h.headerBackground, 256))) && void 0 !== d ? d : void 0,
        y = I.type === w.epS.DURABLE && j,
        R = I.type === w.epS.DURABLE ? (y ? A.intl.string(A.t.bm82mp) : A.intl.string(A.t['6gprwc'])) : void 0,
        { price: _ } = I;
    return null == _
        ? null
        : (0, e.jsx)(s.I, {
              title: b,
              description: P,
              headerImage: S,
              availabilityLabel: R,
              onDetails:
                  null != p
                      ? p
                      : (0, Z.Ew)(P)
                        ? void 0
                        : () => {
                              (0, u.ZDy)(async () => {
                                  let { ItemDetailsModal: n } = await l.e('69796').then(l.bind(l, 147496));
                                  return (i) =>
                                      (0, e.jsx)(n, {
                                          appId: v,
                                          skuId: o,
                                          ...i
                                      });
                              });
                          },
              PurchaseButton: (n) =>
                  (0, e.jsx)(M.YG, {
                      ...n,
                      appId: v,
                      sku: I
                  }),
              onPurchase: () => {
                  (0, g.r)({
                      appId: v,
                      skuId: I.id,
                      analyticsLocations: x
                  });
              }
          });
}
