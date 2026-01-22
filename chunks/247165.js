n.d(t, { A: () => _ }), n(747238), n(938796);
var l = n(627968),
    a = n(64700),
    r = n(158954),
    i = n(311907),
    s = n(397927),
    c = n(9578),
    o = n(549711),
    d = n(123791),
    u = n(55926),
    p = n(311321),
    h = n(163437),
    m = n(67480),
    b = n(412461),
    f = n(656106),
    g = n(435220),
    x = n(652215),
    v = n(985018),
    j = n(70345);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function _(e) {
    let { application: t } = e;
    return (0, l.jsxs)("div", {
        className: j.ZM,
        children: [(0, l.jsx)(y, { application: t }), (0, l.jsx)(S, { application: t })],
    });
}
function y(e) {
    let { application: t } = e,
        { subscriptions: n, otps: a } = (0, d.C)(t.id);
    return (0, l.jsxs)("div", {
        className: j.ZM,
        children: [
            n.length > 0 &&
                (0, l.jsxs)("div", {
                    className: j.dD,
                    children: [
                        (0, l.jsx)(p.A, {
                            subscriptions: n,
                            color: "text-strong",
                        }),
                        (0, l.jsx)("div", {
                            className: j.ZE,
                            children: n.map((e) => {
                                let n = (0, h.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, l.jsx)(
                                    u.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () =>
                                            (0, f.Fr)(x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            a.length > 0 &&
                (0, l.jsxs)("div", {
                    className: j.dD,
                    children: [
                        (0, l.jsx)(r.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: v.intl.string(v.t.yUGTs8),
                        }),
                        (0, l.jsx)("div", {
                            className: j.ZE,
                            children: a.map((e) =>
                                (0, l.jsx)(
                                    u.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            (0, f.Fr)(x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, l.jsx)(o.A, {
                path: x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, l.jsx)(O, A({}, e)),
            }),
        ],
    });
}
function O(e) {
    let {
            match: {
                params: { applicationId: t, skuId: r },
            },
        } = e,
        c = (0, i.bG)([m.A], () => m.A.get(r), [r]),
        o = (0, i.bG)([m.A], () => (null != r ? m.A.getParentSKU(r) : void 0), [r]),
        d = a.useId(),
        u = a.useCallback(
            () => (0, f.Fr)(x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, g.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        a.useLayoutEffect(() => {
            var e;
            switch (null == c ? void 0 : c.type) {
                case x.Puh.CONSUMABLE:
                case x.Puh.DURABLE:
                    return void (0, s.mMO)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.resolve().then(n.bind(n, 963179));
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    A(
                                        {
                                            appId: t,
                                            skuId: r,
                                        },
                                        n,
                                    ),
                                );
                        },
                        {
                            modalKey: d,
                            onCloseCallback: () => {
                                C() ||
                                    (0, f.Fr)(
                                        x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            g.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case x.Puh.SUBSCRIPTION:
                    if ((null == o ? void 0 : o.flags) == null) return;
                    return (
                        (e = (0, h.bg)(o.flags) ? "user" : "guild"),
                        void (0, s.mMO)(
                            async () => {
                                let { SubscriptionDetailsModal: a } = await Promise.resolve().then(n.bind(n, 168393));
                                return (n) =>
                                    (0, l.jsx)(
                                        a,
                                        A(
                                            {
                                                appId: t,
                                                subscriptionType: e,
                                                skuId: r,
                                                guildId: void 0,
                                            },
                                            n,
                                        ),
                                    );
                            },
                            {
                                modalKey: d,
                                onCloseCallback: () => {
                                    C() ||
                                        (0, f.Fr)(
                                            x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                g.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, d, u, null == o ? void 0 : o.flags, null == c ? void 0 : c.flags, null == c ? void 0 : c.type, r]),
        a.useLayoutEffect(
            () => () => {
                (0, s.OoC)(d);
            },
            [d],
        ),
        null
    );
}
function S(e) {
    let { application: t } = e,
        n = (0, b.DB)(),
        a = t.terms_of_service_url,
        i = t.privacy_policy_url;
    if (null == a && null == i) return null;
    let s = (e, t) =>
        (0, l.jsx)(c.A, {
            href: t,
            trusted: !n,
            children: e,
        });
    return (0, l.jsx)("div", {
        className: j.V6,
        children: (0, l.jsx)(r.EYj, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != a && null != i
                    ? v.intl.format(v.t.nylPOT, {
                          termsHook: (e) => s(e, a),
                          privacyHook: (e) => s(e, i),
                      })
                    : null != a
                      ? v.intl.format(v.t["0cPyDz"], { termsHook: (e) => s(e, a) })
                      : null != i
                        ? v.intl.format(v.t["loYGC/"], { privacyHook: (e) => s(e, i) })
                        : null,
        }),
    });
}
function C() {
    return window.location.pathname.startsWith("/login");
}
