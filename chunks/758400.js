n.d(t, {
    Ay: () => es,
    Hy: () => ei,
    Sb: () => el,
    TC: () => en,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    d = n.n(c),
    u = n(607399),
    _ = n(311907),
    p = n(554146),
    m = n(827734),
    g = n(397927),
    A = n(73153),
    f = n(793574),
    h = n(688810),
    b = n(701273),
    E = n(531260),
    x = n(235986),
    O = n(826673),
    C = n(769015),
    I = n(532794),
    T = n(780964),
    S = n(840065),
    j = n(832946),
    v = n(287809),
    N = n(954571),
    y = n(975571),
    P = n(927578),
    R = n(83617),
    D = n(543767),
    w = n(526292),
    L = n(155984),
    M = n(131168),
    U = n(726532),
    G = n(947418),
    k = n(687944),
    V = n(327479),
    H = n(538511),
    B = n(420139),
    F = n(434395),
    Y = n(136787),
    W = n(788868),
    z = n(652215),
    K = n(601107),
    Z = n(49999),
    X = n(985018),
    q = n(595654);

function J(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            className: c,
        } = e,
        d = (0, _.bG)([v.default], () => {
            let e = v.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, P.bx)(n.additionalPlans)) return null;
    let { status: p } = n,
        m = (0, P.$k)(n);
    if (m) t = q.v2;
    else
        switch (p) {
            case z.Dmq.PAST_DUE:
            case z.Dmq.ACCOUNT_HOLD:
            case z.Dmq.BILLING_RETRY:
                t = q.P7;
                break;
            case z.Dmq.PAUSE_PENDING:
            case z.Dmq.PAUSED:
                t = n.pauseReason !== K.qf.FRACTIONAL_PREMIUM ? q.C7 : q.wG;
                break;
            default:
                t = q.wG;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()(t, c),
                children: [
                    (0, r.jsx)("div", {
                        className: q.Kq,
                    }),
                    (0, r.jsx)("div", {
                        className: q.OL,
                    }),
                    (0, r.jsxs)("div", {
                        className: q.eC,
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(q.Ab, {
                                    [q.aD]: m,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, P.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: d,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, r.jsx)(V.A, {
                            onClick: () =>
                                (0, S.openUserSettings)(T.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: z.nc_.GUILD_BOOSTING,
                                }),
                            text: X.intl.string(X.t["NQ5g/U"]),
                        }),
                ],
            }),
            !a &&
                (0, r.jsx)(g.Text, {
                    className: q.yW,
                    variant: "text-sm/normal",
                    children: X.intl.format(u.Fr ? X.t.uxYBEa : X.t.k6haR9, {
                        openAppHook: () => (0, b.A)("app"),
                    }),
                }),
        ],
    });
}

function Q() {
    return (
        i.useEffect(() => {
            N.default.track(z.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_missing_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: q.Zz,
            children: [
                (0, r.jsx)(g.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: q.Sh,
                    color: m.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(g.Text, {
                    className: q.Cy,
                    variant: "text-sm/normal",
                    children: X.intl.string(X.t.xFHEMa),
                }),
            ],
        })
    );
}

function $() {
    return (
        i.useEffect(() => {
            N.default.track(z.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_invalid_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: q.Zz,
            children: [
                (0, r.jsx)(g.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: q.Sh,
                    color: m.A.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(g.Text, {
                    className: q.Cy,
                    variant: "text-sm/normal",
                    children: X.intl.string(X.t["j+nuQZ"]),
                }),
            ],
        })
    );
}

function ee(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: l } = e,
        { analyticsLocations: s } = (0, h.Ay)(f.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            N.default.track(z.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_invalid_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: q.Zz,
            children: [
                (0, r.jsx)(g.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: q.Sh,
                    color: m.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(g.Text, {
                    className: q.Cy,
                    variant: "text-sm/normal",
                    children: X.intl.format(X.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, I.A)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: l,
                                analyticsLocations: s,
                            });
                        },
                    }),
                }),
            ],
        })
    );
}

function et(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: l, fractionalPremiumInfo: a } = e;
    return (0, r.jsxs)("div", {
        className: s()(q.KF, l),
        children: [
            (0, r.jsx)(g.Heading, {
                variant: "heading-md/semibold",
                className: q.QL,
                children: X.intl.string(X.t.KXQjfc),
            }),
            (0, r.jsx)("div", {
                children: P.Ay.getBillingInformationString(t, n, i, !1, a),
            }),
        ],
    });
}

function en() {
    let e = (0, _.bG)([v.default], () => v.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(g.Heading, {
                variant: "heading-lg/semibold",
                className: q.Gf,
                children: X.intl.string(X.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: q.yV,
                children: X.intl.string(X.t.D8UpUo),
            }),
            !t &&
                (0, r.jsx)(g.ZpM, {
                    className: q.wb,
                    type: g.ZpM.Types.CUSTOM,
                    children: (0, r.jsxs)(x.A, {
                        align: x.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(C.A, {
                                game: null,
                                size: C.M.SMALL,
                                className: q.pV,
                            }),
                            (0, r.jsx)("span", {
                                className: q.O,
                                children: X.intl.string(X.t.xCRgr1),
                            }),
                        ],
                    }),
                }),
            t &&
                (0, r.jsx)(U.i, {
                    currentUser: e,
                }),
        ],
    });
}

function er(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: i,
            busy: l,
            fromStandaloneBillingPage: a,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: u,
            fetchedOpenInvoice: _,
            isPremiumGroup: p,
        } = e,
        { analyticsLocations: m } = (0, h.Ay)(f.A.SUBSCRIPTION_DETAILS),
        A =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n,
                  },
        [b] = (0, D.Kq)(A);
    b = null != d ? d : b;
    let x =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n,
                  },
        [O] = (0, D.Kq)(x);
    O = null != u ? u : O;
    let C = (0, E.A)(),
        I = (0, M.p)(),
        T = (0, w.nf)(),
        S = P.Ay.isBaseSubscriptionCanceled(t),
        j = (0, G.v)(t, i);
    if (null == b || null == O) return (0, r.jsx)(g.y$y, {});
    let v = j ? (0, w.Bv)(O) : null,
        N = null != v || (null != T && (T.discountId === W.q || T.discountId === W.EG)),
        y =
            j && ((S && null != I) || (!S && N))
                ? (0, r.jsx)(k.A, {
                      subscription: t,
                      invoicePreview: O,
                      paymentSource: i,
                      discountOffer: I,
                      renewalChurnDiscountInfo: v,
                      discountInfo: T,
                      isLoading: l,
                      analyticsLocation: n,
                  })
                : (0, r.jsx)(H.A, {
                      subscription: t,
                      currentInvoicePreview: b,
                      renewalInvoicePreview: O,
                      paymentSource: i,
                      busy: l,
                      analyticsLocation: n,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: q.fj,
                children: [
                    !p && y,
                    (0, r.jsx)(J, {
                        subscription: t,
                        renewalInvoicePreview: b,
                        fromStandaloneBillingPage: a,
                        className: q.td,
                        fractionalPremiumInfo: C,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(g.nVY, {
                    label: X.intl.string(X.t.Sb6wI1),
                    children: (0, r.jsxs)("div", {
                        className: q.zH,
                        children: [
                            (0, r.jsx)(et, {
                                subscription: t,
                                renewalInvoicePreview: O,
                                className: q.g4,
                                fractionalPremiumInfo: C,
                                openInvoice: _,
                            }),
                            (0, r.jsx)("div", {
                                className: s()(q.g4, {
                                    [q.sE]: o,
                                }),
                                children: (0, r.jsx)(g.D0$, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? X.intl.formatToPlainString(X.t["rTk9v/"], {
                                                  paymentGatewayName: z.qmC[t.paymentGateway],
                                              })
                                            : X.intl.string(X.t.iRzXKd),
                                    children: (0, r.jsx)(B.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: R.c_,
                                        highlightAddPaymentMethodButton: c || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: b,
                                        dropdownClassName: q.sp,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
let ei = new Set([z.Dmq.ACTIVE, z.Dmq.PAST_DUE, z.Dmq.CANCELED, z.Dmq.PAUSE_PENDING, z.Dmq.PAUSED]);

function el() {
    return (
        i.useEffect(() => {
            N.default.track(z.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_duplicate_subscriptions",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: q.oU,
            children: [
                (0, r.jsx)(g.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: m.A.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(g.Text, {
                    className: q.dk,
                    variant: "text-sm/normal",
                    children: X.intl.format(X.t["6eXiiC"], {
                        helpCenterLink: y.A.getArticleURL(z.MVz.NITRO),
                    }),
                }),
            ],
        })
    );
}

function es(e) {
    var t;
    let n,
        {
            subscription: l,
            subscriptions: s,
            paymentSource: a,
            busy: o,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: u,
            shouldRefetchInvoicesOnSubscriptionUpdate: b,
        } = e;
    null != s && null != s[0] && (l = s[0]);
    let E = (0, _.bG)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: x } = (0, h.Ay)(f.A.SUBSCRIPTION_DETAILS),
        C = (0, M.p)(),
        I = null != s ? s.slice(1) : [],
        [T, S] = i.useState(0);
    i.useEffect(() => {
        if (!b) return;
        let e = (e) => {
            e.subscription.id === l.id && S((e) => e + 1);
        };
        return (
            A.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                A.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [l.id, b]);
    let [N] = (0, D.Kq)({
            subscriptionId: l.id,
            renewal: !0,
            analyticsLocations: x,
            analyticsLocation: u,
            fetchKey: T,
        }),
        [P] = (0, D.Kq)({
            subscriptionId: l.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: x,
            analyticsLocation: u,
            userDiscountOfferId: null == C ? void 0 : C.id,
            fetchKey: T,
        }),
        R = (0, Y.V)(),
        w = null == a ? void 0 : a.invalid,
        G = (0, _.bG)([v.default], () => {
            var e;
            return null == (e = v.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        k = d()(l.currentPeriodEnd),
        V = null != l.paymentSourceId,
        H = null != (t = null == P ? void 0 : P.total) ? t : 0,
        B =
            !V &&
            H > 0 &&
            (7 >= k.diff(d()(), "days") || l.status === z.Dmq.PAST_DUE) &&
            !G &&
            !l.isPurchasedExternally,
        W = w && l.status === z.Dmq.PAST_DUE && !G && !l.isPurchasedExternally,
        K = (0, L.l)(),
        J = !G && K,
        et = (null == l ? void 0 : l.status) === z.Dmq.PAST_DUE,
        en = et ? d()().diff(d()(l.currentPeriodStart), "days") : 0,
        ei = null != E && E.isPremiumGroupPrimary(),
        el = l.hasAnyPremiumGroup,
        [es] = (0, D.C8)({
            subscriptionId: l.id,
            preventFetch: !(J || et),
        });
    return null == N || null == P
        ? (0, r.jsx)(g.y$y, {})
        : (null != l.renewalMutations &&
              ((l.renewalMutations.planId !== l.planId && !(0, j.m1)(l.renewalMutations.planId)) ||
                  l.hasExternalPlanChange) &&
              (n = (0, r.jsx)(F.A, {
                  subscription: l,
                  renewalMutations: l.renewalMutations,
                  className: q.Il,
                  analyticsLocation: u,
              })),
          (0, r.jsxs)(g.nVY, {
              label: X.intl.string(X.t["/gs+Pz"]),
              description: X.intl.string(X.t.D8UpUo),
              children: [
                  B ? (0, r.jsx)(Q, {}) : null,
                  W ? (0, r.jsx)($, {}) : null,
                  J && null != es
                      ? (0, r.jsx)(ee, {
                            daysPastDue: en,
                            subscription: l,
                            openInvoiceId: es.id,
                        })
                      : null,
                  ei &&
                      el &&
                      (0, r.jsx)(U.j, {
                          subscription: l,
                          analyticsLocations: x,
                      }),
                  n,
                  R &&
                      (0, r.jsx)(g.po8, {
                          messageType: g.YCn.INFO,
                          action: (0, r.jsx)(g.DUT, {
                              onClick: () => {
                                  (0, O.Dr)(p.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                                      dismissAction: Z.i.USER_DISMISS,
                                  });
                              },
                              className: q.dn,
                              children: (0, r.jsx)(g.PGe, {
                                  size: "sm",
                                  color: m.A.colors.ICON_STRONG,
                              }),
                          }),
                          children: X.intl.format(X.t.K4QorK, {
                              helpdeskArticle: y.A.getArticleURL(z.MVz.BILLING),
                          }),
                      }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)("div", {
                              className: I.length > 0 ? q.HZ : q.__invalid_singleSubscription,
                              children: (0, r.jsx)(er, {
                                  subscription: l,
                                  analyticsLocation: u,
                                  paymentSource: a,
                                  busy: o,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: B,
                                  showInvalidPaymentMethod: W,
                                  fetchedCurrentInvoicePreview: N,
                                  fetchedRenewalInvoicePreview: P,
                                  fetchedOpenInvoice: es,
                                  isPremiumGroup: ei,
                              }),
                          }),
                          I.map((e, t) =>
                              (0, r.jsxs)(
                                  "div",
                                  {
                                      className: q.HZ,
                                      children: [
                                          (0, r.jsx)(g.Heading, {
                                              variant: "heading-md/semibold",
                                              className: q.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, r.jsx)(er, {
                                              subscription: e,
                                              analyticsLocation: u,
                                              paymentSource: a,
                                              busy: o,
                                              fromStandaloneBillingPage: c,
                                              showNoPaymentMethod: B,
                                              showInvalidPaymentMethod: W,
                                              fetchedCurrentInvoicePreview: null,
                                              fetchedRenewalInvoicePreview: null,
                                              fetchedOpenInvoice: null,
                                              isPremiumGroup: !1,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ],
                  }),
              ],
          }));
}
