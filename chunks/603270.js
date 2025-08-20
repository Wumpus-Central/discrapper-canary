n.d(t, {
    F: () => R,
    P: () => Z,
}),
    n(388685),
    n(997841),
    n(953529),
    n(781311);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(241159),
    u = n(558381),
    d = n(728345),
    p = n(812206),
    m = n(307643),
    f = n(171246),
    g = n(263519),
    _ = n(592125),
    h = n(509545),
    b = n(238),
    E = n(55563),
    C = n(551428),
    v = n(626135),
    O = n(572004),
    y = n(601911),
    x = n(504211),
    j = n(970321),
    I = n(680005),
    S = n(981631),
    T = n(979007),
    P = n(388032),
    N = n(561498);
let A = (0, a.Kb)([E.Z, C.Z, h.Z], {
        queryId: (e) => S.McO.SKU(e),
        get: (e) => {
            if (null == e) return;
            let t = E.Z.get(e),
                n = C.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = h.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0,
            };
        },
        load: async (e, t) => {
            o()(null != t, "skuId is null"), await (0, u.km)(t);
        },
        useStateHook: a.cj,
    }),
    w = (0, a.Kb)([E.Z], {
        queryId: (e, t) => S.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
        get: (e) => {
            if (null != e) return E.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            o()(null != t && null != n, "appId is null"), await (0, u.oJ)(n);
        },
        useStateHook: a.cj,
    });
function Z(e) {
    let { appId: t, message: l } = e,
        o = (0, j.R)(t),
        [u, d, f, g, h, E, C] = (0, a.Wu)([p.Z, b.Z, _.Z], () => {
            var e;
            let n = p.Z.getApplication(t),
                r = null != n ? (0, y.y)(n, 45) : void 0,
                i = null == (e = _.Z.getBasicChannel(l.channel_id)) ? void 0 : e.guild_id;
            return [
                n,
                p.Z.isFetchingApplication(t),
                p.Z.didFetchingApplicationFail(t),
                b.Z.getStoreLayout(t),
                b.Z.getFetchStatus(t),
                i,
                r,
            ];
        }, [t, l.channel_id]);
    i.useEffect(() => {
        h === b.N.NONE && (0, c.k)(t), null != u || d || f || (0, m.UM)(t);
    }, [u, t, f, d, h]);
    let O = g.subscriptions.length,
        I = g.otps.length,
        A = i.useMemo(
            () =>
                O > 0 && I > 0
                    ? P.intl.formatToPlainString(P.t["jA648/"], {
                          subCount: O,
                          itemCount: I,
                      })
                    : O > 0
                      ? P.intl.formatToPlainString(P.t.GSfibG, { count: O })
                      : I > 0
                        ? P.intl.formatToPlainString(P.t.j7Go5O, { count: I })
                        : P.intl.string(P.t.rMA98v),
            [I, O],
        );
    if (!o || null == u) return null;
    let w = () => {
        (0, s.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("77803"), n.e("18992")]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: E,
                });
        });
    };
    return (0, r.jsx)(D, {
        appName: u.name,
        title: P.intl.formatToPlainString(P.t.XDRjs7, { appName: u.name }),
        description: A,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, T.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, x.X)(t, x.B.STORE_EMBED);
        },
        iconSrc: C,
        onIconClick: () => {
            w(),
                v.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "app_icon",
                });
        },
        children: (0, r.jsx)("div", {
            className: N.openStoreButton,
            children: (0, r.jsx)(s.zxk, {
                onClick: () => {
                    w(),
                        v.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: P.intl.string(P.t.kRvlKC),
            }),
        }),
    });
}
function R(e) {
    var t, l;
    let { appId: o, skuId: c, message: u } = e,
        {
            parentSku: p,
            sku: m,
            subscriptionPlan: h,
            storeListing: b,
        } = (function (e, t) {
            var n, r;
            let { data: i } = A(e),
                l = null == i ? void 0 : i.sku,
                o = null == i ? void 0 : i.subscriptionPlan,
                a = null == i ? void 0 : i.storeListing,
                { data: s } = w(
                    e,
                    null != (r = null == l || null == (n = l.application) ? void 0 : n.id)
                        ? r
                        : null == l
                          ? void 0
                          : l.applicationId,
                );
            return {
                parentSku: s,
                sku: (null == l ? void 0 : l.applicationId) === t ? l : null,
                storeListing: a,
                subscriptionPlan: o,
            };
        })(c, o),
        { data: E } = (0, d.IX)(null == m ? void 0 : m.applicationId),
        C = (0, a.e7)([_.Z], () => {
            var e;
            return null == (e = _.Z.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
        }, [u]),
        O = i.useMemo(() => (null != E ? (0, y.y)(E, 45) : void 0), [E]),
        Z = (0, j.R)(null != (l = null == E ? void 0 : E.id) ? l : ""),
        { openModal: R, subscriptionPurchaseButtonState: L } = (0, g.Z)({
            skuId: c,
            initialSubscribeForGuild: C,
        });
    if (!Z || null == E || null == m) return null;
    let M = m.type === S.epS.SUBSCRIPTION,
        k = !!M && (0, f.KW)(m.flags),
        U = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("77803"), n.e("18992")]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: E.id,
                        guildId: C,
                    });
            });
        },
        F = () => {
            (0, s.ZDy)(async () => {
                let e = M ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = M ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        n.onClose(), U();
                    };
                    return null != e && null != p
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: E.id,
                              skuId: m.id,
                              guildId: C,
                              subscriptionType: k ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: i,
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: E.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i,
                            })
                          : null;
                };
            });
        },
        B = M
            ? k
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.tBG, {
                              size: "custom",
                              width: 12,
                              height: 12,
                          }),
                          " ",
                          P.intl.string(P.t.wnifjI),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.QTo, {
                              size: "custom",
                              width: 12,
                              height: 12,
                          }),
                          " ",
                          P.intl.string(P.t.NRC3am),
                      ],
                  })
            : null == b || null == (t = b.description)
              ? void 0
              : t.trim();
    "" === B && (B = void 0);
    let G = () => {
        v.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: E.id,
            sku_id: m.id,
            area: "purchase_button",
        });
    };
    return (0, r.jsx)(D, {
        appName: E.name,
        title: m.name,
        description: B,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(E.id, T.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, x.X)(E.id, x.B.SKU_EMBED, c);
        },
        iconSrc: O,
        onIconClick: () => {
            U(),
                v.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: E.id,
                    sku_id: m.id,
                    area: "app_icon",
                });
        },
        children: (0, r.jsxs)("div", {
            className: N.skuPurchaseButtons,
            children: [
                (0, r.jsx)(s.zxk, {
                    variant: "secondary",
                    onClick: () => {
                        F(),
                            v.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: E.id,
                                sku_id: m.id,
                                area: "view_details",
                            });
                    },
                    text: P.intl.string(P.t.DXYfjI),
                }),
                M
                    ? null != h
                        ? (0, r.jsx)(I.pV, {
                              onClick: R,
                              appId: E.id,
                              subscriptionType: k ? "user" : "guild",
                              skuId: m.id,
                              icon: s.EOn,
                              onHasClicked: G,
                              subscriptionPlan: h,
                              state: L,
                          })
                        : (0, r.jsx)(s.zxk, {
                              variant: "primary",
                              text: P.intl.string(P.t.uuzaAA),
                              onClick: F,
                          })
                    : (0, r.jsx)(I.YG, {
                          appId: E.id,
                          sku: m,
                          icon: s.EOn,
                          onHasClicked: G,
                      }),
            ],
        }),
    });
}
function D(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: o, onIconClick: a, onLinkCopy: c, children: u } = e;
    return (0, r.jsxs)("div", {
        className: N.wrapper,
        children: [
            (0, r.jsxs)("div", {
                className: N.header,
                children: [
                    (0, r.jsxs)("div", {
                        className: N.headerTitle,
                        children: [
                            (0, r.jsx)(s.EOn, { size: "xxs" }),
                            (0, r.jsx)(s.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: t,
                            }),
                        ],
                    }),
                    O.wS &&
                        (0, r.jsx)(s.hU, {
                            "aria-label": P.intl.string(P.t.WqhZsr),
                            icon: () => (0, r.jsx)(s.xPt, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, O.JG)(l, () => {
                                    (0, s.showToast)(
                                        (0, s.createToast)(P.intl.string(P.t["L/PwZW"]), s.ToastType.SUCCESS),
                                    ),
                                        c();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: N.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: N.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, r.jsx)(s.P3F, {
                                    onClick: a,
                                    children: (0, r.jsx)("img", {
                                        src: o.href,
                                        alt: "",
                                        className: N.appIcon,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: N.contentText,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "heading-md/semibold",
                                        tag: "div",
                                        children: n,
                                    }),
                                    null != i &&
                                        (0, r.jsx)(s.Text, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: N.description,
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
