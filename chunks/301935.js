n.d(t, {
    G: () => w,
    Z: () => k
}),
    n(388685),
    n(953529);
var i,
    r = n(200651),
    s = n(192379),
    l = n(561537),
    a = n(269210),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(100527),
    m = n(906732),
    p = n(601911),
    g = n(283836),
    h = n(887818),
    f = n(728345),
    b = n(565138),
    _ = n(374649),
    x = n(908951),
    E = n(255078),
    j = n(430824),
    C = n(509545),
    O = n(55563),
    S = n(551428),
    v = n(937615),
    T = n(171246),
    I = n(889989),
    N = n(63487),
    y = n(547283),
    A = n(981631),
    P = n(388032),
    R = n(588357);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var w = (((i = {})[(i.LOADING = 0)] = 'LOADING'), (i[(i.DONE = 1)] = 'DONE'), (i[(i.ERROR = 2)] = 'ERROR'), i);
function k(e) {
    var t, n, i, a, d;
    let { subscription: g, navigateToSwitchPlan: h, loadingState: E } = e,
        I = null == (t = g.metadata) ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: y, planId: D } = g,
        {
            appId: Z,
            plan: w,
            storeListing: k,
            price: G,
            isGuildSubscription: F,
            subscriptionForGuild: H,
            sku: z,
            isCancelled: W,
            renewalPlan: Y
        } = (0, o.cj)(
            [C.Z, O.Z, S.Z, j.Z],
            () => {
                let e,
                    t = C.Z.get(D),
                    n = null != t ? O.Z.get(t.skuId) : void 0,
                    i = null == n ? void 0 : n.applicationId,
                    r = null != t ? S.Z.getForSKU(t.skuId) : null,
                    s = null != t ? (0, v.og)((0, v.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    l = null != r && (0, T.KK)(r.skuFlags),
                    a = l && null != I ? j.Z.getGuild(I) : void 0,
                    o = (0, T.Jf)(g, n);
                if (!1 === o && null != y && y.items.length > 0) {
                    var c;
                    let t = y.items[0];
                    e = null != (c = C.Z.get(t.planId)) ? c : void 0;
                }
                return {
                    appId: i,
                    isGuildSubscription: l,
                    plan: t,
                    price: s,
                    sku: n,
                    storeListing: r,
                    subscriptionForGuild: a,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [I, D, y, g]
        ),
        { data: K } = (0, f.IX)(Z),
        q = s.useMemo(() => (null != K ? (0, p.y)(K, 100) : null), [K]),
        X = null != (n = null == z ? void 0 : z.deleted) && n,
        Q = null != z && (0, T.OL)(z),
        J = g.status === A.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, m.ZP)(),
        [ee] = (0, _.ED)({
            subscriptionId: g.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = (0, N.p)(g.currentPeriodEnd),
        en = 0 === E;
    return (0, r.jsxs)(l.l, {
        headerClassName: R.headerWrapper,
        header:
            !1 === en
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)('div', {
                              className: R.headerContent,
                              children: [
                                  null != q &&
                                      (0, r.jsx)(c.Eep, {
                                          src: q.href,
                                          imageClassName: R.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(c.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: null != (i = null == K ? void 0 : K.name) ? i : P.intl.string(P.t['7kqy7e'])
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null != (a = null == w ? void 0 : w.name) ? a : P.intl.string(P.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('div', {
                              className: R.headerButtons,
                              children:
                                  null != K &&
                                  null != k &&
                                  null != z &&
                                  (0, r.jsx)(U, {
                                      subscription: g,
                                      app: K,
                                      sku: z,
                                      storeListing: k,
                                      isCancelled: W,
                                      navigateToSwitchPlan: h,
                                      renewalSkuId: null == Y ? void 0 : Y.skuId
                                  })
                          })
                      ]
                  })
                : (0, r.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
        children: [
            W &&
                (0, r.jsx)(B, {
                    type: 'warning',
                    title: Q ? P.intl.formatToPlainString(P.t.QOnM19, { subscriptionPeriodEnd: et }) : P.intl.formatToPlainString(P.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            J &&
                (0, r.jsx)(B, {
                    type: 'danger',
                    title: P.intl.string(P.t.fvOqBg)
                }),
            (0, r.jsxs)('div', {
                className: R.details,
                children: [
                    (0, r.jsx)(M, {
                        title: P.intl.string(P.t['5D/KEB']),
                        content: F
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)('span', {
                                          className: R.subscriptionTypeRow,
                                          children: [(0, r.jsx)(c.QTo, { size: 'xs' }), P.intl.string(P.t.QjL3vr)]
                                      }),
                                      null != H &&
                                          (0, r.jsxs)('span', {
                                              className: R.guildSubscriptionContentRow,
                                              children: [
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: P.intl.format(P.t['7ZD8p6'], { guildName: H.name })
                                                  }),
                                                  (0, r.jsx)(b.Z, {
                                                      guild: H,
                                                      size: b.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, r.jsxs)('span', {
                                  className: R.subscriptionTypeRow,
                                  children: [(0, r.jsx)(c.tBG, { size: 'xs' }), P.intl.string(P.t['6anEVl'])]
                              })
                    }),
                    null != G &&
                        (0, r.jsx)(M, {
                            title: P.intl.string(P.t.KI7ER0),
                            content: G
                        }),
                    (0, r.jsx)(M, {
                        title: P.intl.string(P.t.dnUzb2),
                        content: (0, N.p)(null != (d = g.createdAt) ? d : g.currentPeriodStart)
                    }),
                    (0, r.jsx)(L, {
                        isCancelled: W,
                        subscriptionPeriodEnd: et,
                        renewalPlan: Y
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: R.payment,
                children: [
                    (0, r.jsx)(c.vwX, { children: P.intl.string(P.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === E) &&
                        (0, r.jsx)(x.Z, {
                            subscription: g,
                            currentInvoicePreview: ee,
                            disabled: X || W
                        })
                ]
            }),
            null != K &&
                (null == k ? void 0 : k.benefits) != null &&
                k.benefits.length > 0 &&
                (0, r.jsx)(V, {
                    appId: K.id,
                    listingBenefits: k.benefits
                })
        ]
    });
}
function L(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, v.og)((0, v.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, r.jsx)(M, {
            title: P.intl.string(P.t.hIhAMz),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, r.jsx)(c.Text, {
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
    return (0, r.jsx)(M, {
        title: t ? P.intl.string(P.t.enxcAg) : P.intl.string(P.t['Ms+6Zm']),
        content: n
    });
}
function M(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)('div', {
        className: R.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                className: R.rowContent,
                children: n
            })
        ]
    });
}
function B(e) {
    let { type: t, title: n } = e;
    return (0, r.jsx)(c.Wn, {
        messageType: 'warning' === t ? c.QYI.WARNING : c.QYI.ERROR,
        className: R.noticeBanner,
        children: (0, r.jsx)(c.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function U(e) {
    let { app: t, storeListing: i, sku: l, subscription: a, isCancelled: u, guild: p, renewalSkuId: h, navigateToSwitchPlan: f } = e,
        b = (0, T.OL)(l),
        { analyticsLocations: _ } = (0, m.ZP)(),
        [x, j] = s.useState(!1),
        C = (0, g.q)(t.id),
        S = (0, o.e7)([O.Z], () => O.Z.getParentSKU(i.skuId), [i.skuId]),
        v = s.useMemo(() => (null == S ? [] : (0, y.$)(i.id, S, C.subscriptions)), [i.id, C, S]),
        I = 0 !== v.length,
        N = async () => {
            try {
                j(!0);
                let { subscription: e } = await (0, d.pl)(a, _);
                if (null == e) return;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            Z(D({}, n), {
                                storeListing: i,
                                subscription: E.Z.createFromServer(e)
                            })
                        );
                });
            } finally {
                j(!1);
            }
        };
    return (0, r.jsxs)('div', {
        className: R.managementBtns,
        children: [
            b
                ? null
                : u
                  ? (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        size: c.zxk.Sizes.SMALL,
                        onClick: N,
                        submitting: x,
                        children: P.intl.string(P.t.QtMnkZ)
                    })
                  : (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.CUSTOM,
                        size: c.zxk.Sizes.SMALL,
                        className: R.secondaryBtn,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        Z(D({}, n), {
                                            application: t,
                                            storeListing: i,
                                            subscription: a,
                                            guild: p
                                        })
                                    );
                            });
                        },
                        children: P.intl.string(P.t['E8G/tr'])
                    }),
            I &&
                null != S &&
                !1 === u &&
                (0, r.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.SMALL,
                    onClick: () => {
                        f({
                            currentSubscription: a,
                            alternativeListings: v,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: i,
                            renewalSkuId: h
                        });
                    },
                    children: P.intl.string(P.t.R74ZBQ)
                })
        ]
    });
}
function V(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(h.Z, {
        children: (e) =>
            (0, r.jsxs)('div', {
                className: R.benefits,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.benefitsHeader,
                        children: [
                            e &&
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: P.intl.string(P.t['mORL6+'])
                                }),
                            (0, r.jsx)(h.Z.Toggle, {
                                className: R.benefitsBtn,
                                text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: s, icon: l } = e;
                              return (0, r.jsx)(
                                  a.Gm,
                                  {
                                      header: i,
                                      icon: (0, I.n)(t, l),
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
