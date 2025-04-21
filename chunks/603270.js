n.d(t, {
    F: () => R,
    P: () => Z
}),
    n(388685),
    n(997841),
    n(953529),
    n(781311);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(241159),
    u = n(558381),
    d = n(728345),
    p = n(812206),
    m = n(307643),
    f = n(171246),
    h = n(263519),
    g = n(592125),
    _ = n(509545),
    b = n(238),
    x = n(55563),
    y = n(551428),
    v = n(626135),
    E = n(572004),
    O = n(601911),
    j = n(504211),
    C = n(970321),
    S = n(680005),
    I = n(981631),
    N = n(979007),
    T = n(388032),
    P = n(197866);
let A = (0, o.Kb)([x.Z, y.Z, _.Z], {
        queryId: (e) => I.McO.SKU(e),
        get: (e) => {
            if (null == e) return;
            let t = x.Z.get(e),
                n = y.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = _.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0
            };
        },
        load: async (e, t) => {
            a()(null != t, 'skuId is null'), await (0, u.km)(t);
        },
        useStateHook: o.cj
    }),
    w = (0, o.Kb)([x.Z], {
        queryId: (e, t) => I.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
        get: (e) => {
            if (null != e) return x.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            a()(null != t && null != n, 'appId is null'), await (0, u.oJ)(n);
        },
        useStateHook: o.cj
    });
function Z(e) {
    let { appId: t, message: l } = e,
        a = (0, C.R)(t),
        [u, d, f, h, _, x, y] = (0, o.Wu)(
            [p.Z, b.Z, g.Z],
            () => {
                var e;
                let n = p.Z.getApplication(t),
                    r = null != n ? (0, O.y)(n, 45) : void 0,
                    i = null == (e = g.Z.getBasicChannel(l.channel_id)) ? void 0 : e.guild_id;
                return [n, p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t), b.Z.getStoreLayout(t), b.Z.getFetchStatus(t), i, r];
            },
            [t, l.channel_id]
        );
    i.useEffect(() => {
        _ === b.N.NONE && (0, c.k)(t), null != u || d || f || (0, m.UM)(t);
    }, [u, t, f, d, _]);
    let E = h.subscriptions.length,
        S = h.otps.length,
        A = i.useMemo(
            () =>
                E > 0 && S > 0
                    ? T.intl.formatToPlainString(T.t['jA648/'], {
                          subCount: E,
                          itemCount: S
                      })
                    : E > 0
                      ? T.intl.formatToPlainString(T.t.GSfibG, { count: E })
                      : S > 0
                        ? T.intl.formatToPlainString(T.t.j7Go5O, { count: S })
                        : T.intl.string(T.t.rMA98v),
            [S, E]
        );
    if (!a || null == u) return null;
    let w = () => {
        (0, s.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: x
                });
        });
    };
    return (0, r.jsx)(k, {
        appName: u.name,
        title: T.intl.formatToPlainString(T.t.XDRjs7, { appName: u.name }),
        description: A,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, N.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, j.X)(t, j.B.STORE_EMBED);
        },
        iconSrc: y,
        onIconClick: () => {
            w(),
                v.default.track(I.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
        },
        children: (0, r.jsx)(s.zxk, {
            onClick: () => {
                w(),
                    v.default.track(I.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'open_store_button'
                    });
            },
            className: P.openStoreButton,
            children: T.intl.string(T.t.kRvlKC)
        })
    });
}
function R(e) {
    var t, l;
    let { appId: a, skuId: c, message: u } = e,
        {
            parentSku: p,
            sku: m,
            subscriptionPlan: _,
            storeListing: b
        } = (function (e, t) {
            var n, r;
            let { data: i } = A(e),
                l = null == i ? void 0 : i.sku,
                a = null == i ? void 0 : i.subscriptionPlan,
                o = null == i ? void 0 : i.storeListing,
                { data: s } = w(e, null != (r = null == l || null == (n = l.application) ? void 0 : n.id) ? r : null == l ? void 0 : l.applicationId);
            return {
                parentSku: s,
                sku: (null == l ? void 0 : l.applicationId) === t ? l : null,
                storeListing: o,
                subscriptionPlan: a
            };
        })(c, a),
        { data: x } = (0, d.IX)(null == m ? void 0 : m.applicationId),
        y = (0, o.e7)(
            [g.Z],
            () => {
                var e;
                return null == (e = g.Z.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
            },
            [u]
        ),
        E = i.useMemo(() => (null != x ? (0, O.y)(x, 45) : void 0), [x]),
        Z = (0, C.R)(null != (l = null == x ? void 0 : x.id) ? l : ''),
        { openModal: R, subscriptionPurchaseButtonState: D } = (0, h.Z)({
            skuId: c,
            initialSubscribeForGuild: y
        });
    if (!Z || null == x || null == m) return null;
    let L = m.type === I.epS.SUBSCRIPTION,
        M = !!L && (0, f.KW)(m.flags),
        U = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: x.id,
                        guildId: y
                    });
            });
        },
        F = () => {
            (0, s.ZDy)(async () => {
                let e = L ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = L ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        n.onClose(), U();
                    };
                    return null != e && null != p
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: x.id,
                              skuId: m.id,
                              guildId: y,
                              subscriptionType: M ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: i
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: x.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i
                            })
                          : null;
                };
            });
        },
        B = L
            ? M
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.tBG, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          T.intl.string(T.t.wnifjI)
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.QTo, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          T.intl.string(T.t.NRC3am)
                      ]
                  })
            : null == b || null == (t = b.description)
              ? void 0
              : t.trim();
    '' === B && (B = void 0);
    let G = () => {
        v.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: x.id,
            sku_id: m.id,
            area: 'purchase_button'
        });
    };
    return (0, r.jsx)(k, {
        appName: x.name,
        title: m.name,
        description: B,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(x.id, N.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, j.X)(x.id, j.B.SKU_EMBED, c);
        },
        iconSrc: E,
        onIconClick: () => {
            U(),
                v.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: x.id,
                    sku_id: m.id,
                    area: 'app_icon'
                });
        },
        children: (0, r.jsxs)('div', {
            className: P.skuPurchaseButtons,
            children: [
                (0, r.jsx)(s.zxk, {
                    color: s.Ttl.CUSTOM,
                    onClick: () => {
                        F(),
                            v.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: x.id,
                                sku_id: m.id,
                                area: 'view_details'
                            });
                    },
                    className: P.viewDetailsButton,
                    children: T.intl.string(T.t.DXYfjI)
                }),
                L
                    ? null != _
                        ? (0, r.jsx)(S.pV, {
                              onClick: R,
                              appId: x.id,
                              subscriptionType: M ? 'user' : 'guild',
                              skuId: m.id,
                              icon: (0, r.jsx)(s.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: G,
                              subscriptionPlan: _,
                              state: D
                          })
                        : (0, r.jsx)(s.zxk, {
                              onClick: F,
                              children: T.intl.string(T.t.uuzaAA)
                          })
                    : (0, r.jsx)(S.YG, {
                          appId: x.id,
                          sku: m,
                          icon: (0, r.jsx)(s.EOn, {
                              size: 'xs',
                              color: 'currentcolor'
                          }),
                          onHasClicked: G
                      })
            ]
        })
    });
}
function k(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: a, onIconClick: o, onLinkCopy: c, children: u } = e;
    return (0, r.jsxs)('div', {
        className: P.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: P.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.headerTitle,
                        children: [
                            (0, r.jsx)(s.EOn, { size: 'xxs' }),
                            (0, r.jsx)(s.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    E.wS &&
                        (0, r.jsx)(s.zxk, {
                            look: s.iLD.BLANK,
                            size: s.PhG.ICON,
                            'aria-label': T.intl.string(T.t.WqhZsr),
                            onClick: () => {
                                (0, E.JG)(l, () => {
                                    (0, s.showToast)((0, s.createToast)(T.intl.string(T.t['L/PwZW']), s.ToastType.SUCCESS)), c();
                                });
                            },
                            children: (0, r.jsx)(s.xPt, { size: 'xs' })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: P.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.contentTextWrapper,
                        children: [
                            null != a &&
                                (0, r.jsx)(s.zxk, {
                                    look: s.iLD.BLANK,
                                    size: s.PhG.NONE,
                                    onClick: o,
                                    children: (0, r.jsx)('img', {
                                        src: a.href,
                                        alt: '',
                                        className: P.appIcon
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: P.contentText,
                                style: null == i ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != i &&
                                        (0, r.jsx)(s.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: P.description,
                                            children: i
                                        })
                                ]
                            })
                        ]
                    }),
                    u
                ]
            })
        ]
    });
}
