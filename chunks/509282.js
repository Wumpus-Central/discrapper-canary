n.d(t, {
    $: () => L,
    G: () => x,
}),
    n(896048),
    n(938796),
    n(228524),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(996759),
    u = n(800342),
    d = n(627363),
    f = n(587895),
    p = n(163437),
    _ = n(185438),
    h = n(734057),
    m = n(97352),
    g = n(31455),
    E = n(67480),
    b = n(328968),
    y = n(954571),
    O = n(957565),
    A = n(943775),
    v = n(997997),
    S = n(658575),
    I = n(376374),
    T = n(652215),
    C = n(435220),
    N = n(985018),
    R = n(159740);
let w = (0, o.UT)([E.A, b.A, m.A], {
        getQueryId: T.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = E.A.get(e),
                n = b.A.getForSKU(e);
            if (null == t || null == n) return;
            let r = m.A.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0,
            };
        },
        load: async (e) => {
            s()(null != e, "skuId is null"), await (0, u.QB)(e);
        },
    }),
    P = (0, o.UT)([E.A], {
        getQueryId: T.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => {
            var t;
            return null == e ? null : null != (t = E.A.getParentSKU(e)) ? t : null;
        },
        load: async (e, t) => {
            s()(null != e && null != t, "appId is null"), await (0, u.JI)(t);
        },
    });
function D(e, t) {
    var n, r;
    let { data: i } = w(e),
        a = null == i ? void 0 : i.sku,
        s = null == i ? void 0 : i.subscriptionPlan,
        o = null == i ? void 0 : i.storeListing,
        { data: l } = P(
            e,
            null != (n = null == a || null == (r = a.application) ? void 0 : r.id)
                ? n
                : null == a
                  ? void 0
                  : a.applicationId,
        );
    return {
        parentSku: l,
        sku: (null == a ? void 0 : a.applicationId) === t ? a : null,
        storeListing: o,
        subscriptionPlan: s,
    };
}
function x(e) {
    let { appId: t, message: a } = e,
        s = (0, S.G)(t),
        { data: u } = (0, d.YY)(t),
        [p, _, m, E] = (0, o.yK)([f.A, g.A, h.A], () => {
            var e;
            let n = f.A.getApplication(t),
                r = null != n ? (0, A.A)(n, 45) : void 0,
                i = null == (e = h.A.getBasicChannel(a.channel_id)) ? void 0 : e.guild_id;
            return [g.A.getStoreLayout(t), g.A.getFetchStatus(t), i, r];
        }, [t, a.channel_id]);
    i.useEffect(() => {
        _ === g.N.NONE && (0, c.V)(t);
    }, [t, _]);
    let b = p.subscriptions.length,
        O = p.otps.length,
        I = i.useMemo(
            () =>
                b > 0 && O > 0
                    ? N.intl.formatToPlainString(N.t["jA648+"], {
                          subCount: b,
                          itemCount: O,
                      })
                    : b > 0
                      ? N.intl.formatToPlainString(N.t.GSfibA, { count: b })
                      : O > 0
                        ? N.intl.formatToPlainString(N.t.j7Go5A, { count: O })
                        : N.intl.string(N.t.rMA98g),
            [O, b],
        );
    if (!s || null == u) return null;
    let w = () => {
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
                return (n) =>
                    (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: m,
                    });
            });
        },
        P = () => {
            w(),
                y.default.track(T.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "app_icon",
                });
        },
        D = () => {
            w(),
                y.default.track(T.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "open_store_button",
                });
        },
        x = () => {
            (0, v.K)(t, v.C.STORE_EMBED);
        };
    return (0, r.jsx)(j, {
        appName: u.name,
        title: N.intl.formatToPlainString(N.t.XDRjs5, { appName: u.name }),
        description: I,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: x,
        iconSrc: E,
        onIconClick: P,
        children: (0, r.jsx)("div", {
            className: R.mZ,
            children: (0, r.jsx)(l.Button, {
                onClick: D,
                text: N.intl.string(N.t.kRvlKJ),
            }),
        }),
    });
}
function L(e) {
    var t, a;
    let { appId: s, skuId: c, message: u } = e,
        { parentSku: f, sku: m, subscriptionPlan: g, storeListing: E } = D(c, s),
        { data: b } = (0, d.YY)(null == m ? void 0 : m.applicationId),
        O = (0, o.bG)([h.A], () => {
            var e;
            return null == (e = h.A.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
        }, [u]),
        w = i.useMemo(() => (null != b ? (0, A.A)(b, 45) : void 0), [b]),
        P = (0, S.G)(null != (t = null == b ? void 0 : b.id) ? t : ""),
        { openModal: x, subscriptionPurchaseButtonState: L } = (0, _.A)({
            skuId: c,
            initialSubscribeForGuild: O,
        });
    if (!P || null == b || null == m) return null;
    let M = m.type === T.Puh.SUBSCRIPTION,
        k = !!M && (0, p.bg)(m.flags),
        U = () => {
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: b.id,
                        guildId: O,
                    });
            });
        },
        G = () => {
            (0, l.mMO)(async () => {
                let e = M ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = M ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        n.onClose(), U();
                    };
                    return null != e && null != f
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: b.id,
                              skuId: m.id,
                              guildId: O,
                              subscriptionType: k ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: i,
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: b.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i,
                            })
                          : null;
                };
            });
        },
        V = 12,
        F = M
            ? k
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.nys, {
                              size: "custom",
                              width: V,
                              height: V,
                          }),
                          " ",
                          N.intl.string(N.t.wnifjC),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.RR9, {
                              size: "custom",
                              width: V,
                              height: V,
                          }),
                          " ",
                          N.intl.string(N.t.NRC3ar),
                      ],
                  })
            : null == E || null == (a = E.description)
              ? void 0
              : a.trim();
    "" === F && (F = void 0);
    let B = () => {
            U(),
                y.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: b.id,
                    sku_id: m.id,
                    area: "app_icon",
                });
        },
        H = () => {
            G(),
                y.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: b.id,
                    sku_id: m.id,
                    area: "view_details",
                });
        },
        Y = () => {
            y.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: b.id,
                sku_id: m.id,
                area: "purchase_button",
            });
        },
        W = () => {
            (0, v.K)(b.id, v.C.SKU_EMBED, c);
        };
    return (0, r.jsx)(j, {
        appName: b.name,
        title: m.name,
        description: F,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(b.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: W,
        iconSrc: w,
        onIconClick: B,
        children: (0, r.jsxs)("div", {
            className: R.w,
            children: [
                (0, r.jsx)(l.Button, {
                    variant: "secondary",
                    onClick: H,
                    text: N.intl.string(N.t.DXYfjO),
                }),
                M
                    ? null != g
                        ? (0, r.jsx)(I.rc, {
                              onClick: x,
                              appId: b.id,
                              subscriptionType: k ? "user" : "guild",
                              skuId: m.id,
                              icon: l.U1X,
                              onHasClicked: Y,
                              subscriptionPlan: g,
                              state: L,
                          })
                        : (0, r.jsx)(l.Button, {
                              variant: "primary",
                              text: N.intl.string(N.t.uuzaAK),
                              onClick: G,
                          })
                    : (0, r.jsx)(I.$P, {
                          appId: b.id,
                          sku: m,
                          icon: l.U1X,
                          onHasClicked: Y,
                      }),
            ],
        }),
    });
}
function j(e) {
    let { appName: t, title: n, description: i, link: a, iconSrc: s, onIconClick: o, onLinkCopy: c, children: u } = e;
    return (0, r.jsxs)("div", {
        className: R.iE,
        children: [
            (0, r.jsxs)("div", {
                className: R.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.qd,
                        children: [
                            (0, r.jsx)(l.U1X, { size: "xxs" }),
                            (0, r.jsx)(l.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: t,
                            }),
                        ],
                    }),
                    O.p5 &&
                        (0, r.jsx)(l.K0, {
                            "aria-label": N.intl.string(N.t.WqhZss),
                            icon: () => (0, r.jsx)(l.qYV, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, O.C)(a, () => {
                                    (0, l.showToast)(
                                        (0, l.createToast)(N.intl.string(N.t["L/PwZf"]), l.ToastType.SUCCESS),
                                    ),
                                        c();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: R.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.oB,
                        children: [
                            null != s &&
                                (0, r.jsx)(l.DUT, {
                                    onClick: o,
                                    children: (0, r.jsx)("img", {
                                        src: s.href,
                                        alt: "",
                                        className: R.Z2,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: R.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: "heading-md/semibold",
                                        tag: "div",
                                        children: n,
                                    }),
                                    null != i &&
                                        (0, r.jsx)(l.Text, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: R.h_,
                                            children: i,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    u,
                ],
            }),
        ],
    });
}
