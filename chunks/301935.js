n.d(t, {
    G: function () {
        return i;
    },
    Z: function () {
        return B;
    }
}),
    n(47120);
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(561537),
    o = n(269210),
    c = n(442837),
    d = n(481060),
    u = n(355467),
    m = n(100527),
    g = n(906732),
    h = n(601911),
    p = n(283836),
    x = n(887818),
    f = n(728345),
    E = n(565138),
    _ = n(374649),
    C = n(908951),
    T = n(255078),
    S = n(430824),
    b = n(509545),
    I = n(55563),
    N = n(551428),
    v = n(937615),
    A = n(171246),
    j = n(889989),
    O = n(63487),
    R = n(547283),
    P = n(981631),
    D = n(388032),
    y = n(525319);
function B(e) {
    var t, n, i, r, o;
    let { subscription: u, navigateToSwitchPlan: p, loadingState: x } = e,
        T = null === (t = u.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: j, planId: R } = u,
        {
            appId: B,
            plan: F,
            storeListing: U,
            price: V,
            isGuildSubscription: G,
            subscriptionForGuild: H,
            sku: Y,
            isCancelled: W,
            renewalPlan: z
        } = (0, c.cj)(
            [b.Z, I.Z, N.Z, S.Z],
            () => {
                let e;
                let t = b.Z.get(R),
                    n = null != t ? I.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    r = null != t ? N.Z.getForSKU(t.skuId) : null,
                    s = null != t ? (0, v.og)((0, v.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    a = null != r && (0, A.KK)(r.skuFlags),
                    l = a && null != T ? S.Z.getGuild(T) : void 0,
                    o = (0, A.Jf)(u, n);
                if (!1 === o && null != j && j.items.length > 0) {
                    var c;
                    let t = j.items[0];
                    e = null !== (c = b.Z.get(t.planId)) && void 0 !== c ? c : void 0;
                }
                return {
                    appId: i,
                    isGuildSubscription: a,
                    plan: t,
                    price: s,
                    sku: n,
                    storeListing: r,
                    subscriptionForGuild: l,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [T, R, j, u]
        ),
        { data: K } = (0, f.IX)(B),
        q = a.useMemo(() => (null != K ? (0, h.y)(K, 100) : null), [K]),
        Q = null !== (n = null == Y ? void 0 : Y.deleted) && void 0 !== n && n,
        X = null != Y && (0, A.OL)(Y),
        J = u.status === P.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, g.ZP)(),
        [ee] = (0, _.ED)({
            subscriptionId: u.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: m.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = (0, O.p)(u.currentPeriodEnd),
        en = 0 === x;
    return (0, s.jsxs)(l.l, {
        headerClassName: y.headerWrapper,
        header:
            !1 === en
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsxs)('div', {
                              className: y.headerContent,
                              children: [
                                  null != q &&
                                      (0, s.jsx)(d.Image, {
                                          src: q.href,
                                          imageClassName: y.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, s.jsxs)('div', {
                                      children: [
                                          (0, s.jsx)(d.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: null !== (i = null == K ? void 0 : K.name) && void 0 !== i ? i : D.intl.string(D.t['7kqy7e'])
                                          }),
                                          (0, s.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null !== (r = null == F ? void 0 : F.name) && void 0 !== r ? r : D.intl.string(D.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, s.jsx)('div', {
                              className: y.headerButtons,
                              children:
                                  null != K &&
                                  null != U &&
                                  null != Y &&
                                  (0, s.jsx)(k, {
                                      subscription: u,
                                      app: K,
                                      sku: Y,
                                      storeListing: U,
                                      isCancelled: W,
                                      navigateToSwitchPlan: p,
                                      renewalSkuId: null == z ? void 0 : z.skuId
                                  })
                          })
                      ]
                  })
                : (0, s.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }),
        children: [
            W &&
                (0, s.jsx)(M, {
                    type: 'warning',
                    title: X ? D.intl.formatToPlainString(D.t.QOnM19, { subscriptionPeriodEnd: et }) : D.intl.formatToPlainString(D.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            J &&
                (0, s.jsx)(M, {
                    type: 'danger',
                    title: D.intl.string(D.t.fvOqBg)
                }),
            (0, s.jsxs)('div', {
                className: y.details,
                children: [
                    (0, s.jsx)(L, {
                        title: D.intl.string(D.t['5D/KEB']),
                        content: G
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsxs)('span', {
                                          className: y.subscriptionTypeRow,
                                          children: [(0, s.jsx)(d.ServerIcon, { size: 'xs' }), D.intl.string(D.t.QjL3vr)]
                                      }),
                                      null != H &&
                                          (0, s.jsxs)('span', {
                                              className: y.guildSubscriptionContentRow,
                                              children: [
                                                  (0, s.jsx)(d.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: D.intl.format(D.t['7ZD8p6'], { guildName: H.name })
                                                  }),
                                                  (0, s.jsx)(E.Z, {
                                                      guild: H,
                                                      size: E.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, s.jsxs)('span', {
                                  className: y.subscriptionTypeRow,
                                  children: [(0, s.jsx)(d.UserIcon, { size: 'xs' }), D.intl.string(D.t['6anEVl'])]
                              })
                    }),
                    null != V &&
                        (0, s.jsx)(L, {
                            title: D.intl.string(D.t.KI7ER0),
                            content: V
                        }),
                    (0, s.jsx)(L, {
                        title: D.intl.string(D.t.dnUzb2),
                        content: (0, O.p)(null !== (o = u.createdAt) && void 0 !== o ? o : u.currentPeriodStart)
                    }),
                    (0, s.jsx)(Z, {
                        isCancelled: W,
                        subscriptionPeriodEnd: et,
                        renewalPlan: z
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: y.payment,
                children: [
                    (0, s.jsx)(d.FormTitle, { children: D.intl.string(D.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === x) &&
                        (0, s.jsx)(C.Z, {
                            subscription: u,
                            currentInvoicePreview: ee,
                            disabled: Q || W
                        })
                ]
            }),
            null != K &&
                (null == U ? void 0 : U.benefits) != null &&
                U.benefits.length > 0 &&
                (0, s.jsx)(w, {
                    appId: K.id,
                    listingBenefits: U.benefits
                })
        ]
    });
}
function Z(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, v.og)((0, v.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(L, {
            title: D.intl.string(D.t.hIhAMz),
            content: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: D.intl.format(D.t.MCLbvr, {
                            planName: i.name,
                            price: e
                        })
                    })
                ]
            })
        });
    }
    return (0, s.jsx)(L, {
        title: t ? D.intl.string(D.t.enxcAg) : D.intl.string(D.t['Ms+6Zm']),
        content: n
    });
}
function L(e) {
    let { title: t, content: n } = e;
    return (0, s.jsxs)('div', {
        className: y.row,
        children: [
            (0, s.jsx)(d.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, s.jsx)(d.Text, {
                variant: 'text-sm/medium',
                className: y.rowContent,
                children: n
            })
        ]
    });
}
function M(e) {
    let { type: t, title: n } = e;
    return (0, s.jsx)(d.HelpMessage, {
        messageType: 'warning' === t ? d.HelpMessageTypes.WARNING : d.HelpMessageTypes.ERROR,
        className: y.noticeBanner,
        children: (0, s.jsx)(d.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function k(e) {
    let { app: t, storeListing: i, sku: r, subscription: l, isCancelled: o, guild: m, renewalSkuId: h, navigateToSwitchPlan: x } = e,
        f = (0, A.OL)(r),
        { analyticsLocations: E } = (0, g.ZP)(),
        [_, C] = a.useState(!1),
        S = (0, p.q)(t.id),
        b = (0, c.e7)([I.Z], () => I.Z.getParentSKU(i.skuId), [i.skuId]),
        N = a.useMemo(() => (null == b ? [] : (0, R.$)(i.id, b, S.subscriptions)), [i.id, S, b]),
        v = 0 !== N.length,
        j = async () => {
            try {
                C(!0);
                let { subscription: e } = await (0, u.pl)(l, E);
                if (null == e) return;
                (0, d.openModalLazy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, s.jsx)(t, {
                            ...n,
                            storeListing: i,
                            subscription: T.Z.createFromServer(e)
                        });
                });
            } finally {
                C(!1);
            }
        };
    return (0, s.jsxs)('div', {
        className: y.managementBtns,
        children: [
            f
                ? null
                : o
                  ? (0, s.jsx)(d.Button, {
                        color: d.Button.Colors.PRIMARY,
                        size: d.Button.Sizes.SMALL,
                        onClick: j,
                        submitting: _,
                        children: D.intl.string(D.t.QtMnkZ)
                    })
                  : (0, s.jsx)(d.Button, {
                        color: d.Button.Colors.CUSTOM,
                        size: d.Button.Sizes.SMALL,
                        className: y.secondaryBtn,
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, s.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: i,
                                        subscription: l,
                                        guild: m
                                    });
                            });
                        },
                        children: D.intl.string(D.t['E8G/tr'])
                    }),
            v &&
                null != b &&
                !1 === o &&
                (0, s.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    size: d.Button.Sizes.SMALL,
                    onClick: () => {
                        x({
                            currentSubscription: l,
                            alternativeListings: N,
                            app: t,
                            subscriptionGroup: b,
                            currentListing: i,
                            renewalSkuId: h
                        });
                    },
                    children: D.intl.string(D.t.R74ZBQ)
                })
        ]
    });
}
function w(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, s.jsx)(x.Z, {
        children: (e) =>
            (0, s.jsxs)('div', {
                className: y.benefits,
                children: [
                    (0, s.jsxs)('div', {
                        className: y.benefitsHeader,
                        children: [
                            e &&
                                (0, s.jsx)(d.Text, {
                                    variant: 'text-sm/semibold',
                                    children: D.intl.string(D.t['mORL6+'])
                                }),
                            (0, s.jsx)(x.Z.Toggle, {
                                className: y.benefitsBtn,
                                text: e ? D.intl.string(D.t.gsbFAw) : D.intl.string(D.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: r, icon: a } = e;
                              return (0, s.jsx)(
                                  o.Gm,
                                  {
                                      header: i,
                                      icon: (0, j.n)(t, a),
                                      description: r
                                  },
                                  n
                              );
                          })
                        : null
                ]
            })
    });
}
((r = i || (i = {}))[(r.LOADING = 0)] = 'LOADING'), (r[(r.DONE = 1)] = 'DONE'), (r[(r.ERROR = 2)] = 'ERROR');
