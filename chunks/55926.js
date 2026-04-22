i.d(e, { B4: () => w, B8: () => K, Mp: () => z });
var t = i(627968),
    l = i(64700),
    s = i(206111),
    r = i(216410),
    a = i(885996),
    d = i(311907),
    u = i(534514),
    o = i(834730),
    c = i(192308),
    m = i(775602),
    p = i(793574),
    h = i(688810),
    x = i(285871),
    g = i(263063),
    v = i(915043),
    b = i(163437),
    I = i(955440),
    j = i(638643),
    k = i(3432),
    A = i(185438),
    f = i(71393),
    P = i(67480),
    E = i(328968),
    S = i(954571),
    N = i(486020),
    T = i(371794),
    y = i(240248),
    R = i(998218),
    M = i(943775),
    _ = i(237218),
    L = i(56754),
    U = i(376374),
    F = i(311321),
    C = i(652215),
    G = i(985018),
    D = i(707739);
let O = new Intl.DateTimeFormat(G.intl.currentLocale, { month: "short", day: "numeric" });
function z(n) {
    let { app: e, guildId: i, subscriptions: r, otps: a } = n,
        u = l.useMemo(() => (0, M.A)(e, 100), [e]),
        { bot: o } = e,
        c = l.useMemo(() => {
            if (o?.banner == null) return;
            let n = (0, N.z)({ id: o.id, banner: o.banner, size: 1024, canAnimate: !1 });
            return null != n ? (R.A.toURLSafe(n) ?? void 0) : void 0;
        }, [o]),
        x = l.useMemo(() => {
            if (o?.banner == null) return;
            let n = (0, N.z)({ id: o.id, banner: o.banner, size: 1024, canAnimate: !0 });
            return null != n ? (R.A.toURLSafe(n) ?? void 0) : void 0;
        }, [o]),
        g = (0, d.bG)([m.A], () => m.A.useReducedMotion),
        v = l.useMemo(() => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)], [r, a]),
        { analyticsLocations: b } = (0, h.Ay)(p.A.APP_STOREFRONT);
    return (
        l.useEffect(() => {
            0 !== v.length &&
                S.default.track(C.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: v,
                    location_stack: b,
                });
        }, [b, e.id, v]),
        (0, t.jsxs)("div", {
            className: D.iE,
            children: [
                (0, t.jsx)(s.l, {
                    title: e.name,
                    iconSrc: u,
                    backgroundSrc: c,
                    animatedBackgroundSrc: x,
                    prefersReducedMotion: g,
                }),
                (0, t.jsx)(B, { appId: e.id, subscriptions: r, otps: a, guildId: i }),
            ],
        })
    );
}
function B(n) {
    let { appId: e, subscriptions: i, otps: l, guildId: s } = n;
    return (0, t.jsxs)("div", {
        className: D.q4,
        children: [
            i.length > 0 &&
                (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(F.A, { subscriptions: i }),
                        (0, t.jsx)("div", {
                            className: D.dD,
                            children: i.map((n) =>
                                (0, t.jsx)(
                                    w,
                                    {
                                        appId: e,
                                        guildId: s,
                                        listing: n,
                                        subscriptionType: (0, b.bg)(n.skuFlags) ? "user" : "guild",
                                    },
                                    n.id,
                                ),
                            ),
                        }),
                    ],
                }),
            l.length > 0 &&
                (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(u.D, { variant: "heading-lg/semibold", children: G.intl.string(G.t.yUGTs8) }),
                        (0, t.jsx)("div", {
                            className: D.dD,
                            children: l.map((n) => (0, t.jsx)(K, { skuId: n.skuId, appId: e }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function w(n) {
    let { appId: e, guildId: s, listing: r, subscriptionType: u, onDetails: m } = n,
        { data: p } = (0, I.A)(r.skuId),
        h = p?.[0],
        x = (0, d.bG)([P.A], () => P.A.get(r.skuId), [r.skuId]),
        j = (0, d.bG)([f.A], () => f.A.getGuild(s), [s]),
        E = (0, d.bG)([P.A], () => P.A.getParentSKU(r.skuId), [r.skuId]),
        S = (0, v.GD)(E, s),
        N = S?.subscription,
        T = (0, v.Ko)(E, s),
        y = null != N && (0, b.Uo)(N, x),
        R = null != T && S?.subscriptionPlan?.id !== T?.subscriptionPlan.id,
        M = !1 === y && T?.subscriptionPlan.skuId === r.skuId,
        L = S?.subscriptionPlan.skuId === r.skuId,
        {
            openModal: F,
            subscriptionPurchaseButtonState: z,
            isGuildSubscribed: B,
        } = (0, A.A)({ skuId: r.skuId, initialSubscribeForGuild: s, analyticsLocation: C.ThZ.APP_STOREFRONT }),
        w = l.useMemo(
            () =>
                r.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, k.N)(e, n.icon),
                })),
            [e, r.benefits],
        ),
        K = l.useMemo(() => (null != r.thumbnail ? (0, _.t)(e, r.thumbnail, 256) : void 0), [e, r.thumbnail]),
        $ = l.useCallback(
            (n) =>
                (0, t.jsx)(U.rc, {
                    ...n,
                    appId: e,
                    subscriptionType: u,
                    skuId: r.skuId,
                    subscriptionPlan: h,
                    state: z,
                }),
            [e, u, r.skuId, h, z],
        ),
        q = l.useMemo(() => {
            if (R && N?.currentPeriodEnd != null) {
                let n = O.format(N?.currentPeriodEnd);
                if (L) return G.intl.formatToPlainString(G.t.EV2lZz, { date: n });
                if (M) return G.intl.formatToPlainString(G.t["2w6+NN"], { date: n });
            }
            if (B)
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        null != j && (0, t.jsx)(g.Ay, { guild: j, size: g.Ay.Sizes.MINI }),
                        G.intl.string(G.t.l8ufqL),
                    ],
                });
        }, [N?.currentPeriodEnd, j, R, L, B, M]),
        H =
            null != q
                ? (0, t.jsx)(o.E, { color: "text-default", variant: "text-sm/normal", className: D.BJ, children: q })
                : void 0;
    return (0, t.jsx)(a.OP, {
        title: r.summary,
        subtitle: H,
        maxBenefits: null != H ? a.GS - 1 : a.GS,
        description: r.description ?? void 0,
        imgSrc: K,
        onPurchase: F,
        renderPurchaseButton: $,
        benefitItems: null != w ? w.map((n) => (0, t.jsx)(a.FY, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != m
                ? m
                : null != w
                  ? () => {
                        (0, c.openModalLazy)(async () => {
                            let { SubscriptionDetailsModal: n } = await i.e("64850").then(i.bind(i, 168393));
                            return (i) =>
                                (0, t.jsx)(n, { appId: e, subscriptionType: u, skuId: r.skuId, guildId: s, ...i });
                        });
                    }
                  : void 0,
    });
}
function K(n) {
    let { skuId: e, appId: l, onDetails: s } = n,
        { analyticsLocations: a } = (0, h.Ay)(p.A.APP_STOREFRONT),
        u = (0, d.bG)([E.A], () => E.A.getForSKU(e), [e]),
        o = (0, d.bG)([P.A], () => P.A.get(e), [e]),
        m = (0, L.L)(e);
    if (null == o) return null;
    let g = o.name ?? "",
        v = u?.description?.trim() ?? void 0,
        b = u?.headerBackground != null ? (R.A.toURLSafe((0, T.YE)(l, u.headerBackground, 256)) ?? void 0) : void 0,
        I = o.type === C.Puh.DURABLE && m,
        k = o.type === C.Puh.DURABLE ? (I ? G.intl.string(G.t.bm82mm) : G.intl.string(G.t["6gprwf"])) : void 0,
        { price: A } = o;
    return null == A
        ? null
        : (0, t.jsx)(r.A, {
              title: g,
              description: v,
              headerImage: b,
              availabilityLabel: k,
              PurchaseButton: (n) => (0, t.jsx)(U.$P, { ...n, appId: l, sku: o }),
              onPurchase: () => {
                  (0, j.k)({
                      appId: l,
                      skuId: o.id,
                      analyticsLocations: a,
                      checkoutFlow: x.C.PREMIUM_APPS_OTP_CHECKOUT,
                  });
              },
              onDetails:
                  null != s
                      ? s
                      : (0, y.uJ)(v)
                        ? void 0
                        : () => {
                              (0, c.openModalLazy)(async () => {
                                  let { ItemDetailsModal: n } = await i.e("70104").then(i.bind(i, 963179));
                                  return (i) => (0, t.jsx)(n, { appId: l, skuId: e, ...i });
                              });
                          },
          });
}
