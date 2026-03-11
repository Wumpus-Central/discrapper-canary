a.d(t, { A: () => v }), a(938796);
var n = a(627968),
    i = a(64700),
    s = a(158954),
    l = a(311907),
    r = a(397927),
    o = a(9578),
    c = a(549711),
    d = a(123791),
    u = a(55926),
    h = a(311321),
    m = a(163437),
    p = a(67480),
    _ = a(412461),
    g = a(656106),
    x = a(435220),
    A = a(652215),
    C = a(985018),
    b = a(451219);
function v(e) {
    let { application: t } = e;
    return (0, n.jsxs)("div", {
        className: b.ZM,
        children: [(0, n.jsx)(f, { application: t }), (0, n.jsx)(I, { application: t })],
    });
}
function f(e) {
    let { application: t } = e,
        { subscriptions: a, otps: i } = (0, d.C)(t.id);
    return (0, n.jsxs)("div", {
        className: b.ZM,
        children: [
            a.length > 0 &&
                (0, n.jsxs)("div", {
                    className: b.dD,
                    children: [
                        (0, n.jsx)(h.A, { subscriptions: a, color: "text-strong" }),
                        (0, n.jsx)("div", {
                            className: b.ZE,
                            children: a.map((e) => {
                                let a = (0, m.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, n.jsx)(
                                    u.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: a,
                                        onDetails: () =>
                                            (0, g.Fr)(A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            i.length > 0 &&
                (0, n.jsxs)("div", {
                    className: b.dD,
                    children: [
                        (0, n.jsx)(s.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: C.intl.string(C.t.yUGTs8),
                        }),
                        (0, n.jsx)("div", {
                            className: b.ZE,
                            children: i.map((e) =>
                                (0, n.jsx)(
                                    u.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            (0, g.Fr)(A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, n.jsx)(c.A, {
                path: A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, n.jsx)(j, { ...e }),
            }),
        ],
    });
}
function j(e) {
    let {
            match: {
                params: { applicationId: t, skuId: s },
            },
        } = e,
        o = (0, l.bG)([p.A], () => p.A.get(s), [s]),
        c = (0, l.bG)([p.A], () => (null != s ? p.A.getParentSKU(s) : void 0), [s]),
        d = i.useId(),
        u = i.useCallback(
            () => (0, g.Fr)(A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, x.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        i.useLayoutEffect(() => {
            var e;
            switch (o?.type) {
                case A.Puh.CONSUMABLE:
                case A.Puh.DURABLE:
                    return void (0, r.mMO)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(a.bind(a, 963179));
                            return (a) => (0, n.jsx)(e, { appId: t, skuId: s, ...a });
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                E() ||
                                    (0, g.Fr)(
                                        A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            x.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case A.Puh.SUBSCRIPTION:
                    if (c?.flags == null) return;
                    return (
                        (e = (0, m.bg)(c.flags) ? "user" : "guild"),
                        void (0, r.mMO)(
                            async () => {
                                let { SubscriptionDetailsModal: i } = await Promise.resolve().then(a.bind(a, 168393));
                                return (a) =>
                                    (0, n.jsx)(i, { appId: t, subscriptionType: e, skuId: s, guildId: void 0, ...a });
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    E() ||
                                        (0, g.Fr)(
                                            A.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                x.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, d, u, c?.flags, o?.flags, o?.type, s]),
        i.useLayoutEffect(
            () => () => {
                (0, r.OoC)(d);
            },
            [d],
        ),
        null
    );
}
function I(e) {
    let { application: t } = e,
        a = (0, _.DB)(),
        i = t.terms_of_service_url,
        l = t.privacy_policy_url;
    if (null == i && null == l) return null;
    let r = (e, t) => (0, n.jsx)(o.A, { href: t, trusted: !a, children: e });
    return (0, n.jsx)("div", {
        className: b.V6,
        children: (0, n.jsx)(s.EYj, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != i && null != l
                    ? C.intl.format(C.t.nylPOT, { termsHook: (e) => r(e, i), privacyHook: (e) => r(e, l) })
                    : null != i
                      ? C.intl.format(C.t["0cPyDz"], { termsHook: (e) => r(e, i) })
                      : null != l
                        ? C.intl.format(C.t["loYGC/"], { privacyHook: (e) => r(e, l) })
                        : null,
        }),
    });
}
function E() {
    return window.location.pathname.startsWith("/login");
}
