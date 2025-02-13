n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(722770),
    d = n(442837),
    u = n(481060),
    h = n(355467),
    m = n(100527),
    g = n(906732),
    x = n(878596),
    _ = n(313201),
    p = n(565138),
    E = n(404203),
    C = n(330181),
    N = n(374649),
    I = n(908951),
    f = n(255078),
    T = n(853872),
    S = n(171246),
    j = n(41959),
    v = n(650919),
    b = n(981631),
    A = n(388032),
    O = n(366203);
let R = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: l } = e;
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
                                text: l,
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
    D = (e) => {
        let { subscription: t, disabled: n } = e,
            { analyticsLocations: s } = (0, g.ZP)(),
            [l] = (0, N.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: s,
                analyticsLocation: m.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([T.Z], () => T.Z.hasFetchedPaymentSources)
            ? null == l
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.vwX, { children: A.intl.string(A.t.azZaZW) }),
                          (0, i.jsx)(I.Z, {
                              subscription: t,
                              currentInvoicePreview: l,
                              dropdownClassName: O.paymentSourceDropdown,
                              disabled: n
                          })
                      ]
                  })
            : (0, i.jsx)(u.$jN, {});
    },
    P = (e) => {
        let { isCancelled: t, onCancelSubscriptionClick: n, isResubscribing: s, onResubscribeClick: l } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.vwX, { children: A.intl.string(A.t.gZVAur) }),
                (0, i.jsx)('div', {
                    className: O.__invalid_rowButtons,
                    children: t
                        ? (0, i.jsx)(u.zxk, {
                              onClick: l,
                              submitting: s,
                              children: A.intl.string(A.t['Ms+Eoa'])
                          })
                        : (0, i.jsx)(x.Z, {
                              label: A.intl.string(A.t.Tb6MV1),
                              onClick: n
                          })
                })
            ]
        });
    },
    y = (e) => {
        let { subscription: t } = e,
            { storeListing: l, groupListing: a, guild: d, expanded: m, handleToggleExpanded: x, subscriptionInfo: N, application: I } = (0, v.Z)(t),
            T = (0, _.Dt)(),
            [y, Z] = s.useState(!1),
            { analyticsLocations: L } = (0, g.ZP)();
        if (null == a || null == l || null == N) return null;
        let k = async () => {
                try {
                    Z(!0);
                    let { subscription: e } = await h.pl(t, L);
                    null != e &&
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                            return (n) =>
                                (0, i.jsx)(t, {
                                    storeListing: l,
                                    subscription: f.Z.createFromServer(e),
                                    ...n
                                });
                        });
                } finally {
                    Z(!1);
                }
            },
            { isCancelled: B, isDeleted: M, isPastDue: V, subscriptionPlanPrice: w, subscribedSinceDate: U, currentPeriodEndDate: G, currentPeriodEndLabel: F } = N,
            z = (0, S.KW)(l.skuFlags),
            Y = (0, S.KK)(l.skuFlags),
            H = null == I || ((!Y || null == d) && !z),
            W = () =>
                B || M
                    ? (0, i.jsx)(u.IGR, { text: A.intl.string(A.t.xSMZub) })
                    : V
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
        if (Y) {
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
            z &&
                (K = (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    className: O.tierName,
                    children: A.intl.string(A.t['6anEVl'])
                }));
        return (0, i.jsxs)('div', {
            className: O.container,
            children: [
                (0, i.jsx)(E.Z, {
                    onClick: x,
                    className: O.headerContainer,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != I &&
                                    (0, i.jsx)(j.Z, {
                                        size: j.H.SMALL,
                                        className: O.applicationIcon,
                                        application: I,
                                        asset: l.thumbnail
                                    }),
                                (0, i.jsxs)('div', {
                                    className: O.headerTextContainer,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/medium',
                                            className: O.applicationName,
                                            children: null != I ? I.name : A.intl.string(A.t['7kqy7e'])
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: O.headerSubtitleContainer,
                                            children: [K, W()]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(u.P3F, {
                                    onClick: n(x),
                                    'aria-label': A.intl.string(A.t.hBUzy8),
                                    'aria-controls': T,
                                    'aria-expanded': m,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(u.CJ0, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: r()(O.arrowIcon, { [O.arrowIconExpanded]: m })
                                    })
                                })
                            ]
                        });
                    }
                }),
                m
                    ? (0, i.jsxs)('div', {
                          id: T,
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
                                          value: w
                                      }),
                                      (0, i.jsx)(R, {
                                          label: A.intl.string(A.t.oFwls7),
                                          value: A.intl.formatToPlainString(A.t['aO8U8/'], { timestamp: U.getTime() })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(u.LZC, { size: 16 }),
                              t.status === b.O0b.ACTIVE &&
                                  (0, i.jsx)(D, {
                                      subscription: t,
                                      disabled: M
                                  }),
                              !H &&
                                  (0, i.jsx)(P, {
                                      isCancelled: B,
                                      onCancelSubscriptionClick: () => {
                                          o()(null != I, 'Application cannot be null'),
                                              (0, u.ZDy)(async () => {
                                                  let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                                  return (n) =>
                                                      (0, i.jsx)(e, {
                                                          application: I,
                                                          storeListing: l,
                                                          subscription: t,
                                                          guild: d,
                                                          ...n
                                                      });
                                              });
                                      },
                                      isResubscribing: y,
                                      onResubscribeClick: k
                                  })
                          ]
                      })
                    : null
            ]
        });
    };
