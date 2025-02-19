n.d(t, {
    F: () => T,
    P: () => P
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
    O = n(381961),
    E = n(970321),
    j = n(680005),
    N = n(981631),
    C = n(979007),
    I = n(388032),
    S = n(779288);
let P = w(function (e) {
        let { appId: t, message: s } = e,
            u = (0, E.R)(t),
            [p, f, g, _, v, O, j] = (0, a.Wu)(
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
        let P = _.subscriptions.length,
            T = _.otps.length,
            w = i.useMemo(
                () =>
                    P > 0 && T > 0
                        ? I.NW.formatToPlainString(I.t['jA648/'], {
                              subCount: P,
                              itemCount: T
                          })
                        : P > 0
                          ? I.NW.formatToPlainString(I.t.GSfibG, { count: P })
                          : T > 0
                            ? I.NW.formatToPlainString(I.t.j7Go5O, { count: T })
                            : I.NW.string(I.t.rMA98v),
                [T, P]
            );
        if (!u || null == p) return null;
        let Z = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('51641')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, r.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: O
                    });
            });
        };
        return (0, r.jsx)(A, {
            appName: p.name,
            title: I.NW.formatToPlainString(I.t.XDRjs7, { appName: p.name }),
            description: w,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(p.id, C.GlobalDiscoveryAppsSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(t, x.B.STORE_EMBED);
            },
            iconSrc: j,
            onIconClick: () => {
                Z(),
                    b.default.track(N.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, r.jsx)(o.zxk, {
                onClick: () => {
                    Z(),
                        b.default.track(N.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: S.openStoreButton,
                children: I.NW.string(I.t.kRvlKC)
            })
        });
    }),
    T = w(function (e) {
        var t, l;
        let { appId: d, skuId: h, message: v } = e,
            [O, P, T, w, Z, k, R, L] = (0, a.Wu)(
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
            D = (0, E.R)(null !== (l = null == P ? void 0 : P.id) && void 0 !== l ? l : '');
        i.useEffect(() => {
            null != O || w || Z || (0, s.km)(h);
        }, [Z, w, O, h]),
            i.useEffect(() => {
                (null == P ? void 0 : P.id) != null && (0, s.oJ)(null == P ? void 0 : P.id);
            }, [null == P ? void 0 : P.id]);
        let M = (0, a.e7)([g.Z], () => (null != h ? g.Z.getParentSKU(h) : void 0), [h]),
            { openModal: W, subscriptionPurchaseButtonState: F } = (0, p.Z)({
                skuId: h,
                initialSubscribeForGuild: R
            });
        if (!D || null == P || null == O) return null;
        let U = O.type === N.epS.SUBSCRIPTION,
            B = !!U && (0, u.KW)(O.flags),
            G = () => {
                (0, o.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('51641')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, r.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: P.id,
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
                                  appId: P.id,
                                  skuId: O.id,
                                  guildId: R,
                                  subscriptionType: B ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: i
                              })
                            : null != t
                              ? (0, r.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: P.id,
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
                              I.NW.string(I.t.wnifjI)
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
                              I.NW.string(I.t.NRC3am)
                          ]
                      })
                : null == T
                  ? void 0
                  : null === (t = T.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === V && (V = void 0);
        let z = () => {
            b.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: P.id,
                sku_id: O.id,
                area: 'purchase_button'
            });
        };
        return (0, r.jsx)(A, {
            appName: P.name,
            title: O.name,
            description: V,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(P.id, C.GlobalDiscoveryAppsSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(P.id, x.B.SKU_EMBED, h);
            },
            iconSrc: L,
            onIconClick: () => {
                G(),
                    b.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: P.id,
                        sku_id: O.id,
                        area: 'app_icon'
                    });
            },
            children: (0, r.jsxs)('div', {
                className: S.skuPurchaseButtons,
                children: [
                    (0, r.jsx)(o.zxk, {
                        color: o.Ttl.CUSTOM,
                        onClick: () => {
                            H(),
                                b.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: P.id,
                                    sku_id: O.id,
                                    area: 'view_details'
                                });
                        },
                        className: S.viewDetailsButton,
                        children: I.NW.string(I.t.DXYfjI)
                    }),
                    U
                        ? null != k
                            ? (0, r.jsx)(j.pV, {
                                  onClick: W,
                                  appId: P.id,
                                  subscriptionType: B ? 'user' : 'guild',
                                  skuId: O.id,
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
                                  children: I.NW.string(I.t.uuzaAA)
                              })
                        : (0, r.jsx)(j.YG, {
                              appId: P.id,
                              sku: O,
                              icon: (0, r.jsx)(o.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: z
                          })
                ]
            })
        });
    });
function A(e) {
    let { appName: t, title: n, description: i, link: a, iconSrc: l, onIconClick: s, onLinkCopy: c, children: d } = e;
    return (0, r.jsxs)('div', {
        className: S.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: S.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.headerTitle,
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
                            'aria-label': I.NW.string(I.t.WqhZsr),
                            onClick: () => {
                                (0, v.JG)(a), (0, o.showToast)((0, o.createToast)(I.NW.string(I.t['L/PwZW']), o.ToastType.SUCCESS)), c();
                            },
                            children: (0, r.jsx)(o.xPt, { size: 'xs' })
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: S.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: S.contentTextWrapper,
                        children: [
                            null != l &&
                                (0, r.jsx)(o.zxk, {
                                    look: o.iLD.BLANK,
                                    size: o.PhG.NONE,
                                    onClick: s,
                                    children: (0, r.jsx)('img', {
                                        src: l.href,
                                        alt: '',
                                        className: S.appIcon
                                    })
                                }),
                            (0, r.jsxs)('div', {
                                className: S.contentText,
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
                                            className: S.description,
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
function w(e) {
    return (t) => {
        let { enabled: n } = O.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n
            ? (0, r.jsx)(
                  e,
                  (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                          'function' == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  })
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  (r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[t] = r);
                              });
                      }
                      return e;
                  })({}, t)
              )
            : null;
    };
}
