n.d(t, {
    F: function () {
        return L;
    },
    P: function () {
        return P;
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
    d = n(926061),
    u = n(307643),
    m = n(171246),
    h = n(263519),
    f = n(592125),
    p = n(509545),
    _ = n(238),
    g = n(55563),
    E = n(551428),
    C = n(626135),
    I = n(572004),
    x = n(601911),
    N = n(504211),
    v = n(381961),
    T = n(970321),
    S = n(680005),
    A = n(981631),
    b = n(272242),
    j = n(979007),
    R = n(388032),
    Z = n(284253);
let P = O(function (e) {
        let { appId: t, message: s } = e,
            m = (0, T.R)(t),
            [h, p, g, E, I, v, S] = (0, l.Wu)(
                [c.Z, _.Z, f.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, x.y)(n, 45) : void 0,
                        r = null === (e = f.Z.getBasicChannel(s.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), _.Z.getStoreLayout(t), _.Z.getFetchStatus(t), r, i];
                },
                [t, s.channel_id]
            );
        r.useEffect(() => {
            I === _.N.NONE && (0, o.k)(t), null == h && !p && !g && (0, u.UM)(t);
        }, [h, t, g, p, I]);
        let P = (0, d.YP)({ location: 'AppStorefrontMessageEmbed' }),
            L = E.subscriptions.length,
            O = E.otps.length,
            M = r.useMemo(
                () =>
                    L > 0 && O > 0
                        ? R.intl.formatToPlainString(R.t['jA648/'], {
                              subCount: L,
                              itemCount: O
                          })
                        : L > 0
                          ? R.intl.formatToPlainString(R.t.GSfibG, { count: L })
                          : O > 0
                            ? R.intl.formatToPlainString(R.t.j7Go5O, { count: O })
                            : R.intl.string(R.t.rMA98v),
                [O, L]
            );
        if (!m || null == h) return null;
        let D = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('29798')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: v
                    });
            });
        };
        return (0, i.jsx)(y, {
            appName: h.name,
            title: R.intl.formatToPlainString(R.t.XDRjs7, { appName: h.name }),
            description: M,
            link: ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(P ? A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(h.id, j.GlobalDiscoveryAppsSections.STORE) : A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(h.id, b.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, N.X)(t, N.B.STORE_EMBED);
            },
            iconSrc: S,
            onIconClick: () => {
                D(),
                    C.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(a.Button, {
                onClick: () => {
                    D(),
                        C.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: Z.openStoreButton,
                children: R.intl.string(R.t.kRvlKC)
            })
        });
    }),
    L = O(function (e) {
        var t, o;
        let { appId: u, skuId: _, message: I } = e,
            [v, P, L, O, M, D, k, U] = (0, l.Wu)(
                [g.Z, E.Z, p.Z, f.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let r = null === (e = f.Z.getBasicChannel(I.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        l = g.Z.get(_),
                        a = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
                        o = null !== (i = null != a ? c.Z.getApplication(a) : void 0) && void 0 !== i ? i : null == l ? void 0 : l.application,
                        s = null != o ? (0, x.y)(o, 45) : void 0,
                        d = p.Z.getForSKU(_),
                        m = (null == l ? void 0 : l.applicationId) === u;
                    return [m ? l : null, m ? o : null, E.Z.getForSKU(_), g.Z.isFetching(_), g.Z.didFetchingSkuFail(_), d.length > 0 ? d[0] : null, r, s];
                },
                [u, I.channel_id, _]
            ),
            B = (0, T.R)(null !== (o = null == P ? void 0 : P.id) && void 0 !== o ? o : '');
        r.useEffect(() => {
            null == v && !O && !M && (0, s.km)(_);
        }, [M, O, v, _]),
            r.useEffect(() => {
                if ((null == P ? void 0 : P.id) != null) (0, s.oJ)(null == P ? void 0 : P.id);
            }, [null == P ? void 0 : P.id]);
        let w = (0, l.e7)([g.Z], () => (null != _ ? g.Z.getParentSKU(_) : void 0), [_]),
            { openModal: F, subscriptionPurchaseButtonState: G } = (0, h.Z)({
                skuId: _,
                initialSubscribeForGuild: k
            }),
            V = (0, d.YP)({ location: 'AppStorefrontSKUMessageEmbed' });
        if (!B || null == P || null == v) return null;
        let H = v.type === A.epS.SUBSCRIPTION,
            z = !!H && (0, m.KW)(v.flags),
            W = () => {
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('29798')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: P.id,
                            guildId: k
                        });
                });
            },
            K = () => {
                (0, a.openModalLazy)(async () => {
                    let e = H ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = H ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let r = () => {
                            n.onClose(), W();
                        };
                        return null != e && null != w
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: P.id,
                                  skuId: v.id,
                                  guildId: k,
                                  subscriptionType: z ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: r
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: P.id,
                                    skuId: _,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: r
                                })
                              : null;
                    };
                });
            },
            Y = H
                ? z
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              R.intl.string(R.t.wnifjI)
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
                              R.intl.string(R.t.NRC3am)
                          ]
                      })
                : null == L
                  ? void 0
                  : null === (t = L.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === Y && (Y = void 0);
        let X = () => {
            C.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: P.id,
                sku_id: v.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(y, {
            appName: P.name,
            title: v.name,
            description: Y,
            link: ''
                .concat(location.protocol, '//')
                .concat(location.host)
                .concat(V ? A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(P.id, j.GlobalDiscoveryAppsSections.STORE) : A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(P.id, b.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, N.X)(P.id, N.B.SKU_EMBED, _);
            },
            iconSrc: U,
            onIconClick: () => {
                W(),
                    C.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: P.id,
                        sku_id: v.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: Z.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(a.Button, {
                        color: a.ButtonColors.CUSTOM,
                        onClick: () => {
                            K(),
                                C.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: P.id,
                                    sku_id: v.id,
                                    area: 'view_details'
                                });
                        },
                        className: Z.viewDetailsButton,
                        children: R.intl.string(R.t.DXYfjI)
                    }),
                    H
                        ? null != D
                            ? (0, i.jsx)(S.pV, {
                                  onClick: F,
                                  appId: P.id,
                                  subscriptionType: z ? 'user' : 'guild',
                                  skuId: v.id,
                                  icon: (0, i.jsx)(a.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: X,
                                  subscriptionPlan: D,
                                  state: G
                              })
                            : (0, i.jsx)(a.Button, {
                                  onClick: K,
                                  children: R.intl.string(R.t.uuzaAA)
                              })
                        : (0, i.jsx)(S.YG, {
                              appId: P.id,
                              sku: v,
                              icon: (0, i.jsx)(a.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: X
                          })
                ]
            })
        });
    });
function y(e) {
    let { appName: t, title: n, description: r, link: l, iconSrc: o, onIconClick: s, onLinkCopy: c, children: d } = e;
    return (0, i.jsxs)('div', {
        className: Z.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: Z.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.headerTitle,
                        children: [
                            (0, i.jsx)(a.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(a.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    I.wS &&
                        (0, i.jsx)(a.Button, {
                            look: a.ButtonLooks.BLANK,
                            size: a.ButtonSizes.ICON,
                            'aria-label': R.intl.string(R.t.WqhZsr),
                            onClick: () => {
                                (0, I.JG)(l), (0, a.showToast)((0, a.createToast)(R.intl.string(R.t['L/PwZW']), a.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(a.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: Z.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, i.jsx)(a.Button, {
                                    look: a.ButtonLooks.BLANK,
                                    size: a.ButtonSizes.NONE,
                                    onClick: s,
                                    children: (0, i.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: Z.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: Z.contentText,
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
                                            className: Z.description,
                                            children: r
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
function O(e) {
    return (t) => {
        let { enabled: n } = v.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
