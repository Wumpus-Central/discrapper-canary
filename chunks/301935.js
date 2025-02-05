n.d(t, {
    G: () => y,
    Z: () => Z
}),
    n(47120);
var i,
    s = n(200651),
    r = n(192379),
    l = n(561537),
    a = n(269210),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(100527),
    m = n(906732),
    h = n(601911),
    g = n(283836),
    _ = n(887818),
    x = n(728345),
    p = n(565138),
    E = n(374649),
    C = n(908951),
    f = n(255078),
    T = n(430824),
    N = n(509545),
    I = n(55563),
    S = n(551428),
    b = n(937615),
    v = n(171246),
    j = n(889989),
    A = n(63487),
    O = n(547283),
    R = n(981631),
    P = n(388032),
    D = n(525319),
    y = (((i = {})[(i.LOADING = 0)] = 'LOADING'), (i[(i.DONE = 1)] = 'DONE'), (i[(i.ERROR = 2)] = 'ERROR'), i);
function Z(e) {
    var t, n, i, a, d;
    let { subscription: g, navigateToSwitchPlan: _, loadingState: f } = e,
        j = null === (t = g.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: O, planId: y } = g,
        {
            appId: Z,
            plan: V,
            storeListing: U,
            price: G,
            isGuildSubscription: F,
            subscriptionForGuild: H,
            sku: z,
            isCancelled: Y,
            renewalPlan: W
        } = (0, o.cj)(
            [N.Z, I.Z, S.Z, T.Z],
            () => {
                let e;
                let t = N.Z.get(y),
                    n = null != t ? I.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? S.Z.getForSKU(t.skuId) : null,
                    r = null != t ? (0, b.og)((0, b.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    l = null != s && (0, v.KK)(s.skuFlags),
                    a = l && null != j ? T.Z.getGuild(j) : void 0,
                    o = (0, v.Jf)(g, n);
                if (!1 === o && null != O && O.items.length > 0) {
                    var c;
                    let t = O.items[0];
                    e = null !== (c = N.Z.get(t.planId)) && void 0 !== c ? c : void 0;
                }
                return {
                    appId: i,
                    isGuildSubscription: l,
                    plan: t,
                    price: r,
                    sku: n,
                    storeListing: s,
                    subscriptionForGuild: a,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [j, y, O, g]
        ),
        { data: K } = (0, x.IX)(Z),
        X = r.useMemo(() => (null != K ? (0, h.y)(K, 100) : null), [K]),
        q = null !== (n = null == z ? void 0 : z.deleted) && void 0 !== n && n,
        J = null != z && (0, v.OL)(z),
        Q = g.status === R.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, m.ZP)(),
        [ee] = (0, E.ED)({
            subscriptionId: g.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = (0, A.p)(g.currentPeriodEnd),
        en = 0 === f;
    return (0, s.jsxs)(l.l, {
        headerClassName: D.headerWrapper,
        header:
            !1 === en
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsxs)('div', {
                              className: D.headerContent,
                              children: [
                                  null != X &&
                                      (0, s.jsx)(c.Eep, {
                                          src: X.href,
                                          imageClassName: D.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, s.jsxs)('div', {
                                      children: [
                                          (0, s.jsx)(c.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: null !== (i = null == K ? void 0 : K.name) && void 0 !== i ? i : P.intl.string(P.t['7kqy7e'])
                                          }),
                                          (0, s.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null !== (a = null == V ? void 0 : V.name) && void 0 !== a ? a : P.intl.string(P.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, s.jsx)('div', {
                              className: D.headerButtons,
                              children:
                                  null != K &&
                                  null != U &&
                                  null != z &&
                                  (0, s.jsx)(M, {
                                      subscription: g,
                                      app: K,
                                      sku: z,
                                      storeListing: U,
                                      isCancelled: Y,
                                      navigateToSwitchPlan: _,
                                      renewalSkuId: null == W ? void 0 : W.skuId
                                  })
                          })
                      ]
                  })
                : (0, s.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
        children: [
            Y &&
                (0, s.jsx)(B, {
                    type: 'warning',
                    title: J ? P.intl.formatToPlainString(P.t.QOnM19, { subscriptionPeriodEnd: et }) : P.intl.formatToPlainString(P.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            Q &&
                (0, s.jsx)(B, {
                    type: 'danger',
                    title: P.intl.string(P.t.fvOqBg)
                }),
            (0, s.jsxs)('div', {
                className: D.details,
                children: [
                    (0, s.jsx)(L, {
                        title: P.intl.string(P.t['5D/KEB']),
                        content: F
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsxs)('span', {
                                          className: D.subscriptionTypeRow,
                                          children: [(0, s.jsx)(c.QTo, { size: 'xs' }), P.intl.string(P.t.QjL3vr)]
                                      }),
                                      null != H &&
                                          (0, s.jsxs)('span', {
                                              className: D.guildSubscriptionContentRow,
                                              children: [
                                                  (0, s.jsx)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: P.intl.format(P.t['7ZD8p6'], { guildName: H.name })
                                                  }),
                                                  (0, s.jsx)(p.Z, {
                                                      guild: H,
                                                      size: p.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, s.jsxs)('span', {
                                  className: D.subscriptionTypeRow,
                                  children: [(0, s.jsx)(c.tBG, { size: 'xs' }), P.intl.string(P.t['6anEVl'])]
                              })
                    }),
                    null != G &&
                        (0, s.jsx)(L, {
                            title: P.intl.string(P.t.KI7ER0),
                            content: G
                        }),
                    (0, s.jsx)(L, {
                        title: P.intl.string(P.t.dnUzb2),
                        content: (0, A.p)(null !== (d = g.createdAt) && void 0 !== d ? d : g.currentPeriodStart)
                    }),
                    (0, s.jsx)(k, {
                        isCancelled: Y,
                        subscriptionPeriodEnd: et,
                        renewalPlan: W
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: D.payment,
                children: [
                    (0, s.jsx)(c.vwX, { children: P.intl.string(P.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === f) &&
                        (0, s.jsx)(C.Z, {
                            subscription: g,
                            currentInvoicePreview: ee,
                            disabled: q || Y
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
function k(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, b.og)((0, b.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(L, {
            title: P.intl.string(P.t.hIhAMz),
            content: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: P.intl.format(P.t.MCLbvr, {
                            planName: i.name,
                            price: e
                        })
                    })
                ]
            })
        });
    }
    return (0, s.jsx)(L, {
        title: t ? P.intl.string(P.t.enxcAg) : P.intl.string(P.t['Ms+6Zm']),
        content: n
    });
}
function L(e) {
    let { title: t, content: n } = e;
    return (0, s.jsxs)('div', {
        className: D.row,
        children: [
            (0, s.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, s.jsx)(c.Text, {
                variant: 'text-sm/medium',
                className: D.rowContent,
                children: n
            })
        ]
    });
}
function B(e) {
    let { type: t, title: n } = e;
    return (0, s.jsx)(c.Wn, {
        messageType: 'warning' === t ? c.QYI.WARNING : c.QYI.ERROR,
        className: D.noticeBanner,
        children: (0, s.jsx)(c.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function M(e) {
    let { app: t, storeListing: i, sku: l, subscription: a, isCancelled: u, guild: h, renewalSkuId: _, navigateToSwitchPlan: x } = e,
        p = (0, v.OL)(l),
        { analyticsLocations: E } = (0, m.ZP)(),
        [C, T] = r.useState(!1),
        N = (0, g.q)(t.id),
        S = (0, o.e7)([I.Z], () => I.Z.getParentSKU(i.skuId), [i.skuId]),
        b = r.useMemo(() => (null == S ? [] : (0, O.$)(i.id, S, N.subscriptions)), [i.id, N, S]),
        j = 0 !== b.length,
        A = async () => {
            try {
                T(!0);
                let { subscription: e } = await (0, d.pl)(a, E);
                if (null == e) return;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, s.jsx)(t, {
                            ...n,
                            storeListing: i,
                            subscription: f.Z.createFromServer(e)
                        });
                });
            } finally {
                T(!1);
            }
        };
    return (0, s.jsxs)('div', {
        className: D.managementBtns,
        children: [
            p
                ? null
                : u
                  ? (0, s.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        size: c.zxk.Sizes.SMALL,
                        onClick: A,
                        submitting: C,
                        children: P.intl.string(P.t.QtMnkZ)
                    })
                  : (0, s.jsx)(c.zxk, {
                        color: c.zxk.Colors.CUSTOM,
                        size: c.zxk.Sizes.SMALL,
                        className: D.secondaryBtn,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, s.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: i,
                                        subscription: a,
                                        guild: h
                                    });
                            });
                        },
                        children: P.intl.string(P.t['E8G/tr'])
                    }),
            j &&
                null != S &&
                !1 === u &&
                (0, s.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.SMALL,
                    onClick: () => {
                        x({
                            currentSubscription: a,
                            alternativeListings: b,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: i,
                            renewalSkuId: _
                        });
                    },
                    children: P.intl.string(P.t.R74ZBQ)
                })
        ]
    });
}
function w(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, s.jsx)(_.Z, {
        children: (e) =>
            (0, s.jsxs)('div', {
                className: D.benefits,
                children: [
                    (0, s.jsxs)('div', {
                        className: D.benefitsHeader,
                        children: [
                            e &&
                                (0, s.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: P.intl.string(P.t['mORL6+'])
                                }),
                            (0, s.jsx)(_.Z.Toggle, {
                                className: D.benefitsBtn,
                                text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: r, icon: l } = e;
                              return (0, s.jsx)(
                                  a.Gm,
                                  {
                                      header: i,
                                      icon: (0, j.n)(t, l),
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
