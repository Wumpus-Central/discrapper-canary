n.d(t, {
    F: () => k,
    P: () => Z
}),
    n(47120),
    n(789020),
    n(266796),
    n(566702);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
    l = n(442837),
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
    v = n(55563),
    x = n(551428),
    y = n(626135),
    E = n(572004),
    O = n(601911),
    N = n(504211),
    j = n(970321),
    C = n(680005),
    I = n(981631),
    S = n(979007),
    T = n(388032),
    P = n(968136);
let A = (0, l.Kb)([v.Z, x.Z, _.Z], {
        queryId: (e) => (null != e ? ['SKU', e] : null),
        get: (e) => {
            if (null == e) return;
            let t = v.Z.get(e),
                n = x.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = _.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0
            };
        },
        load: async (e, t) => {
            o()(null != t, 'skuId is null'), await (0, u.km)(t);
        },
        useStateHook: l.cj
    }),
    w = (0, l.Kb)([v.Z], {
        queryId: (e, t) => (null != t ? ['useParentSkuData', t] : null),
        get: (e) => {
            if (null != e) return v.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            o()(null != t && null != n, 'appId is null'), await (0, u.oJ)(n);
        },
        useStateHook: l.cj
    });
function Z(e) {
    let { appId: t, message: a } = e,
        o = (0, j.R)(t),
        [u, d, f, h, _, v, x] = (0, l.Wu)(
            [p.Z, b.Z, g.Z],
            () => {
                var e;
                let n = p.Z.getApplication(t),
                    r = null != n ? (0, O.y)(n, 45) : void 0,
                    i = null === (e = g.Z.getBasicChannel(a.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                return [n, p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t), b.Z.getStoreLayout(t), b.Z.getFetchStatus(t), i, r];
            },
            [t, a.channel_id]
        );
    i.useEffect(() => {
        _ === b.N.NONE && (0, c.k)(t), null != u || d || f || (0, m.UM)(t);
    }, [u, t, f, d, _]);
    let E = h.subscriptions.length,
        C = h.otps.length,
        A = i.useMemo(
            () =>
                E > 0 && C > 0
                    ? T.NW.formatToPlainString(T.t['jA648/'], {
                          subCount: E,
                          itemCount: C
                      })
                    : E > 0
                      ? T.NW.formatToPlainString(T.t.GSfibG, { count: E })
                      : C > 0
                        ? T.NW.formatToPlainString(T.t.j7Go5O, { count: C })
                        : T.NW.string(T.t.rMA98v),
            [C, E]
        );
    if (!o || null == u) return null;
    let w = () => {
        (0, s.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('73160')]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: v
                });
        });
    };
    return (0, r.jsx)(R, {
        appName: u.name,
        title: T.NW.formatToPlainString(T.t.XDRjs7, { appName: u.name }),
        description: A,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, S.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, N.X)(t, N.B.STORE_EMBED);
        },
        iconSrc: x,
        onIconClick: () => {
            w(),
                y.default.track(I.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
        },
        children: (0, r.jsx)(s.zxk, {
            onClick: () => {
                w(),
                    y.default.track(I.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'open_store_button'
                    });
            },
            className: P.openStoreButton,
            children: T.NW.string(T.t.kRvlKC)
        })
    });
}
function k(e) {
    var t, a;
    let { appId: o, skuId: c, message: u } = e,
        {
            parentSku: p,
            sku: m,
            subscriptionPlan: _,
            storeListing: b
        } = (function (e, t) {
            var n, r;
            let { data: i } = A(e),
                a = null == i ? void 0 : i.sku,
                o = null == i ? void 0 : i.subscriptionPlan,
                l = null == i ? void 0 : i.storeListing,
                { data: s } = w(e, null !== (r = null == a ? void 0 : null === (n = a.application) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : null == a ? void 0 : a.applicationId);
            return {
                parentSku: s,
                sku: (null == a ? void 0 : a.applicationId) === t ? a : null,
                storeListing: l,
                subscriptionPlan: o
            };
        })(c, o),
        { data: v } = (0, d.IX)(null == m ? void 0 : m.applicationId),
        x = (0, l.e7)(
            [g.Z],
            () => {
                var e;
                return null === (e = g.Z.getBasicChannel(u.channel_id)) || void 0 === e ? void 0 : e.guild_id;
            },
            [u]
        ),
        E = i.useMemo(() => (null != v ? (0, O.y)(v, 45) : void 0), [v]),
        Z = (0, j.R)(null !== (a = null == v ? void 0 : v.id) && void 0 !== a ? a : ''),
        { openModal: k, subscriptionPurchaseButtonState: D } = (0, h.Z)({
            skuId: c,
            initialSubscribeForGuild: x
        });
    if (!Z || null == v || null == m) return null;
    let L = m.type === I.epS.SUBSCRIPTION,
        M = !!L && (0, f.KW)(m.flags),
        W = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('73160')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: v.id,
                        guildId: x
                    });
            });
        },
        U = () => {
            (0, s.ZDy)(async () => {
                let e = L ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = L ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        n.onClose(), W();
                    };
                    return null != e && null != p
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: v.id,
                              skuId: m.id,
                              guildId: x,
                              subscriptionType: M ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: i
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: v.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i
                            })
                          : null;
                };
            });
        },
        F = L
            ? M
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.tBG, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          T.NW.string(T.t.wnifjI)
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
                          T.NW.string(T.t.NRC3am)
                      ]
                  })
            : null == b
              ? void 0
              : null === (t = b.description) || void 0 === t
                ? void 0
                : t.trim();
    '' === F && (F = void 0);
    let B = () => {
        y.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: v.id,
            sku_id: m.id,
            area: 'purchase_button'
        });
    };
    return (0, r.jsx)(R, {
        appName: v.name,
        title: m.name,
        description: F,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v.id, S.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, N.X)(v.id, N.B.SKU_EMBED, c);
        },
        iconSrc: E,
        onIconClick: () => {
            W(),
                y.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: v.id,
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
                        U(),
                            y.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: v.id,
                                sku_id: m.id,
                                area: 'view_details'
                            });
                    },
                    className: P.viewDetailsButton,
                    children: T.NW.string(T.t.DXYfjI)
                }),
                L
                    ? null != _
                        ? (0, r.jsx)(C.pV, {
                              onClick: k,
                              appId: v.id,
                              subscriptionType: M ? 'user' : 'guild',
                              skuId: m.id,
                              icon: (0, r.jsx)(s.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: B,
                              subscriptionPlan: _,
                              state: D
                          })
                        : (0, r.jsx)(s.zxk, {
                              onClick: U,
                              children: T.NW.string(T.t.uuzaAA)
                          })
                    : (0, r.jsx)(C.YG, {
                          appId: v.id,
                          sku: m,
                          icon: (0, r.jsx)(s.EOn, {
                              size: 'xs',
                              color: 'currentcolor'
                          }),
                          onHasClicked: B
                      })
            ]
        })
    });
}
function R(e) {
    let { appName: t, title: n, description: i, link: a, iconSrc: o, onIconClick: l, onLinkCopy: c, children: u } = e;
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
                            'aria-label': T.NW.string(T.t.WqhZsr),
                            onClick: () => {
                                (0, E.JG)(a), (0, s.showToast)((0, s.createToast)(T.NW.string(T.t['L/PwZW']), s.ToastType.SUCCESS)), c();
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
                            null != o &&
                                (0, r.jsx)(s.zxk, {
                                    look: s.iLD.BLANK,
                                    size: s.PhG.NONE,
                                    onClick: l,
                                    children: (0, r.jsx)('img', {
                                        src: o.href,
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
