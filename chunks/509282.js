n.d(t, { $: () => q, G: () => V }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(311907),
    o = n(192308),
    d = n(821609),
    c = n(950305),
    u = n(664121),
    m = n(34188),
    _ = n(834730),
    h = n(408278),
    p = n(173936),
    g = n(691540),
    A = n(857250),
    f = n(97483),
    x = n(939249),
    C = n(996759),
    E = n(800342),
    I = n(627363),
    v = n(587895),
    b = n(163437),
    T = n(185438),
    S = n(734057),
    y = n(97352),
    N = n(31455),
    j = n(67480),
    L = n(328968),
    R = n(954571),
    P = n(957565),
    w = n(943775),
    D = n(997997),
    k = n(658575),
    O = n(376374),
    M = n(652215),
    U = n(435220),
    G = n(985018),
    B = n(352883);
let F = (0, r.UT)([j.A, L.A, y.A], {
        getQueryId: M.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = j.A.get(e),
                n = L.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = y.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            s()(null != e, "skuId is null"), await (0, E.QB)(e);
        },
    }),
    H = (0, r.UT)([j.A], {
        getQueryId: M.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (j.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            s()(null != e && null != t, "appId is null"), await (0, E.JI)(t);
        },
    });
function V(e) {
    let { appId: t, message: a } = e,
        s = (0, k.G)(t),
        { data: c } = (0, I.YY)(t),
        [u, m, _, h] = (0, r.yK)([v.A, N.A, S.A], () => {
            let e = v.A.getApplication(t),
                n = null != e ? (0, w.A)(e, 45) : void 0,
                i = S.A.getBasicChannel(a.channel_id)?.guild_id;
            return [N.A.getStoreLayout(t), N.A.getFetchStatus(t), i, n];
        }, [t, a.channel_id]);
    l.useEffect(() => {
        m === N.N.NONE && (0, C.V)(t);
    }, [t, m]);
    let p = u.subscriptions.length,
        g = u.otps.length,
        A = l.useMemo(
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
    if (!s || null == c) return null;
    let f = () => {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("17754")]).then(n.bind(n, 719847));
            return (n) =>
                (0, i.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: _ });
        });
    };
    return (0, i.jsx)(W, {
        appName: c.name,
        title: G.intl.formatToPlainString(G.t.XDRjs5, { appName: c.name }),
        description: A,
        link: `${location.protocol}//${location.host}${M.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(c.id, U.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, D.K)(t, D.C.STORE_EMBED);
        },
        iconSrc: h,
        onIconClick: () => {
            f(), R.default.track(M.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: t, area: "app_icon" });
        },
        children: (0, i.jsx)("div", {
            className: B.mZ,
            children: (0, i.jsx)(d.$, {
                onClick: () => {
                    f(),
                        R.default.track(M.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: G.intl.string(G.t.kRvlKJ),
            }),
        }),
    });
}
function q(e) {
    let { appId: t, skuId: a, message: s } = e,
        {
            parentSku: _,
            sku: h,
            subscriptionPlan: p,
            storeListing: g,
        } = (function (e, t) {
            let { data: n } = F(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                a = n?.storeListing,
                { data: s } = H(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: s, sku: i?.applicationId === t ? i : null, storeListing: a, subscriptionPlan: l };
        })(a, t),
        { data: A } = (0, I.YY)(h?.applicationId),
        f = (0, r.bG)([S.A], () => S.A.getBasicChannel(s.channel_id)?.guild_id, [s]),
        x = l.useMemo(() => (null != A ? (0, w.A)(A, 45) : void 0), [A]),
        C = (0, k.G)(A?.id ?? ""),
        { openModal: E, subscriptionPurchaseButtonState: v } = (0, T.A)({ skuId: a, initialSubscribeForGuild: f });
    if (!C || null == A || null == h) return null;
    let y = h.type === M.Puh.SUBSCRIPTION,
        N = !!y && (0, b.bg)(h.flags),
        j = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("33563"), n.e("17754")]).then(n.bind(n, 719847));
                return (t) =>
                    (0, i.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: A.id, guildId: f });
            });
        },
        L = () => {
            (0, o.openModalLazy)(async () => {
                let e = y ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = y ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), j();
                    };
                    return null != e && null != _
                        ? (0, i.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: A.id,
                              skuId: h.id,
                              guildId: f,
                              subscriptionType: N ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: l,
                          })
                        : null != t
                          ? (0, i.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: A.id,
                                skuId: a,
                                onClose: n.onClose,
                                onHeaderTitleClick: l,
                            })
                          : null;
                };
            });
        },
        P = y
            ? N
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
            : g?.description?.trim();
    "" === P && (P = void 0);
    let V = () => {
        R.default.track(M.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: A.id,
            sku_id: h.id,
            area: "purchase_button",
        });
    };
    return (0, i.jsx)(W, {
        appName: A.name,
        title: h.name,
        description: P,
        link: `${location.protocol}//${location.host}${M.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A.id, U.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, D.K)(A.id, D.C.SKU_EMBED, a);
        },
        iconSrc: x,
        onIconClick: () => {
            j(),
                R.default.track(M.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: A.id,
                    sku_id: h.id,
                    area: "app_icon",
                });
        },
        children: (0, i.jsxs)("div", {
            className: B.w,
            children: [
                (0, i.jsx)(d.$, {
                    variant: "secondary",
                    onClick: () => {
                        L(),
                            R.default.track(M.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: A.id,
                                sku_id: h.id,
                                area: "view_details",
                            });
                    },
                    text: G.intl.string(G.t.DXYfjO),
                }),
                y
                    ? null != p
                        ? (0, i.jsx)(O.rc, {
                              onClick: E,
                              appId: A.id,
                              subscriptionType: N ? "user" : "guild",
                              skuId: h.id,
                              icon: m.U,
                              onHasClicked: V,
                              subscriptionPlan: p,
                              state: v,
                          })
                        : (0, i.jsx)(d.$, { variant: "primary", text: G.intl.string(G.t.uuzaAK), onClick: L })
                    : (0, i.jsx)(O.$P, { appId: A.id, sku: h, icon: m.U, onHasClicked: V }),
            ],
        }),
    });
}
function W(e) {
    let { appName: t, title: n, description: l, link: a, iconSrc: s, onIconClick: r, onLinkCopy: o, children: d } = e;
    return (0, i.jsxs)("div", {
        className: B.iE,
        children: [
            (0, i.jsxs)("div", {
                className: B.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.qd,
                        children: [
                            (0, i.jsx)(m.U, { size: "xxs" }),
                            (0, i.jsx)(_.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    P.p5 &&
                        (0, i.jsx)(h.K, {
                            "aria-label": G.intl.string(G.t.WqhZss),
                            icon: () => (0, i.jsx)(p.q, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, P.C)(a, () => {
                                    (0, g.P0)((0, A.o)(G.intl.string(G.t["L/PwZf"]), f.Ck.SUCCESS)), o();
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
                            null != s &&
                                (0, i.jsx)(x.D, {
                                    onClick: r,
                                    children: (0, i.jsx)("img", { src: s.href, alt: "", className: B.Z2 }),
                                }),
                            (0, i.jsxs)("div", {
                                className: B.Tf,
                                style: null == l ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, i.jsx)(_.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != l &&
                                        (0, i.jsx)(_.E, {
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
                    d,
                ],
            }),
        ],
    });
}
