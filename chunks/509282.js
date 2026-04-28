n.d(t, { $: () => z, G: () => F }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(17928),
    o = n(192308),
    d = n(821609),
    c = n(950305),
    u = n(664121),
    m = n(34188),
    h = n(834730),
    g = n(408278),
    A = n(173936),
    p = n(691540),
    x = n(857250),
    f = n(97483),
    C = n(939249),
    E = n(996759),
    v = n(800342),
    I = n(627363),
    _ = n(587895),
    j = n(163437),
    N = n(185438),
    T = n(734057),
    y = n(97352),
    S = n(31455),
    b = n(67480),
    k = n(328968),
    L = n(954571),
    R = n(957565),
    P = n(943775),
    M = n(997997),
    D = n(658575),
    w = n(376374),
    O = n(652215),
    U = n(435220),
    G = n(985018),
    V = n(352883);
let B = (0, r.UT)([b.A, k.A, y.A], {
        getQueryId: O.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = b.A.get(e),
                n = k.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = y.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            a()(null != e, "skuId is null"), await (0, v.QB)(e);
        },
    }),
    H = (0, r.UT)([b.A], {
        getQueryId: O.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (b.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            a()(null != e && null != t, "appId is null"), await (0, v.JI)(t);
        },
    });
function F(e) {
    let { appId: t, message: s } = e,
        a = (0, D.G)(t),
        { data: c } = (0, I.YY)(t),
        [u, m, h, g] = (0, r.yK)([_.A, S.A, T.A], () => {
            let e = _.A.getApplication(t),
                n = null != e ? (0, P.A)(e, 45) : void 0,
                i = T.A.getBasicChannel(s.channel_id)?.guild_id;
            return [S.A.getStoreLayout(t), S.A.getFetchStatus(t), i, n];
        }, [t, s.channel_id]);
    l.useEffect(() => {
        m === S.N.NONE && (0, E.V)(t);
    }, [t, m]);
    let A = u.subscriptions.length,
        p = u.otps.length,
        x = l.useMemo(
            () =>
                A > 0 && p > 0
                    ? G.intl.formatToPlainString(G.t["jA648+"], { subCount: A, itemCount: p })
                    : A > 0
                      ? G.intl.formatToPlainString(G.t.GSfibA, { count: A })
                      : p > 0
                        ? G.intl.formatToPlainString(G.t.j7Go5A, { count: p })
                        : G.intl.string(G.t.rMA98g),
            [p, A],
        );
    if (!a || null == c) return null;
    let f = () => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("28592"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                n.bind(n, 719847),
            );
            return (n) =>
                (0, i.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: h });
        });
    };
    return (0, i.jsx)(Y, {
        appName: c.name,
        title: G.intl.formatToPlainString(G.t.XDRjs5, { appName: c.name }),
        description: x,
        link: `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(c.id, U.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, M.K)(t, M.C.STORE_EMBED);
        },
        iconSrc: g,
        onIconClick: () => {
            f(), L.default.track(O.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: t, area: "app_icon" });
        },
        children: (0, i.jsx)("div", {
            className: V.mZ,
            children: (0, i.jsx)(d.$, {
                onClick: () => {
                    f(),
                        L.default.track(O.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: G.intl.string(G.t.kRvlKJ),
            }),
        }),
    });
}
function z(e) {
    let { appId: t, skuId: s, message: a } = e,
        {
            parentSku: h,
            sku: g,
            subscriptionPlan: A,
            storeListing: p,
        } = (function (e, t) {
            let { data: n } = B(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: a } = H(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: a, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(s, t),
        { data: x } = (0, I.YY)(g?.applicationId),
        f = (0, r.bG)([T.A], () => T.A.getBasicChannel(a.channel_id)?.guild_id, [a]),
        C = l.useMemo(() => (null != x ? (0, P.A)(x, 45) : void 0), [x]),
        E = (0, D.G)(x?.id ?? ""),
        { openModal: v, subscriptionPurchaseButtonState: _ } = (0, N.A)({ skuId: s, initialSubscribeForGuild: f });
    if (!E || null == x || null == g) return null;
    let y = g.type === O.Puh.SUBSCRIPTION,
        S = !!y && (0, j.bg)(g.flags),
        b = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("28592"), n.e("68031"), n.e("85384"), n.e("20428")]).then(
                    n.bind(n, 719847),
                );
                return (t) =>
                    (0, i.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: x.id, guildId: f });
            });
        },
        k = () => {
            (0, o.openModalLazy)(async () => {
                let e = y ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = y ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), b();
                    };
                    return null != e && null != h
                        ? (0, i.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: x.id,
                              skuId: g.id,
                              guildId: f,
                              subscriptionType: S ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: l,
                          })
                        : null != t
                          ? (0, i.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: x.id,
                                skuId: s,
                                onClose: n.onClose,
                                onHeaderTitleClick: l,
                            })
                          : null;
                };
            });
        },
        R = y
            ? S
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.n, { size: "custom", width: 12, height: 12 }),
                          " ",
                          G.intl.string(G.t.wnifjC),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          G.intl.string(G.t.NRC3ar),
                      ],
                  })
            : p?.description?.trim();
    "" === R && (R = void 0);
    let F = () => {
        L.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: x.id,
            sku_id: g.id,
            area: "purchase_button",
        });
    };
    return (0, i.jsx)(Y, {
        appName: x.name,
        title: g.name,
        description: R,
        link: `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(x.id, U.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, M.K)(x.id, M.C.SKU_EMBED, s);
        },
        iconSrc: C,
        onIconClick: () => {
            b(),
                L.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: x.id,
                    sku_id: g.id,
                    area: "app_icon",
                });
        },
        children: (0, i.jsxs)("div", {
            className: V.w,
            children: [
                (0, i.jsx)(d.$, {
                    variant: "secondary",
                    onClick: () => {
                        k(),
                            L.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: x.id,
                                sku_id: g.id,
                                area: "view_details",
                            });
                    },
                    text: G.intl.string(G.t.DXYfjO),
                }),
                y
                    ? null != A
                        ? (0, i.jsx)(w.rc, {
                              onClick: v,
                              appId: x.id,
                              subscriptionType: S ? "user" : "guild",
                              skuId: g.id,
                              icon: m.U,
                              onHasClicked: F,
                              subscriptionPlan: A,
                              state: _,
                          })
                        : (0, i.jsx)(d.$, { variant: "primary", text: G.intl.string(G.t.uuzaAK), onClick: k })
                    : (0, i.jsx)(w.$P, { appId: x.id, sku: g, icon: m.U, onHasClicked: F }),
            ],
        }),
    });
}
function Y(e) {
    let { appName: t, title: n, description: l, link: s, iconSrc: a, onIconClick: r, onLinkCopy: o, children: d } = e;
    return (0, i.jsxs)("div", {
        className: V.iE,
        children: [
            (0, i.jsxs)("div", {
                className: V.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: V.qd,
                        children: [
                            (0, i.jsx)(m.U, { size: "xxs" }),
                            (0, i.jsx)(h.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    R.p5 &&
                        (0, i.jsx)(g.K, {
                            "aria-label": G.intl.string(G.t.WqhZss),
                            icon: () => (0, i.jsx)(A.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, R.C)(s, () => {
                                    (0, p.P0)((0, x.o)(G.intl.string(G.t["L/PwZf"]), f.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: V.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: V.oB,
                        children: [
                            null != a &&
                                (0, i.jsx)(C.D, {
                                    onClick: r,
                                    children: (0, i.jsx)("img", { src: a.href, alt: "", className: V.Z2 }),
                                }),
                            (0, i.jsxs)("div", {
                                className: V.Tf,
                                style: null == l ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, i.jsx)(h.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != l &&
                                        (0, i.jsx)(h.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: V.h_,
                                            children: l,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    d,
                ],
            }),
        ],
    });
}
