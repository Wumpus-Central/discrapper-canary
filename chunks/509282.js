n.d(t, { $: () => z, G: () => H }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(17928),
    o = n(192308),
    c = n(821609),
    d = n(950305),
    u = n(664121),
    _ = n(34188),
    m = n(834730),
    h = n(408278),
    p = n(173936),
    g = n(691540),
    f = n(857250),
    x = n(97483),
    A = n(939249),
    C = n(996759),
    v = n(800342),
    I = n(627363),
    E = n(587895),
    b = n(163437),
    y = n(185438),
    T = n(734057),
    j = n(97352),
    N = n(31455),
    S = n(67480),
    k = n(328968),
    L = n(954571),
    R = n(957565),
    w = n(943775),
    P = n(997997),
    D = n(658575),
    M = n(376374),
    O = n(652215),
    U = n(435220),
    G = n(985018),
    B = n(352883);
let V = (0, s.UT)([S.A, k.A, j.A], {
        getQueryId: O.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = S.A.get(e),
                n = k.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = j.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            r()(null != e, "skuId is null"), await (0, v.QB)(e);
        },
    }),
    F = (0, s.UT)([S.A], {
        getQueryId: O.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (S.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            r()(null != e && null != t, "appId is null"), await (0, v.JI)(t);
        },
    });
function H(e) {
    let { appId: t, message: a } = e,
        r = (0, D.G)(t),
        { data: d } = (0, I.YY)(t),
        [u, _, m, h] = (0, s.yK)([E.A, N.A, T.A], () => {
            let e = E.A.getApplication(t),
                n = null != e ? (0, w.A)(e, 45) : void 0,
                i = T.A.getBasicChannel(a.channel_id)?.guild_id;
            return [N.A.getStoreLayout(t), N.A.getFetchStatus(t), i, n];
        }, [t, a.channel_id]);
    l.useEffect(() => {
        _ === N.N.NONE && (0, C.V)(t);
    }, [t, _]);
    let p = u.subscriptions.length,
        g = u.otps.length,
        f = l.useMemo(
            () =>
                p > 0 && g > 0
                    ? G.intl.formatToPlainString(G.t["jA648+"], { subCount: p, itemCount: g })
                    : p > 0
                      ? G.intl.formatToPlainString(G.t.GSfibA, { count: p })
                      : g > 0
                        ? G.intl.formatToPlainString(G.t.j7Go5A, { count: g })
                        : G.intl.string(G.t.rMA98g),
            [g, p],
        );
    if (!r || null == d) return null;
    let x = () => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("85384"), n.e("17754")]).then(n.bind(n, 719847));
            return (n) =>
                (0, i.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: m });
        });
    };
    return (0, i.jsx)(W, {
        appName: d.name,
        title: G.intl.formatToPlainString(G.t.XDRjs5, { appName: d.name }),
        description: f,
        link: `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(d.id, U.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, P.K)(t, P.C.STORE_EMBED);
        },
        iconSrc: h,
        onIconClick: () => {
            x(), L.default.track(O.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: t, area: "app_icon" });
        },
        children: (0, i.jsx)("div", {
            className: B.mZ,
            children: (0, i.jsx)(c.$, {
                onClick: () => {
                    x(),
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
    let { appId: t, skuId: a, message: r } = e,
        {
            parentSku: m,
            sku: h,
            subscriptionPlan: p,
            storeListing: g,
        } = (function (e, t) {
            let { data: n } = V(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                a = n?.storeListing,
                { data: r } = F(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: a, subscriptionPlan: l };
        })(a, t),
        { data: f } = (0, I.YY)(h?.applicationId),
        x = (0, s.bG)([T.A], () => T.A.getBasicChannel(r.channel_id)?.guild_id, [r]),
        A = l.useMemo(() => (null != f ? (0, w.A)(f, 45) : void 0), [f]),
        C = (0, D.G)(f?.id ?? ""),
        { openModal: v, subscriptionPurchaseButtonState: E } = (0, y.A)({ skuId: a, initialSubscribeForGuild: x });
    if (!C || null == f || null == h) return null;
    let j = h.type === O.Puh.SUBSCRIPTION,
        N = !!j && (0, b.bg)(h.flags),
        S = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("85384"), n.e("17754")]).then(n.bind(n, 719847));
                return (t) =>
                    (0, i.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: f.id, guildId: x });
            });
        },
        k = () => {
            (0, o.openModalLazy)(async () => {
                let e = j ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = j ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), S();
                    };
                    return null != e && null != m
                        ? (0, i.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: f.id,
                              skuId: h.id,
                              guildId: x,
                              subscriptionType: N ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: l,
                          })
                        : null != t
                          ? (0, i.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: f.id,
                                skuId: a,
                                onClose: n.onClose,
                                onHeaderTitleClick: l,
                            })
                          : null;
                };
            });
        },
        R = j
            ? N
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.n, { size: "custom", width: 12, height: 12 }),
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
            : g?.description?.trim();
    "" === R && (R = void 0);
    let H = () => {
        L.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: f.id,
            sku_id: h.id,
            area: "purchase_button",
        });
    };
    return (0, i.jsx)(W, {
        appName: f.name,
        title: h.name,
        description: R,
        link: `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(f.id, U.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, P.K)(f.id, P.C.SKU_EMBED, a);
        },
        iconSrc: A,
        onIconClick: () => {
            S(),
                L.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: f.id,
                    sku_id: h.id,
                    area: "app_icon",
                });
        },
        children: (0, i.jsxs)("div", {
            className: B.w,
            children: [
                (0, i.jsx)(c.$, {
                    variant: "secondary",
                    onClick: () => {
                        k(),
                            L.default.track(O.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: f.id,
                                sku_id: h.id,
                                area: "view_details",
                            });
                    },
                    text: G.intl.string(G.t.DXYfjO),
                }),
                j
                    ? null != p
                        ? (0, i.jsx)(M.rc, {
                              onClick: v,
                              appId: f.id,
                              subscriptionType: N ? "user" : "guild",
                              skuId: h.id,
                              icon: _.U,
                              onHasClicked: H,
                              subscriptionPlan: p,
                              state: E,
                          })
                        : (0, i.jsx)(c.$, { variant: "primary", text: G.intl.string(G.t.uuzaAK), onClick: k })
                    : (0, i.jsx)(M.$P, { appId: f.id, sku: h, icon: _.U, onHasClicked: H }),
            ],
        }),
    });
}
function W(e) {
    let { appName: t, title: n, description: l, link: a, iconSrc: r, onIconClick: s, onLinkCopy: o, children: c } = e;
    return (0, i.jsxs)("div", {
        className: B.iE,
        children: [
            (0, i.jsxs)("div", {
                className: B.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.qd,
                        children: [
                            (0, i.jsx)(_.U, { size: "xxs" }),
                            (0, i.jsx)(m.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    R.p5 &&
                        (0, i.jsx)(h.K, {
                            "aria-label": G.intl.string(G.t.WqhZss),
                            icon: () => (0, i.jsx)(p.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, R.C)(a, () => {
                                    (0, g.P0)((0, f.o)(G.intl.string(G.t["L/PwZf"]), x.Ck.SUCCESS)), o();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: B.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.oB,
                        children: [
                            null != r &&
                                (0, i.jsx)(A.D, {
                                    onClick: s,
                                    children: (0, i.jsx)("img", { src: r.href, alt: "", className: B.Z2 }),
                                }),
                            (0, i.jsxs)("div", {
                                className: B.Tf,
                                style: null == l ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, i.jsx)(m.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != l &&
                                        (0, i.jsx)(m.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: B.h_,
                                            children: l,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    c,
                ],
            }),
        ],
    });
}
