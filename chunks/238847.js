n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(512722),
    o = n.n(l),
    c = n(722770),
    d = n(442837),
    u = n(481060),
    m = n(355467),
    g = n(100527),
    h = n(906732),
    p = n(878596),
    x = n(313201),
    f = n(565138),
    _ = n(404203),
    E = n(330181),
    C = n(374649),
    T = n(908951),
    S = n(255078),
    b = n(853872),
    I = n(171246),
    N = n(41959),
    v = n(650919),
    A = n(981631),
    j = n(388032),
    R = n(116714);
let O = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
        return (0, i.jsxs)('div', {
            className: R.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: R.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(u.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: R.infoCardLabel,
                            children: t
                        }),
                        s &&
                            (0, i.jsx)(u.Tooltip, {
                                text: r,
                                children: (e) =>
                                    (0, i.jsx)(u.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: R.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-xl/semibold',
                    className: R.infoCardValue,
                    children: n
                })
            ]
        });
    },
    P = (e) => {
        let { subscription: t, disabled: n } = e,
            { analyticsLocations: s } = (0, h.ZP)(),
            [r] = (0, C.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: s,
                analyticsLocation: g.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([b.Z], () => b.Z.hasFetchedPaymentSources)
            ? null == r
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.FormTitle, { children: j.intl.string(j.t.azZaZW) }),
                          (0, i.jsx)(T.Z, {
                              subscription: t,
                              currentInvoicePreview: r,
                              dropdownClassName: R.paymentSourceDropdown,
                              disabled: n
                          })
                      ]
                  })
            : (0, i.jsx)(u.Spinner, {});
    },
    y = (e) => {
        let { isCancelled: t, onCancelSubscriptionClick: n, isResubscribing: s, onResubscribeClick: r } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.FormTitle, { children: j.intl.string(j.t.gZVAur) }),
                (0, i.jsx)('div', {
                    className: R.__invalid_rowButtons,
                    children: t
                        ? (0, i.jsx)(u.Button, {
                              onClick: r,
                              submitting: s,
                              children: j.intl.string(j.t['Ms+Eoa'])
                          })
                        : (0, i.jsx)(p.Z, {
                              label: j.intl.string(j.t.Tb6MV1),
                              onClick: n
                          })
                })
            ]
        });
    };
t.Z = (e) => {
    let { subscription: t } = e,
        { storeListing: r, groupListing: l, guild: d, expanded: g, handleToggleExpanded: p, subscriptionInfo: C, application: T } = (0, v.Z)(t),
        b = (0, x.Dt)(),
        [D, B] = s.useState(!1),
        { analyticsLocations: Z } = (0, h.ZP)();
    if (null == l || null == r || null == C) return null;
    let L = () => {
            o()(null != T, 'Application cannot be null'),
                (0, u.openModalLazy)(async () => {
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
        M = async () => {
            try {
                B(!0);
                let { subscription: e } = await m.pl(t, Z);
                null != e &&
                    (0, u.openModalLazy)(async () => {
                        let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                        return (n) =>
                            (0, i.jsx)(t, {
                                storeListing: r,
                                subscription: S.Z.createFromServer(e),
                                ...n
                            });
                    });
            } finally {
                B(!1);
            }
        },
        { isCancelled: k, isDeleted: w, isPastDue: F, subscriptionPlanPrice: U, subscribedSinceDate: V, currentPeriodEndDate: G, currentPeriodEndLabel: H } = C,
        Y = (0, I.KW)(r.skuFlags),
        W = (0, I.KK)(r.skuFlags),
        z = null == T || ((!W || null == d) && !Y),
        K = () =>
            k || w
                ? (0, i.jsx)(u.TextBadge, { text: j.intl.string(j.t.xSMZub) })
                : F
                  ? (0, i.jsx)(u.Tooltip, {
                        text: j.intl.string(j.t.fvOqBg),
                        children: (e) =>
                            (0, i.jsx)('div', {
                                ...e,
                                children: (0, i.jsx)(u.TextBadge, {
                                    className: R.paymentDueBadge,
                                    text: j.intl.string(j.t['DQ+YIC']),
                                    color: c.Z.YELLOW_300
                                })
                            })
                    })
                  : null,
        q = null;
    if (W) {
        var Q;
        q = (0, i.jsxs)(u.Text, {
            variant: 'text-sm/normal',
            className: R.tierName,
            children: [
                j.intl.format(j.t['5YBAcX'], { guildName: null !== (Q = null == d ? void 0 : d.name) && void 0 !== Q ? Q : j.intl.string(j.t.FsYvDw) }),
                null != d &&
                    (0, i.jsx)(f.Z, {
                        guild: d,
                        size: f.Z.Sizes.MINI,
                        className: R.guildIcon
                    })
            ]
        });
    } else
        Y &&
            (q = (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                className: R.tierName,
                children: j.intl.string(j.t['6anEVl'])
            }));
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsx)(_.Z, {
                onClick: p,
                className: R.headerContainer,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != T &&
                                (0, i.jsx)(N.Z, {
                                    size: N.H.SMALL,
                                    className: R.applicationIcon,
                                    application: T,
                                    asset: r.thumbnail
                                }),
                            (0, i.jsxs)('div', {
                                className: R.headerTextContainer,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        className: R.applicationName,
                                        children: null != T ? T.name : j.intl.string(j.t['7kqy7e'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: R.headerSubtitleContainer,
                                        children: [q, K()]
                                    })
                                ]
                            }),
                            (0, i.jsx)(u.Clickable, {
                                onClick: n(p),
                                'aria-label': j.intl.string(j.t.hBUzy8),
                                'aria-controls': b,
                                'aria-expanded': g,
                                focusProps: { ringTarget: t },
                                children: (0, i.jsx)(u.ChevronSmallDownIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(R.arrowIcon, { [R.arrowIconExpanded]: g })
                                })
                            })
                        ]
                    });
                }
            }),
            g
                ? (0, i.jsxs)('div', {
                      id: b,
                      children: [
                          (0, i.jsx)('div', { className: R.divider }),
                          w
                              ? (0, i.jsx)(u.HelpMessage, {
                                    messageType: u.HelpMessageTypes.WARNING,
                                    className: R.deletedHelpMessage,
                                    children: j.intl.string(j.t.cNtzcX)
                                })
                              : null,
                          (0, i.jsx)(E.Z, {
                              groupListingId: l.id,
                              subscription: t,
                              className: R.changePlanNotice
                          }),
                          (0, i.jsxs)('div', {
                              className: R.subscriptionInfoCards,
                              children: [
                                  (0, i.jsx)(O, {
                                      label: H,
                                      value: j.intl.formatToPlainString(j.t['0UHiHR'], { timestamp: G.getTime() })
                                  }),
                                  (0, i.jsx)(O, {
                                      label: j.intl.string(j.t.qgcLBw),
                                      value: U
                                  }),
                                  (0, i.jsx)(O, {
                                      label: j.intl.string(j.t.oFwls7),
                                      value: j.intl.formatToPlainString(j.t['aO8U8/'], { timestamp: V.getTime() })
                                  })
                              ]
                          }),
                          (0, i.jsx)(u.Spacer, { size: 16 }),
                          t.status === A.O0b.ACTIVE &&
                              (0, i.jsx)(P, {
                                  subscription: t,
                                  disabled: w
                              }),
                          !z &&
                              (0, i.jsx)(y, {
                                  isCancelled: k,
                                  onCancelSubscriptionClick: L,
                                  isResubscribing: D,
                                  onResubscribeClick: M
                              })
                      ]
                  })
                : null
        ]
    });
};
