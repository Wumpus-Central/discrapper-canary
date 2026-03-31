a.d(t, { A: () => C }), a(938796);
var n = a(627968),
    i = a(64700),
    l = a(158954),
    s = a(311907),
    r = a(397927),
    o = a(9578),
    c = a(549711),
    d = a(123791),
    u = a(55926),
    m = a(311321),
    h = a(163437),
    p = a(67480),
    _ = a(412461),
    g = a(656106),
    x = a(435220),
    A = a(652215),
    f = a(985018),
    b = a(966304);
function C(e) {
    let { application: t } = e;
    return (0, n.jsxs)("div", {
        className: b.ZM,
        children: [(0, n.jsx)(v, { application: t }), (0, n.jsx)(I, { application: t })],
    });
}
function v(e) {
    let { application: t } = e,
        { subscriptions: a, otps: i } = (0, d.C)(t.id);
    return (0, n.jsxs)("div", {
        className: b.ZM,
        children: [
            a.length > 0 &&
                (0, n.jsxs)("div", {
                    className: b.dD,
                    children: [
                        (0, n.jsx)(m.A, { subscriptions: a, color: "text-strong" }),
                        (0, n.jsx)("div", {
                            className: b.ZE,
                            children: a.map((e) => {
                                let a = (0, h.bg)(e.skuFlags) ? "user" : "guild";
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
                        (0, n.jsx)(l.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: f.intl.string(f.t.yUGTs8),
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
                params: { applicationId: t, skuId: l },
            },
        } = e,
        o = (0, s.bG)([p.A], () => p.A.get(l), [l]),
        c = (0, s.bG)([p.A], () => (null != l ? p.A.getParentSKU(l) : void 0), [l]),
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
                            let { ItemDetailsModal: e } = await a.e("70104").then(a.bind(a, 963179));
                            return (a) => (0, n.jsx)(e, { appId: t, skuId: l, ...a });
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                S() ||
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
                        (e = (0, h.bg)(c.flags) ? "user" : "guild"),
                        void (0, r.mMO)(
                            async () => {
                                let { SubscriptionDetailsModal: i } = await a.e("64850").then(a.bind(a, 168393));
                                return (a) =>
                                    (0, n.jsx)(i, { appId: t, subscriptionType: e, skuId: l, guildId: void 0, ...a });
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    S() ||
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
        }, [t, d, u, c?.flags, o?.flags, o?.type, l]),
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
        s = t.privacy_policy_url;
    if (null == i && null == s) return null;
    let r = (e, t) => (0, n.jsx)(o.A, { href: t, trusted: !a, children: e });
    return (0, n.jsx)("div", {
        className: b.V6,
        children: (0, n.jsx)(l.EYj, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != i && null != s
                    ? f.intl.format(f.t.nylPOT, { termsHook: (e) => r(e, i), privacyHook: (e) => r(e, s) })
                    : null != i
                      ? f.intl.format(f.t["0cPyDz"], { termsHook: (e) => r(e, i) })
                      : null != s
                        ? f.intl.format(f.t["loYGC/"], { privacyHook: (e) => r(e, s) })
                        : null,
        }),
    });
}
function S() {
    return window.location.pathname.startsWith("/login");
}
