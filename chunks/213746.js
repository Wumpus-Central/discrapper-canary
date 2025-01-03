t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(789020);
var a = t(200651),
    i = t(192379),
    r = t(793030),
    l = t(442837),
    o = t(481060),
    s = t(794295),
    c = t(765717),
    d = t(283836),
    u = t(507608),
    m = t(955335),
    p = t(171246),
    _ = t(55563),
    g = t(881294),
    v = t(133743),
    f = t(979007),
    C = t(981631),
    x = t(388032),
    h = t(272680);
function b(e) {
    let { application: n } = e;
    return (0, a.jsxs)('div', {
        className: h.storeContainer,
        children: [(0, a.jsx)(I, { application: n }), (0, a.jsx)(S, { application: n })]
    });
}
function I(e) {
    let { application: n } = e,
        { subscriptions: t, otps: i } = (0, d.q)(n.id);
    return (0, a.jsxs)('div', {
        className: h.storeContainer,
        children: [
            t.length > 0 &&
                (0, a.jsxs)('div', {
                    className: h.productSection,
                    children: [
                        (0, a.jsx)(m.r, {
                            subscriptions: t,
                            color: 'header-primary'
                        }),
                        (0, a.jsx)('div', {
                            className: h.products,
                            children: t.map((e) => {
                                let t = (0, p.KW)(e.skuFlags) ? 'user' : 'guild';
                                return (0, a.jsx)(
                                    u.zz,
                                    {
                                        appId: n.id,
                                        listing: e,
                                        subscriptionType: t,
                                        onDetails: () => (0, v.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n.id, e.skuId))
                                    },
                                    e.id
                                );
                            })
                        })
                    ]
                }),
            i.length > 0 &&
                (0, a.jsxs)('div', {
                    className: h.productSection,
                    children: [
                        (0, a.jsx)(r.X6, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: x.intl.string(x.t.yUGTs7)
                        }),
                        (0, a.jsx)('div', {
                            className: h.products,
                            children: i.map((e) =>
                                (0, a.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: n.id,
                                        onDetails: () => (0, v.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n.id, e.skuId))
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, a.jsx)(c.Z, {
                path: C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, a.jsx)(j, { ...e })
            })
        ]
    });
}
function j(e) {
    let {
            match: {
                params: { applicationId: n, skuId: r }
            }
        } = e,
        s = (0, l.e7)([_.Z], () => _.Z.get(r), [r]),
        c = (0, l.e7)([_.Z], () => (null != r ? _.Z.getParentSKU(r) : void 0), [r]),
        d = i.useId(),
        u = i.useCallback(() => (0, v.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(n, f.GlobalDiscoveryAppsSections.STORE)), [n]);
    return (
        i.useLayoutEffect(() => {
            var e, i, l, u, m, _, g;
            switch (null == s ? void 0 : s.type) {
                case C.epS.CONSUMABLE:
                case C.epS.DURABLE:
                    return (
                        (e = d),
                        (i = n),
                        (l = r),
                        void (0, o.openModalLazy)(
                            async () => {
                                let { ItemDetailsModal: e } = await t.e('46619').then(t.bind(t, 147496));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        appId: i,
                                        skuId: l,
                                        ...n
                                    });
                            },
                            {
                                modalKey: e,
                                onCloseCallback: () => {
                                    !N() && (0, v.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(i, f.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
                case C.epS.SUBSCRIPTION:
                    if ((null == c ? void 0 : c.flags) == null) return;
                    return (
                        (u = d),
                        (m = n),
                        (_ = r),
                        (g = (0, p.KW)(c.flags) ? 'user' : 'guild'),
                        void (0, o.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: e } = await Promise.all([t.e('86282'), t.e('23642')]).then(t.bind(t, 519896));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        appId: m,
                                        subscriptionType: g,
                                        skuId: _,
                                        guildId: void 0,
                                        ...n
                                    });
                            },
                            {
                                modalKey: u,
                                onCloseCallback: () => {
                                    !N() && (0, v.Gp)(C.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(m, f.GlobalDiscoveryAppsSections.STORE));
                                }
                            }
                        )
                    );
            }
        }, [n, d, u, null == c ? void 0 : c.flags, null == s ? void 0 : s.flags, null == s ? void 0 : s.type, r]),
        i.useLayoutEffect(
            () => () => {
                (0, o.closeModal)(d);
            },
            [d]
        ),
        null
    );
}
function S(e) {
    let { application: n } = e,
        t = (0, g.nu)(),
        i = n.terms_of_service_url,
        l = n.privacy_policy_url;
    if (null == i && null == l) return null;
    let o = (e, n) =>
        (0, a.jsx)(s.Z, {
            href: n,
            trusted: !t,
            children: e
        });
    return (0, a.jsx)('div', {
        className: h.legalContainer,
        children: (0, a.jsx)(r.xv, {
            color: 'header-primary',
            variant: 'text-sm/normal',
            children:
                null != i && null != l
                    ? x.intl.format(x.t.nylPOT, {
                          termsHook: (e) => o(e, i),
                          privacyHook: (e) => o(e, l)
                      })
                    : null != i
                      ? x.intl.format(x.t['0cPyDw'], { termsHook: (e) => o(e, i) })
                      : null != l
                        ? x.intl.format(x.t.loYGCw, { privacyHook: (e) => o(e, l) })
                        : null
        })
    });
}
function N() {
    return window.location.pathname.startsWith('/login');
}
