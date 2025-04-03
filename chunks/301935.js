n.d(t, {
    G: () => w,
    Z: () => k
}),
    n(47120),
    n(266796);
var r,
    i = n(200651),
    s = n(192379),
    a = n(561537),
    l = n(269210),
    o = n(442837),
    c = n(481060),
    d = n(355467),
    u = n(100527),
    m = n(906732),
    g = n(601911),
    p = n(283836),
    h = n(887818),
    f = n(728345),
    b = n(565138),
    N = n(374649),
    x = n(908951),
    _ = n(255078),
    E = n(430824),
    j = n(509545),
    O = n(55563),
    C = n(551428),
    S = n(937615),
    v = n(171246),
    T = n(889989),
    I = n(63487),
    y = n(547283),
    A = n(981631),
    P = n(388032),
    R = n(588357);
function D(e) {
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
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var w = (((r = {})[(r.LOADING = 0)] = 'LOADING'), (r[(r.DONE = 1)] = 'DONE'), (r[(r.ERROR = 2)] = 'ERROR'), r);
function k(e) {
    var t, n, r, l, d;
    let { subscription: p, navigateToSwitchPlan: h, loadingState: _ } = e,
        T = null == (t = p.metadata) ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: y, planId: D } = p,
        {
            appId: Z,
            plan: w,
            storeListing: k,
            price: V,
            isGuildSubscription: G,
            subscriptionForGuild: F,
            sku: H,
            isCancelled: z,
            renewalPlan: Y
        } = (0, o.cj)(
            [j.Z, O.Z, C.Z, E.Z],
            () => {
                let e,
                    t = j.Z.get(D),
                    n = null != t ? O.Z.get(t.skuId) : void 0,
                    r = null == n ? void 0 : n.applicationId,
                    i = null != t ? C.Z.getForSKU(t.skuId) : null,
                    s = null != t ? (0, S.og)((0, S.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    a = null != i && (0, v.KK)(i.skuFlags),
                    l = a && null != T ? E.Z.getGuild(T) : void 0,
                    o = (0, v.Jf)(p, n);
                if (!1 === o && null != y && y.items.length > 0) {
                    var c;
                    let t = y.items[0];
                    e = null != (c = j.Z.get(t.planId)) ? c : void 0;
                }
                return {
                    appId: r,
                    isGuildSubscription: a,
                    plan: t,
                    price: s,
                    sku: n,
                    storeListing: i,
                    subscriptionForGuild: l,
                    isCancelled: o,
                    renewalPlan: e
                };
            },
            [T, D, y, p]
        ),
        { data: K } = (0, f.IX)(Z),
        q = s.useMemo(() => (null != K ? (0, g.y)(K, 100) : null), [K]),
        X = null != (n = null == H ? void 0 : H.deleted) && n,
        J = null != H && (0, v.OL)(H),
        Q = p.status === A.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, m.ZP)(),
        [ee] = (0, N.ED)({
            subscriptionId: p.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        et = (0, I.p)(p.currentPeriodEnd),
        en = 0 === _;
    return (0, i.jsxs)(a.l, {
        headerClassName: R.headerWrapper,
        header:
            !1 === en
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: R.headerContent,
                              children: [
                                  null != q &&
                                      (0, i.jsx)(c.Eep, {
                                          src: q.href,
                                          imageClassName: R.appIcon,
                                          width: 40,
                                          height: 40
                                      }),
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(c.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: null != (r = null == K ? void 0 : K.name) ? r : P.NW.string(P.t['7kqy7e'])
                                          }),
                                          (0, i.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: 'header-secondary',
                                              children: null != (l = null == w ? void 0 : w.name) ? l : P.NW.string(P.t.sqkbMD)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: R.headerButtons,
                              children:
                                  null != K &&
                                  null != k &&
                                  null != H &&
                                  (0, i.jsx)(M, {
                                      subscription: p,
                                      app: K,
                                      sku: H,
                                      storeListing: k,
                                      isCancelled: z,
                                      navigateToSwitchPlan: h,
                                      renewalSkuId: null == Y ? void 0 : Y.skuId
                                  })
                          })
                      ]
                  })
                : (0, i.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
        children: [
            z &&
                (0, i.jsx)(B, {
                    type: 'warning',
                    title: J ? P.NW.formatToPlainString(P.t.QOnM19, { subscriptionPeriodEnd: et }) : P.NW.formatToPlainString(P.t.HOaZu7, { subscriptionPeriodEnd: et })
                }),
            Q &&
                (0, i.jsx)(B, {
                    type: 'danger',
                    title: P.NW.string(P.t.fvOqBg)
                }),
            (0, i.jsxs)('div', {
                className: R.details,
                children: [
                    (0, i.jsx)(L, {
                        title: P.NW.string(P.t['5D/KEB']),
                        content: G
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('span', {
                                          className: R.subscriptionTypeRow,
                                          children: [(0, i.jsx)(c.QTo, { size: 'xs' }), P.NW.string(P.t.QjL3vr)]
                                      }),
                                      null != F &&
                                          (0, i.jsxs)('span', {
                                              className: R.guildSubscriptionContentRow,
                                              children: [
                                                  (0, i.jsx)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: P.NW.format(P.t['7ZD8p6'], { guildName: F.name })
                                                  }),
                                                  (0, i.jsx)(b.Z, {
                                                      guild: F,
                                                      size: b.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, i.jsxs)('span', {
                                  className: R.subscriptionTypeRow,
                                  children: [(0, i.jsx)(c.tBG, { size: 'xs' }), P.NW.string(P.t['6anEVl'])]
                              })
                    }),
                    null != V &&
                        (0, i.jsx)(L, {
                            title: P.NW.string(P.t.KI7ER0),
                            content: V
                        }),
                    (0, i.jsx)(L, {
                        title: P.NW.string(P.t.dnUzb2),
                        content: (0, I.p)(null != (d = p.createdAt) ? d : p.currentPeriodStart)
                    }),
                    (0, i.jsx)(W, {
                        isCancelled: z,
                        subscriptionPeriodEnd: et,
                        renewalPlan: Y
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: R.payment,
                children: [
                    (0, i.jsx)(c.vwX, { children: P.NW.string(P.t.azZaZW) }),
                    null != ee &&
                        !(en || 2 === _) &&
                        (0, i.jsx)(x.Z, {
                            subscription: p,
                            currentInvoicePreview: ee,
                            disabled: X || z
                        })
                ]
            }),
            null != K &&
                (null == k ? void 0 : k.benefits) != null &&
                k.benefits.length > 0 &&
                (0, i.jsx)(U, {
                    appId: K.id,
                    listingBenefits: k.benefits
                })
        ]
    });
}
function W(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: r } = e;
    if (null != r) {
        let e = (0, S.og)((0, S.T4)(r.price, r.currency), r.interval, r.intervalCount);
        return (0, i.jsx)(L, {
            title: P.NW.string(P.t.hIhAMz),
            content: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: n
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: P.NW.format(P.t.MCLbvr, {
                            planName: r.name,
                            price: e
                        })
                    })
                ]
            })
        });
    }
    return (0, i.jsx)(L, {
        title: t ? P.NW.string(P.t.enxcAg) : P.NW.string(P.t['Ms+6Zm']),
        content: n
    });
}
function L(e) {
    let { title: t, content: n } = e;
    return (0, i.jsxs)('div', {
        className: R.row,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/medium',
                className: R.rowContent,
                children: n
            })
        ]
    });
}
function B(e) {
    let { type: t, title: n } = e;
    return (0, i.jsx)(c.Wn, {
        messageType: 'warning' === t ? c.QYI.WARNING : c.QYI.ERROR,
        className: R.noticeBanner,
        children: (0, i.jsx)(c.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function M(e) {
    let { app: t, storeListing: r, sku: a, subscription: l, isCancelled: u, guild: g, renewalSkuId: h, navigateToSwitchPlan: f } = e,
        b = (0, v.OL)(a),
        { analyticsLocations: N } = (0, m.ZP)(),
        [x, E] = s.useState(!1),
        j = (0, p.q)(t.id),
        C = (0, o.e7)([O.Z], () => O.Z.getParentSKU(r.skuId), [r.skuId]),
        S = s.useMemo(() => (null == C ? [] : (0, y.$)(r.id, C, j.subscriptions)), [r.id, j, C]),
        T = 0 !== S.length,
        I = async () => {
            try {
                E(!0);
                let { subscription: e } = await (0, d.pl)(l, N);
                if (null == e) return;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, i.jsx)(
                            t,
                            Z(D({}, n), {
                                storeListing: r,
                                subscription: _.Z.createFromServer(e)
                            })
                        );
                });
            } finally {
                E(!1);
            }
        };
    return (0, i.jsxs)('div', {
        className: R.managementBtns,
        children: [
            b
                ? null
                : u
                  ? (0, i.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        size: c.zxk.Sizes.SMALL,
                        onClick: I,
                        submitting: x,
                        children: P.NW.string(P.t.QtMnkZ)
                    })
                  : (0, i.jsx)(c.zxk, {
                        color: c.zxk.Colors.CUSTOM,
                        size: c.zxk.Sizes.SMALL,
                        className: R.secondaryBtn,
                        onClick: () => {
                            (0, c.ZDy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, i.jsx)(
                                        e,
                                        Z(D({}, n), {
                                            application: t,
                                            storeListing: r,
                                            subscription: l,
                                            guild: g
                                        })
                                    );
                            });
                        },
                        children: P.NW.string(P.t['E8G/tr'])
                    }),
            T &&
                null != C &&
                !1 === u &&
                (0, i.jsx)(c.zxk, {
                    color: c.zxk.Colors.BRAND,
                    size: c.zxk.Sizes.SMALL,
                    onClick: () => {
                        f({
                            currentSubscription: l,
                            alternativeListings: S,
                            app: t,
                            subscriptionGroup: C,
                            currentListing: r,
                            renewalSkuId: h
                        });
                    },
                    children: P.NW.string(P.t.R74ZBQ)
                })
        ]
    });
}
function U(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, i.jsx)(h.Z, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: R.benefits,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.benefitsHeader,
                        children: [
                            e &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: P.NW.string(P.t['mORL6+'])
                                }),
                            (0, i.jsx)(h.Z.Toggle, {
                                className: R.benefitsBtn,
                                text: e ? P.NW.string(P.t.gsbFAw) : P.NW.string(P.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: r, description: s, icon: a } = e;
                              return (0, i.jsx)(
                                  l.Gm,
                                  {
                                      header: r,
                                      icon: (0, T.n)(t, a),
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
