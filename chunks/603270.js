n.d(t, {
    F: () => T,
    P: () => S
}),
    n(47120),
    n(789020),
    n(266796),
    n(566702);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    l = n(241159),
    s = n(558381),
    c = n(812206),
    d = n(307643),
    u = n(171246),
    p = n(263519),
    m = n(592125),
    f = n(509545),
    h = n(238),
    g = n(55563),
    _ = n(551428),
    b = n(626135),
    v = n(572004),
    y = n(601911),
    x = n(504211),
    E = n(970321),
    O = n(680005),
    j = n(981631),
    N = n(979007),
    C = n(388032),
    I = n(968136);
function S(e) {
    let { appId: t, message: s } = e,
        u = (0, E.R)(t),
        [p, f, g, _, v, O, S] = (0, a.Wu)(
            [c.Z, h.Z, m.Z],
            () => {
                var e;
                let n = c.Z.getApplication(t),
                    r = null != n ? (0, y.y)(n, 45) : void 0,
                    i = null === (e = m.Z.getBasicChannel(s.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), h.Z.getStoreLayout(t), h.Z.getFetchStatus(t), i, r];
            },
            [t, s.channel_id]
        );
    i.useEffect(() => {
        v === h.N.NONE && (0, l.k)(t), null != p || f || g || (0, d.UM)(t);
    }, [p, t, g, f, v]);
    let T = _.subscriptions.length,
        A = _.otps.length,
        w = i.useMemo(
            () =>
                T > 0 && A > 0
                    ? C.NW.formatToPlainString(C.t['jA648/'], {
                          subCount: T,
                          itemCount: A
                      })
                    : T > 0
                      ? C.NW.formatToPlainString(C.t.GSfibG, { count: T })
                      : A > 0
                        ? C.NW.formatToPlainString(C.t.j7Go5O, { count: A })
                        : C.NW.string(C.t.rMA98v),
            [A, T]
        );
    if (!u || null == p) return null;
    let Z = () => {
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('73160')]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: O
                });
        });
    };
    return (0, r.jsx)(P, {
        appName: p.name,
        title: C.NW.formatToPlainString(C.t.XDRjs7, { appName: p.name }),
        description: w,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(p.id, N.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, x.X)(t, x.B.STORE_EMBED);
        },
        iconSrc: S,
        onIconClick: () => {
            Z(),
                b.default.track(j.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
        },
        children: (0, r.jsx)(o.zxk, {
            onClick: () => {
                Z(),
                    b.default.track(j.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'open_store_button'
                    });
            },
            className: I.openStoreButton,
            children: C.NW.string(C.t.kRvlKC)
        })
    });
}
function T(e) {
    var t, l;
    let { appId: d, skuId: h, message: v } = e,
        [S, T, A, w, Z, k, R, D] = (0, a.Wu)(
            [g.Z, _.Z, f.Z, m.Z, c.Z],
            () => {
                var e, t, n, r;
                let i = null === (e = m.Z.getBasicChannel(v.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                    a = g.Z.get(h),
                    o = null !== (n = null == a ? void 0 : null === (t = a.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == a ? void 0 : a.applicationId,
                    l = null !== (r = null != o ? c.Z.getApplication(o) : void 0) && void 0 !== r ? r : null == a ? void 0 : a.application,
                    s = null != l ? (0, y.y)(l, 45) : void 0,
                    u = f.Z.getForSKU(h),
                    p = (null == a ? void 0 : a.applicationId) === d;
                return [p ? a : null, p ? l : null, _.Z.getForSKU(h), g.Z.isFetching(h), g.Z.didFetchingSkuFail(h), u.length > 0 ? u[0] : null, i, s];
            },
            [d, v.channel_id, h]
        ),
        L = (0, E.R)(null !== (l = null == T ? void 0 : T.id) && void 0 !== l ? l : '');
    i.useEffect(() => {
        null != S || w || Z || (0, s.km)(h);
    }, [Z, w, S, h]),
        i.useEffect(() => {
            (null == T ? void 0 : T.id) != null && (0, s.oJ)(null == T ? void 0 : T.id);
        }, [null == T ? void 0 : T.id]);
    let M = (0, a.e7)([g.Z], () => (null != h ? g.Z.getParentSKU(h) : void 0), [h]),
        { openModal: W, subscriptionPurchaseButtonState: F } = (0, p.Z)({
            skuId: h,
            initialSubscribeForGuild: R
        });
    if (!L || null == T || null == S) return null;
    let U = S.type === j.epS.SUBSCRIPTION,
        B = !!U && (0, u.KW)(S.flags),
        G = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('73160')]).then(n.bind(n, 7225));
                return (t) =>
                    (0, r.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: T.id,
                        guildId: R
                    });
            });
        },
        H = () => {
            (0, o.ZDy)(async () => {
                let e = U ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                    t = U ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                return (n) => {
                    let i = () => {
                        n.onClose(), G();
                    };
                    return null != e && null != M
                        ? (0, r.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: T.id,
                              skuId: S.id,
                              guildId: R,
                              subscriptionType: B ? 'user' : 'guild',
                              onClose: n.onClose,
                              onHeaderTitleClick: i
                          })
                        : null != t
                          ? (0, r.jsx)(t, {
                                transitionState: n.transitionState,
                                appId: T.id,
                                skuId: h,
                                onClose: n.onClose,
                                onHeaderTitleClick: i
                            })
                          : null;
                };
            });
        },
        V = U
            ? B
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.tBG, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          C.NW.string(C.t.wnifjI)
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.QTo, {
                              size: 'custom',
                              width: 12,
                              height: 12
                          }),
                          ' ',
                          C.NW.string(C.t.NRC3am)
                      ]
                  })
            : null == A
              ? void 0
              : null === (t = A.description) || void 0 === t
                ? void 0
                : t.trim();
    '' === V && (V = void 0);
    let z = () => {
        b.default.track(j.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: T.id,
            sku_id: S.id,
            area: 'purchase_button'
        });
    };
    return (0, r.jsx)(P, {
        appName: T.name,
        title: S.name,
        description: V,
        link: ''.concat(location.protocol, '//').concat(location.host).concat(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(T.id, N.GlobalDiscoveryAppsSections.STORE)),
        onLinkCopy: () => {
            (0, x.X)(T.id, x.B.SKU_EMBED, h);
        },
        iconSrc: D,
        onIconClick: () => {
            G(),
                b.default.track(j.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: T.id,
                    sku_id: S.id,
                    area: 'app_icon'
                });
        },
        children: (0, r.jsxs)('div', {
            className: I.skuPurchaseButtons,
            children: [
                (0, r.jsx)(o.zxk, {
                    color: o.Ttl.CUSTOM,
                    onClick: () => {
                        H(),
                            b.default.track(j.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: T.id,
                                sku_id: S.id,
                                area: 'view_details'
                            });
                    },
                    className: I.viewDetailsButton,
                    children: C.NW.string(C.t.DXYfjI)
                }),
                U
                    ? null != k
                        ? (0, r.jsx)(O.pV, {
                              onClick: W,
                              appId: T.id,
                              subscriptionType: B ? 'user' : 'guild',
                              skuId: S.id,
                              icon: (0, r.jsx)(o.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: z,
                              subscriptionPlan: k,
                              state: F
                          })
                        : (0, r.jsx)(o.zxk, {
                              onClick: H,
                              children: C.NW.string(C.t.uuzaAA)
                          })
                    : (0, r.jsx)(O.YG, {
                          appId: T.id,
                          sku: S,
                          icon: (0, r.jsx)(o.EOn, {
                              size: 'xs',
                              color: 'currentcolor'
                          }),
                          onHasClicked: z
                      })
            ]
        })
    });
}
function P(e) {
    let { appName: t, title: n, description: i, link: a, iconSrc: l, onIconClick: s, onLinkCopy: c, children: d } = e;
    return (0, r.jsxs)('div', {
        className: I.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: I.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: I.headerTitle,
                        children: [
                            (0, r.jsx)(o.EOn, { size: 'xxs' }),
                            (0, r.jsx)(o.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    v.wS &&
                        (0, r.jsx)(o.zxk, {
                            look: o.iLD.BLANK,
                            size: o.PhG.ICON,
                            'aria-label': C.NW.string(C.t.WqhZsr),
                            onClick: () => {
                                (0, v.JG)(a), (0, o.showToast)((0, o.createToast)(C.NW.string(C.t['L/PwZW']), o.ToastType.SUCCESS)), c();
                            },
                            children: (0, r.jsx)(o.xPt, { size: 'xs' })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: I.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: I.contentTextWrapper,
                        children: [
                            null != l &&
                                (0, r.jsx)(o.zxk, {
                                    look: o.iLD.BLANK,
                                    size: o.PhG.NONE,
                                    onClick: s,
                                    children: (0, r.jsx)('img', {
                                        src: l.href,
                                        alt: '',
                                        className: I.appIcon
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: I.contentText,
                                style: null == i ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != i &&
                                        (0, r.jsx)(o.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: I.description,
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
