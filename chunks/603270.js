n.d(t, {
    F: function () {
        return Z;
    },
    P: function () {
        return R;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(241159),
    s = n(558381),
    c = n(812206),
    u = n(307643),
    d = n(171246),
    m = n(263519),
    h = n(592125),
    f = n(509545),
    p = n(238),
    _ = n(55563),
    g = n(551428),
    E = n(626135),
    C = n(572004),
    I = n(601911),
    x = n(504211),
    N = n(381961),
    v = n(970321),
    T = n(680005),
    S = n(981631),
    A = n(979007),
    b = n(388032),
    j = n(94913);
let R = L(function (e) {
        let { appId: t, message: s } = e,
            d = (0, v.R)(t),
            [m, f, _, g, C, N, T] = (0, l.Wu)(
                [c.Z, p.Z, h.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, I.y)(n, 45) : void 0,
                        r = null === (e = h.Z.getBasicChannel(s.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), p.Z.getStoreLayout(t), p.Z.getFetchStatus(t), r, i];
                },
                [t, s.channel_id]
            );
        r.useEffect(() => {
            C === p.N.NONE && (0, o.k)(t), null == m && !f && !_ && (0, u.UM)(t);
        }, [m, t, _, f, C]);
        let R = g.subscriptions.length,
            Z = g.otps.length,
            L = r.useMemo(
                () =>
                    R > 0 && Z > 0
                        ? b.intl.formatToPlainString(b.t['jA648/'], {
                              subCount: R,
                              itemCount: Z
                          })
                        : R > 0
                          ? b.intl.formatToPlainString(b.t.GSfibG, { count: R })
                          : Z > 0
                            ? b.intl.formatToPlainString(b.t.j7Go5O, { count: Z })
                            : b.intl.string(b.t.rMA98v),
                [Z, R]
            );
        if (!d || null == m) return null;
        let y = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: N
                    });
            });
        };
        return (0, i.jsx)(P, {
            appName: m.name,
            title: b.intl.formatToPlainString(b.t.XDRjs7, { appName: m.name }),
            description: L,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(m.id, A.GlobalDiscoveryAppsSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(t, x.B.STORE_EMBED);
            },
            iconSrc: T,
            onIconClick: () => {
                y(),
                    E.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(a.Button, {
                onClick: () => {
                    y(),
                        E.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: j.openStoreButton,
                children: b.intl.string(b.t.kRvlKC)
            })
        });
    }),
    Z = L(function (e) {
        var t, o;
        let { appId: u, skuId: p, message: C } = e,
            [N, R, Z, L, y, O, M, D] = (0, l.Wu)(
                [_.Z, g.Z, f.Z, h.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let r = null === (e = h.Z.getBasicChannel(C.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        l = _.Z.get(p),
                        a = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
                        o = null !== (i = null != a ? c.Z.getApplication(a) : void 0) && void 0 !== i ? i : null == l ? void 0 : l.application,
                        s = null != o ? (0, I.y)(o, 45) : void 0,
                        d = f.Z.getForSKU(p),
                        m = (null == l ? void 0 : l.applicationId) === u;
                    return [m ? l : null, m ? o : null, g.Z.getForSKU(p), _.Z.isFetching(p), _.Z.didFetchingSkuFail(p), d.length > 0 ? d[0] : null, r, s];
                },
                [u, C.channel_id, p]
            ),
            k = (0, v.R)(null !== (o = null == R ? void 0 : R.id) && void 0 !== o ? o : '');
        r.useEffect(() => {
            null == N && !L && !y && (0, s.km)(p);
        }, [y, L, N, p]),
            r.useEffect(() => {
                if ((null == R ? void 0 : R.id) != null) (0, s.oJ)(null == R ? void 0 : R.id);
            }, [null == R ? void 0 : R.id]);
        let U = (0, l.e7)([_.Z], () => (null != p ? _.Z.getParentSKU(p) : void 0), [p]),
            { openModal: B, subscriptionPurchaseButtonState: w } = (0, m.Z)({
                skuId: p,
                initialSubscribeForGuild: M
            });
        if (!k || null == R || null == N) return null;
        let F = N.type === S.epS.SUBSCRIPTION,
            G = !!F && (0, d.KW)(N.flags),
            V = () => {
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('7657')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: R.id,
                            guildId: M
                        });
                });
            },
            H = () => {
                (0, a.openModalLazy)(async () => {
                    let e = F ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = F ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let r = () => {
                            n.onClose(), V();
                        };
                        return null != e && null != U
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: R.id,
                                  skuId: N.id,
                                  guildId: M,
                                  subscriptionType: G ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: r
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: R.id,
                                    skuId: p,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: r
                                })
                              : null;
                    };
                });
            },
            z = F
                ? G
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              b.intl.string(b.t.wnifjI)
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.ServerIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              b.intl.string(b.t.NRC3am)
                          ]
                      })
                : null == Z
                  ? void 0
                  : null === (t = Z.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === z && (z = void 0);
        let W = () => {
            E.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: R.id,
                sku_id: N.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(P, {
            appName: R.name,
            title: N.name,
            description: z,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(R.id, A.GlobalDiscoveryAppsSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(R.id, x.B.SKU_EMBED, p);
            },
            iconSrc: D,
            onIconClick: () => {
                V(),
                    E.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: R.id,
                        sku_id: N.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: j.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(a.Button, {
                        color: a.ButtonColors.CUSTOM,
                        onClick: () => {
                            H(),
                                E.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: R.id,
                                    sku_id: N.id,
                                    area: 'view_details'
                                });
                        },
                        className: j.viewDetailsButton,
                        children: b.intl.string(b.t.DXYfjI)
                    }),
                    F
                        ? null != O
                            ? (0, i.jsx)(T.pV, {
                                  onClick: B,
                                  appId: R.id,
                                  subscriptionType: G ? 'user' : 'guild',
                                  skuId: N.id,
                                  icon: (0, i.jsx)(a.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: W,
                                  subscriptionPlan: O,
                                  state: w
                              })
                            : (0, i.jsx)(a.Button, {
                                  onClick: H,
                                  children: b.intl.string(b.t.uuzaAA)
                              })
                        : (0, i.jsx)(T.YG, {
                              appId: R.id,
                              sku: N,
                              icon: (0, i.jsx)(a.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: W
                          })
                ]
            })
        });
    });
function P(e) {
    let { appName: t, title: n, description: r, link: l, iconSrc: o, onIconClick: s, onLinkCopy: c, children: u } = e;
    return (0, i.jsxs)('div', {
        className: j.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.headerTitle,
                        children: [
                            (0, i.jsx)(a.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(a.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    C.wS &&
                        (0, i.jsx)(a.Button, {
                            look: a.ButtonLooks.BLANK,
                            size: a.ButtonSizes.ICON,
                            'aria-label': b.intl.string(b.t.WqhZsr),
                            onClick: () => {
                                (0, C.JG)(l), (0, a.showToast)((0, a.createToast)(b.intl.string(b.t['L/PwZW']), a.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(a.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, i.jsx)(a.Button, {
                                    look: a.ButtonLooks.BLANK,
                                    size: a.ButtonSizes.NONE,
                                    onClick: s,
                                    children: (0, i.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: j.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: j.contentText,
                                style: null == r ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != r &&
                                        (0, i.jsx)(a.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: j.description,
                                            children: r
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
function L(e) {
    return (t) => {
        let { enabled: n } = N.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
