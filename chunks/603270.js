(n.d(t, {
    F: () => R,
    P: () => Z
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
    y = n(551428),
    C = n(626135),
    x = n(572004),
    v = n(601911),
    O = n(504211),
    j = n(970321),
    I = n(680005),
    S = n(981631),
    T = n(979007),
    N = n(388032),
    P = n(197866);
let A = (0, o.Kb)([E.Z, y.Z, h.Z], {
        queryId: (e) => S.McO.SKU(e),
        get: (e) => {
            if (null == e) return;
            let t = E.Z.get(e),
                n = y.Z.getForSKU(e);
            if (null == t || null == n) return;
            let r = h.Z.getForSKU(e);
            return {
                sku: t,
                storeListing: n,
                subscriptionPlan: null != r ? r[0] : void 0
            };
        },
        load: async (e, t) => {
            (a()(null != t, 'skuId is null'), await (0, u.km)(t));
        },
        useStateHook: o.cj
    }),
    w = (0, o.Kb)([E.Z], {
        queryId: (e, t) => S.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
        get: (e) => {
            if (null != e) return E.Z.getParentSKU(e);
        },
        load: async (e, t, n) => {
            (a()(null != t && null != n, 'appId is null'), await (0, u.oJ)(n));
        },
        useStateHook: o.cj
    });
function Z(e) {
    let { appId: t, message: l } = e,
        a = (0, j.R)(t),
        [u, d, f, g, h, E, y] = (0, o.Wu)(
            [p.Z, b.Z, _.Z],
            () => {
                var e;
                let n = p.Z.getApplication(t),
                    r = null != n ? (0, v.y)(n, 45) : void 0,
                    i = null == (e = _.Z.getBasicChannel(l.channel_id)) ? void 0 : e.guild_id;
                return [n, p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t), b.Z.getStoreLayout(t), b.Z.getFetchStatus(t), i, r];
            },
            [t, l.channel_id]
        );
    i.useEffect(() => {
        (h === b.N.NONE && (0, c.k)(t), null != u || d || f || (0, m.UM)(t));
    }, [u, t, f, d, h]);
    let x = g.subscriptions.length,
        I = g.otps.length,
        A = i.useMemo(
            () =>
                x > 0 && I > 0
                    ? N.intl.formatToPlainString(N.t['jA648/'], {
                          subCount: x,
                          itemCount: I
                      })
                    : x > 0
                      ? N.intl.formatToPlainString(N.t.GSfibG, { count: x })
                      : I > 0
                        ? N.intl.formatToPlainString(N.t.j7Go5O, { count: I })
                        : N.intl.string(N.t.rMA98v),
            [I, x]
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
                    guildId: E
                });
        });
    };
    return (0, r.jsx)(k, {
        appName: u.name,
        title: N.intl.formatToPlainString(N.t.XDRjs7, { appName: u.name }),
        description: A,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, T.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, O.X)(t, O.B.STORE_EMBED);
        },
        iconSrc: y,
        onIconClick: () => {
            (w(),
                C.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                }));
        },
        children: (0, r.jsx)(s.zxk, {
            onClick: () => {
                (w(),
                    C.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'open_store_button'
                    }));
            },
            className: P.openStoreButton,
            children: N.intl.string(N.t.kRvlKC)
        })
    });
}
function R(e) {
    var t, l;
    let { appId: a, skuId: c, message: u } = e,
        {
            parentSku: p,
            sku: m,
            subscriptionPlan: h,
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
        { data: E } = (0, d.IX)(null == m ? void 0 : m.applicationId),
        y = (0, o.e7)(
            [_.Z],
            () => {
                var e;
                return null == (e = _.Z.getBasicChannel(u.channel_id)) ? void 0 : e.guild_id;
            },
            [u]
        ),
        x = i.useMemo(() => (null != E ? (0, v.y)(E, 45) : void 0), [E]),
        Z = (0, j.R)(null != (l = null == E ? void 0 : E.id) ? l : ''),
        { openModal: R, subscriptionPurchaseButtonState: L } = (0, g.Z)({
            skuId: c,
            initialSubscribeForGuild: y
        });
    if (!Z || null == E || null == m) return null;
    let D = m.type === S.epS.SUBSCRIPTION,
        M = !!D && (0, f.KW)(m.flags),
        U = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('83372')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: E.id,
                        guildId: y
                    });
            });
        },
        F = () => {
            (0, s.ZDy)(async () => {
                let e = D ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = D ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        (n.onClose(), U());
                    };
                    return null != e && null != p
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: E.id,
                              skuId: m.id,
                              guildId: y,
                              subscriptionType: M ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: i
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: E.id,
                                skuId: c,
                                onClose: n.onClose,
                                onHeaderTitleClick: i
                            })
                          : null;
                };
            });
        },
        B = D
            ? M
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.tBG, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          N.intl.string(N.t.wnifjI)
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
                          N.intl.string(N.t.NRC3am)
                      ]
                  })
            : null == b || null == (t = b.description)
              ? void 0
              : t.trim();
    '' === B && (B = void 0);
    let G = () => {
        C.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: E.id,
            sku_id: m.id,
            area: 'purchase_button'
        });
    };
    return (0, r.jsx)(k, {
        appName: E.name,
        title: m.name,
        description: B,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(E.id, T.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, O.X)(E.id, O.B.SKU_EMBED, c);
        },
        iconSrc: x,
        onIconClick: () => {
            (U(),
                C.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: E.id,
                    sku_id: m.id,
                    area: 'app_icon'
                }));
        },
        children: (0, r.jsxs)('div', {
            className: P.skuPurchaseButtons,
            children: [
                (0, r.jsx)(s.zxk, {
                    color: s.Ttl.CUSTOM,
                    onClick: () => {
                        (F(),
                            C.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: E.id,
                                sku_id: m.id,
                                area: 'view_details'
                            }));
                    },
                    className: P.viewDetailsButton,
                    children: N.intl.string(N.t.DXYfjI)
                }),
                D
                    ? null != h
                        ? (0, r.jsx)(I.pV, {
                              onClick: R,
                              appId: E.id,
                              subscriptionType: M ? 'user' : 'guild',
                              skuId: m.id,
                              icon: (0, r.jsx)(s.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: G,
                              subscriptionPlan: h,
                              state: L
                          })
                        : (0, r.jsx)(s.zxk, {
                              onClick: F,
                              children: N.intl.string(N.t.uuzaAA)
                          })
                    : (0, r.jsx)(I.YG, {
                          appId: E.id,
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
                    x.wS &&
                        (0, r.jsx)(s.zxk, {
                            look: s.iLD.BLANK,
                            size: s.PhG.ICON,
                            'aria-label': N.intl.string(N.t.WqhZsr),
                            onClick: () => {
                                (0, x.JG)(l, () => {
                                    ((0, s.showToast)((0, s.createToast)(N.intl.string(N.t['L/PwZW']), s.ToastType.SUCCESS)), c());
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
