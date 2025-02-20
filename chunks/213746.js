n.d(t, { Z: () => j }), n(301563), n(789020);
var r = n(200651),
    a = n(192379),
    i = n(793030),
    l = n(442837),
    o = n(481060),
    s = n(794295),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    p = n(955335),
    m = n(171246),
    h = n(55563),
    g = n(881294),
    _ = n(133743),
    f = n(979007),
    v = n(981631),
    b = n(388032),
    x = n(268348);
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
        className: x.storeContainer,
        children: [(0, r.jsx)(y, { application: t }), (0, r.jsx)(I, { application: t })]
    });
}
function y(e) {
    let { application: t } = e,
        { subscriptions: n, otps: a } = (0, d.q)(t.id);
    return (0, r.jsxs)('div', {
        className: x.storeContainer,
        children: [
            n.length > 0 &&
                (0, r.jsxs)('div', {
                    className: x.productSection,
                    children: [
                        (0, r.jsx)(p.r, {
                            subscriptions: n,
                            color: 'header-primary'
                        }),
                        (0, r.jsx)('div', {
                            className: x.products,
                            children: n.map((e) => {
                                let n = (0, m.KW)(e.skuFlags) ? 'user' : 'guild';
                                return (0, r.jsx)(
                                    u.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () => (0, _.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                );
                            })
                        })
                    ]
                }),
            a.length > 0 &&
                (0, r.jsxs)('div', {
                    className: x.productSection,
                    children: [
                        (0, r.jsx)(i.X6, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: b.NW.string(b.t.yUGTs7)
                        }),
                        (0, r.jsx)('div', {
                            className: x.products,
                            children: a.map((e) =>
                                (0, r.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () => (0, _.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, r.jsx)(c.Z, {
                path: v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, r.jsx)(O, C({}, e))
            })
        ]
    });
}
function O(e) {
    let {
            match: {
                params: { applicationId: t, skuId: i }
            }
        } = e,
        s = (0, l.e7)([h.Z], () => h.Z.get(i), [i]),
        c = (0, l.e7)([h.Z], () => (null != i ? h.Z.getParentSKU(i) : void 0), [i]),
        d = a.useId(),
        u = a.useCallback(() => (0, _.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE)), [t]);
    return (
        a.useLayoutEffect(() => {
            var e;
            switch (null == s ? void 0 : s.type) {
                case v.epS.CONSUMABLE:
                case v.epS.DURABLE:
                    return void (0, o.ZDy)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([n.e('97349'), n.e('48623')]).then(n.bind(n, 147496));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    C(
                                        {
                                            appId: t,
                                            skuId: i
                                        },
                                        n
                                    )
                                );
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                N() || (0, _.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE));
                            }
                        }
                    );
                case v.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    return (
                        (e = (0, m.KW)(c.flags) ? 'user' : 'guild'),
                        void (0, o.ZDy)(
                            async () => {
                                let { SubscriptionDetailsModal: a } = await Promise.all([n.e('97349'), n.e('65207')]).then(n.bind(n, 519896));
                                return (n) =>
                                    (0, r.jsx)(
                                        a,
                                        C(
                                            {
                                                appId: t,
                                                subscriptionType: e,
                                                skuId: i,
                                                guildId: void 0
                                            },
                                            n
                                        )
                                    );
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    N() || (0, _.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, f.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
            }
        }, [t, d, u, null == c ? void 0 : c.flags, null == s ? void 0 : s.flags, null == s ? void 0 : s.type, i]),
        a.useLayoutEffect(
            () => () => {
                (0, o.Mr3)(d);
            },
            [d]
        ),
        null
    );
}
function I(e) {
    let { application: t } = e,
        n = (0, g.nu)(),
        a = t.terms_of_service_url,
        l = t.privacy_policy_url;
    if (null == a && null == l) return null;
    let o = (e, t) =>
        (0, r.jsx)(s.Z, {
            href: t,
            trusted: !n,
            children: e
        });
    return (0, r.jsx)('div', {
        className: x.legalContainer,
        children: (0, r.jsx)(i.xv, {
            color: 'header-primary',
            variant: 'text-sm/normal',
            children:
                null != a && null != l
                    ? b.NW.format(b.t.nylPOT, {
                          termsHook: (e) => o(e, a),
                          privacyHook: (e) => o(e, l)
                      })
                    : null != a
                      ? b.NW.format(b.t['0cPyDw'], { termsHook: (e) => o(e, a) })
                      : null != l
                        ? b.NW.format(b.t.loYGCw, { privacyHook: (e) => o(e, l) })
                        : null
        })
    });
}
function N() {
    return window.location.pathname.startsWith('/login');
}
