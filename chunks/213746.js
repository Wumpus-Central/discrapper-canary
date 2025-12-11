n.d(t, { Z: () => _ }), n(35282), n(997841);
var a = n(54381),
    r = n(473749),
    i = n(793030),
    l = n(442837),
    s = n(481060),
    o = n(794295),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    p = n(955335),
    m = n(171246),
    h = n(55563),
    f = n(881294),
    g = n(133743),
    b = n(979007),
    x = n(981631),
    v = n(388032),
    C = n(156870);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function _(e) {
    let { application: t } = e;
    return (0, a.jsxs)("div", {
        className: C.storeContainer,
        children: [(0, a.jsx)(y, { application: t }), (0, a.jsx)(S, { application: t })],
    });
}
function y(e) {
    let { application: t } = e,
        { subscriptions: n, otps: r } = (0, d.q)(t.id);
    return (0, a.jsxs)("div", {
        className: C.storeContainer,
        children: [
            n.length > 0 &&
                (0, a.jsxs)("div", {
                    className: C.productSection,
                    children: [
                        (0, a.jsx)(p.r, {
                            subscriptions: n,
                            color: "text-strong",
                        }),
                        (0, a.jsx)("div", {
                            className: C.products,
                            children: n.map((e) => {
                                let n = (0, m.KW)(e.skuFlags) ? "user" : "guild";
                                return (0, a.jsx)(
                                    u.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () =>
                                            (0, g.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            r.length > 0 &&
                (0, a.jsxs)("div", {
                    className: C.productSection,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: v.intl.string(v.t.yUGTs8),
                        }),
                        (0, a.jsx)("div", {
                            className: C.products,
                            children: r.map((e) =>
                                (0, a.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            (0, g.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, a.jsx)(c.Z, {
                path: x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, a.jsx)(I, j({}, e)),
            }),
        ],
    });
}
function I(e) {
    let {
            match: {
                params: { applicationId: t, skuId: i },
            },
        } = e,
        o = (0, l.e7)([h.Z], () => h.Z.get(i), [i]),
        c = (0, l.e7)([h.Z], () => (null != i ? h.Z.getParentSKU(i) : void 0), [i]),
        d = r.useId(),
        u = r.useCallback(
            () => (0, g.Gp)(x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, b.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        r.useLayoutEffect(() => {
            var e;
            switch (null == o ? void 0 : o.type) {
                case x.epS.CONSUMABLE:
                case x.epS.DURABLE:
                    return void (0, s.ZDy)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(n.bind(n, 147496));
                            return (n) =>
                                (0, a.jsx)(
                                    e,
                                    j(
                                        {
                                            appId: t,
                                            skuId: i,
                                        },
                                        n,
                                    ),
                                );
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                P() ||
                                    (0, g.Gp)(
                                        x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            b.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case x.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    return (
                        (e = (0, m.KW)(c.flags) ? "user" : "guild"),
                        void (0, s.ZDy)(
                            async () => {
                                let { SubscriptionDetailsModal: r } = await Promise.resolve().then(n.bind(n, 519896));
                                return (n) =>
                                    (0, a.jsx)(
                                        r,
                                        j(
                                            {
                                                appId: t,
                                                subscriptionType: e,
                                                skuId: i,
                                                guildId: void 0,
                                            },
                                            n,
                                        ),
                                    );
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    P() ||
                                        (0, g.Gp)(
                                            x.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                b.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, d, u, null == c ? void 0 : c.flags, null == o ? void 0 : o.flags, null == o ? void 0 : o.type, i]),
        r.useLayoutEffect(
            () => () => {
                (0, s.Mr3)(d);
            },
            [d],
        ),
        null
    );
}
function S(e) {
    let { application: t } = e,
        n = (0, f.nu)(),
        r = t.terms_of_service_url,
        l = t.privacy_policy_url;
    if (null == r && null == l) return null;
    let s = (e, t) =>
        (0, a.jsx)(o.Z, {
            href: t,
            trusted: !n,
            children: e,
        });
    return (0, a.jsx)("div", {
        className: C.legalContainer,
        children: (0, a.jsx)(i.xvT, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != r && null != l
                    ? v.intl.format(v.t.nylPOT, {
                          termsHook: (e) => s(e, r),
                          privacyHook: (e) => s(e, l),
                      })
                    : null != r
                      ? v.intl.format(v.t["0cPyDz"], { termsHook: (e) => s(e, r) })
                      : null != l
                        ? v.intl.format(v.t["loYGC/"], { privacyHook: (e) => s(e, l) })
                        : null,
        }),
    });
}
function P() {
    return window.location.pathname.startsWith("/login");
}
