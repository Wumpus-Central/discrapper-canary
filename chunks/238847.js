n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(722770),
    d = n(442837),
    u = n(481060),
    m = n(355467),
    h = n(100527),
    g = n(906732),
    _ = n(878596),
    x = n(313201),
    p = n(565138),
    E = n(404203),
    C = n(330181),
    f = n(374649),
    T = n(908951),
    N = n(255078),
    I = n(853872),
    S = n(171246),
    b = n(41959),
    v = n(650919),
    j = n(981631),
    A = n(388032),
    O = n(116714);
let R = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
        return (0, i.jsxs)('div', {
            className: O.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: O.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(u.X6q, {
                            variant: 'heading-deprecated-12/semibold',
                            className: O.infoCardLabel,
                            children: t
                        }),
                        s &&
                            (0, i.jsx)(u.ua7, {
                                text: r,
                                children: (e) =>
                                    (0, i.jsx)(u.d3s, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: O.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, i.jsx)(u.X6q, {
                    variant: 'heading-xl/semibold',
                    className: O.infoCardValue,
                    children: n
                })
            ]
        });
    },
    P = (e) => {
        let { subscription: t, disabled: n } = e,
            { analyticsLocations: s } = (0, g.ZP)(),
            [r] = (0, f.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: s,
                analyticsLocation: h.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([I.Z], () => I.Z.hasFetchedPaymentSources)
            ? null == r
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.vwX, { children: A.intl.string(A.t.azZaZW) }),
                          (0, i.jsx)(T.Z, {
                              subscription: t,
                              currentInvoicePreview: r,
                              dropdownClassName: O.paymentSourceDropdown,
                              disabled: n
                          })
                      ]
                  })
            : (0, i.jsx)(u.$jN, {});
    },
    D = (e) => {
        let { isCancelled: t, onCancelSubscriptionClick: n, isResubscribing: s, onResubscribeClick: r } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.vwX, { children: A.intl.string(A.t.gZVAur) }),
                (0, i.jsx)('div', {
                    className: O.__invalid_rowButtons,
                    children: t
                        ? (0, i.jsx)(u.zxk, {
                              onClick: r,
                              submitting: s,
                              children: A.intl.string(A.t['Ms+Eoa'])
                          })
                        : (0, i.jsx)(_.Z, {
                              label: A.intl.string(A.t.Tb6MV1),
                              onClick: n
                          })
                })
            ]
        });
    },
    Z = (e) => {
        let { subscription: t } = e,
            { storeListing: r, groupListing: a, guild: d, expanded: h, handleToggleExpanded: _, subscriptionInfo: f, application: T } = (0, v.Z)(t),
            I = (0, x.Dt)(),
            [Z, y] = s.useState(!1),
            { analyticsLocations: k } = (0, g.ZP)();
        if (null == a || null == r || null == f) return null;
        let L = async () => {
                try {
                    y(!0);
                    let { subscription: e } = await m.pl(t, k);
                    null != e &&
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    storeListing: r,
                                    subscription: N.Z.createFromServer(e),
                                    ...n
                                });
                        });
                } finally {
                    y(!1);
                }
            },
            { isCancelled: B, isDeleted: M, isPastDue: w, subscriptionPlanPrice: V, subscribedSinceDate: U, currentPeriodEndDate: G, currentPeriodEndLabel: F } = f,
            H = (0, S.KW)(r.skuFlags),
            z = (0, S.KK)(r.skuFlags),
            Y = null == T || ((!z || null == d) && !H),
            W = () =>
                B || M
                    ? (0, i.jsx)(u.IGR, { text: A.intl.string(A.t.xSMZub) })
                    : w
                      ? (0, i.jsx)(u.ua7, {
                            text: A.intl.string(A.t.fvOqBg),
                            children: (e) =>
                                (0, i.jsx)('div', {
                                    ...e,
                                    children: (0, i.jsx)(u.IGR, {
                                        className: O.paymentDueBadge,
                                        text: A.intl.string(A.t['DQ+YIC']),
                                        color: c.Z.YELLOW_300
                                    })
                                })
                        })
                      : null,
            K = null;
        if (z) {
            var X;
            K = (0, i.jsxs)(u.Text, {
                variant: 'text-sm/normal',
                className: O.tierName,
                children: [
                    A.intl.format(A.t['5YBAcX'], { guildName: null !== (X = null == d ? void 0 : d.name) && void 0 !== X ? X : A.intl.string(A.t.FsYvDw) }),
                    null != d &&
                        (0, i.jsx)(p.Z, {
                            guild: d,
                            size: p.Z.Sizes.MINI,
                            className: O.guildIcon
                        })
                ]
            });
        } else
            H &&
                (K = (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: O.tierName,
                    children: A.intl.string(A.t['6anEVl'])
                }));
        return (0, i.jsxs)('div', {
            className: O.container,
            children: [
                (0, i.jsx)(E.Z, {
                    onClick: _,
                    className: O.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != T &&
                                    (0, i.jsx)(b.Z, {
                                        size: b.H.SMALL,
                                        className: O.applicationIcon,
                                        application: T,
                                        asset: r.thumbnail
                                    }),
                                (0, i.jsxs)('div', {
                                    className: O.headerTextContainer,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/medium',
                                            className: O.applicationName,
                                            children: null != T ? T.name : A.intl.string(A.t['7kqy7e'])
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: O.headerSubtitleContainer,
                                            children: [K, W()]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(u.P3F, {
                                    onClick: n(_),
                                    'aria-label': A.intl.string(A.t.hBUzy8),
                                    'aria-controls': I,
                                    'aria-expanded': h,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(u.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: l()(O.arrowIcon, { [O.arrowIconExpanded]: h })
                                    })
                                })
                            ]
                        });
                    }
                }),
                h
                    ? (0, i.jsxs)('div', {
                          id: I,
                          children: [
                              (0, i.jsx)('div', { className: O.divider }),
                              M
                                  ? (0, i.jsx)(u.Wn, {
                                        messageType: u.QYI.WARNING,
                                        className: O.deletedHelpMessage,
                                        children: A.intl.string(A.t.cNtzcX)
                                    })
                                  : null,
                              (0, i.jsx)(C.Z, {
                                  groupListingId: a.id,
                                  subscription: t,
                                  className: O.changePlanNotice
                              }),
                              (0, i.jsxs)('div', {
                                  className: O.subscriptionInfoCards,
                                  children: [
                                      (0, i.jsx)(R, {
                                          label: F,
                                          value: A.intl.formatToPlainString(A.t['0UHiHR'], { timestamp: G.getTime() })
                                      }),
                                      (0, i.jsx)(R, {
                                          label: A.intl.string(A.t.qgcLBw),
                                          value: V
                                      }),
                                      (0, i.jsx)(R, {
                                          label: A.intl.string(A.t.oFwls7),
                                          value: A.intl.formatToPlainString(A.t['aO8U8/'], { timestamp: U.getTime() })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(u.LZC, { size: 16 }),
                              t.status === j.O0b.ACTIVE &&
                                  (0, i.jsx)(P, {
                                      subscription: t,
                                      disabled: M
                                  }),
                              !Y &&
                                  (0, i.jsx)(D, {
                                      isCancelled: B,
                                      onCancelSubscriptionClick: () => {
                                          o()(null != T, 'Application cannot be null'),
                                              (0, u.ZDy)(async () => {
                                                  let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                                  return (n) =>
                                                      (0, i.jsx)(e, {
                                                          application: T,
                                                          storeListing: r,
                                                          subscription: t,
                                                          guild: d,
                                                          ...n
                                                      });
                                              });
                                      },
                                      isResubscribing: Z,
                                      onResubscribeClick: L
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
