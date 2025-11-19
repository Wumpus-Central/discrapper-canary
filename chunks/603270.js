n.d(t, {
    F: () => x,
    P: () => L,
}),
    n(388685),
    n(997841),
    n(953529),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(241159),
    u = n(558381),
    d = n(728345),
    f = n(812206),
    _ = n(171246),
    p = n(263519),
    h = n(592125),
    m = n(509545),
    g = n(238),
    E = n(55563),
    b = n(551428),
    y = n(626135),
    O = n(572004),
    v = n(601911),
    I = n(504211),
    T = n(970321),
    S = n(680005),
    A = n(981631),
    C = n(979007),
    N = n(388032),
    R = n(418746);
let P = (0, s.Kb)([E.Z, b.Z, m.Z], {
        getQueryId: A.McO.SKU,
        get: (e) => {
            if (null == e) return;
            let t = E.Z.get(e),
                n = b.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = m.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0,
            };
        },
        load: async (e) => {
            o()(null != e, "skuId is null"), await (0, u.km)(e);
        },
    }),
    D = (0, s.Kb)([E.Z], {
        getQueryId: A.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => {
            var t;
            return null == e ? null : null != (t = E.Z.getParentSKU(e)) ? t : null;
        },
        load: async (e, t) => {
            o()(null != e && null != t, "appId is null"), await (0, u.oJ)(t);
        },
    });
function w(e, t) {
    var n, r;
    let { data: i } = P(e),
        a = null == i ? void 0 : i.sku,
        o = null == i ? void 0 : i.subscriptionPlan,
        s = null == i ? void 0 : i.storeListing,
        { data: l } = D(
            e,
            null != (r = null == a || null == (n = a.application) ? void 0 : n.id)
                ? r
                : null == a
                  ? void 0
                  : a.applicationId,
        );
    return {
        parentSku: l,
        sku: (null == a ? void 0 : a.applicationId) === t ? a : null,
        storeListing: s,
        subscriptionPlan: o,
    };
}
function L(e) {
    let { appId: t, message: a } = e,
        o = (0, T.R)(t),
        { data: u } = (0, d.IX)(t),
        [_, p, m, E] = (0, s.Wu)([f.Z, g.Z, h.Z], () => {
            var e;
            let n = f.Z.getApplication(t),
                r = null != n ? (0, v.y)(n, 45) : void 0,
                i = null == (e = h.Z.getBasicChannel(a.channel_id)) ? void 0 : e.guild_id;
            return [g.Z.getStoreLayout(t), g.Z.getFetchStatus(t), i, r];
        }, [t, a.channel_id]);
    i.useEffect(() => {
        p === g.N.NONE && (0, c.k)(t);
    }, [t, p]);
    let b = _.subscriptions.length,
        O = _.otps.length,
        S = i.useMemo(
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
    if (!o || null == u) return null;
    let P = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("77803"), n.e("15351")]).then(n.bind(n, 7225));
                return (n) =>
                    (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: m,
                    });
            });
        },
        D = () => {
            P(),
                y.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "app_icon",
                });
        },
        w = () => {
            P(),
                y.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "open_store_button",
                });
        },
        L = () => {
            (0, I.X)(t, I.B.STORE_EMBED);
        };
    return (0, r.jsx)(M, {
        appName: u.name,
        title: N.intl.formatToPlainString(N.t.XDRjs5, { appName: u.name }),
        description: S,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: L,
        iconSrc: E,
        onIconClick: D,
        children: (0, r.jsx)("div", {
            className: R.openStoreButton,
            children: (0, r.jsx)(l.Button, {
                onClick: w,
                text: N.intl.string(N.t.kRvlKJ),
            }),
        }),
    });
}
function x(e) {
    var t, a;
    let { appId: o, skuId: c, message: u } = e,
        { parentSku: f, sku: m, subscriptionPlan: g, storeListing: E } = w(c, o),
        { data: b } = (0, d.IX)(null == m ? void 0 : m.applicationId),
        O = (0, s.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
        }, [u]),
        P = i.useMemo(() => (null != b ? (0, v.y)(b, 45) : void 0), [b]),
        D = (0, T.R)(null != (a = null == b ? void 0 : b.id) ? a : ""),
        { openModal: L, subscriptionPurchaseButtonState: x } = (0, p.Z)({
            skuId: c,
            initialSubscribeForGuild: O,
        });
    if (!D || null == b || null == m) return null;
    let k = m.type === A.epS.SUBSCRIPTION,
        j = !!k && (0, _.KW)(m.flags),
        U = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("77803"), n.e("15351")]).then(n.bind(n, 7225));
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
            (0, l.ZDy)(async () => {
                let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
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
                              subscriptionType: j ? "user" : "guild",
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
        B = 12,
        Z = k
            ? j
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.tBG, {
                              size: "custom",
                              width: B,
                              height: B,
                          }),
                          " ",
                          N.intl.string(N.t.wnifjC),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.QTo, {
                              size: "custom",
                              width: B,
                              height: B,
                          }),
                          " ",
                          N.intl.string(N.t.NRC3ar),
                      ],
                  })
            : null == E || null == (t = E.description)
              ? void 0
              : t.trim();
    "" === Z && (Z = void 0);
    let F = () => {
            U(),
                y.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: b.id,
                    sku_id: m.id,
                    area: "app_icon",
                });
        },
        V = () => {
            G(),
                y.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: b.id,
                    sku_id: m.id,
                    area: "view_details",
                });
        },
        H = () => {
            y.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: b.id,
                sku_id: m.id,
                area: "purchase_button",
            });
        },
        Y = () => {
            (0, I.X)(b.id, I.B.SKU_EMBED, c);
        };
    return (0, r.jsx)(M, {
        appName: b.name,
        title: m.name,
        description: Z,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(b.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: Y,
        iconSrc: P,
        onIconClick: F,
        children: (0, r.jsxs)("div", {
            className: R.skuPurchaseButtons,
            children: [
                (0, r.jsx)(l.Button, {
                    variant: "secondary",
                    onClick: V,
                    text: N.intl.string(N.t.DXYfjO),
                }),
                k
                    ? null != g
                        ? (0, r.jsx)(S.pV, {
                              onClick: L,
                              appId: b.id,
                              subscriptionType: j ? "user" : "guild",
                              skuId: m.id,
                              icon: l.EOn,
                              onHasClicked: H,
                              subscriptionPlan: g,
                              state: x,
                          })
                        : (0, r.jsx)(l.Button, {
                              variant: "primary",
                              text: N.intl.string(N.t.uuzaAK),
                              onClick: G,
                          })
                    : (0, r.jsx)(S.YG, {
                          appId: b.id,
                          sku: m,
                          icon: l.EOn,
                          onHasClicked: H,
                      }),
            ],
        }),
    });
}
function M(e) {
    let { appName: t, title: n, description: i, link: a, iconSrc: o, onIconClick: s, onLinkCopy: c, children: u } = e;
    return (0, r.jsxs)("div", {
        className: R.wrapper,
        children: [
            (0, r.jsxs)("div", {
                className: R.header,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.headerTitle,
                        children: [
                            (0, r.jsx)(l.EOn, { size: "xxs" }),
                            (0, r.jsx)(l.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: t,
                            }),
                        ],
                    }),
                    O.wS &&
                        (0, r.jsx)(l.hU, {
                            "aria-label": N.intl.string(N.t.WqhZss),
                            icon: () => (0, r.jsx)(l.xPt, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, O.JG)(a, () => {
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
                className: R.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, r.jsx)(l.P3F, {
                                    onClick: s,
                                    children: (0, r.jsx)("img", {
                                        src: o.href,
                                        alt: "",
                                        className: R.appIcon,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: R.contentText,
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
                                            className: R.description,
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
