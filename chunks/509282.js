n.d(t, { $: () => O, G: () => M }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(996759),
    c = n(800342),
    u = n(627363),
    m = n(587895),
    _ = n(163437),
    h = n(185438),
    p = n(734057),
    g = n(97352),
    A = n(31455),
    f = n(67480),
    x = n(328968),
    E = n(954571),
    C = n(957565),
    I = n(943775),
    T = n(997997),
    v = n(658575),
    N = n(376374),
    S = n(652215),
    b = n(435220),
    j = n(985018),
    y = n(159740);
let R = (0, s.UT)([f.A, x.A, g.A], {
        getQueryId: S.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = f.A.get(e),
                n = x.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = g.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            r()(null != e, "skuId is null"), await (0, c.QB)(e);
        },
    }),
    L = (0, s.UT)([f.A], {
        getQueryId: S.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (f.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            r()(null != e && null != t, "appId is null"), await (0, c.JI)(t);
        },
    });
function M(e) {
    let { appId: t, message: a } = e,
        r = (0, v.G)(t),
        { data: c } = (0, u.YY)(t),
        [_, h, g, f] = (0, s.yK)([m.A, A.A, p.A], () => {
            let e = m.A.getApplication(t),
                n = null != e ? (0, I.A)(e, 45) : void 0,
                i = p.A.getBasicChannel(a.channel_id)?.guild_id;
            return [A.A.getStoreLayout(t), A.A.getFetchStatus(t), i, n];
        }, [t, a.channel_id]);
    l.useEffect(() => {
        h === A.N.NONE && (0, d.V)(t);
    }, [t, h]);
    let x = _.subscriptions.length,
        C = _.otps.length,
        N = l.useMemo(
            () =>
                x > 0 && C > 0
                    ? j.intl.formatToPlainString(j.t["jA648+"], { subCount: x, itemCount: C })
                    : x > 0
                      ? j.intl.formatToPlainString(j.t.GSfibA, { count: x })
                      : C > 0
                        ? j.intl.formatToPlainString(j.t.j7Go5A, { count: C })
                        : j.intl.string(j.t.rMA98g),
            [C, x],
        );
    if (!r || null == c) return null;
    let R = () => {
        (0, o.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
            return (n) =>
                (0, i.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t, guildId: g });
        });
    };
    return (0, i.jsx)(D, {
        appName: c.name,
        title: j.intl.formatToPlainString(j.t.XDRjs5, { appName: c.name }),
        description: N,
        link: `${location.protocol}//${location.host}${S.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(c.id, b.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, T.K)(t, T.C.STORE_EMBED);
        },
        iconSrc: f,
        onIconClick: () => {
            R(), E.default.track(S.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, { application_id: t, area: "app_icon" });
        },
        children: (0, i.jsx)("div", {
            className: y.mZ,
            children: (0, i.jsx)(o.Button, {
                onClick: () => {
                    R(),
                        E.default.track(S.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: j.intl.string(j.t.kRvlKJ),
            }),
        }),
    });
}
function O(e) {
    let { appId: t, skuId: a, message: r } = e,
        {
            parentSku: d,
            sku: c,
            subscriptionPlan: m,
            storeListing: g,
        } = (function (e, t) {
            let { data: n } = R(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                a = n?.storeListing,
                { data: r } = L(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: a, subscriptionPlan: l };
        })(a, t),
        { data: A } = (0, u.YY)(c?.applicationId),
        f = (0, s.bG)([p.A], () => p.A.getBasicChannel(r.channel_id)?.guild_id, [r]),
        x = l.useMemo(() => (null != A ? (0, I.A)(A, 45) : void 0), [A]),
        C = (0, v.G)(A?.id ?? ""),
        { openModal: M, subscriptionPurchaseButtonState: O } = (0, h.A)({ skuId: a, initialSubscribeForGuild: f });
    if (!C || null == A || null == c) return null;
    let P = c.type === S.Puh.SUBSCRIPTION,
        k = !!P && (0, _.bg)(c.flags),
        U = () => {
            (0, o.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
                return (t) =>
                    (0, i.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: A.id, guildId: f });
            });
        },
        w = () => {
            (0, o.mMO)(async () => {
                let e = P ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = P ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let l = () => {
                        n.onClose(), U();
                    };
                    return null != e && null != d
                        ? (0, i.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: A.id,
                              skuId: c.id,
                              guildId: f,
                              subscriptionType: k ? "user" : "guild",
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
        G = P
            ? k
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.nys, { size: "custom", width: 12, height: 12 }),
                          " ",
                          j.intl.string(j.t.wnifjC),
                      ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.RR9, { size: "custom", width: 12, height: 12 }),
                          " ",
                          j.intl.string(j.t.NRC3ar),
                      ],
                  })
            : g?.description?.trim();
    "" === G && (G = void 0);
    let B = () => {
        E.default.track(S.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: A.id,
            sku_id: c.id,
            area: "purchase_button",
        });
    };
    return (0, i.jsx)(D, {
        appName: A.name,
        title: c.name,
        description: G,
        link: `${location.protocol}//${location.host}${S.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A.id, b.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: () => {
            (0, T.K)(A.id, T.C.SKU_EMBED, a);
        },
        iconSrc: x,
        onIconClick: () => {
            U(),
                E.default.track(S.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: A.id,
                    sku_id: c.id,
                    area: "app_icon",
                });
        },
        children: (0, i.jsxs)("div", {
            className: y.w,
            children: [
                (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    onClick: () => {
                        w(),
                            E.default.track(S.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: A.id,
                                sku_id: c.id,
                                area: "view_details",
                            });
                    },
                    text: j.intl.string(j.t.DXYfjO),
                }),
                P
                    ? null != m
                        ? (0, i.jsx)(N.rc, {
                              onClick: M,
                              appId: A.id,
                              subscriptionType: k ? "user" : "guild",
                              skuId: c.id,
                              icon: o.U1X,
                              onHasClicked: B,
                              subscriptionPlan: m,
                              state: O,
                          })
                        : (0, i.jsx)(o.Button, { variant: "primary", text: j.intl.string(j.t.uuzaAK), onClick: w })
                    : (0, i.jsx)(N.$P, { appId: A.id, sku: c, icon: o.U1X, onHasClicked: B }),
            ],
        }),
    });
}
function D(e) {
    let { appName: t, title: n, description: l, link: a, iconSrc: r, onIconClick: s, onLinkCopy: d, children: c } = e;
    return (0, i.jsxs)("div", {
        className: y.iE,
        children: [
            (0, i.jsxs)("div", {
                className: y.wx,
                children: [
                    (0, i.jsxs)("div", {
                        className: y.qd,
                        children: [
                            (0, i.jsx)(o.U1X, { size: "xxs" }),
                            (0, i.jsx)(o.Text, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    C.p5 &&
                        (0, i.jsx)(o.K0, {
                            "aria-label": j.intl.string(j.t.WqhZss),
                            icon: () => (0, i.jsx)(o.qYV, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, C.C)(a, () => {
                                    (0, o.showToast)(
                                        (0, o.createToast)(j.intl.string(j.t["L/PwZf"]), o.ToastType.SUCCESS),
                                    ),
                                        d();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: y.Qs,
                children: [
                    (0, i.jsxs)("div", {
                        className: y.oB,
                        children: [
                            null != r &&
                                (0, i.jsx)(o.DUT, {
                                    onClick: s,
                                    children: (0, i.jsx)("img", { src: r.href, alt: "", className: y.Z2 }),
                                }),
                            (0, i.jsxs)("div", {
                                className: y.Tf,
                                style: null == l ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, i.jsx)(o.Text, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != l &&
                                        (0, i.jsx)(o.Text, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: y.h_,
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
