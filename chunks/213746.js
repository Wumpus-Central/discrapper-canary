n.d(t, { Z: () => j }), n(35282), n(997841);
var r = n(255367),
    i = n(73800),
    a = n(793030),
    l = n(442837),
    s = n(481060),
    o = n(794295),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    p = n(955335),
    m = n(171246),
    h = n(55563),
    g = n(881294),
    _ = n(133743),
    f = n(979007),
    b = n(981631),
    x = n(388032),
    v = n(789362);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e) {
    let { application: t } = e;
    return (0, r.jsxs)('div', {
        className: v.storeContainer,
        children: [(0, r.jsx)(y, { application: t }), (0, r.jsx)(O, { application: t })]
    });
}
function y(e) {
    let { application: t } = e,
        { subscriptions: n, otps: i } = (0, d.q)(t.id);
    return (0, r.jsxs)('div', {
        className: v.storeContainer,
        children: [
            n.length > 0 &&
                (0, r.jsxs)('div', {
                    className: v.productSection,
                    children: [
                        (0, r.jsx)(p.r, {
                            subscriptions: n,
                            color: 'header-primary'
                        }),
                        (0, r.jsx)('div', {
                            className: v.products,
                            children: n.map((e) => {
                                let n = (0, m.KW)(e.skuFlags) ? 'user' : 'guild';
                                return (0, r.jsx)(
                                    u.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () => (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                );
                            })
                        })
                    ]
                }),
            i.length > 0 &&
                (0, r.jsxs)('div', {
                    className: v.productSection,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: x.intl.string(x.t.yUGTs7)
                        }),
                        (0, r.jsx)('div', {
                            className: v.products,
                            children: i.map((e) =>
                                (0, r.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () => (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, r.jsx)(c.Z, {
                path: b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, r.jsx)(I, C({}, e))
            })
        ]
    });
}
function I(e) {
    let {
            match: {
                params: { applicationId: t, skuId: a }
            }
        } = e,
        o = (0, l.e7)([h.Z], () => h.Z.get(a), [a]),
        c = (0, l.e7)([h.Z], () => (null != a ? h.Z.getParentSKU(a) : void 0), [a]),
        d = i.useId(),
        u = i.useCallback(() => (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE)), [t]);
    return (
        i.useLayoutEffect(() => {
            var e;
            switch (null == o ? void 0 : o.type) {
                case b.epS.CONSUMABLE:
                case b.epS.DURABLE:
                    return void (0, s.ZDy)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(n.bind(n, 147496));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    C(
                                        {
                                            appId: t,
                                            skuId: a
                                        },
                                        n
                                    )
                                );
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                P() || (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE));
                            }
                        }
                    );
                case b.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    return (
                        (e = (0, m.KW)(c.flags) ? 'user' : 'guild'),
                        void (0, s.ZDy)(
                            async () => {
                                let { SubscriptionDetailsModal: i } = await Promise.resolve().then(n.bind(n, 519896));
                                return (n) =>
                                    (0, r.jsx)(
                                        i,
                                        C(
                                            {
                                                appId: t,
                                                subscriptionType: e,
                                                skuId: a,
                                                guildId: void 0
                                            },
                                            n
                                        )
                                    );
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    P() || (0, _.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
            }
        }, [t, d, u, null == c ? void 0 : c.flags, null == o ? void 0 : o.flags, null == o ? void 0 : o.type, a]),
        i.useLayoutEffect(
            () => () => {
                (0, s.Mr3)(d);
            },
            [d]
        ),
        null
    );
}
function O(e) {
    let { application: t } = e,
        n = (0, g.nu)(),
        i = t.terms_of_service_url,
        l = t.privacy_policy_url;
    if (null == i && null == l) return null;
    let s = (e, t) =>
        (0, r.jsx)(o.Z, {
            href: t,
            trusted: !n,
            children: e
        });
    return (0, r.jsx)('div', {
        className: v.legalContainer,
        children: (0, r.jsx)(a.xv, {
            color: 'header-primary',
            variant: 'text-sm/normal',
            children:
                null != i && null != l
                    ? x.intl.format(x.t.nylPOT, {
                          termsHook: (e) => s(e, i),
                          privacyHook: (e) => s(e, l)
                      })
                    : null != i
                      ? x.intl.format(x.t['0cPyDw'], { termsHook: (e) => s(e, i) })
                      : null != l
                        ? x.intl.format(x.t.loYGCw, { privacyHook: (e) => s(e, l) })
                        : null
        })
    });
}
function P() {
    return window.location.pathname.startsWith('/login');
}
