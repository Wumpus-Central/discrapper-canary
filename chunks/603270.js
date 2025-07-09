(n.d(t, {
    F: () => L,
    P: () => R
}),
    n(388685),
    n(997841),
    n(953529),
    n(781311));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(241159),
    d = n(558381),
    p = n(728345),
    m = n(812206),
    f = n(307643),
    _ = n(171246),
    g = n(263519),
    h = n(592125),
    b = n(509545),
    E = n(238),
    y = n(55563),
    x = n(551428),
    C = n(626135),
    v = n(572004),
    O = n(601911),
    j = n(504211),
    I = n(970321),
    S = n(680005),
    T = n(981631),
    N = n(979007),
    P = n(388032),
    A = n(197866);
let w = (0, o.Kb)([y.Z, x.Z, b.Z], {
        queryId: (e) => T.McO.SKU(e),
        get: (e) => {
            if (null == e) return;
            let t = y.Z.get(e),
                n = x.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = b.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0
            };
        },
        load: async (e, t) => {
            (a()(null != t, 'skuId is null'), await (0, d.km)(t));
        },
        useStateHook: o.cj
    }),
    Z = (0, o.Kb)([y.Z], {
        queryId: (e, t) => T.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
        get: (e) => {
            if (null != e) return y.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            (a()(null != t && null != n, 'appId is null'), await (0, d.oJ)(n));
        },
        useStateHook: o.cj
    });
function R(e) {
    let { appId: t, message: l } = e,
        a = (0, I.R)(t),
        [d, p, _, g, b, y, x] = (0, o.Wu)(
            [m.Z, E.Z, h.Z],
            () => {
                var e;
                let n = m.Z.getApplication(t),
                    r = null != n ? (0, O.y)(n, 45) : void 0,
                    i = null == (e = h.Z.getBasicChannel(l.channel_id)) ? void 0 : e.guild_id;
                return [n, m.Z.isFetchingApplication(t), m.Z.didFetchingApplicationFail(t), E.Z.getStoreLayout(t), E.Z.getFetchStatus(t), i, r];
            },
            [t, l.channel_id]
        );
    i.useEffect(() => {
        (b === E.N.NONE && (0, u.k)(t), null != d || p || _ || (0, f.UM)(t));
    }, [d, t, _, p, b]);
    let v = g.subscriptions.length,
        S = g.otps.length,
        w = i.useMemo(
            () =>
                v > 0 && S > 0
                    ? P.intl.formatToPlainString(P.t['jA648/'], {
                          subCount: v,
                          itemCount: S
                      })
                    : v > 0
                      ? P.intl.formatToPlainString(P.t.GSfibG, { count: v })
                      : S > 0
                        ? P.intl.formatToPlainString(P.t.j7Go5O, { count: S })
                        : P.intl.string(P.t.rMA98v),
            [S, v]
        );
    if (!a || null == d) return null;
    let Z = () => {
        (0, c.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: y
                });
        });
    };
    return (0, r.jsx)(D, {
        appName: d.name,
        title: P.intl.formatToPlainString(P.t.XDRjs7, { appName: d.name }),
        description: w,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(d.id, N.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, j.X)(t, j.B.STORE_EMBED);
        },
        iconSrc: x,
        onIconClick: () => {
            (Z(),
                C.default.track(T.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                }));
        },
        children: (0, r.jsx)(s.zx, {
            onClick: () => {
                (Z(),
                    C.default.track(T.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'open_store_button'
                    }));
            },
            className: A.openStoreButton,
            children: P.intl.string(P.t.kRvlKC)
        })
    });
}
function L(e) {
    var t, l;
    let { appId: a, skuId: u, message: d } = e,
        {
            parentSku: m,
            sku: f,
            subscriptionPlan: b,
            storeListing: E
        } = (function (e, t) {
            var n, r;
            let { data: i } = w(e),
                l = null == i ? void 0 : i.sku,
                a = null == i ? void 0 : i.subscriptionPlan,
                o = null == i ? void 0 : i.storeListing,
                { data: s } = Z(e, null != (r = null == l || null == (n = l.application) ? void 0 : n.id) ? r : null == l ? void 0 : l.applicationId);
            return {
                parentSku: s,
                sku: (null == l ? void 0 : l.applicationId) === t ? l : null,
                storeListing: o,
                subscriptionPlan: a
            };
        })(u, a),
        { data: y } = (0, p.IX)(null == f ? void 0 : f.applicationId),
        x = (0, o.e7)(
            [h.Z],
            () => {
                var e;
                return null == (e = h.Z.getBasicChannel(d.channel_id)) ? void 0 : e.guild_id;
            },
            [d]
        ),
        v = i.useMemo(() => (null != y ? (0, O.y)(y, 45) : void 0), [y]),
        R = (0, I.R)(null != (l = null == y ? void 0 : y.id) ? l : ''),
        { openModal: L, subscriptionPurchaseButtonState: M } = (0, g.Z)({
            skuId: u,
            initialSubscribeForGuild: x
        });
    if (!R || null == y || null == f) return null;
    let k = f.type === T.epS.SUBSCRIPTION,
        U = !!k && (0, _.KW)(f.flags),
        F = () => {
            (0, c.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: y.id,
                        guildId: x
                    });
            });
        },
        B = () => {
            (0, c.ZDy)(async () => {
                let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        (n.onClose(), F());
                    };
                    return null != e && null != m
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: y.id,
                              skuId: f.id,
                              guildId: x,
                              subscriptionType: U ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: i
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: y.id,
                                skuId: u,
                                onClose: n.onClose,
                                onHeaderTitleClick: i
                            })
                          : null;
                };
            });
        },
        G = k
            ? U
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.tBG, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          P.intl.string(P.t.wnifjI)
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.QTo, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          P.intl.string(P.t.NRC3am)
                      ]
                  })
            : null == E || null == (t = E.description)
              ? void 0
              : t.trim();
    '' === G && (G = void 0);
    let H = () => {
        C.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: y.id,
            sku_id: f.id,
            area: 'purchase_button'
        });
    };
    return (0, r.jsx)(D, {
        appName: y.name,
        title: f.name,
        description: G,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(y.id, N.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, j.X)(y.id, j.B.SKU_EMBED, u);
        },
        iconSrc: v,
        onIconClick: () => {
            (F(),
                C.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: y.id,
                    sku_id: f.id,
                    area: 'app_icon'
                }));
        },
        children: (0, r.jsxs)('div', {
            className: A.skuPurchaseButtons,
            children: [
                (0, r.jsx)(s.zx, {
                    color: s.Tt.CUSTOM,
                    onClick: () => {
                        (B(),
                            C.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: y.id,
                                sku_id: f.id,
                                area: 'view_details'
                            }));
                    },
                    className: A.viewDetailsButton,
                    children: P.intl.string(P.t.DXYfjI)
                }),
                k
                    ? null != b
                        ? (0, r.jsx)(S.pV, {
                              onClick: L,
                              appId: y.id,
                              subscriptionType: U ? 'user' : 'guild',
                              skuId: f.id,
                              icon: (0, r.jsx)(c.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: H,
                              subscriptionPlan: b,
                              state: M
                          })
                        : (0, r.jsx)(c.zxk, {
                              variant: 'primary',
                              text: P.intl.string(P.t.uuzaAA),
                              onClick: B
                          })
                    : (0, r.jsx)(S.YG, {
                          appId: y.id,
                          sku: f,
                          icon: (0, r.jsx)(c.EOn, {
                              size: 'xs',
                              color: 'currentcolor'
                          }),
                          onHasClicked: H
                      })
            ]
        })
    });
}
function D(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: a, onIconClick: o, onLinkCopy: u, children: d } = e;
    return (0, r.jsxs)('div', {
        className: A.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: A.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.headerTitle,
                        children: [
                            (0, r.jsx)(c.EOn, { size: 'xxs' }),
                            (0, r.jsx)(c.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    v.wS &&
                        (0, r.jsx)(s.zx, {
                            look: s.iL.BLANK,
                            size: s.Ph.ICON,
                            'aria-label': P.intl.string(P.t.WqhZsr),
                            onClick: () => {
                                (0, v.JG)(l, () => {
                                    ((0, c.showToast)((0, c.createToast)(P.intl.string(P.t['L/PwZW']), c.ToastType.SUCCESS)), u());
                                });
                            },
                            children: (0, r.jsx)(c.xPt, { size: 'xs' })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: A.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.contentTextWrapper,
                        children: [
                            null != a &&
                                (0, r.jsx)(s.zx, {
                                    look: s.iL.BLANK,
                                    size: s.Ph.NONE,
                                    onClick: o,
                                    children: (0, r.jsx)('img', {
                                        src: a.href,
                                        alt: '',
                                        className: A.appIcon
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: A.contentText,
                                style: null == i ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != i &&
                                        (0, r.jsx)(c.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: A.description,
                                            children: i
                                        })
                                ]
                            })
                        ]
                    }),
                    d
                ]
            })
        ]
    });
}
