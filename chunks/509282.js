n.d(t, {
    $: () => R,
    G: () => w,
}),
    n(896048),
    n(938796),
    n(228524),
    n(733351);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(996759),
    u = n(800342),
    d = n(627363),
    p = n(587895),
    m = n(163437),
    f = n(185438),
    g = n(734057),
    h = n(97352),
    _ = n(31455),
    b = n(67480),
    A = n(328968),
    y = n(954571),
    v = n(957565),
    x = n(943775),
    O = n(997997),
    E = n(658575),
    j = n(376374),
    C = n(652215),
    I = n(435220),
    S = n(985018),
    T = n(159740);
let N = (0, s.UT)([b.A, A.A, h.A], {
        getQueryId: C.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = b.A.get(e),
                n = A.A.getForSKU(e);
            if (null == t || null == n) return;
            let r = h.A.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0,
            };
        },
        load: async (e) => {
            a()(null != e, "skuId is null"), await (0, u.QB)(e);
        },
    }),
    P = (0, s.UT)([b.A], {
        getQueryId: C.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => {
            var t;
            return null == e ? null : null != (t = b.A.getParentSKU(e)) ? t : null;
        },
        load: async (e, t) => {
            a()(null != e && null != t, "appId is null"), await (0, u.JI)(t);
        },
    });

function w(e) {
    let { appId: t, message: l } = e,
        a = (0, E.G)(t),
        { data: u } = (0, d.YY)(t),
        [m, f, h, b] = (0, s.yK)([p.A, _.A, g.A], () => {
            var e;
            let n = p.A.getApplication(t),
                r = null != n ? (0, x.A)(n, 45) : void 0,
                i = null == (e = g.A.getBasicChannel(l.channel_id)) ? void 0 : e.guild_id;
            return [_.A.getStoreLayout(t), _.A.getFetchStatus(t), i, r];
        }, [t, l.channel_id]);
    i.useEffect(() => {
        f === _.N.NONE && (0, c.V)(t);
    }, [t, f]);
    let A = m.subscriptions.length,
        v = m.otps.length,
        j = i.useMemo(
            () =>
                A > 0 && v > 0
                    ? S.intl.formatToPlainString(S.t["jA648+"], {
                          subCount: A,
                          itemCount: v,
                      })
                    : A > 0
                      ? S.intl.formatToPlainString(S.t.GSfibA, {
                            count: A,
                        })
                      : v > 0
                        ? S.intl.formatToPlainString(S.t.j7Go5A, {
                              count: v,
                          })
                        : S.intl.string(S.t.rMA98g),
            [v, A],
        );
    if (!a || null == u) return null;
    let N = () => {
        (0, o.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: h,
                });
        });
    };
    return (0, r.jsx)(D, {
        appName: u.name,
        title: S.intl.formatToPlainString(S.t.XDRjs5, {
            appName: u.name,
        }),
        description: j,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, I.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, O.K)(t, O.C.STORE_EMBED);
        },
        iconSrc: b,
        onIconClick: () => {
            N(),
                y.default.track(C.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: "app_icon",
                });
        },
        children: (0, r.jsx)("div", {
            className: T.mZ,
            children: (0, r.jsx)(o.Button, {
                onClick: () => {
                    N(),
                        y.default.track(C.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: "open_store_button",
                        });
                },
                text: S.intl.string(S.t.kRvlKJ),
            }),
        }),
    });
}

function R(e) {
    var t, l;
    let { appId: a, skuId: c, message: u } = e,
        {
            parentSku: p,
            sku: h,
            subscriptionPlan: _,
            storeListing: b,
        } = (function (e, t) {
            var n, r;
            let { data: i } = N(e),
                l = null == i ? void 0 : i.sku,
                a = null == i ? void 0 : i.subscriptionPlan,
                s = null == i ? void 0 : i.storeListing,
                { data: o } = P(
                    e,
                    null != (n = null == l || null == (r = l.application) ? void 0 : r.id)
                        ? n
                        : null == l
                          ? void 0
                          : l.applicationId,
                );
            return {
                parentSku: o,
                sku: (null == l ? void 0 : l.applicationId) === t ? l : null,
                storeListing: s,
                subscriptionPlan: a,
            };
        })(c, a),
        { data: A } = (0, d.YY)(null == h ? void 0 : h.applicationId),
        v = (0, s.bG)([g.A], () => {
            var e;
            return null == (e = g.A.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
        }, [u]),
        w = i.useMemo(() => (null != A ? (0, x.A)(A, 45) : void 0), [A]),
        R = (0, E.G)(null != (t = null == A ? void 0 : A.id) ? t : ""),
        { openModal: L, subscriptionPurchaseButtonState: M } = (0, f.A)({
            skuId: c,
            initialSubscribeForGuild: v,
        });
    if (!R || null == A || null == h) return null;
    let k = h.type === C.Puh.SUBSCRIPTION,
        U = !!k && (0, m.bg)(h.flags),
        G = () => {
            (0, o.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: A.id,
                        guildId: v,
                    });
            });
        },
        B = () => {
            (0, o.mMO)(async () => {
                let e = k ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    t = k ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        n.onClose(), G();
                    };
                    return null != e && null != p
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: A.id,
                              skuId: h.id,
                              guildId: v,
                              subscriptionType: U ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: i,
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: A.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i,
                            })
                          : null;
                };
            });
        },
        F = k
            ? U
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.nys, {
                              size: "custom",
                              width: 12,
                              height: 12,
                          }),
                          " ",
                          S.intl.string(S.t.wnifjC),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.RR9, {
                              size: "custom",
                              width: 12,
                              height: 12,
                          }),
                          " ",
                          S.intl.string(S.t.NRC3ar),
                      ],
                  })
            : null == b || null == (l = b.description)
              ? void 0
              : l.trim();
    "" === F && (F = void 0);
    let H = () => {
        y.default.track(C.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: A.id,
            sku_id: h.id,
            area: "purchase_button",
        });
    };
    return (0, r.jsx)(D, {
        appName: A.name,
        title: h.name,
        description: F,
        link: ""
            .concat(location.protocol, "//")
            .concat(location.host)
            .concat(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A.id, I.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, O.K)(A.id, O.C.SKU_EMBED, c);
        },
        iconSrc: w,
        onIconClick: () => {
            G(),
                y.default.track(C.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: A.id,
                    sku_id: h.id,
                    area: "app_icon",
                });
        },
        children: (0, r.jsxs)("div", {
            className: T.w,
            children: [
                (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    onClick: () => {
                        B(),
                            y.default.track(C.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: A.id,
                                sku_id: h.id,
                                area: "view_details",
                            });
                    },
                    text: S.intl.string(S.t.DXYfjO),
                }),
                k
                    ? null != _
                        ? (0, r.jsx)(j.rc, {
                              onClick: L,
                              appId: A.id,
                              subscriptionType: U ? "user" : "guild",
                              skuId: h.id,
                              icon: o.U1X,
                              onHasClicked: H,
                              subscriptionPlan: _,
                              state: M,
                          })
                        : (0, r.jsx)(o.Button, {
                              variant: "primary",
                              text: S.intl.string(S.t.uuzaAK),
                              onClick: B,
                          })
                    : (0, r.jsx)(j.$P, {
                          appId: A.id,
                          sku: h,
                          icon: o.U1X,
                          onHasClicked: H,
                      }),
            ],
        }),
    });
}

function D(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: a, onIconClick: s, onLinkCopy: c, children: u } = e;
    return (0, r.jsxs)("div", {
        className: T.iE,
        children: [
            (0, r.jsxs)("div", {
                className: T.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.qd,
                        children: [
                            (0, r.jsx)(o.U1X, {
                                size: "xxs",
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: t,
                            }),
                        ],
                    }),
                    v.p5 &&
                        (0, r.jsx)(o.K0, {
                            "aria-label": S.intl.string(S.t.WqhZss),
                            icon: () =>
                                (0, r.jsx)(o.qYV, {
                                    size: "xs",
                                }),
                            size: "sm",
                            onClick: () => {
                                (0, v.C)(l, () => {
                                    (0, o.showToast)(
                                        (0, o.createToast)(S.intl.string(S.t["L/PwZf"]), o.ToastType.SUCCESS),
                                    ),
                                        c();
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.oB,
                        children: [
                            null != a &&
                                (0, r.jsx)(o.DUT, {
                                    onClick: s,
                                    children: (0, r.jsx)("img", {
                                        src: a.href,
                                        alt: "",
                                        className: T.Z2,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: T.Tf,
                                style:
                                    null == i
                                        ? {
                                              justifyContent: "space-evenly",
                                          }
                                        : void 0,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "heading-md/semibold",
                                        tag: "div",
                                        children: n,
                                    }),
                                    null != i &&
                                        (0, r.jsx)(o.Text, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: T.h_,
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
