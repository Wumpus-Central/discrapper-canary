n.d(t, {
    Ay: () => eo,
    Hy: () => ea,
    Sb: () => es,
    TC: () => er,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(989349),
    u = n.n(c),
    d = n(607399),
    f = n(311907),
    p = n(554146),
    _ = n(827734),
    h = n(397927),
    m = n(73153),
    g = n(793574),
    E = n(688810),
    b = n(701273),
    y = n(531260),
    O = n(235986),
    A = n(826673),
    v = n(769015),
    S = n(532794),
    I = n(780964),
    T = n(840065),
    C = n(832946),
    N = n(287809),
    R = n(954571),
    w = n(975571),
    P = n(927578),
    D = n(83617),
    x = n(543767),
    L = n(526292),
    j = n(155984),
    M = n(131168),
    k = n(726532),
    U = n(947418),
    G = n(687944),
    V = n(327479),
    F = n(538511),
    B = n(420139),
    H = n(434395),
    Y = n(136787),
    W = n(788868),
    K = n(652215),
    z = n(601107),
    q = n(49999),
    X = n(985018),
    Z = n(595654);
let Q = "app";

function $(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: a,
            fromStandaloneBillingPage: o = !0,
            className: c,
        } = e,
        u = (0, f.bG)([N.default], () => {
            let e = N.default.getCurrentUser();
            return l()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, P.bx)(n.additionalPlans)) return null;
    let { status: p } = n,
        _ = (0, P.$k)(n);
    if (_) t = Z.v2;
    else
        switch (p) {
            case K.Dmq.PAST_DUE:
            case K.Dmq.ACCOUNT_HOLD:
            case K.Dmq.BILLING_RETRY:
                t = Z.P7;
                break;
            case K.Dmq.PAUSE_PENDING:
            case K.Dmq.PAUSED:
                t = n.pauseReason !== z.qf.FRACTIONAL_PREMIUM ? Z.C7 : Z.wG;
                break;
            default:
                t = Z.wG;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()(t, c),
                children: [
                    (0, r.jsx)("div", {
                        className: Z.Kq,
                    }),
                    (0, r.jsx)("div", {
                        className: Z.OL,
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.eC,
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(Z.Ab, {
                                    [Z.aD]: _,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, P.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: u,
                                    fractionalPremiumInfo: a,
                                }),
                            }),
                        ],
                    }),
                    o &&
                        (0, r.jsx)(V.A, {
                            onClick: () =>
                                (0, T.openUserSettings)(I.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: K.nc_.GUILD_BOOSTING,
                                }),
                            text: X.intl.string(X.t["NQ5g/U"]),
                        }),
                ],
            }),
            !o &&
                (0, r.jsx)(h.Text, {
                    className: Z.yW,
                    variant: "text-sm/normal",
                    children: X.intl.format(d.Fr ? X.t.uxYBEa : X.t.k6haR9, {
                        openAppHook: () => (0, b.A)(Q),
                    }),
                }),
        ],
    });
}

function J() {
    return (
        i.useEffect(() => {
            R.default.track(K.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_missing_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: Z.Zz,
            children: [
                (0, r.jsx)(h.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Z.Sh,
                    color: _.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Z.Cy,
                    variant: "text-sm/normal",
                    children: X.intl.string(X.t.xFHEMa),
                }),
            ],
        })
    );
}

function ee() {
    return (
        i.useEffect(() => {
            R.default.track(K.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_invalid_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: Z.Zz,
            children: [
                (0, r.jsx)(h.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Z.Sh,
                    color: _.A.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Z.Cy,
                    variant: "text-sm/normal",
                    children: X.intl.string(X.t["j+nuQZ"]),
                }),
            ],
        })
    );
}

function et(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: s } = (0, E.Ay)(g.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            R.default.track(K.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_invalid_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: Z.Zz,
            children: [
                (0, r.jsx)(h.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Z.Sh,
                    color: _.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Z.Cy,
                    variant: "text-sm/normal",
                    children: X.intl.format(X.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, S.A)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: a,
                                analyticsLocations: s,
                            });
                        },
                    }),
                }),
            ],
        })
    );
}

function en(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: a, fractionalPremiumInfo: o } = e;
    return (0, r.jsxs)("div", {
        className: s()(Z.KF, a),
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                className: Z.QL,
                children: X.intl.string(X.t.KXQjfc),
            }),
            (0, r.jsx)("div", {
                children: P.Ay.getBillingInformationString(t, n, i, !1, o),
            }),
        ],
    });
}

function er() {
    let e = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-lg/semibold",
                className: Z.Gf,
                children: X.intl.string(X.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: Z.yV,
                children: X.intl.string(X.t.D8UpUo),
            }),
            !t &&
                (0, r.jsx)(h.ZpM, {
                    className: Z.wb,
                    type: h.ZpM.Types.CUSTOM,
                    children: (0, r.jsxs)(O.A, {
                        align: O.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(v.A, {
                                game: null,
                                size: v.M.SMALL,
                                className: Z.pV,
                            }),
                            (0, r.jsx)("span", {
                                className: Z.O,
                                children: X.intl.string(X.t.xCRgr1),
                            }),
                        ],
                    }),
                }),
            t &&
                (0, r.jsx)(k.i, {
                    currentUser: e,
                }),
        ],
    });
}

function ei(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: i,
            busy: a,
            fromStandaloneBillingPage: o,
            showInvalidPaymentMethod: l,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: u,
            fetchedRenewalInvoicePreview: d,
            fetchedOpenInvoice: f,
            isPremiumGroup: p,
        } = e,
        { analyticsLocations: _ } = (0, E.Ay)(g.A.SUBSCRIPTION_DETAILS),
        m =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [b] = (0, x.Kq)(m);
    b = null != u ? u : b;
    let O =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [A] = (0, x.Kq)(O);
    A = null != d ? d : A;
    let v = (0, y.A)(),
        S = (0, M.p)(),
        I = (0, L.nf)(),
        T = P.Ay.isBaseSubscriptionCanceled(t),
        C = (0, U.v)(t, i);
    if (null == b || null == A) return (0, r.jsx)(h.y$y, {});
    let N = C ? (0, L.Bv)(A) : null,
        R = null != N || (null != I && (I.discountId === W.q || I.discountId === W.EG)),
        w =
            C && ((T && null != S) || (!T && R))
                ? (0, r.jsx)(G.A, {
                      subscription: t,
                      invoicePreview: A,
                      paymentSource: i,
                      discountOffer: S,
                      renewalChurnDiscountInfo: N,
                      discountInfo: I,
                      isLoading: a,
                      analyticsLocation: n,
                  })
                : (0, r.jsx)(F.A, {
                      subscription: t,
                      currentInvoicePreview: b,
                      renewalInvoicePreview: A,
                      paymentSource: i,
                      busy: a,
                      analyticsLocation: n,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: Z.fj,
                children: [
                    !p && w,
                    (0, r.jsx)($, {
                        subscription: t,
                        renewalInvoicePreview: b,
                        fromStandaloneBillingPage: o,
                        className: Z.td,
                        fractionalPremiumInfo: v,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(h.nVY, {
                    label: X.intl.string(X.t.Sb6wI1),
                    children: (0, r.jsxs)("div", {
                        className: Z.zH,
                        children: [
                            (0, r.jsx)(en, {
                                subscription: t,
                                renewalInvoicePreview: A,
                                className: Z.g4,
                                fractionalPremiumInfo: v,
                                openInvoice: f,
                            }),
                            (0, r.jsx)("div", {
                                className: s()(Z.g4, {
                                    [Z.sE]: l,
                                }),
                                children: (0, r.jsx)(h.D0$, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? X.intl.formatToPlainString(X.t["rTk9v/"], {
                                                  paymentGatewayName: K.qmC[t.paymentGateway],
                                              })
                                            : X.intl.string(X.t.iRzXKd),
                                    children: (0, r.jsx)(B.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: D.c_,
                                        highlightAddPaymentMethodButton: c || l,
                                        analyticsLocation: n,
                                        currentInvoicePreview: b,
                                        dropdownClassName: Z.sp,
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
let ea = new Set([K.Dmq.ACTIVE, K.Dmq.PAST_DUE, K.Dmq.CANCELED, K.Dmq.PAUSE_PENDING, K.Dmq.PAUSED]);

function es() {
    return (
        i.useEffect(() => {
            R.default.track(K.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_duplicate_subscriptions",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: Z.oU,
            children: [
                (0, r.jsx)(h.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(h.Text, {
                    className: Z.dk,
                    variant: "text-sm/normal",
                    children: X.intl.format(X.t["6eXiiC"], {
                        helpCenterLink: w.A.getArticleURL(K.MVz.NITRO),
                    }),
                }),
            ],
        })
    );
}

function eo(e) {
    var t;
    let n,
        {
            subscription: a,
            subscriptions: s,
            paymentSource: o,
            busy: l,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: d,
            shouldRefetchInvoicesOnSubscriptionUpdate: b,
        } = e;
    null != s && null != s[0] && (a = s[0]);
    let y = (0, f.bG)([N.default], () => N.default.getCurrentUser()),
        { analyticsLocations: O } = (0, E.Ay)(g.A.SUBSCRIPTION_DETAILS),
        v = (0, M.p)(),
        S = null != s ? s.slice(1) : [],
        [I, T] = i.useState(0);
    i.useEffect(() => {
        if (!b) return;
        let e = (e) => {
            e.subscription.id === a.id && T((e) => e + 1);
        };
        return (
            m.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                m.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [a.id, b]);
    let [R] = (0, x.Kq)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: O,
            analyticsLocation: d,
            fetchKey: I,
        }),
        [P] = (0, x.Kq)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: O,
            analyticsLocation: d,
            userDiscountOfferId: null == v ? void 0 : v.id,
            fetchKey: I,
        }),
        D = (0, Y.V)(),
        L = null == o ? void 0 : o.invalid,
        U = (0, f.bG)([N.default], () => {
            var e;
            return null == (e = N.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        G = u()(a.currentPeriodEnd),
        V = null != a.paymentSourceId,
        F = null != (t = null == P ? void 0 : P.total) ? t : 0,
        B =
            !V &&
            F > 0 &&
            (7 >= G.diff(u()(), "days") || a.status === K.Dmq.PAST_DUE) &&
            !U &&
            !a.isPurchasedExternally,
        W = L && a.status === K.Dmq.PAST_DUE && !U && !a.isPurchasedExternally,
        z = (0, j.l)(),
        Q = !U && z,
        $ = (null == a ? void 0 : a.status) === K.Dmq.PAST_DUE,
        en = $ ? u()().diff(u()(a.currentPeriodStart), "days") : 0,
        er = null != y && y.isPremiumGroupPrimary(),
        ea = a.hasAnyPremiumGroup,
        [es] = (0, x.C8)({
            subscriptionId: a.id,
            preventFetch: !(Q || $),
        });
    return null == R || null == P
        ? (0, r.jsx)(h.y$y, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, C.m1)(a.renewalMutations.planId)) ||
                  a.hasExternalPlanChange) &&
              (n = (0, r.jsx)(H.A, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: Z.Il,
                  analyticsLocation: d,
              })),
          (0, r.jsxs)(h.nVY, {
              label: X.intl.string(X.t["/gs+Pz"]),
              description: X.intl.string(X.t.D8UpUo),
              children: [
                  B ? (0, r.jsx)(J, {}) : null,
                  W ? (0, r.jsx)(ee, {}) : null,
                  Q && null != es
                      ? (0, r.jsx)(et, {
                            daysPastDue: en,
                            subscription: a,
                            openInvoiceId: es.id,
                        })
                      : null,
                  er &&
                      ea &&
                      (0, r.jsx)(k.j, {
                          subscription: a,
                          analyticsLocations: O,
                      }),
                  n,
                  D &&
                      (0, r.jsx)(h.po8, {
                          messageType: h.YCn.INFO,
                          action: (0, r.jsx)(h.DUT, {
                              onClick: () => {
                                  (0, A.Dr)(p.M.PREMIUM_SETTINGS_SUBSCRIPTION_INFO_NOTICE, {
                                      dismissAction: q.i.USER_DISMISS,
                                  });
                              },
                              className: Z.dn,
                              children: (0, r.jsx)(h.PGe, {
                                  size: "sm",
                                  color: _.A.colors.ICON_STRONG,
                              }),
                          }),
                          children: X.intl.format(X.t.K4QorK, {
                              helpdeskArticle: w.A.getArticleURL(K.MVz.BILLING),
                          }),
                      }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)("div", {
                              className: S.length > 0 ? Z.HZ : Z.__invalid_singleSubscription,
                              children: (0, r.jsx)(ei, {
                                  subscription: a,
                                  analyticsLocation: d,
                                  paymentSource: o,
                                  busy: l,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: B,
                                  showInvalidPaymentMethod: W,
                                  fetchedCurrentInvoicePreview: R,
                                  fetchedRenewalInvoicePreview: P,
                                  fetchedOpenInvoice: es,
                                  isPremiumGroup: er,
                              }),
                          }),
                          S.map((e, t) =>
                              (0, r.jsxs)(
                                  "div",
                                  {
                                      className: Z.HZ,
                                      children: [
                                          (0, r.jsx)(h.Heading, {
                                              variant: "heading-md/semibold",
                                              className: Z.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, r.jsx)(ei, {
                                              subscription: e,
                                              analyticsLocation: d,
                                              paymentSource: o,
                                              busy: l,
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
