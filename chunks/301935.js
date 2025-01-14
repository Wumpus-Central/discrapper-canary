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
    s,
    r = n(200651),
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
    _ = n(565138),
    E = n(374649),
    C = n(908951),
    T = n(255078),
    S = n(430824),
    b = n(509545),
    I = n(55563),
    N = n(551428),
    v = n(937615),
    A = n(171246),
    j = n(889989),
    R = n(63487),
    O = n(547283),
    P = n(981631),
    y = n(388032),
    D = n(525319);
function B(e) {
    var t, n, i, s, o;
    let { subscription: u, navigateToSwitchPlan: p, loadingState: x } = e,
        T = null === (t = u.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: j, planId: O } = u,
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
                let t = b.Z.get(O),
                    n = null != t ? I.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? N.Z.getForSKU(t.skuId) : null,
                    r = null != t ? (0, v.og)((0, v.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    a = null != s && (0, A.KK)(s.skuFlags),
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
                    price: r,
                    sku: n,
                    storeListing: s,
                    subscriptionForGuild: l,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [T, O, j, u]
        ),
        { data: K } = (0, f.IX)(B),
        q = a.useMemo(() => (null != K ? (0, h.y)(K, 100) : null), [K]),
        Q = null !== (n = null == Y ? void 0 : Y.deleted) && void 0 !== n && n,
        X = null != Y && (0, A.OL)(Y),
        J = u.status === P.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, g.ZP)(),
        [ee] = (0, E.ED)({
            subscriptionId: u.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: m.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = (0, R.p)(u.currentPeriodEnd),
        en = 0 === x;
    return (0, r.jsxs)(l.l, {
        headerClassName: D.headerWrapper,
        header:
            !1 === en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: D.headerContent,
                              children: [
                                  null != q &&
                                      (0, r.jsx)(d.Image, {
                                          src: q.href,
                                          imageClassName: D.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(d.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: null !== (i = null == K ? void 0 : K.name) && void 0 !== i ? i : y.intl.string(y.t['7kqy7e'])
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null !== (s = null == F ? void 0 : F.name) && void 0 !== s ? s : y.intl.string(y.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: D.headerButtons,
                              children:
                                  null != K &&
                                  null != U &&
                                  null != Y &&
                                  (0, r.jsx)(k, {
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
                : (0, r.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }),
        children: [
            W &&
                (0, r.jsx)(M, {
                    type: 'warning',
                    title: X ? y.intl.formatToPlainString(y.t.QOnM19, { subscriptionPeriodEnd: et }) : y.intl.formatToPlainString(y.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            J &&
                (0, r.jsx)(M, {
                    type: 'danger',
                    title: y.intl.string(y.t.fvOqBg)
                }),
            (0, r.jsxs)('div', {
                className: D.details,
                children: [
                    (0, r.jsx)(L, {
                        title: y.intl.string(y.t['5D/KEB']),
                        content: G
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)('span', {
                                          className: D.subscriptionTypeRow,
                                          children: [(0, r.jsx)(d.ServerIcon, { size: 'xs' }), y.intl.string(y.t.QjL3vr)]
                                      }),
                                      null != H &&
                                          (0, r.jsxs)('span', {
                                              className: D.guildSubscriptionContentRow,
                                              children: [
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: y.intl.format(y.t['7ZD8p6'], { guildName: H.name })
                                                  }),
                                                  (0, r.jsx)(_.Z, {
                                                      guild: H,
                                                      size: _.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, r.jsxs)('span', {
                                  className: D.subscriptionTypeRow,
                                  children: [(0, r.jsx)(d.UserIcon, { size: 'xs' }), y.intl.string(y.t['6anEVl'])]
                              })
                    }),
                    null != V &&
                        (0, r.jsx)(L, {
                            title: y.intl.string(y.t.KI7ER0),
                            content: V
                        }),
                    (0, r.jsx)(L, {
                        title: y.intl.string(y.t.dnUzb2),
                        content: (0, R.p)(null !== (o = u.createdAt) && void 0 !== o ? o : u.currentPeriodStart)
                    }),
                    (0, r.jsx)(Z, {
                        isCancelled: W,
                        subscriptionPeriodEnd: et,
                        renewalPlan: z
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: D.payment,
                children: [
                    (0, r.jsx)(d.FormTitle, { children: y.intl.string(y.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === x) &&
                        (0, r.jsx)(C.Z, {
                            subscription: u,
                            currentInvoicePreview: ee,
                            disabled: Q || W
                        })
                ]
            }),
            null != K &&
                (null == U ? void 0 : U.benefits) != null &&
                U.benefits.length > 0 &&
                (0, r.jsx)(w, {
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
        return (0, r.jsx)(L, {
            title: y.intl.string(y.t.hIhAMz),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: y.intl.format(y.t.MCLbvr, {
                            planName: i.name,
                            price: e
                        })
                    })
                ]
            })
        });
    }
    return (0, r.jsx)(L, {
        title: t ? y.intl.string(y.t.enxcAg) : y.intl.string(y.t['Ms+6Zm']),
        content: n
    });
}
function L(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)('div', {
        className: D.row,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                className: D.rowContent,
                children: n
            })
        ]
    });
}
function M(e) {
    let { type: t, title: n } = e;
    return (0, r.jsx)(d.HelpMessage, {
        messageType: 'warning' === t ? d.HelpMessageTypes.WARNING : d.HelpMessageTypes.ERROR,
        className: D.noticeBanner,
        children: (0, r.jsx)(d.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function k(e) {
    let { app: t, storeListing: i, sku: s, subscription: l, isCancelled: o, guild: m, renewalSkuId: h, navigateToSwitchPlan: x } = e,
        f = (0, A.OL)(s),
        { analyticsLocations: _ } = (0, g.ZP)(),
        [E, C] = a.useState(!1),
        S = (0, p.q)(t.id),
        b = (0, c.e7)([I.Z], () => I.Z.getParentSKU(i.skuId), [i.skuId]),
        N = a.useMemo(() => (null == b ? [] : (0, O.$)(i.id, b, S.subscriptions)), [i.id, S, b]),
        v = 0 !== N.length,
        j = async () => {
            try {
                C(!0);
                let { subscription: e } = await (0, u.pl)(l, _);
                if (null == e) return;
                (0, d.openModalLazy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, r.jsx)(t, {
                            ...n,
                            storeListing: i,
                            subscription: T.Z.createFromServer(e)
                        });
                });
            } finally {
                C(!1);
            }
        };
    return (0, r.jsxs)('div', {
        className: D.managementBtns,
        children: [
            f
                ? null
                : o
                  ? (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.PRIMARY,
                        size: d.Button.Sizes.SMALL,
                        onClick: j,
                        submitting: E,
                        children: y.intl.string(y.t.QtMnkZ)
                    })
                  : (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.CUSTOM,
                        size: d.Button.Sizes.SMALL,
                        className: D.secondaryBtn,
                        onClick: () => {
                            (0, d.openModalLazy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: i,
                                        subscription: l,
                                        guild: m
                                    });
                            });
                        },
                        children: y.intl.string(y.t['E8G/tr'])
                    }),
            v &&
                null != b &&
                !1 === o &&
                (0, r.jsx)(d.Button, {
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
                    children: y.intl.string(y.t.R74ZBQ)
                })
        ]
    });
}
function w(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(x.Z, {
        children: (e) =>
            (0, r.jsxs)('div', {
                className: D.benefits,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.benefitsHeader,
                        children: [
                            e &&
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-sm/semibold',
                                    children: y.intl.string(y.t['mORL6+'])
                                }),
                            (0, r.jsx)(x.Z.Toggle, {
                                className: D.benefitsBtn,
                                text: e ? y.intl.string(y.t.gsbFAw) : y.intl.string(y.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: a } = e;
                              return (0, r.jsx)(
                                  o.Gm,
                                  {
                                      header: i,
                                      icon: (0, j.n)(t, a),
                                      description: s
                                  },
                                  n
                              );
                          })
                        : null
                ]
            })
    });
}
((s = i || (i = {}))[(s.LOADING = 0)] = 'LOADING'), (s[(s.DONE = 1)] = 'DONE'), (s[(s.ERROR = 2)] = 'ERROR');
