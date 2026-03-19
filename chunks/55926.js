e.d(i, { B4: () => w, B8: () => D, Mp: () => G });
var t = e(627968),
    l = e(64700),
    s = e(206111),
    r = e(216410),
    a = e(885996),
    d = e(311907),
    u = e(397927),
    o = e(775602),
    c = e(793574),
    m = e(688810),
    p = e(285871),
    h = e(263063),
    x = e(915043),
    g = e(163437),
    j = e(955440),
    v = e(638643),
    b = e(3432),
    I = e(185438),
    k = e(71393),
    A = e(67480),
    f = e(328968),
    P = e(954571),
    E = e(486020),
    S = e(371794),
    N = e(240248),
    T = e(998218),
    y = e(943775),
    R = e(237218),
    M = e(56754),
    _ = e(376374),
    U = e(311321),
    L = e(652215),
    F = e(985018),
    O = e(485862);
let C = new Intl.DateTimeFormat(F.intl.currentLocale, { month: "short", day: "numeric" });
function G(n) {
    let { app: i, guildId: e, subscriptions: r, otps: a } = n,
        u = l.useMemo(() => (0, y.A)(i, 100), [i]),
        { bot: p } = i,
        h = l.useMemo(() => {
            if (p?.banner == null) return;
            let n = (0, E.z)({ id: p.id, banner: p.banner, size: 1024, canAnimate: !1 });
            return null != n ? (T.A.toURLSafe(n) ?? void 0) : void 0;
        }, [p]),
        x = l.useMemo(() => {
            if (p?.banner == null) return;
            let n = (0, E.z)({ id: p.id, banner: p.banner, size: 1024, canAnimate: !0 });
            return null != n ? (T.A.toURLSafe(n) ?? void 0) : void 0;
        }, [p]),
        g = (0, d.bG)([o.A], () => o.A.useReducedMotion),
        j = l.useMemo(() => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)], [r, a]),
        { analyticsLocations: v } = (0, m.Ay)(c.A.APP_STOREFRONT);
    return (
        l.useEffect(() => {
            0 !== j.length &&
                P.default.track(L.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: i.id,
                    sku_ids: j,
                    location_stack: v,
                });
        }, [v, i.id, j]),
        (0, t.jsxs)("div", {
            className: O.iE,
            children: [
                (0, t.jsx)(s.l, {
                    title: i.name,
                    iconSrc: u,
                    backgroundSrc: h,
                    animatedBackgroundSrc: x,
                    prefersReducedMotion: g,
                }),
                (0, t.jsx)(B, { appId: i.id, subscriptions: r, otps: a, guildId: e }),
            ],
        })
    );
}
function B(n) {
    let { appId: i, subscriptions: e, otps: l, guildId: s } = n;
    return (0, t.jsxs)("div", {
        className: O.q4,
        children: [
            e.length > 0 &&
                (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(U.A, { subscriptions: e }),
                        (0, t.jsx)("div", {
                            className: O.dD,
                            children: e.map((n) =>
                                (0, t.jsx)(
                                    w,
                                    {
                                        appId: i,
                                        guildId: s,
                                        listing: n,
                                        subscriptionType: (0, g.bg)(n.skuFlags) ? "user" : "guild",
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
                        (0, t.jsx)(u.Heading, { variant: "heading-lg/semibold", children: F.intl.string(F.t.yUGTs8) }),
                        (0, t.jsx)("div", {
                            className: O.dD,
                            children: l.map((n) => (0, t.jsx)(D, { skuId: n.skuId, appId: i }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function w(n) {
    let { appId: i, guildId: s, listing: r, subscriptionType: o, onDetails: c } = n,
        { data: m } = (0, j.A)(r.skuId),
        p = m?.[0],
        v = (0, d.bG)([A.A], () => A.A.get(r.skuId), [r.skuId]),
        f = (0, d.bG)([k.A], () => k.A.getGuild(s), [s]),
        P = (0, d.bG)([A.A], () => A.A.getParentSKU(r.skuId), [r.skuId]),
        E = (0, x.GD)(P, s),
        S = E?.subscription,
        N = (0, x.Ko)(P, s),
        T = null != S && (0, g.Uo)(S, v),
        y = null != N && E?.subscriptionPlan?.id !== N?.subscriptionPlan.id,
        M = !1 === T && N?.subscriptionPlan.skuId === r.skuId,
        U = E?.subscriptionPlan.skuId === r.skuId,
        {
            openModal: G,
            subscriptionPurchaseButtonState: B,
            isGuildSubscribed: w,
        } = (0, I.A)({ skuId: r.skuId, initialSubscribeForGuild: s, analyticsLocation: L.ThZ.APP_STOREFRONT }),
        D = l.useMemo(
            () =>
                r.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, b.N)(i, n.icon),
                })),
            [i, r.benefits],
        ),
        z = l.useMemo(() => (null != r.thumbnail ? (0, R.t)(i, r.thumbnail, 256) : void 0), [i, r.thumbnail]),
        Y = l.useCallback(
            (n) =>
                (0, t.jsx)(_.rc, {
                    ...n,
                    appId: i,
                    subscriptionType: o,
                    skuId: r.skuId,
                    subscriptionPlan: p,
                    state: B,
                }),
            [i, o, r.skuId, p, B],
        ),
        K = l.useMemo(() => {
            if (y && S?.currentPeriodEnd != null) {
                let n = C.format(S?.currentPeriodEnd);
                if (U) return F.intl.formatToPlainString(F.t.EV2lZz, { date: n });
                if (M) return F.intl.formatToPlainString(F.t["2w6+NN"], { date: n });
            }
            if (w)
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        null != f && (0, t.jsx)(h.Ay, { guild: f, size: h.Ay.Sizes.MINI }),
                        F.intl.string(F.t.l8ufqL),
                    ],
                });
        }, [S?.currentPeriodEnd, f, y, U, w, M]),
        H =
            null != K
                ? (0, t.jsx)(u.Text, { color: "text-default", variant: "text-sm/normal", className: O.BJ, children: K })
                : void 0;
    return (0, t.jsx)(a.OP, {
        title: r.summary,
        subtitle: H,
        maxBenefits: null != H ? a.GS - 1 : a.GS,
        description: r.description ?? void 0,
        imgSrc: z,
        onPurchase: G,
        renderPurchaseButton: Y,
        benefitItems: null != D ? D.map((n) => (0, t.jsx)(a.FY, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != c
                ? c
                : null != D
                  ? () => {
                        (0, u.mMO)(async () => {
                            let { SubscriptionDetailsModal: n } = await e.e("64850").then(e.bind(e, 168393));
                            return (e) =>
                                (0, t.jsx)(n, { appId: i, subscriptionType: o, skuId: r.skuId, guildId: s, ...e });
                        });
                    }
                  : void 0,
    });
}
function D(n) {
    let { skuId: i, appId: l, onDetails: s } = n,
        { analyticsLocations: a } = (0, m.Ay)(c.A.APP_STOREFRONT),
        o = (0, d.bG)([f.A], () => f.A.getForSKU(i), [i]),
        h = (0, d.bG)([A.A], () => A.A.get(i), [i]),
        x = (0, M.L)(i);
    if (null == h) return null;
    let g = h.name ?? "",
        j = o?.description?.trim() ?? void 0,
        b = o?.headerBackground != null ? (T.A.toURLSafe((0, S.YE)(l, o.headerBackground, 256)) ?? void 0) : void 0,
        I = h.type === L.Puh.DURABLE && x,
        k = h.type === L.Puh.DURABLE ? (I ? F.intl.string(F.t.bm82mm) : F.intl.string(F.t["6gprwf"])) : void 0,
        { price: P } = h;
    return null == P
        ? null
        : (0, t.jsx)(r.A, {
              title: g,
              description: j,
              headerImage: b,
              availabilityLabel: k,
              PurchaseButton: (n) => (0, t.jsx)(_.$P, { ...n, appId: l, sku: h }),
              onPurchase: () => {
                  (0, v.k)({
                      appId: l,
                      skuId: h.id,
                      analyticsLocations: a,
                      checkoutFlow: p.C.PREMIUM_APPS_OTP_CHECKOUT,
                  });
              },
              onDetails:
                  null != s
                      ? s
                      : (0, N.uJ)(j)
                        ? void 0
                        : () => {
                              (0, u.mMO)(async () => {
                                  let { ItemDetailsModal: n } = await e.e("70104").then(e.bind(e, 963179));
                                  return (e) => (0, t.jsx)(n, { appId: l, skuId: i, ...e });
                              });
                          },
          });
}
