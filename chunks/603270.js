(n.d(t, {
    F: () => k,
    P: () => x
}),
    n(388685),
    n(997841),
    n(953529),
    n(781311));
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(241159),
    u = n(558381),
    d = n(728345),
    f = n(812206),
    _ = n(307643),
    p = n(171246),
    h = n(263519),
    m = n(592125),
    g = n(509545),
    E = n(238),
    b = n(55563),
    y = n(551428),
    O = n(626135),
    v = n(572004),
    I = n(601911),
    T = n(504211),
    S = n(970321),
    A = n(680005),
    N = n(981631),
    C = n(979007),
    w = n(388032),
    R = n(197866);
let P = (0, s.Kb)([b.Z, y.Z, g.Z], {
        queryId: (e) => N.McO.SKU(e),
        get: (e) => {
            if (null == e) return;
            let t = b.Z.get(e),
                n = y.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = g.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0
            };
        },
        load: async (e, t) => {
            (o()(null != t, 'skuId is null'), await (0, u.km)(t));
        },
        useStateHook: s.cj
    }),
    D = (0, s.Kb)([b.Z], {
        queryId: (e, t) => N.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
        get: (e) => {
            if (null != e) return b.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            (o()(null != t && null != n, 'appId is null'), await (0, u.oJ)(n));
        },
        useStateHook: s.cj
    });
function L(e, t) {
    var n, r;
    let { data: i } = P(e),
        a = null == i ? void 0 : i.sku,
        o = null == i ? void 0 : i.subscriptionPlan,
        s = null == i ? void 0 : i.storeListing,
        { data: l } = D(e, null != (r = null == a || null == (n = a.application) ? void 0 : n.id) ? r : null == a ? void 0 : a.applicationId);
    return {
        parentSku: l,
        sku: (null == a ? void 0 : a.applicationId) === t ? a : null,
        storeListing: s,
        subscriptionPlan: o
    };
}
function x(e) {
    let { appId: t, message: a } = e,
        o = (0, S.R)(t),
        [u, d, p, h, g, b, y] = (0, s.Wu)(
            [f.Z, E.Z, m.Z],
            () => {
                var e;
                let n = f.Z.getApplication(t),
                    r = null != n ? (0, I.y)(n, 45) : void 0,
                    i = null == (e = m.Z.getBasicChannel(a.channel_id)) ? void 0 : e.guild_id;
                return [n, f.Z.isFetchingApplication(t), f.Z.didFetchingApplicationFail(t), E.Z.getStoreLayout(t), E.Z.getFetchStatus(t), i, r];
            },
            [t, a.channel_id]
        );
    i.useEffect(() => {
        (g === E.N.NONE && (0, c.k)(t), null != u || d || p || (0, _.UM)(t));
    }, [u, t, p, d, g]);
    let v = h.subscriptions.length,
        A = h.otps.length,
        P = i.useMemo(
            () =>
                v > 0 && A > 0
                    ? w.intl.formatToPlainString(w.t['jA648/'], {
                          subCount: v,
                          itemCount: A
                      })
                    : v > 0
                      ? w.intl.formatToPlainString(w.t.GSfibG, { count: v })
                      : A > 0
                        ? w.intl.formatToPlainString(w.t.j7Go5O, { count: A })
                        : w.intl.string(w.t.rMA98v),
            [A, v]
        );
    if (!o || null == u) return null;
    let D = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: b
                    });
            });
        },
        L = () => {
            (D(),
                O.default.track(N.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                }));
        },
        x = () => {
            (D(),
                O.default.track(N.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'open_store_button'
                }));
        },
        k = () => {
            (0, T.X)(t, T.B.STORE_EMBED);
        };
    return (0, r.jsx)(j, {
        appName: u.name,
        title: w.intl.formatToPlainString(w.t.XDRjs7, { appName: u.name }),
        description: P,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: k,
        iconSrc: y,
        onIconClick: L,
        children: (0, r.jsx)('div', {
            className: R.openStoreButton,
            children: (0, r.jsx)(l.zxk, {
                onClick: x,
                text: w.intl.string(w.t.kRvlKC)
            })
        })
    });
}
function k(e) {
    var t, a;
    let { appId: o, skuId: c, message: u } = e,
        { parentSku: f, sku: _, subscriptionPlan: g, storeListing: E } = L(c, o),
        { data: b } = (0, d.IX)(null == _ ? void 0 : _.applicationId),
        y = (0, s.e7)(
            [m.Z],
            () => {
                var e;
                return null == (e = m.Z.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
            },
            [u]
        ),
        v = i.useMemo(() => (null != b ? (0, I.y)(b, 45) : void 0), [b]),
        P = (0, S.R)(null != (a = null == b ? void 0 : b.id) ? a : ''),
        { openModal: D, subscriptionPurchaseButtonState: x } = (0, h.Z)({
            skuId: c,
            initialSubscribeForGuild: y
        });
    if (!P || null == b || null == _) return null;
    let k = _.type === N.epS.SUBSCRIPTION,
        M = !!k && (0, p.KW)(_.flags),
        U = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: b.id,
                        guildId: y
                    });
            });
        },
        G = () => {
            (0, l.ZDy)(async () => {
                let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        (n.onClose(), U());
                    };
                    return null != e && null != f
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: b.id,
                              skuId: _.id,
                              guildId: y,
                              subscriptionType: M ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: i
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: b.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i
                            })
                          : null;
                };
            });
        },
        B = 12,
        Z = k
            ? M
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.tBG, {
                              size: 'custom',
                              width: B,
                              height: B
                          }),
                          ' ',
                          w.intl.string(w.t.wnifjI)
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.QTo, {
                              size: 'custom',
                              width: B,
                              height: B
                          }),
                          ' ',
                          w.intl.string(w.t.NRC3am)
                      ]
                  })
            : null == E || null == (t = E.description)
              ? void 0
              : t.trim();
    '' === Z && (Z = void 0);
    let F = () => {
            (U(),
                O.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: b.id,
                    sku_id: _.id,
                    area: 'app_icon'
                }));
        },
        V = () => {
            (G(),
                O.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: b.id,
                    sku_id: _.id,
                    area: 'view_details'
                }));
        },
        H = () => {
            O.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: b.id,
                sku_id: _.id,
                area: 'purchase_button'
            });
        },
        Y = () => {
            (0, T.X)(b.id, T.B.SKU_EMBED, c);
        };
    return (0, r.jsx)(j, {
        appName: b.name,
        title: _.name,
        description: Z,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(b.id, C.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: Y,
        iconSrc: v,
        onIconClick: F,
        children: (0, r.jsxs)('div', {
            className: R.skuPurchaseButtons,
            children: [
                (0, r.jsx)(l.zxk, {
                    variant: 'secondary',
                    onClick: V,
                    text: w.intl.string(w.t.DXYfjI)
                }),
                k
                    ? null != g
                        ? (0, r.jsx)(A.pV, {
                              onClick: D,
                              appId: b.id,
                              subscriptionType: M ? 'user' : 'guild',
                              skuId: _.id,
                              icon: l.EOn,
                              onHasClicked: H,
                              subscriptionPlan: g,
                              state: x
                          })
                        : (0, r.jsx)(l.zxk, {
                              variant: 'primary',
                              text: w.intl.string(w.t.uuzaAA),
                              onClick: G
                          })
                    : (0, r.jsx)(A.YG, {
                          appId: b.id,
                          sku: _,
                          icon: l.EOn,
                          onHasClicked: H
                      })
            ]
        })
    });
}
function j(e) {
    let { appName: t, title: n, description: i, link: a, iconSrc: o, onIconClick: s, onLinkCopy: c, children: u } = e;
    return (0, r.jsxs)('div', {
        className: R.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: R.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.headerTitle,
                        children: [
                            (0, r.jsx)(l.EOn, { size: 'xxs' }),
                            (0, r.jsx)(l.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    v.wS &&
                        (0, r.jsx)(l.hU, {
                            'aria-label': w.intl.string(w.t.WqhZsr),
                            icon: () => (0, r.jsx)(l.xPt, { size: 'xs' }),
                            size: 'sm',
                            onClick: () => {
                                (0, v.JG)(a, () => {
                                    ((0, l.showToast)((0, l.createToast)(w.intl.string(w.t['L/PwZW']), l.ToastType.SUCCESS)), c());
                                });
                            },
                            variant: 'icon-only'
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: R.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, r.jsx)(l.P3F, {
                                    onClick: s,
                                    children: (0, r.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: R.appIcon
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: R.contentText,
                                style: null == i ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != i &&
                                        (0, r.jsx)(l.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: R.description,
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
