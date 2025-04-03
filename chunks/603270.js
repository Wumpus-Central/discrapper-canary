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
    l = n.n(a),
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
    E = n(626135),
    v = n(572004),
    O = n(601911),
    N = n(504211),
    j = n(970321),
    C = n(680005),
    I = n(981631),
    S = n(979007),
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
            l()(null != t, 'skuId is null'), await (0, u.km)(t);
        },
        useStateHook: o.cj
    }),
    w = (0, o.Kb)([x.Z], {
        queryId: (e, t) => I.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
        get: (e) => {
            if (null != e) return x.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            l()(null != t && null != n, 'appId is null'), await (0, u.oJ)(n);
        },
        useStateHook: o.cj
    });
function Z(e) {
    let { appId: t, message: a } = e,
        l = (0, j.R)(t),
        [u, d, f, h, _, x, y] = (0, o.Wu)(
            [p.Z, b.Z, g.Z],
            () => {
                var e;
                let n = p.Z.getApplication(t),
                    r = null != n ? (0, O.y)(n, 45) : void 0,
                    i = null == (e = g.Z.getBasicChannel(a.channel_id)) ? void 0 : e.guild_id;
                return [n, p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t), b.Z.getStoreLayout(t), b.Z.getFetchStatus(t), i, r];
            },
            [t, a.channel_id]
        );
    i.useEffect(() => {
        _ === b.N.NONE && (0, c.k)(t), null != u || d || f || (0, m.UM)(t);
    }, [u, t, f, d, _]);
    let v = h.subscriptions.length,
        C = h.otps.length,
        A = i.useMemo(
            () =>
                v > 0 && C > 0
                    ? T.NW.formatToPlainString(T.t['jA648/'], {
                          subCount: v,
                          itemCount: C
                      })
                    : v > 0
                      ? T.NW.formatToPlainString(T.t.GSfibG, { count: v })
                      : C > 0
                        ? T.NW.formatToPlainString(T.t.j7Go5O, { count: C })
                        : T.NW.string(T.t.rMA98v),
            [C, v]
        );
    if (!l || null == u) return null;
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
    return (0, r.jsx)(R, {
        appName: u.name,
        title: T.NW.formatToPlainString(T.t.XDRjs7, { appName: u.name }),
        description: A,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, S.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, N.X)(t, N.B.STORE_EMBED);
        },
        iconSrc: y,
        onIconClick: () => {
            w(),
                E.default.track(I.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
        },
        children: (0, r.jsx)(s.zxk, {
            onClick: () => {
                w(),
                    E.default.track(I.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
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
    let { appId: l, skuId: c, message: u } = e,
        {
            parentSku: p,
            sku: m,
            subscriptionPlan: _,
            storeListing: b
        } = (function (e, t) {
            var n, r;
            let { data: i } = A(e),
                a = null == i ? void 0 : i.sku,
                l = null == i ? void 0 : i.subscriptionPlan,
                o = null == i ? void 0 : i.storeListing,
                { data: s } = w(e, null != (r = null == a || null == (n = a.application) ? void 0 : n.id) ? r : null == a ? void 0 : a.applicationId);
            return {
                parentSku: s,
                sku: (null == a ? void 0 : a.applicationId) === t ? a : null,
                storeListing: o,
                subscriptionPlan: l
            };
        })(c, l),
        { data: x } = (0, d.IX)(null == m ? void 0 : m.applicationId),
        y = (0, o.e7)(
            [g.Z],
            () => {
                var e;
                return null == (e = g.Z.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
            },
            [u]
        ),
        v = i.useMemo(() => (null != x ? (0, O.y)(x, 45) : void 0), [x]),
        Z = (0, j.R)(null != (a = null == x ? void 0 : x.id) ? a : ''),
        { openModal: k, subscriptionPurchaseButtonState: D } = (0, h.Z)({
            skuId: c,
            initialSubscribeForGuild: y
        });
    if (!Z || null == x || null == m) return null;
    let L = m.type === I.epS.SUBSCRIPTION,
        M = !!L && (0, f.KW)(m.flags),
        W = () => {
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
            : null == b || null == (t = b.description)
              ? void 0
              : t.trim();
    '' === F && (F = void 0);
    let B = () => {
        E.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: x.id,
            sku_id: m.id,
            area: 'purchase_button'
        });
    };
    return (0, r.jsx)(R, {
        appName: x.name,
        title: m.name,
        description: F,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(x.id, S.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, N.X)(x.id, N.B.SKU_EMBED, c);
        },
        iconSrc: v,
        onIconClick: () => {
            W(),
                E.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
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
                        U(),
                            E.default.track(I.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: x.id,
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
                              appId: x.id,
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
                          appId: x.id,
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
    let { appName: t, title: n, description: i, link: a, iconSrc: l, onIconClick: o, onLinkCopy: c, children: u } = e;
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
                    v.wS &&
                        (0, r.jsx)(s.zxk, {
                            look: s.iLD.BLANK,
                            size: s.PhG.ICON,
                            'aria-label': T.NW.string(T.t.WqhZsr),
                            onClick: () => {
                                (0, v.JG)(a), (0, s.showToast)((0, s.createToast)(T.NW.string(T.t['L/PwZW']), s.ToastType.SUCCESS)), c();
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
                            null != l &&
                                (0, r.jsx)(s.zxk, {
                                    look: s.iLD.BLANK,
                                    size: s.PhG.NONE,
                                    onClick: o,
                                    children: (0, r.jsx)('img', {
                                        src: l.href,
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
