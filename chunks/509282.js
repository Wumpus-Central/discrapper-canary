n.d(t, { $: () => M, G: () => P }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(996759),
    c = n(800342),
    u = n(627363),
    _ = n(587895),
    m = n(163437),
    h = n(185438),
    p = n(734057),
    g = n(97352),
    A = n(31455),
    x = n(67480),
    f = n(328968),
    C = n(954571),
    E = n(957565),
    I = n(943775),
    v = n(997997),
    b = n(658575),
    T = n(376374),
    y = n(652215),
    S = n(435220),
    N = n(985018),
    j = n(159740);
let L = (0, s.UT)([x.A, f.A, g.A], {
        getQueryId: y.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = x.A.get(e),
                n = f.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = g.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            l()(null != e, "skuId is null"), await (0, c.QB)(e);
        },
    }),
    R = (0, s.UT)([x.A], {
        getQueryId: y.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (x.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            l()(null != e && null != t, "appId is null"), await (0, c.JI)(t);
        },
    });
function P(e) {
    let { appId: t, message: a } = e,
        l = (0, b.G)(t),
        { data: c } = (0, u.YY)(t),
        [m, h, g, x] = (0, s.yK)([_.A, A.A, p.A], () => {
            let e = _.A.getApplication(t),
                n = null != e ? (0, I.A)(e, 45) : void 0,
                i = p.A.getBasicChannel(a.channel_id)?.guild_id;
            return [A.A.getStoreLayout(t), A.A.getFetchStatus(t), i, n];
        }, [t, a.channel_id]);
    r.useEffect(() => {
        h === A.N.NONE && (0, d.V)(t);
    }, [t, h]);
    let f = m.subscriptions.length,
        E = m.otps.length,
        T = r.useMemo(
            () =>
                f > 0 && E > 0
                    ? N.intl.formatToPlainString(N.t["jA648+"], { subCount: f, itemCount: E })
                    : f > 0
                      ? N.intl.formatToPlainString(N.t.GSfibA, { count: f })
                      : E > 0
                        ? N.intl.formatToPlainString(N.t.j7Go5A, { count: E })
                        : N.intl.string(N.t.rMA98g),
            [E, f],
        );
    if (!l || null == c) return null;
    let L = () => {
        (0, o.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
            return (n) =>
                (0, i.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: g });
        });
    };
    return (0, i.jsx)(w, {
        appName: c.name,
        title: N.intl.formatToPlainString(N.t.XDRjs5, { appName: c.name }),
        description: T,
        link: `${location.protocol}//${location.host}${y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(c.id, S.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, v.K)(t, v.C.STORE_EMBED);
        },
        iconSrc: x,
        onIconClick: () => {
            L(), C.default.track(y.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: t, area: "app_icon" });
        },
        children: (0, i.jsx)("div", {
            className: j.mZ,
            children: (0, i.jsx)(o.Button, {
                onClick: () => {
                    L(),
                        C.default.track(y.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: N.intl.string(N.t.kRvlKJ),
            }),
        }),
    });
}
function M(e) {
    let { appId: t, skuId: a, message: l } = e,
        {
            parentSku: d,
            sku: c,
            subscriptionPlan: _,
            storeListing: g,
        } = (function (e, t) {
            let { data: n } = L(e),
                i = n?.sku,
                r = n?.subscriptionPlan,
                a = n?.storeListing,
                { data: l } = R(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: l, sku: i?.applicationId === t ? i : null, storeListing: a, subscriptionPlan: r };
        })(a, t),
        { data: A } = (0, u.YY)(c?.applicationId),
        x = (0, s.bG)([p.A], () => p.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        f = r.useMemo(() => (null != A ? (0, I.A)(A, 45) : void 0), [A]),
        E = (0, b.G)(A?.id ?? ""),
        { openModal: P, subscriptionPurchaseButtonState: M } = (0, h.A)({ skuId: a, initialSubscribeForGuild: x });
    if (!E || null == A || null == c) return null;
    let D = c.type === y.Puh.SUBSCRIPTION,
        k = !!D && (0, m.bg)(c.flags),
        O = () => {
            (0, o.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
                return (t) =>
                    (0, i.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: A.id, guildId: x });
            });
        },
        U = () => {
            (0, o.mMO)(async () => {
                let e = D ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = D ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let r = () => {
                        n.onClose(), O();
                    };
                    return null != e && null != d
                        ? (0, i.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: A.id,
                              skuId: c.id,
                              guildId: x,
                              subscriptionType: k ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: r,
                          })
                        : null != t
                          ? (0, i.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: A.id,
                                skuId: a,
                                onClose: n.onClose,
                                onHeaderTitleClick: r,
                            })
                          : null;
                };
            });
        },
        B = D
            ? k
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.nys, { size: "custom", width: 12, height: 12 }),
                          " ",
                          N.intl.string(N.t.wnifjC),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.RR9, { size: "custom", width: 12, height: 12 }),
                          " ",
                          N.intl.string(N.t.NRC3ar),
                      ],
                  })
            : g?.description?.trim();
    "" === B && (B = void 0);
    let G = () => {
        C.default.track(y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: A.id,
            sku_id: c.id,
            area: "purchase_button",
        });
    };
    return (0, i.jsx)(w, {
        appName: A.name,
        title: c.name,
        description: B,
        link: `${location.protocol}//${location.host}${y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A.id, S.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, v.K)(A.id, v.C.SKU_EMBED, a);
        },
        iconSrc: f,
        onIconClick: () => {
            O(),
                C.default.track(y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: A.id,
                    sku_id: c.id,
                    area: "app_icon",
                });
        },
        children: (0, i.jsxs)("div", {
            className: j.w,
            children: [
                (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    onClick: () => {
                        U(),
                            C.default.track(y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: A.id,
                                sku_id: c.id,
                                area: "view_details",
                            });
                    },
                    text: N.intl.string(N.t.DXYfjO),
                }),
                D
                    ? null != _
                        ? (0, i.jsx)(T.rc, {
                              onClick: P,
                              appId: A.id,
                              subscriptionType: k ? "user" : "guild",
                              skuId: c.id,
                              icon: o.U1X,
                              onHasClicked: G,
                              subscriptionPlan: _,
                              state: M,
                          })
                        : (0, i.jsx)(o.Button, { variant: "primary", text: N.intl.string(N.t.uuzaAK), onClick: U })
                    : (0, i.jsx)(T.$P, { appId: A.id, sku: c, icon: o.U1X, onHasClicked: G }),
            ],
        }),
    });
}
function w(e) {
    let { appName: t, title: n, description: r, link: a, iconSrc: l, onIconClick: s, onLinkCopy: d, children: c } = e;
    return (0, i.jsxs)("div", {
        className: j.iE,
        children: [
            (0, i.jsxs)("div", {
                className: j.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: j.qd,
                        children: [
                            (0, i.jsx)(o.U1X, { size: "xxs" }),
                            (0, i.jsx)(o.Text, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    E.p5 &&
                        (0, i.jsx)(o.K0, {
                            "aria-label": N.intl.string(N.t.WqhZss),
                            icon: () => (0, i.jsx)(o.qYV, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, E.C)(a, () => {
                                    (0, o.showToast)(
                                        (0, o.createToast)(N.intl.string(N.t["L/PwZf"]), o.ToastType.SUCCESS),
                                    ),
                                        d();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: j.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: j.oB,
                        children: [
                            null != l &&
                                (0, i.jsx)(o.DUT, {
                                    onClick: s,
                                    children: (0, i.jsx)("img", { src: l.href, alt: "", className: j.Z2 }),
                                }),
                            (0, i.jsxs)("div", {
                                className: j.Tf,
                                style: null == r ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, i.jsx)(o.Text, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != r &&
                                        (0, i.jsx)(o.Text, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: j.h_,
                                            children: r,
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
