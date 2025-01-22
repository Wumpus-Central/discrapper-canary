n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(789020);
var i = n(200651),
    a = n(192379),
    r = n(793030),
    l = n(442837),
    o = n(481060),
    s = n(794295),
    c = n(765717),
    d = n(283836),
    u = n(507608),
    m = n(955335),
    p = n(171246),
    h = n(55563),
    g = n(881294),
    C = n(133743),
    x = n(979007),
    v = n(981631),
    _ = n(388032),
    f = n(272680);
function b(e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: f.storeContainer,
        children: [(0, i.jsx)(I, { application: t }), (0, i.jsx)(j, { application: t })]
    });
}
function I(e) {
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
                                let n = (0, p.KW)(e.skuFlags) ? 'user' : 'guild';
                                return (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () => (0, C.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
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
                            children: _.intl.string(_.t.yUGTs7)
                        }),
                        (0, i.jsx)('div', {
                            className: f.products,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () => (0, C.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, i.jsx)(c.Z, {
                path: v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, i.jsx)(S, { ...e })
            })
        ]
    });
}
function S(e) {
    let {
            match: {
                params: { applicationId: t, skuId: r }
            }
        } = e,
        s = (0, l.e7)([h.Z], () => h.Z.get(r), [r]),
        c = (0, l.e7)([h.Z], () => (null != r ? h.Z.getParentSKU(r) : void 0), [r]),
        d = a.useId(),
        u = a.useCallback(() => (0, C.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, x.GlobalDiscoveryAppsSections.STORE)), [t]);
    return (
        a.useLayoutEffect(() => {
            var e, a, l, u, m, h, g;
            switch (null == s ? void 0 : s.type) {
                case v.epS.CONSUMABLE:
                case v.epS.DURABLE:
                    return (
                        (e = d),
                        (a = t),
                        (l = r),
                        void (0, o.openModalLazy)(
                            async () => {
                                let { ItemDetailsModal: e } = await n.e('69796').then(n.bind(n, 147496));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        appId: a,
                                        skuId: l,
                                        ...t
                                    });
                            },
                            {
                                modalKey: e,
                                onCloseCallback: () => {
                                    !N() && (0, C.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(a, x.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
                case v.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    return (
                        (u = d),
                        (m = t),
                        (h = r),
                        (g = (0, p.KW)(c.flags) ? 'user' : 'guild'),
                        void (0, o.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: e } = await Promise.all([n.e('86282'), n.e('23642')]).then(n.bind(n, 519896));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        appId: m,
                                        subscriptionType: g,
                                        skuId: h,
                                        guildId: void 0,
                                        ...t
                                    });
                            },
                            {
                                modalKey: u,
                                onCloseCallback: () => {
                                    !N() && (0, C.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(m, x.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
            }
        }, [t, d, u, null == c ? void 0 : c.flags, null == s ? void 0 : s.flags, null == s ? void 0 : s.type, r]),
        a.useLayoutEffect(
            () => () => {
                (0, o.closeModal)(d);
            },
            [d]
        ),
        null
    );
}
function j(e) {
    let { application: t } = e,
        n = (0, g.nu)(),
        a = t.terms_of_service_url,
        l = t.privacy_policy_url;
    if (null == a && null == l) return null;
    let o = (e, t) =>
        (0, i.jsx)(s.Z, {
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
                    ? _.intl.format(_.t.nylPOT, {
                          termsHook: (e) => o(e, a),
                          privacyHook: (e) => o(e, l)
                      })
                    : null != a
                      ? _.intl.format(_.t['0cPyDw'], { termsHook: (e) => o(e, a) })
                      : null != l
                        ? _.intl.format(_.t.loYGCw, { privacyHook: (e) => o(e, l) })
                        : null
        })
    });
}
function N() {
    return window.location.pathname.startsWith('/login');
}
