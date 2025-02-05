n.d(t, {
    F: () => Z,
    P: () => y
}),
    n(47120),
    n(789020);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(241159),
    o = n(558381),
    c = n(812206),
    d = n(307643),
    u = n(171246),
    m = n(263519),
    _ = n(592125),
    h = n(509545),
    p = n(238),
    g = n(55563),
    f = n(551428),
    x = n(626135),
    C = n(572004),
    v = n(601911),
    E = n(504211),
    I = n(381961),
    N = n(970321),
    S = n(680005),
    T = n(981631),
    b = n(979007),
    A = n(388032),
    j = n(94913);
let y = L(function (e) {
        let { appId: t, message: o } = e,
            u = (0, N.R)(t),
            [m, h, g, f, C, I, S] = (0, a.Wu)(
                [c.Z, p.Z, _.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, v.y)(n, 45) : void 0,
                        l = null === (e = _.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), p.Z.getStoreLayout(t), p.Z.getFetchStatus(t), l, i];
                },
                [t, o.channel_id]
            );
        l.useEffect(() => {
            C === p.N.NONE && (0, s.k)(t), null != m || h || g || (0, d.UM)(t);
        }, [m, t, g, h, C]);
        let y = f.subscriptions.length,
            Z = f.otps.length,
            L = l.useMemo(
                () =>
                    y > 0 && Z > 0
                        ? A.intl.formatToPlainString(A.t['jA648/'], {
                              subCount: y,
                              itemCount: Z
                          })
                        : y > 0
                          ? A.intl.formatToPlainString(A.t.GSfibG, { count: y })
                          : Z > 0
                            ? A.intl.formatToPlainString(A.t.j7Go5O, { count: Z })
                            : A.intl.string(A.t.rMA98v),
                [Z, y]
            );
        if (!u || null == m) return null;
        let P = () => {
            (0, r.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: I
                    });
            });
        };
        return (0, i.jsx)(R, {
            appName: m.name,
            title: A.intl.formatToPlainString(A.t.XDRjs7, { appName: m.name }),
            description: L,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(m.id, b.GlobalDiscoveryAppsSections.STORE)),
            onLinkCopy: () => {
                (0, E.X)(t, E.B.STORE_EMBED);
            },
            iconSrc: S,
            onIconClick: () => {
                P(),
                    x.default.track(T.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(r.zxk, {
                onClick: () => {
                    P(),
                        x.default.track(T.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: j.openStoreButton,
                children: A.intl.string(A.t.kRvlKC)
            })
        });
    }),
    Z = L(function (e) {
        var t, s;
        let { appId: d, skuId: p, message: C } = e,
            [I, y, Z, L, P, k, M, O] = (0, a.Wu)(
                [g.Z, f.Z, h.Z, _.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let l = null === (e = _.Z.getBasicChannel(C.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        a = g.Z.get(p),
                        r = null !== (n = null == a ? void 0 : null === (t = a.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == a ? void 0 : a.applicationId,
                        s = null !== (i = null != r ? c.Z.getApplication(r) : void 0) && void 0 !== i ? i : null == a ? void 0 : a.application,
                        o = null != s ? (0, v.y)(s, 45) : void 0,
                        u = h.Z.getForSKU(p),
                        m = (null == a ? void 0 : a.applicationId) === d;
                    return [m ? a : null, m ? s : null, f.Z.getForSKU(p), g.Z.isFetching(p), g.Z.didFetchingSkuFail(p), u.length > 0 ? u[0] : null, l, o];
                },
                [d, C.channel_id, p]
            ),
            D = (0, N.R)(null !== (s = null == y ? void 0 : y.id) && void 0 !== s ? s : '');
        l.useEffect(() => {
            null != I || L || P || (0, o.km)(p);
        }, [P, L, I, p]),
            l.useEffect(() => {
                (null == y ? void 0 : y.id) != null && (0, o.oJ)(null == y ? void 0 : y.id);
            }, [null == y ? void 0 : y.id]);
        let w = (0, a.e7)([g.Z], () => (null != p ? g.Z.getParentSKU(p) : void 0), [p]),
            { openModal: F, subscriptionPurchaseButtonState: U } = (0, m.Z)({
                skuId: p,
                initialSubscribeForGuild: M
            });
        if (!D || null == y || null == I) return null;
        let B = I.type === T.epS.SUBSCRIPTION,
            G = !!B && (0, u.KW)(I.flags),
            H = () => {
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: y.id,
                            guildId: M
                        });
                });
            },
            V = () => {
                (0, r.ZDy)(async () => {
                    let e = B ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = B ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let l = () => {
                            n.onClose(), H();
                        };
                        return null != e && null != w
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: y.id,
                                  skuId: I.id,
                                  guildId: M,
                                  subscriptionType: G ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: l
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: y.id,
                                    skuId: p,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: l
                                })
                              : null;
                    };
                });
            },
            z = B
                ? G
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.tBG, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              A.intl.string(A.t.wnifjI)
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.QTo, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              A.intl.string(A.t.NRC3am)
                          ]
                      })
                : null == Z
                  ? void 0
                  : null === (t = Z.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === z && (z = void 0);
        let W = () => {
            x.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: y.id,
                sku_id: I.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(R, {
            appName: y.name,
            title: I.name,
            description: z,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(y.id, b.GlobalDiscoveryAppsSections.STORE)),
            onLinkCopy: () => {
                (0, E.X)(y.id, E.B.SKU_EMBED, p);
            },
            iconSrc: O,
            onIconClick: () => {
                H(),
                    x.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: y.id,
                        sku_id: I.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: j.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(r.zxk, {
                        color: r.Ttl.CUSTOM,
                        onClick: () => {
                            V(),
                                x.default.track(T.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: y.id,
                                    sku_id: I.id,
                                    area: 'view_details'
                                });
                        },
                        className: j.viewDetailsButton,
                        children: A.intl.string(A.t.DXYfjI)
                    }),
                    B
                        ? null != k
                            ? (0, i.jsx)(S.pV, {
                                  onClick: F,
                                  appId: y.id,
                                  subscriptionType: G ? 'user' : 'guild',
                                  skuId: I.id,
                                  icon: (0, i.jsx)(r.EOn, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: W,
                                  subscriptionPlan: k,
                                  state: U
                              })
                            : (0, i.jsx)(r.zxk, {
                                  onClick: V,
                                  children: A.intl.string(A.t.uuzaAA)
                              })
                        : (0, i.jsx)(S.YG, {
                              appId: y.id,
                              sku: I,
                              icon: (0, i.jsx)(r.EOn, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: W
                          })
                ]
            })
        });
    });
function R(e) {
    let { appName: t, title: n, description: l, link: a, iconSrc: s, onIconClick: o, onLinkCopy: c, children: d } = e;
    return (0, i.jsxs)('div', {
        className: j.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.headerTitle,
                        children: [
                            (0, i.jsx)(r.EOn, { size: 'xxs' }),
                            (0, i.jsx)(r.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    C.wS &&
                        (0, i.jsx)(r.zxk, {
                            look: r.iLD.BLANK,
                            size: r.PhG.ICON,
                            'aria-label': A.intl.string(A.t.WqhZsr),
                            onClick: () => {
                                (0, C.JG)(a), (0, r.showToast)((0, r.createToast)(A.intl.string(A.t['L/PwZW']), r.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(r.xPt, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.contentTextWrapper,
                        children: [
                            null != s &&
                                (0, i.jsx)(r.zxk, {
                                    look: r.iLD.BLANK,
                                    size: r.PhG.NONE,
                                    onClick: o,
                                    children: (0, i.jsx)('img', {
                                        src: s.href,
                                        alt: '',
                                        className: j.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: j.contentText,
                                style: null == l ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != l &&
                                        (0, i.jsx)(r.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: j.description,
                                            children: l
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
function L(e) {
    return (t) => {
        let { enabled: n } = I.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
