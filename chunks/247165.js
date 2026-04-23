a.d(t, { A: () => b }), a(938796);
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(834730),
    r = a(311907),
    o = a(192308),
    c = a(9578),
    d = a(549711),
    u = a(123791),
    h = a(55926),
    m = a(311321),
    p = a(163437),
    _ = a(67480),
    g = a(412461),
    x = a(656106),
    A = a(435220),
    f = a(652215),
    C = a(985018),
    v = a(785936);
function b(e) {
    let { application: t } = e;
    return (0, n.jsxs)("div", {
        className: v.ZM,
        children: [(0, n.jsx)(j, { application: t }), (0, n.jsx)(E, { application: t })],
    });
}
function j(e) {
    let { application: t } = e,
        { subscriptions: a, otps: l } = (0, u.C)(t.id);
    return (0, n.jsxs)("div", {
        className: v.ZM,
        children: [
            a.length > 0 &&
                (0, n.jsxs)("div", {
                    className: v.dD,
                    children: [
                        (0, n.jsx)(m.A, { subscriptions: a, color: "text-strong" }),
                        (0, n.jsx)("div", {
                            className: v.ZE,
                            children: a.map((e) => {
                                let a = (0, p.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, n.jsx)(
                                    h.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: a,
                                        onDetails: () =>
                                            (0, x.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            l.length > 0 &&
                (0, n.jsxs)("div", {
                    className: v.dD,
                    children: [
                        (0, n.jsx)(i.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: C.intl.string(C.t.yUGTs8),
                        }),
                        (0, n.jsx)("div", {
                            className: v.ZE,
                            children: l.map((e) =>
                                (0, n.jsx)(
                                    h.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            (0, x.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, n.jsx)(d.A, {
                path: f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, n.jsx)(I, { ...e }),
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
        s = (0, r.bG)([_.A], () => _.A.get(i), [i]),
        c = (0, r.bG)([_.A], () => (null != i ? _.A.getParentSKU(i) : void 0), [i]),
        d = l.useId(),
        u = l.useCallback(
            () => (0, x.Fr)(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, A.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        l.useLayoutEffect(() => {
            var e;
            switch (s?.type) {
                case f.Puh.CONSUMABLE:
                case f.Puh.DURABLE:
                    return void (0, o.openModalLazy)(
                        async () => {
                            let { ItemDetailsModal: e } = await a.e("70104").then(a.bind(a, 963179));
                            return (a) => (0, n.jsx)(e, { appId: t, skuId: i, ...a });
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                N() ||
                                    (0, x.Fr)(
                                        f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            A.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case f.Puh.SUBSCRIPTION:
                    if (c?.flags == null) return;
                    return (
                        (e = (0, p.bg)(c.flags) ? "user" : "guild"),
                        void (0, o.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: l } = await a.e("64850").then(a.bind(a, 168393));
                                return (a) =>
                                    (0, n.jsx)(l, { appId: t, subscriptionType: e, skuId: i, guildId: void 0, ...a });
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    N() ||
                                        (0, x.Fr)(
                                            f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                A.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, d, u, c?.flags, s?.flags, s?.type, i]),
        l.useLayoutEffect(
            () => () => {
                (0, o.closeModal)(d);
            },
            [d],
        ),
        null
    );
}
function E(e) {
    let { application: t } = e,
        a = (0, g.DB)(),
        l = t.terms_of_service_url,
        i = t.privacy_policy_url;
    if (null == l && null == i) return null;
    let r = (e, t) => (0, n.jsx)(c.A, { href: t, trusted: !a, children: e });
    return (0, n.jsx)("div", {
        className: v.V6,
        children: (0, n.jsx)(s.E, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != l && null != i
                    ? C.intl.format(C.t.nylPOT, { termsHook: (e) => r(e, l), privacyHook: (e) => r(e, i) })
                    : null != l
                      ? C.intl.format(C.t["0cPyDz"], { termsHook: (e) => r(e, l) })
                      : null != i
                        ? C.intl.format(C.t["loYGC/"], { privacyHook: (e) => r(e, i) })
                        : null,
        }),
    });
}
function N() {
    return window.location.pathname.startsWith("/login");
}
