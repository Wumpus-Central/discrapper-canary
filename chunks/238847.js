n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(722770),
    d = n(442837),
    u = n(481060),
    m = n(355467),
    g = n(100527),
    p = n(906732),
    h = n(878596),
    f = n(313201),
    b = n(565138),
    N = n(404203),
    x = n(330181),
    _ = n(374649),
    E = n(908951),
    j = n(255078),
    C = n(853872),
    O = n(171246),
    v = n(41959),
    S = n(650919),
    T = n(981631),
    I = n(388032),
    y = n(810275);
function A(e) {
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
function P(e, t) {
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
let R = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: s } = e;
        return (0, r.jsxs)('div', {
            className: y.infoCard,
            children: [
                (0, r.jsxs)('div', {
                    className: y.infoCardLabelContainer,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-deprecated-12/semibold',
                            className: y.infoCardLabel,
                            children: t
                        }),
                        i &&
                            (0, r.jsx)(u.ua7, {
                                text: s,
                                children: (e) =>
                                    (0, r.jsx)(
                                        u.d3s,
                                        P(
                                            A(
                                                {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                },
                                                e
                                            ),
                                            { className: y.infoCardIcon }
                                        )
                                    )
                            })
                    ]
                }),
                (0, r.jsx)(u.X6q, {
                    variant: 'heading-xl/semibold',
                    className: y.infoCardValue,
                    children: n
                })
            ]
        });
    },
    D = (e) => {
        let { subscription: t, disabled: n } = e,
            { analyticsLocations: i } = (0, p.ZP)(),
            [s] = (0, _.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: g.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([C.Z], () => C.Z.hasFetchedPaymentSources)
            ? null == s
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.vwX, { children: I.NW.string(I.t.azZaZW) }),
                          (0, r.jsx)(E.Z, {
                              subscription: t,
                              currentInvoicePreview: s,
                              dropdownClassName: y.paymentSourceDropdown,
                              disabled: n
                          })
                      ]
                  })
            : (0, r.jsx)(u.$jN, {});
    },
    Z = (e) => {
        let { isCancelled: t, onCancelSubscriptionClick: n, isResubscribing: i, onResubscribeClick: s } = e;
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(u.vwX, { children: I.NW.string(I.t.gZVAur) }),
                (0, r.jsx)('div', {
                    className: y.__invalid_rowButtons,
                    children: t
                        ? (0, r.jsx)(u.zxk, {
                              onClick: s,
                              submitting: i,
                              children: I.NW.string(I.t['Ms+Eoa'])
                          })
                        : (0, r.jsx)(h.Z, {
                              label: I.NW.string(I.t.Tb6MV1),
                              onClick: n
                          })
                })
            ]
        });
    },
    w = (e) => {
        let { subscription: t } = e,
            { storeListing: s, groupListing: l, guild: d, expanded: g, handleToggleExpanded: h, subscriptionInfo: _, application: E } = (0, S.Z)(t),
            C = (0, f.Dt)(),
            [w, k] = i.useState(!1),
            { analyticsLocations: W } = (0, p.ZP)();
        if (null == l || null == s || null == _) return null;
        let L = async () => {
                try {
                    k(!0);
                    let { subscription: e } = await m.pl(t, W);
                    null != e &&
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    A(
                                        {
                                            storeListing: s,
                                            subscription: j.Z.createFromServer(e)
                                        },
                                        n
                                    )
                                );
                        });
                } finally {
                    k(!1);
                }
            },
            { isCancelled: B, isDeleted: M, isPastDue: U, subscriptionPlanPrice: V, subscribedSinceDate: G, currentPeriodEndDate: F, currentPeriodEndLabel: H } = _,
            z = (0, O.KW)(s.skuFlags),
            Y = (0, O.KK)(s.skuFlags),
            K = null == E || ((!Y || null == d) && !z),
            q = () =>
                B || M
                    ? (0, r.jsx)(u.IGR, { text: I.NW.string(I.t.xSMZub) })
                    : U
                      ? (0, r.jsx)(u.ua7, {
                            text: I.NW.string(I.t.fvOqBg),
                            children: (e) =>
                                (0, r.jsx)(
                                    'div',
                                    P(A({}, e), {
                                        children: (0, r.jsx)(u.IGR, {
                                            className: y.paymentDueBadge,
                                            text: I.NW.string(I.t['DQ+YIC']),
                                            color: c.Z.YELLOW_300
                                        })
                                    })
                                )
                        })
                      : null,
            X = null;
        if (Y) {
            var J;
            X = (0, r.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                className: y.tierName,
                children: [
                    I.NW.format(I.t['5YBAcX'], { guildName: null !== (J = null == d ? void 0 : d.name) && void 0 !== J ? J : I.NW.string(I.t.FsYvDw) }),
                    null != d &&
                        (0, r.jsx)(b.Z, {
                            guild: d,
                            size: b.Z.Sizes.MINI,
                            className: y.guildIcon
                        })
                ]
            });
        } else
            z &&
                (X = (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: y.tierName,
                    children: I.NW.string(I.t['6anEVl'])
                }));
        return (0, r.jsxs)('div', {
            className: y.container,
            children: [
                (0, r.jsx)(N.Z, {
                    onClick: h,
                    className: y.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != E &&
                                    (0, r.jsx)(v.Z, {
                                        size: v.H.SMALL,
                                        className: y.applicationIcon,
                                        application: E,
                                        asset: s.thumbnail
                                    }),
                                (0, r.jsxs)('div', {
                                    className: y.headerTextContainer,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-md/medium',
                                            className: y.applicationName,
                                            children: null != E ? E.name : I.NW.string(I.t['7kqy7e'])
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: y.headerSubtitleContainer,
                                            children: [X, q()]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(u.P3F, {
                                    onClick: n(h),
                                    'aria-label': I.NW.string(I.t.hBUzy8),
                                    'aria-controls': C,
                                    'aria-expanded': g,
                                    focusProps: { ringTarget: t },
                                    children: (0, r.jsx)(u.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: a()(y.arrowIcon, { [y.arrowIconExpanded]: g })
                                    })
                                })
                            ]
                        });
                    }
                }),
                g
                    ? (0, r.jsxs)('div', {
                          id: C,
                          children: [
                              (0, r.jsx)('div', { className: y.divider }),
                              M
                                  ? (0, r.jsx)(u.Wn, {
                                        messageType: u.QYI.WARNING,
                                        className: y.deletedHelpMessage,
                                        children: I.NW.string(I.t.cNtzcX)
                                    })
                                  : null,
                              (0, r.jsx)(x.Z, {
                                  groupListingId: l.id,
                                  subscription: t,
                                  className: y.changePlanNotice
                              }),
                              (0, r.jsxs)('div', {
                                  className: y.subscriptionInfoCards,
                                  children: [
                                      (0, r.jsx)(R, {
                                          label: H,
                                          value: I.NW.formatToPlainString(I.t['0UHiHR'], { timestamp: F.getTime() })
                                      }),
                                      (0, r.jsx)(R, {
                                          label: I.NW.string(I.t.qgcLBw),
                                          value: V
                                      }),
                                      (0, r.jsx)(R, {
                                          label: I.NW.string(I.t.oFwls7),
                                          value: I.NW.formatToPlainString(I.t['aO8U8/'], { timestamp: G.getTime() })
                                      })
                                  ]
                              }),
                              (0, r.jsx)(u.LZC, { size: 16 }),
                              t.status === T.O0b.ACTIVE &&
                                  (0, r.jsx)(D, {
                                      subscription: t,
                                      disabled: M
                                  }),
                              !K &&
                                  (0, r.jsx)(Z, {
                                      isCancelled: B,
                                      onCancelSubscriptionClick: () => {
                                          o()(null != E, 'Application cannot be null'),
                                              (0, u.ZDy)(async () => {
                                                  let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                                  return (n) =>
                                                      (0, r.jsx)(
                                                          e,
                                                          A(
                                                              {
                                                                  application: E,
                                                                  storeListing: s,
                                                                  subscription: t,
                                                                  guild: d
                                                              },
                                                              n
                                                          )
                                                      );
                                              });
                                      },
                                      isResubscribing: w,
                                      onResubscribeClick: L
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
