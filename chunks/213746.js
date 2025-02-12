n.d(t, { Z: () => I }), n(789020);
var i = n(200651),
    a = n(192379),
    r = n(793030),
    l = n(442837),
    s = n(481060),
    o = n(794295),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    m = n(955335),
    h = n(171246),
    p = n(55563),
    g = n(881294),
    _ = n(133743),
    x = n(979007),
    C = n(981631),
    v = n(388032),
    f = n(305420);
function I(e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: f.storeContainer,
        children: [(0, i.jsx)(b, { application: t }), (0, i.jsx)(S, { application: t })]
    });
}
function b(e) {
    let { application: t } = e,
        { subscriptions: n, otps: a } = (0, d.q)(t.id);
    return (0, i.jsxs)('div', {
        className: f.storeContainer,
        children: [
            n.length > 0 &&
                (0, i.jsxs)('div', {
                    className: f.productSection,
                    children: [
                        (0, i.jsx)(m.r, {
                            subscriptions: n,
                            color: 'header-primary'
                        }),
                        (0, i.jsx)('div', {
                            className: f.products,
                            children: n.map((e) => {
                                let n = (0, h.KW)(e.skuFlags) ? 'user' : 'guild';
                                return (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () => (0, _.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                );
                            })
                        })
                    ]
                }),
            a.length > 0 &&
                (0, i.jsxs)('div', {
                    className: f.productSection,
                    children: [
                        (0, i.jsx)(r.X6, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: v.intl.string(v.t.yUGTs7)
                        }),
                        (0, i.jsx)('div', {
                            className: f.products,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () => (0, _.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, i.jsx)(c.Z, {
                path: C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, i.jsx)(j, { ...e })
            })
        ]
    });
}
function j(e) {
    let {
            match: {
                params: { applicationId: t, skuId: r }
            }
        } = e,
        o = (0, l.e7)([p.Z], () => p.Z.get(r), [r]),
        c = (0, l.e7)([p.Z], () => (null != r ? p.Z.getParentSKU(r) : void 0), [r]),
        d = a.useId(),
        u = a.useCallback(() => (0, _.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, x.GlobalDiscoveryAppsSections.STORE)), [t]);
    return (
        a.useLayoutEffect(() => {
            var e;
            switch (null == o ? void 0 : o.type) {
                case C.epS.CONSUMABLE:
                case C.epS.DURABLE:
                    return void (0, s.ZDy)(
                        async () => {
                            let { ItemDetailsModal: e } = await n.e('69796').then(n.bind(n, 147496));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    appId: t,
                                    skuId: r,
                                    ...n
                                });
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                N() || (0, _.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, x.GlobalDiscoveryAppsSections.STORE));
                            }
                        }
                    );
                case C.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    return (
                        (e = (0, h.KW)(c.flags) ? 'user' : 'guild'),
                        void (0, s.ZDy)(
                            async () => {
                                let { SubscriptionDetailsModal: a } = await Promise.all([n.e('86282'), n.e('53065')]).then(n.bind(n, 519896));
                                return (n) =>
                                    (0, i.jsx)(a, {
                                        appId: t,
                                        subscriptionType: e,
                                        skuId: r,
                                        guildId: void 0,
                                        ...n
                                    });
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    N() || (0, _.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, x.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
            }
        }, [t, d, u, null == c ? void 0 : c.flags, null == o ? void 0 : o.flags, null == o ? void 0 : o.type, r]),
        a.useLayoutEffect(
            () => () => {
                (0, s.Mr3)(d);
            },
            [d]
        ),
        null
    );
}
function S(e) {
    let { application: t } = e,
        n = (0, g.nu)(),
        a = t.terms_of_service_url,
        l = t.privacy_policy_url;
    if (null == a && null == l) return null;
    let s = (e, t) =>
        (0, i.jsx)(o.Z, {
            href: t,
            trusted: !n,
            children: e
        });
    return (0, i.jsx)('div', {
        className: f.legalContainer,
        children: (0, i.jsx)(r.xv, {
            color: 'header-primary',
            variant: 'text-sm/normal',
            children:
                null != a && null != l
                    ? v.intl.format(v.t.nylPOT, {
                          termsHook: (e) => s(e, a),
                          privacyHook: (e) => s(e, l)
                      })
                    : null != a
                      ? v.intl.format(v.t['0cPyDw'], { termsHook: (e) => s(e, a) })
                      : null != l
                        ? v.intl.format(v.t.loYGCw, { privacyHook: (e) => s(e, l) })
                        : null
        })
    });
}
function N() {
    return window.location.pathname.startsWith('/login');
}
