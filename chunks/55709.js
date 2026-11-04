i.d(e, { Mp: () => V, B8: () => X, B4: () => J });
var l = i(477900),
    s = i(582128),
    t = i(834730),
    r = i(958077);
function d(n) {
    let {
            title: e,
            subtitle: i,
            iconSrc: d,
            backgroundSrc: a,
            animatedBackgroundSrc: u,
            prefersReducedMotion: o = !0,
        } = n,
        c = s.useMemo(() => {
            let n = a ?? d;
            if (null != n) return { "--custom-background-url": `url(${n.toString()})` };
        }, [a, d]),
        m = s.useMemo(() => {
            if (null == a) return;
            let n = { "--custom-background-static": `url(${a.toString()}` };
            return (o || null == u || (n["--custom-background-animated"] = `url(${u.toString()})`), n);
        }, [u, a, o]);
    return (0, l.jsxs)("div", {
        className: r.iE,
        children: [
            (0, l.jsx)("div", { className: r.Tp, style: c }),
            (0, l.jsxs)("div", {
                className: r.Qs,
                children: [
                    null != d &&
                        (0, l.jsx)("div", {
                            className: r.Kk,
                            children: (0, l.jsx)("img", { src: d.toString(), alt: "" }),
                        }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(t.E, { variant: "heading-xl/semibold", tag: "div", children: e }),
                            null != i &&
                                (0, l.jsxs)(t.E, { variant: "body-sm/normal", children: ["\u201C", i, "\u201D"] }),
                        ],
                    }),
                ],
            }),
            null != a ? (0, l.jsx)("div", { className: r.Sl, style: m }) : null,
        ],
    });
}
var a = i(503698),
    u = i.n(a),
    o = i(559106),
    c = i(638916),
    m = i(883510),
    p = i(840362);
function h(n) {
    let {
        title: e,
        description: i,
        headerImage: s,
        onDetails: r,
        onPurchase: d,
        PurchaseButton: a,
        GiftButton: h,
        availabilityLabel: x,
    } = n;
    return (0, l.jsx)(o.vN, {
        children: (0, l.jsxs)("div", {
            className: u()(m.iE, p.t),
            tabIndex: 0,
            onClick: () => {
                null != r ? r() : null != d && d();
            },
            onKeyUp: (n) => {
                "Enter" === n.key && (n.stopPropagation(), n.preventDefault(), null != r ? r() : null != d && d());
            },
            children: [
                (0, l.jsx)("div", {
                    className: m.Td,
                    style: null != s ? { backgroundImage: null != s ? `url(${s.toString()})` : void 0 } : void 0,
                    children: null == s && (0, l.jsx)(c.q, { color: "white", size: "custom", height: 80, width: 80 }),
                }),
                (0, l.jsxs)("div", {
                    className: m.zH,
                    children: [
                        (0, l.jsx)(t.E, { color: "text-strong", variant: "body-md/semibold", children: e }),
                        null != i &&
                            (0, l.jsx)(t.E, {
                                className: m.h_,
                                color: "text-muted",
                                variant: "body-sm/normal",
                                children: i,
                            }),
                    ],
                }),
                (null != a || null != h) &&
                    (0, l.jsxs)("div", {
                        className: m.qr,
                        children: [
                            null != a &&
                                (0, l.jsx)(t.E, {
                                    color: "interactive-text-default",
                                    variant: "body-sm/normal",
                                    children: x,
                                }),
                            (0, l.jsxs)("div", {
                                className: m.GC,
                                children: [
                                    null != a &&
                                        (0, l.jsx)(a, {
                                            onClick: (n) => {
                                                (n.stopPropagation(), d?.());
                                            },
                                        }),
                                    null != h && (0, l.jsx)(h, {}),
                                ],
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var x = i(885996),
    b = i(855986),
    g = i(534514),
    v = i(192308),
    I = i(775602),
    j = i(793574),
    k = i(688810),
    A = i(998312),
    f = i(682163),
    P = i(915043),
    E = i(163437),
    N = i(955440),
    y = i(638643),
    S = i(3432),
    T = i(185438),
    R = i(71393),
    M = i(67480),
    _ = i(328968),
    U = i(129230),
    F = i(486020),
    C = i(371794),
    L = i(240248),
    D = i(998218),
    O = i(943775),
    B = i(237218),
    G = i(56754),
    w = i(376374),
    z = i(311321),
    K = i(652215),
    $ = i(792996),
    q = i(80890);
let H = new Intl.DateTimeFormat($.intl.currentLocale, { month: "short", day: "numeric" });
function V(n) {
    let { app: e, guildId: i, subscriptions: t, otps: r } = n,
        a = s.useMemo(() => (0, O.A)(e, 100), [e]),
        { bot: u } = e,
        o = s.useMemo(() => {
            if (u?.banner == null) return;
            let n = (0, F.z)({ id: u.id, banner: u.banner, size: 1024, canAnimate: !1 });
            return null != n ? (D.A.toURLSafe(n) ?? void 0) : void 0;
        }, [u]),
        c = s.useMemo(() => {
            if (u?.banner == null) return;
            let n = (0, F.z)({ id: u.id, banner: u.banner, size: 1024, canAnimate: !0 });
            return null != n ? (D.A.toURLSafe(n) ?? void 0) : void 0;
        }, [u]),
        m = (0, b.bG)([I.Ay], () => I.Ay.useReducedMotion),
        p = s.useMemo(() => [...t.map((n) => n.skuId), ...r.map((n) => n.skuId)], [t, r]),
        { analyticsLocations: h } = (0, k.Ay)(j.A.APP_STOREFRONT);
    return (
        s.useEffect(() => {
            0 !== p.length &&
                U.default.track(K.HAw.VIEW_PREMIUM_APP_STOREFRONT, {
                    application_id: e.id,
                    sku_ids: p,
                    location_stack: h,
                });
        }, [h, e.id, p]),
        (0, l.jsxs)("div", {
            className: q.iE,
            children: [
                (0, l.jsx)(d, {
                    title: e.name,
                    iconSrc: a,
                    backgroundSrc: o,
                    animatedBackgroundSrc: c,
                    prefersReducedMotion: m,
                }),
                (0, l.jsx)(Z, { appId: e.id, subscriptions: t, otps: r, guildId: i }),
            ],
        })
    );
}
function Z(n) {
    let { appId: e, subscriptions: i, otps: s, guildId: t } = n;
    return (0, l.jsxs)("div", {
        className: q.q4,
        children: [
            i.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(z.A, { subscriptions: i }),
                        (0, l.jsx)("div", {
                            className: q.dD,
                            children: i.map((n) =>
                                (0, l.jsx)(
                                    J,
                                    {
                                        appId: e,
                                        guildId: t,
                                        listing: n,
                                        subscriptionType: (0, E.bg)(n.skuFlags) ? "user" : "guild",
                                    },
                                    n.id,
                                ),
                            ),
                        }),
                    ],
                }),
            s.length > 0 &&
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(g.D, { variant: "heading-lg/semibold", children: $.intl.string($.t.yUGTs8) }),
                        (0, l.jsx)("div", {
                            className: q.dD,
                            children: s.map((n) => (0, l.jsx)(X, { skuId: n.skuId, appId: e }, n.id)),
                        }),
                    ],
                }),
        ],
    });
}
function J(n) {
    let { appId: e, guildId: r, listing: d, subscriptionType: a, onDetails: u } = n,
        { data: o } = (0, N.A)(d.skuId),
        c = o?.[0],
        m = (0, b.bG)([M.A], () => M.A.get(d.skuId), [d.skuId]),
        p = (0, b.bG)([R.A], () => R.A.getGuild(r), [r]),
        h = (0, b.bG)([M.A], () => M.A.getParentSKU(d.skuId), [d.skuId]),
        g = (0, P.GD)(h, r),
        I = g?.subscription,
        j = (0, P.Ko)(h, r),
        k = null != I && (0, E.Uo)(I, m),
        A = null != j && g?.subscriptionPlan?.id !== j?.subscriptionPlan.id,
        y = !1 === k && j?.subscriptionPlan.skuId === d.skuId,
        _ = g?.subscriptionPlan.skuId === d.skuId,
        {
            openModal: U,
            subscriptionPurchaseButtonState: F,
            isGuildSubscribed: C,
        } = (0, T.A)({ skuId: d.skuId, initialSubscribeForGuild: r, analyticsLocation: K.ThZ.APP_STOREFRONT }),
        L = s.useMemo(
            () =>
                d.benefits?.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, S.N)(e, n.icon),
                })),
            [e, d.benefits],
        ),
        D = s.useMemo(() => (null != d.thumbnail ? (0, B.t)(e, d.thumbnail, 256) : void 0), [e, d.thumbnail]),
        O = s.useCallback(
            (n) =>
                (0, l.jsx)(w.rc, {
                    ...n,
                    appId: e,
                    subscriptionType: a,
                    skuId: d.skuId,
                    subscriptionPlan: c,
                    state: F,
                }),
            [e, a, d.skuId, c, F],
        ),
        G = s.useMemo(() => {
            if (A && I?.currentPeriodEnd != null) {
                let n = H.format(I?.currentPeriodEnd);
                if (_) return $.intl.formatToPlainString($.t.EV2lZz, { date: n });
                if (y) return $.intl.formatToPlainString($.t["2w6+NN"], { date: n });
            }
            if (C)
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        null != p && (0, l.jsx)(f.Ay, { guild: p, size: f.Ay.Sizes.MINI }),
                        $.intl.string($.t.l8ufqL),
                    ],
                });
        }, [I?.currentPeriodEnd, p, A, _, C, y]),
        z =
            null != G
                ? (0, l.jsx)(t.E, { color: "text-default", variant: "body-sm/normal", className: q.BJ, children: G })
                : void 0;
    return (0, l.jsx)(x.O, {
        title: d.summary,
        subtitle: z,
        maxBenefits: null != z ? 4 : 5,
        description: d.description ?? void 0,
        imgSrc: D,
        onPurchase: U,
        renderPurchaseButton: O,
        benefitItems: null != L ? L.map((n) => (0, l.jsx)(x.F, { description: n.title, icon: n.icon }, n.id)) : void 0,
        onDetails:
            null != u
                ? u
                : null != L
                  ? () => {
                        (0, v.mM)(async () => {
                            let { SubscriptionDetailsModal: n } = await Promise.all([
                                i.e(426782),
                                i.e(406322),
                                i.e(942571),
                                i.e(817989),
                                i.e(15481),
                                i.e(564850),
                            ]).then(i.bind(i, 168393));
                            return (i) =>
                                (0, l.jsx)(n, { appId: e, subscriptionType: a, skuId: d.skuId, guildId: r, ...i });
                        });
                    }
                  : void 0,
    });
}
function X(n) {
    let { skuId: e, appId: s, onDetails: t } = n,
        { analyticsLocations: r } = (0, k.Ay)(j.A.APP_STOREFRONT),
        d = (0, b.bG)([_.A], () => _.A.getForSKU(e), [e]),
        a = (0, b.bG)([M.A], () => M.A.get(e), [e]),
        u = (0, G.L)(e);
    if (null == a) return null;
    let o = a.name ?? "",
        c = d?.description?.trim() ?? void 0,
        m = d?.headerBackground != null ? (D.A.toURLSafe((0, C.YE)(s, d.headerBackground, 256)) ?? void 0) : void 0,
        p = a.type === K.Puh.DURABLE && u,
        x = a.type === K.Puh.DURABLE ? (p ? $.intl.string($.t.bm82mm) : $.intl.string($.t["6gprwf"])) : void 0,
        { price: g } = a;
    return null == g
        ? null
        : (0, l.jsx)(h, {
              title: o,
              description: c,
              headerImage: m,
              availabilityLabel: x,
              PurchaseButton: function (n) {
                  return null == a ? null : (0, l.jsx)(w.$P, { ...n, appId: s, sku: a });
              },
              onPurchase: function () {
                  null != a &&
                      (0, y.k)({
                          appId: s,
                          skuId: a.id,
                          analyticsLocations: r,
                          checkoutFlow: A.C.PREMIUM_APPS_OTP_CHECKOUT,
                      });
              },
              onDetails:
                  null != t
                      ? t
                      : (0, L.uJ)(c)
                        ? void 0
                        : () => {
                              (0, v.mM)(async () => {
                                  let { ItemDetailsModal: n } = await Promise.all([
                                      i.e(426782),
                                      i.e(406322),
                                      i.e(942571),
                                      i.e(817989),
                                      i.e(15481),
                                      i.e(170104),
                                  ]).then(i.bind(i, 963179));
                                  return (i) => (0, l.jsx)(n, { appId: s, skuId: e, ...i });
                              });
                          },
          });
}
