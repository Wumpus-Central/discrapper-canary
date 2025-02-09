n.d(t, {
    G: () => y,
    Z: () => Z
}),
    n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(561537),
    a = n(269210),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(100527),
    h = n(906732),
    m = n(601911),
    g = n(283836),
    x = n(887818),
    _ = n(728345),
    p = n(565138),
    E = n(374649),
    C = n(908951),
    N = n(255078),
    f = n(430824),
    I = n(509545),
    T = n(55563),
    S = n(551428),
    j = n(937615),
    v = n(171246),
    b = n(889989),
    A = n(63487),
    O = n(547283),
    R = n(981631),
    D = n(388032),
    P = n(679034),
    y = (((i = {})[(i.LOADING = 0)] = 'LOADING'), (i[(i.DONE = 1)] = 'DONE'), (i[(i.ERROR = 2)] = 'ERROR'), i);
function Z(e) {
    var t, n, i, a, d;
    let { subscription: g, navigateToSwitchPlan: x, loadingState: N } = e,
        b = null === (t = g.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: O, planId: y } = g,
        {
            appId: Z,
            plan: w,
            storeListing: U,
            price: G,
            isGuildSubscription: F,
            subscriptionForGuild: z,
            sku: Y,
            isCancelled: H,
            renewalPlan: W
        } = (0, o.cj)(
            [I.Z, T.Z, S.Z, f.Z],
            () => {
                let e;
                let t = I.Z.get(y),
                    n = null != t ? T.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? S.Z.getForSKU(t.skuId) : null,
                    l = null != t ? (0, j.og)((0, j.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    r = null != s && (0, v.KK)(s.skuFlags),
                    a = r && null != b ? f.Z.getGuild(b) : void 0,
                    o = (0, v.Jf)(g, n);
                if (!1 === o && null != O && O.items.length > 0) {
                    var c;
                    let t = O.items[0];
                    e = null !== (c = I.Z.get(t.planId)) && void 0 !== c ? c : void 0;
                }
                return {
                    appId: i,
                    isGuildSubscription: r,
                    plan: t,
                    price: l,
                    sku: n,
                    storeListing: s,
                    subscriptionForGuild: a,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [b, y, O, g]
        ),
        { data: K } = (0, _.IX)(Z),
        X = l.useMemo(() => (null != K ? (0, m.y)(K, 100) : null), [K]),
        q = null !== (n = null == Y ? void 0 : Y.deleted) && void 0 !== n && n,
        J = null != Y && (0, v.OL)(Y),
        Q = g.status === R.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, h.ZP)(),
        [ee] = (0, E.ED)({
            subscriptionId: g.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = (0, A.p)(g.currentPeriodEnd),
        en = 0 === N;
    return (0, s.jsxs)(r.l, {
        headerClassName: P.headerWrapper,
        header:
            !1 === en
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsxs)('div', {
                              className: P.headerContent,
                              children: [
                                  null != X &&
                                      (0, s.jsx)(c.Eep, {
                                          src: X.href,
                                          imageClassName: P.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, s.jsxs)('div', {
                                      children: [
                                          (0, s.jsx)(c.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: null !== (i = null == K ? void 0 : K.name) && void 0 !== i ? i : D.intl.string(D.t['7kqy7e'])
                                          }),
                                          (0, s.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null !== (a = null == w ? void 0 : w.name) && void 0 !== a ? a : D.intl.string(D.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, s.jsx)('div', {
                              className: P.headerButtons,
                              children:
                                  null != K &&
                                  null != U &&
                                  null != Y &&
                                  (0, s.jsx)(M, {
                                      subscription: g,
                                      app: K,
                                      sku: Y,
                                      storeListing: U,
                                      isCancelled: H,
                                      navigateToSwitchPlan: x,
                                      renewalSkuId: null == W ? void 0 : W.skuId
                                  })
                          })
                      ]
                  })
                : (0, s.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
        children: [
            H &&
                (0, s.jsx)(B, {
                    type: 'warning',
                    title: J ? D.intl.formatToPlainString(D.t.QOnM19, { subscriptionPeriodEnd: et }) : D.intl.formatToPlainString(D.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            Q &&
                (0, s.jsx)(B, {
                    type: 'danger',
                    title: D.intl.string(D.t.fvOqBg)
                }),
            (0, s.jsxs)('div', {
                className: P.details,
                children: [
                    (0, s.jsx)(k, {
                        title: D.intl.string(D.t['5D/KEB']),
                        content: F
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsxs)('span', {
                                          className: P.subscriptionTypeRow,
                                          children: [(0, s.jsx)(c.QTo, { size: 'xs' }), D.intl.string(D.t.QjL3vr)]
                                      }),
                                      null != z &&
                                          (0, s.jsxs)('span', {
                                              className: P.guildSubscriptionContentRow,
                                              children: [
                                                  (0, s.jsx)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: D.intl.format(D.t['7ZD8p6'], { guildName: z.name })
                                                  }),
                                                  (0, s.jsx)(p.Z, {
                                                      guild: z,
                                                      size: p.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, s.jsxs)('span', {
                                  className: P.subscriptionTypeRow,
                                  children: [(0, s.jsx)(c.tBG, { size: 'xs' }), D.intl.string(D.t['6anEVl'])]
                              })
                    }),
                    null != G &&
                        (0, s.jsx)(k, {
                            title: D.intl.string(D.t.KI7ER0),
                            content: G
                        }),
                    (0, s.jsx)(k, {
                        title: D.intl.string(D.t.dnUzb2),
                        content: (0, A.p)(null !== (d = g.createdAt) && void 0 !== d ? d : g.currentPeriodStart)
                    }),
                    (0, s.jsx)(L, {
                        isCancelled: H,
                        subscriptionPeriodEnd: et,
                        renewalPlan: W
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: P.payment,
                children: [
                    (0, s.jsx)(c.vwX, { children: D.intl.string(D.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === N) &&
                        (0, s.jsx)(C.Z, {
                            subscription: g,
                            currentInvoicePreview: ee,
                            disabled: q || H
                        })
                ]
            }),
            null != K &&
                (null == U ? void 0 : U.benefits) != null &&
                U.benefits.length > 0 &&
                (0, s.jsx)(V, {
                    appId: K.id,
                    listingBenefits: U.benefits
                })
        ]
    });
}
function L(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, j.og)((0, j.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, s.jsx)(k, {
            title: D.intl.string(D.t.hIhAMz),
            content: (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, s.jsx)(c.Text, {
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
    return (0, s.jsx)(k, {
        title: t ? D.intl.string(D.t.enxcAg) : D.intl.string(D.t['Ms+6Zm']),
        content: n
    });
}
function k(e) {
    let { title: t, content: n } = e;
    return (0, s.jsxs)('div', {
        className: P.row,
        children: [
            (0, s.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, s.jsx)(c.Text, {
                variant: 'text-sm/medium',
                className: P.rowContent,
                children: n
            })
        ]
    });
}
function B(e) {
    let { type: t, title: n } = e;
    return (0, s.jsx)(c.Wn, {
        messageType: 'warning' === t ? c.QYI.WARNING : c.QYI.ERROR,
        className: P.noticeBanner,
        children: (0, s.jsx)(c.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function M(e) {
    let { app: t, storeListing: i, sku: r, subscription: a, isCancelled: u, guild: m, renewalSkuId: x, navigateToSwitchPlan: _ } = e,
        p = (0, v.OL)(r),
        { analyticsLocations: E } = (0, h.ZP)(),
        [C, f] = l.useState(!1),
        I = (0, g.q)(t.id),
        S = (0, o.e7)([T.Z], () => T.Z.getParentSKU(i.skuId), [i.skuId]),
        j = l.useMemo(() => (null == S ? [] : (0, O.$)(i.id, S, I.subscriptions)), [i.id, I, S]),
        b = 0 !== j.length,
        A = async () => {
            try {
                f(!0);
                let { subscription: e } = await (0, d.pl)(a, E);
                if (null == e) return;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, s.jsx)(t, {
                            ...n,
                            storeListing: i,
                            subscription: N.Z.createFromServer(e)
                        });
                });
            } finally {
                f(!1);
            }
        };
    return (0, s.jsxs)('div', {
        className: P.managementBtns,
        children: [
            p
                ? null
                : u
                  ? (0, s.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        size: c.zxk.Sizes.SMALL,
                        onClick: A,
                        submitting: C,
                        children: D.intl.string(D.t.QtMnkZ)
                    })
                  : (0, s.jsx)(c.zxk, {
                        color: c.zxk.Colors.CUSTOM,
                        size: c.zxk.Sizes.SMALL,
                        className: P.secondaryBtn,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, s.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: i,
                                        subscription: a,
                                        guild: m
                                    });
                            });
                        },
                        children: D.intl.string(D.t['E8G/tr'])
                    }),
            b &&
                null != S &&
                !1 === u &&
                (0, s.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.SMALL,
                    onClick: () => {
                        _({
                            currentSubscription: a,
                            alternativeListings: j,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: i,
                            renewalSkuId: x
                        });
                    },
                    children: D.intl.string(D.t.R74ZBQ)
                })
        ]
    });
}
function V(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, s.jsx)(x.Z, {
        children: (e) =>
            (0, s.jsxs)('div', {
                className: P.benefits,
                children: [
                    (0, s.jsxs)('div', {
                        className: P.benefitsHeader,
                        children: [
                            e &&
                                (0, s.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: D.intl.string(D.t['mORL6+'])
                                }),
                            (0, s.jsx)(x.Z.Toggle, {
                                className: P.benefitsBtn,
                                text: e ? D.intl.string(D.t.gsbFAw) : D.intl.string(D.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: l, icon: r } = e;
                              return (0, s.jsx)(
                                  a.Gm,
                                  {
                                      header: i,
                                      icon: (0, b.n)(t, r),
                                      description: l
                                  },
                                  n
                              );
                          })
                        : null
                ]
            })
    });
}
