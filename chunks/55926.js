e.d(i, { B4: () => C, B8: () => D, Mp: () => O });
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
    p = e(263063),
    x = e(915043),
    h = e(163437),
    g = e(955440),
    j = e(638643),
    v = e(3432),
    b = e(185438),
    I = e(71393),
    k = e(67480),
    A = e(328968),
    f = e(954571),
    P = e(486020),
    N = e(371794),
    S = e(240248),
    E = e(998218),
    T = e(943775),
    y = e(237218),
    R = e(56754),
    M = e(376374),
    _ = e(311321),
    L = e(652215),
    U = e(985018),
    F = e(485862);
let G = new Intl.DateTimeFormat(U.intl.currentLocale, { month: "short", day: "numeric" });
function O(n) {
    let { app: i, guildId: e, subscriptions: r, otps: a } = n,
        u = l.useMemo(() => (0, T.A)(i, 100), [i]),
        { bot: p } = i,
        x = l.useMemo(() => {
            if (p?.banner == null) return;
            let n = (0, P.z)({ id: p.id, banner: p.banner, size: 1024, canAnimate: !1 });
            return null != n ? (E.A.toURLSafe(n) ?? void 0) : void 0;
        }, [p]),
        h = l.useMemo(() => {
            if (p?.banner == null) return;
            let n = (0, P.z)({ id: p.id, banner: p.banner, size: 1024, canAnimate: !0 });
            return null != n ? (E.A.toURLSafe(n) ?? void 0) : void 0;
        }, [p]),
        g = (0, d.bG)([o.A], () => o.A.useReducedMotion),
        j = l.useMemo(() => [...r.map((n) => n.skuId), ...a.map((n) => n.skuId)], [r, a]),
        { analyticsLocations: v } = (0, m.Ay)(c.A.APP_STOREFRONT);
    return (
        l.useEffect(() => {
            0 !== j.length &&
                f.default.track(L.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: i.id,
                    sku_ids: j,
                    location_stack: v,
                });
        }, [v, i.id, j]),
        (0, t.jsxs)("div", {
            className: F.iE,
            children: [
                (0, t.jsx)(s.l, {
                    title: i.name,
                    iconSrc: u,
                    backgroundSrc: x,
                    animatedBackgroundSrc: h,
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
        className: F.q4,
        children: [
            e.length > 0 &&
                (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(_.A, { subscriptions: e }),
                        (0, t.jsx)("div", {
                            className: F.dD,
                            children: e.map((n) =>
                                (0, t.jsx)(
                                    C,
                                    {
                                        appId: i,
                                        guildId: s,
                                        listing: n,
                                        subscriptionType: (0, h.bg)(n.skuFlags) ? "user" : "guild",
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
                        (0, t.jsx)(u.Heading, { variant: "heading-lg/semibold", children: U.intl.string(U.t.yUGTs8) }),
                        (0, t.jsx)("div", {
                            className: F.dD,
                            children: l.map((n) => (0, t.jsx)(D, { skuId: n.skuId, appId: i }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function C(n) {
    let { appId: i, guildId: s, listing: r, subscriptionType: o, onDetails: c } = n,
        { data: m } = (0, g.A)(r.skuId),
        j = m?.[0],
        A = (0, d.bG)([k.A], () => k.A.get(r.skuId), [r.skuId]),
        f = (0, d.bG)([I.A], () => I.A.getGuild(s), [s]),
        P = (0, d.bG)([k.A], () => k.A.getParentSKU(r.skuId), [r.skuId]),
        N = (0, x.GD)(P, s),
        S = N?.subscription,
        E = (0, x.Ko)(P, s),
        T = null != S && (0, h.Uo)(S, A),
        R = null != E && N?.subscriptionPlan?.id !== E?.subscriptionPlan.id,
        _ = !1 === T && E?.subscriptionPlan.skuId === r.skuId,
        O = N?.subscriptionPlan.skuId === r.skuId,
        {
            openModal: B,
            subscriptionPurchaseButtonState: C,
            isGuildSubscribed: D,
        } = (0, b.A)({ skuId: r.skuId, initialSubscribeForGuild: s, analyticsLocation: L.ThZ.APP_STOREFRONT }),
        w = l.useMemo(
            () =>
                r.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, v.N)(i, n.icon),
                })),
            [i, r.benefits],
        ),
        z = l.useMemo(() => (null != r.thumbnail ? (0, y.t)(i, r.thumbnail, 256) : void 0), [i, r.thumbnail]),
        Y = l.useCallback(
            (n) =>
                (0, t.jsx)(M.rc, {
                    ...n,
                    appId: i,
                    subscriptionType: o,
                    skuId: r.skuId,
                    subscriptionPlan: j,
                    state: C,
                }),
            [i, o, r.skuId, j, C],
        ),
        K = l.useMemo(() => {
            if (R && S?.currentPeriodEnd != null) {
                let n = G.format(S?.currentPeriodEnd);
                if (O) return U.intl.formatToPlainString(U.t.EV2lZz, { date: n });
                if (_) return U.intl.formatToPlainString(U.t["2w6+NN"], { date: n });
            }
            if (D)
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        null != f && (0, t.jsx)(p.Ay, { guild: f, size: p.Ay.Sizes.MINI }),
                        U.intl.string(U.t.l8ufqL),
                    ],
                });
        }, [S?.currentPeriodEnd, f, R, O, D, _]),
        $ =
            null != K
                ? (0, t.jsx)(u.Text, { color: "text-default", variant: "text-sm/normal", className: F.BJ, children: K })
                : void 0;
    return (0, t.jsx)(a.OP, {
        title: r.summary,
        subtitle: $,
        maxBenefits: null != $ ? a.GS - 1 : a.GS,
        description: r.description ?? void 0,
        imgSrc: z,
        onPurchase: B,
        renderPurchaseButton: Y,
        benefitItems: null != w ? w.map((n) => (0, t.jsx)(a.FY, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != c
                ? c
                : null != w
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
        o = (0, d.bG)([A.A], () => A.A.getForSKU(i), [i]),
        p = (0, d.bG)([k.A], () => k.A.get(i), [i]),
        x = (0, R.L)(i);
    if (null == p) return null;
    let h = p.name ?? "",
        g = o?.description?.trim() ?? void 0,
        v = o?.headerBackground != null ? (E.A.toURLSafe((0, N.YE)(l, o.headerBackground, 256)) ?? void 0) : void 0,
        b = p.type === L.Puh.DURABLE && x,
        I = p.type === L.Puh.DURABLE ? (b ? U.intl.string(U.t.bm82mm) : U.intl.string(U.t["6gprwf"])) : void 0,
        { price: f } = p;
    return null == f
        ? null
        : (0, t.jsx)(r.A, {
              title: h,
              description: g,
              headerImage: v,
              availabilityLabel: I,
              PurchaseButton: (n) => (0, t.jsx)(M.$P, { ...n, appId: l, sku: p }),
              onPurchase: () => {
                  (0, j.k)({ appId: l, skuId: p.id, analyticsLocations: a });
              },
              onDetails:
                  null != s
                      ? s
                      : (0, S.uJ)(g)
                        ? void 0
                        : () => {
                              (0, u.mMO)(async () => {
                                  let { ItemDetailsModal: n } = await e.e("70104").then(e.bind(e, 963179));
                                  return (e) => (0, t.jsx)(n, { appId: l, skuId: i, ...e });
                              });
                          },
          });
}
