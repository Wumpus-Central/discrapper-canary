n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    E = n(404203),
    _ = n(330181),
    C = n(374649),
    T = n(908951),
    S = n(255078),
    b = n(853872),
    I = n(171246),
    N = n(41959),
    v = n(650919),
    A = n(981631),
    j = n(388032),
    O = n(116714);
let R = (e) => {
        let { label: t, value: n, showInfoIcon: r, infoIconTooltipText: s } = e;
        return (0, i.jsxs)('div', {
            className: O.infoCard,
            children: [
                (0, i.jsxs)('div', {
                    className: O.infoCardLabelContainer,
                    children: [
                        (0, i.jsx)(u.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: O.infoCardLabel,
                            children: t
                        }),
                        r &&
                            (0, i.jsx)(u.Tooltip, {
                                text: s,
                                children: (e) =>
                                    (0, i.jsx)(u.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: O.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-xl/semibold',
                    className: O.infoCardValue,
                    children: n
                })
            ]
        });
    },
    P = (e) => {
        let { subscription: t, disabled: n } = e,
            { analyticsLocations: r } = (0, h.ZP)(),
            [s] = (0, C.ED)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: r,
                analyticsLocation: g.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([b.Z], () => b.Z.hasFetchedPaymentSources)
            ? null == s
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.FormTitle, { children: j.intl.string(j.t.azZaZW) }),
                          (0, i.jsx)(T.Z, {
                              subscription: t,
                              currentInvoicePreview: s,
                              dropdownClassName: O.paymentSourceDropdown,
                              disabled: n
                          })
                      ]
                  })
            : (0, i.jsx)(u.Spinner, {});
    },
    D = (e) => {
        let { isCancelled: t, onCancelSubscriptionClick: n, isResubscribing: r, onResubscribeClick: s } = e;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.FormTitle, { children: j.intl.string(j.t.gZVAur) }),
                (0, i.jsx)('div', {
                    className: O.__invalid_rowButtons,
                    children: t
                        ? (0, i.jsx)(u.Button, {
                              onClick: s,
                              submitting: r,
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
        { storeListing: s, groupListing: l, guild: d, expanded: g, handleToggleExpanded: p, subscriptionInfo: C, application: T } = (0, v.Z)(t),
        b = (0, x.Dt)(),
        [y, B] = r.useState(!1),
        { analyticsLocations: Z } = (0, h.ZP)();
    if (null == l || null == s || null == C) return null;
    let L = () => {
            o()(null != T, 'Application cannot be null'),
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                    return (n) =>
                        (0, i.jsx)(e, {
                            application: T,
                            storeListing: s,
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
                                storeListing: s,
                                subscription: S.Z.createFromServer(e),
                                ...n
                            });
                    });
            } finally {
                B(!1);
            }
        },
        { isCancelled: k, isDeleted: w, isPastDue: F, subscriptionPlanPrice: U, subscribedSinceDate: V, currentPeriodEndDate: G, currentPeriodEndLabel: H } = C,
        Y = (0, I.KW)(s.skuFlags),
        W = (0, I.KK)(s.skuFlags),
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
                                    className: O.paymentDueBadge,
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
            className: O.tierName,
            children: [
                j.intl.format(j.t['5YBAcX'], { guildName: null !== (Q = null == d ? void 0 : d.name) && void 0 !== Q ? Q : j.intl.string(j.t.FsYvDw) }),
                null != d &&
                    (0, i.jsx)(f.Z, {
                        guild: d,
                        size: f.Z.Sizes.MINI,
                        className: O.guildIcon
                    })
            ]
        });
    } else
        Y &&
            (q = (0, i.jsx)(u.Text, {
                variant: 'text-sm/normal',
                className: O.tierName,
                children: j.intl.string(j.t['6anEVl'])
            }));
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(E.Z, {
                onClick: p,
                className: O.headerContainer,
                children: (e) => {
                    let { areaRef: t, handleStopPropagation: n } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != T &&
                                (0, i.jsx)(N.Z, {
                                    size: N.H.SMALL,
                                    className: O.applicationIcon,
                                    application: T,
                                    asset: s.thumbnail
                                }),
                            (0, i.jsxs)('div', {
                                className: O.headerTextContainer,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        className: O.applicationName,
                                        children: null != T ? T.name : j.intl.string(j.t['7kqy7e'])
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: O.headerSubtitleContainer,
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
                                    className: a()(O.arrowIcon, { [O.arrowIconExpanded]: g })
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
                          (0, i.jsx)('div', { className: O.divider }),
                          w
                              ? (0, i.jsx)(u.HelpMessage, {
                                    messageType: u.HelpMessageTypes.WARNING,
                                    className: O.deletedHelpMessage,
                                    children: j.intl.string(j.t.cNtzcX)
                                })
                              : null,
                          (0, i.jsx)(_.Z, {
                              groupListingId: l.id,
                              subscription: t,
                              className: O.changePlanNotice
                          }),
                          (0, i.jsxs)('div', {
                              className: O.subscriptionInfoCards,
                              children: [
                                  (0, i.jsx)(R, {
                                      label: H,
                                      value: j.intl.formatToPlainString(j.t['0UHiHR'], { timestamp: G.getTime() })
                                  }),
                                  (0, i.jsx)(R, {
                                      label: j.intl.string(j.t.qgcLBw),
                                      value: U
                                  }),
                                  (0, i.jsx)(R, {
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
                              (0, i.jsx)(D, {
                                  isCancelled: k,
                                  onCancelSubscriptionClick: L,
                                  isResubscribing: y,
                                  onResubscribeClick: M
                              })
                      ]
                  })
                : null
        ]
    });
};
